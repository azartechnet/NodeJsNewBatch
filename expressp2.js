var express=require('express');
var app=express();

app.get('/login',function(req,res){

    res.send('loginpage');
});

app.listen(3000);

console.log("Server running 3000")