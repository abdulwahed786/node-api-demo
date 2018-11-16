
// var http= require('http');
// var server =  http.createServer();
// server.listen(3000);
// console.log("Server is running on 3000");


// var http= require('http');

//  function handle(req,res){
//      res.write("hello Node.js");
//      res.end();
//  }

//  var server= http.createServer(handle);
//  server.listen(3000);

//  console.log("Server is running on 3000");


var http= require('http');

var fs=require('fs'); 

 function handle(req,res){
    switch(req.url)
    {
        case '/':
        // SYNCHORNOUS
            // var contents =fs.readFileSync('index.html'); 
            // res.write(contents);
            // res.end();
        // ASYNCHORNOUS    
            fs.readFile("index.html", function(err,contents){
                    res.write(contents);
                    res.end();
            });
            break;

        case '/about':
            res.write("about page");
            res.end();
            break; 

         case '/products':
         var p = [
                {
                    id: 1, name: "aw", palace :"charminar", country: "India"
                },
                {
                    id: 2, name: "wadj", palace :"charminar", country: "India"
                },
                {
                    id: 3, name: "aw", palace :"charminar", country: "India"
                },
               ];
            res.write(JSON.stringify(p));
            res.end();
            break; 

             
        case '/contact':
            res.write("Contact page");
            res.end();
            break; 
        default:
            res.write("Home page");
            res.end();
            break;       
    }

 }
 var server= http.createServer(handle);
 server.listen(3000);

 console.log("Server is running on 3000");