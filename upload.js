const express = require('express');
const upload = require('express-fileUpload');

const app = express();

app.use(upload())

app.get('/', (req, res) =>{
res.sendFile(__dirname + "/index.html")

app.post('/', (req,res)=>{

if(req.files){
   // console.log(req.files)
    let file= req.files.file;
    let filename=file.name;
   // console.log(filename)

   file.mv("./uploads/" +  filename, (err)=>{
       if(err){
           res.send(err)
       } else{
           res.send("file uploaded")
       }
   });
}
})
})
app.listen(5000);