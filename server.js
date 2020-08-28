const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for protecting API
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and 
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://team-c2c-emt.herokuapp.com`
  }),

  // Validate the audience and the issuer.
  audience: `https://api/all`,
  issuer: `https://team-c2c-emt.herokuapp.com/`,
  algorithms: ['RS256']
});





// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// mysql database using sequelize route
const Employee = require("./models/employee.js");
// get 
app.get("/api/employees", (req, res) => {
  Employee.findAll({}).then((results) => {
    res.json(results);

  });
});

// creating (working)
app.post("/api/employee", (req, res) => {
  Employee.create(
  { 
    employee_id: 28389,
    info: "Stuart"
  })
    .then((results) => {
      res.json(results);

    });
});

// destroy (working)
app.delete("/api/employee/:id", (req, res) => {
  Employee.destroy(
  {
    where: {
      id: 3
    }
  })
  .then((results) => {
    res.json(results);
  });
});

app.put("/api/employee/:id", (req, res) => {
  Employee.save(
    {
      info: "James"
    },
    {
      where: {
        id: 4
      }
    }
  )
});

// static data route
app.get("/api/sample", (req, res) => {
  const sampleData = [
    { id: 1, info: "this is public info" },
    { id: 2, info: "everybody sees this" }
  ];
  res.json(sampleData)
});

// catchall, send to react build
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`API server now on port ${PORT}!`);
});
