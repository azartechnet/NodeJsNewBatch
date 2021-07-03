var http=require("http")
http.createServer(function(request,response){

    //send the HTTP header
    //Http status 200OK
    //Content Type:text/plain

    response.writeHead(200,{'Content-type':'text/plain'});

    //send the reponse body as "Welcome to web Program"

    response.end("Welcome to Web Program");


}).listen(8081);


//console mesg will print message

console.log('Server is Running at 8081');