const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



app.get("/api/sample", (req, res) => {
  const sampleData = [
    {id:1, info:"this comes from a database"},
    {id:2, info:"this is only for logged in users"}  
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
