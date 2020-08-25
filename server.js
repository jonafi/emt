const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const Employee = require("./models/employee.js");
  app.get("/api/all", (req, res) => {
    Employee.findAll({}).then((results)=> {
     res.json(results);
     
    });
  });


app.get("/api/sample", (req, res) => {
  const sampleData = [
    {id:1, info:"this is public info"},
    {id:2, info:"everybody sees this"}  
  ];
  res.json(sampleData)
});
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`API server now on port ${PORT}!`);
});
