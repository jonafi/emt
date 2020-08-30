const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, '/public')));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require("./routes/api/employees");

// app.use('/api', routes);

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

// models.sequelize.sync().then(function() {
// 	if (process.env.NODE_ENV !== "test") {
// 		console.log('Database connected!');
// 	}
// }).catch(function(err) {
// 	console.error(err, "Something went wrong, database is not connected!");
// });

// catchall, send to react build
// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, function () {
  console.log(`API server now on port ${PORT}!`);
});
