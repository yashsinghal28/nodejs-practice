const express = require('express');

const app = express();

app.get('/',function(req,res){
    res.send("this is running on normal route");
});

app.get('/about',function(req,res){
    res.send("this is running on about route");
});

app.listen(3000);

