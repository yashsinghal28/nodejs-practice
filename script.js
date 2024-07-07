const fs = require('fs');
const http = require('http');


http.createServer(function(req,res){
    res.end("Hello World");
}).listen(8080);

console.log("server is running on the port 8080");

fs.writeFile("hello.txt","this is the dummy text or file",function(err){
    if(err){
        console.log(err);
    }else{
        console.log("file created successfully");
    }
} )