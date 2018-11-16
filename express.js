 var express = require('express');
var app = express();
// app.listen(3000);
// console.log("server is running on port 3000");

app.listen(3000, function(req,res){
    console.log("server is running on port 3000");
});

//routing HTTP GET
app.get('/', function (req,res) {
    res.send('hello expressJS');
 });

app.get('/health', function (req,res){
    var response = { status : 'Uppp'}; //json data
    res.json(response);
    // res.send("welcome to health page");
});

