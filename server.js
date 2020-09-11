const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

// serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, '/public')));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const db = require("./models");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build")); 
}

// Routes
const employeeRoutes = require("./routes/api/employees");
app.use('/api', employeeRoutes);

/*
CONTROLLER
=========================================================================
controllers are working, only thing is that the models/index.js doesnt 
work because of the way models/employee.js is structured. If thats the case
for now we'll just leave it as is and ONLY ACCESS controllers/employeeController.js for 
all sequelize/backend connections.

This was the main issue as to why routes didn't work. It wasn't the express
routes, rather it was db = require(./models)
*/
// Employee controller
// const Employee = require("./controllers/employeeController");

// // get 
// app.get("/api/employees", Employee.findAll);

// app.get("/api/employee/:id", Employee.findById);
// ======================================================================

// // get one user by email address and return info, including role
// // for use with auth0 linking
// app.get("/api/user/:personal_email", (req, res) => {
//   Employee.findOne({where:{personal_email:req.params.personal_email}}).then((results) => {
//     res.json(results);
//   });
// });

// // creating (working)
// app.post("/api/employee", (req, res) => {
//   console.log(req.body);
//   Employee.create(req.body)
//     .then((results) => {
//       res.json(results);

//     })
//     .catch(err => res.json(err));
// });

// // destroy (working)
// app.delete("/api/employee/:id", (req, res) => {
//   Employee.destroy(
//   {
//     where: {
//       id: 3
//     }
//   })
//   .then((results) => {
//     res.json(results);
//   })
//   .catch(err => res.json(err));
// });

// app.put("/api/employee/:id", (req, res) => {
//   Employee.save(
//     {
//       info: "James"
//     },
//     {
//       where: {
//         id: 4
//       }
//     }
//   )
// });

// // static data route
// app.get("/api/sample", (req, res) => {
//   const sampleData = [
//     { id: 1, info: "this is public info" },
//     { id: 2, info: "everybody sees this" }
//   ];
//   res.json(sampleData)
// });

// ////////// single employee api route /////
// app.get("/api/employee/:id", (req, res) => {
//   Employee.findOne({
//     where: {
//       id: req.params.id
//     },
//   }).then((results) => {
//     res.json(results);

//   });
// });


// ////////////// filter all managers api route /////
// app.get("/api/managers", (req, res) => {
//   Employee.findAll({
//     where:{
//       role: "Manager",
//     },

//   }).then((results) => {
//     res.json(results);

//   });
// });
// models.sequelize.sync().then(function() {
// 	if (process.env.NODE_ENV !== "test") {
// 		console.log('Database connected!');
// 	}
// }).catch(function(err) {
// 	console.error(err, "Something went wrong, database is not connected!");
// });



// catchall, send to react build
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// socket.io (for chat)
let interval;
io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = socket => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};


http.listen(3002, () => {
  console.log('listening on *:3002');
});
// end of socket.io

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});