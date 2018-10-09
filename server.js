var express = require('express');
var path = require('path')

var app = express();

console.log("__dirname : "+__dirname+" __filename : "+__filename);

app.use(express.static(path.join(__dirname,'public')));

app.listen(9999,function(){
    console.log("app listening on port 9999");
})
