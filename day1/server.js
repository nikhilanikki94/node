 var http1=require('http');
 var server=http1.createServer(function(request,result){
    result.write("<h1>heloooo world</h1>");
    result.end("thank you...");
});
server.listen(3001)

   
 console.log(server.address());
 //console.log(server);