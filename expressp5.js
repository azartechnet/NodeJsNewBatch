var express=require('express');
var app=express()

app.get('/login/:empname/:id',function(req,res){

    res.send('id:'+req.params.id+'and empname:'+req.params.empname);

});

app.listen(3000)

console.log('Server is running 3000')