const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const serverIO = require("http").createServer(app);
const io = require("socket.io").listen(serverIO);
const upload = require('express-fileupload');
const fs = require('fs');

const cors = require('cors');
const bodyParser = require('body-parser');

// middleware allows only authenticated users to see API routes
// const authCheck = (req,res,next)=>{

//   if(req.headers.referer===("http://localhost:3000/"||"https://team-c2c-emt.herokuapp.com/")){
//     console.log( '******************* GOOD *********', req.headers.referer); 
//   next()
//   }
//   else{
//     console.log('****************** NO MATCH *******' + req.headers.referer)
//    // res.send(403, "Not Authorized");

//   }
// }
//middleware works everywhere but heroku :(
//app.use(authCheck)

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  //we say what we want to allow, you can whitelist IPs here or domains
  res.header("Access-Control-Allow-Origin", "*");
  //what kind of headers we are allowing
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  //check for the options request from browsers
  //this will always be sent
  if (req.method === "OPTIONS") {
    //tell the browser what he can ask for
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    //we just respond with OK status code
    return res.status(200).json({
      "statusMessage": "ok"
    });
  }

  next();
});

// serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, '/public')));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// For uploading files
app.use(upload());

const AWS = require('aws-sdk');

// TO DO make a local ENV system that works....
const AWS_ID = process.env.AWS_Access_Key_Id;
const AWS_SECRET = process.env.AWS_Secret_Key;
const AWS_BUCKET = process.env.S3_BUCKET;

const s3 = new AWS.S3({
  accessKeyId: AWS_ID,
  secretAccessKey: AWS_SECRET
});

app.post('/uploadfiles', (req, res) => {
  //console.log(req.files)
  let file = req.files.file;
  let filename = file.name;
  file.mv("./uploads/" + filename, (err) => {
    if (err) { res.send(err) }
    else {
      let fullPath = "./uploads/" + filename;
      const fileContent = fs.readFileSync(fullPath);
      const options = {
        Bucket: AWS_BUCKET,
        Key: filename,
        Body: fileContent
      };
      // Uploading files to the bucket
      s3.upload(options, (err, data) => {
        if (err) {
          throw err;
        }
        //console.log(`File uploaded ${data.Location}`);
      });
    }
  });
  res.redirect('back'); //prevents hanging.  replace with thank you modal redirect?
});

const db = require("./models");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
const employeeRoutes = require("./routes/api/employees");
app.use('/api', employeeRoutes);
const reviewRoutes = require("./routes/api/reviews");
app.use('/api', reviewRoutes);


// catchall, send to react build
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  // socket.io (for chat)
  serverIO.listen(process.env.PORT || 3002, () => {
    console.log('listening on *:', PORT);
  });
});


// socket.io code

// // Heroku won't actually allow us to use WebSockets
// // so we have to setup polling instead.
// // https://devcenter.heroku.com/articles/using-socket-io-with-node-js-on-heroku
// io.configure(function () { 
//   io.set("transports", ["xhr-polling"]); 
//   io.set("polling duration", 10); 
// });

io.sockets.on("connection", (socket) => {
  console.log("New client connected");

  // SENDS BACK ORIGINAL ID/USER
  socket.emit("id", "tiempoAuto");

  // LISTENS FOR 'chat message'
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    // when done, returns back the message
    io.emit("chat message", msg);
  })

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
// end of socket.io
