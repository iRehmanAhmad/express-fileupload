// getting express-fileupload module
const fileUpload = require('express-fileupload');
// getting express modue
const express = require("express");
// starting express
const app = express();

// default options using middleware
app.use(fileUpload());

app.post('/upload', function(req, res) {

  let sampleFile;
  let uploadPath;

  // Object.keys method is used to convert object into array that will help to iterate 
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  let keys = Object.keys(req.files);  
    for(let i=0; i<keys.length;i++){
        sampleFile = req.files[keys[i]];
        uploadPath = __dirname + '/uploads/' + sampleFile.name;

    //Use the mv() method to place the file somewhere on your server
    sampleFile.mv(uploadPath, function(err) {
        if (err)
          return res.status(500).send(err);
    
        res.send('File uploaded!');
      });
    }
});

app.listen(5000, ()=>{
console.log("server running");
});