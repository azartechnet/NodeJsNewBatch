var express=require('express')
var app=express();
app.get('/',function(req,res){

    res.send("This is Express concepts");
})

var server=app.listen(8000,function(){

var host=server.address().address;

var port=server.address().port;

console.log('Server Running..at http://%s:%s',host,port)

console.log("Host:%s",host)

console.log("Port:%s",port)

})