var express=require('express');

var app=express();

app.get('/:id',function(req,res){

    res.send("This is the id you specified is::"+req.params.id);

});

app.listen(3000)

console.log("Server running 3000")