var express = require('express');
var app = express();
var multer = require("multer");
var upload = multer({
  limits: {fileSize:10000000000000000000}
});

app.listen(3000,function(){
  console.log("Server started");
});

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});

app.post('/upload-file', upload.single('file'), function(req,res){
  if(req.file && req.file.size){
    res.json({'size':req.file.size});
  }
  else{
    res.json({'error':'error with file upload'});
  }
});