var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request,response){
  var parsedUrl = url.parse(request.url);
  var resource = parsedUrl.pathname;

  // 1. 요청된 자원이 /hello 이면
  if(resource =="/"){
    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    response.end("주소표시줄에 localhost/json를 입력해보세요!!!");
}else if(resource == '/json'){
    var chunja = require('./json/chunja.json');
    response.writeHead(200, {'Content-Type':'application/json; charset=utf-8'});
    response.end(JSON.stringify(chunja));
  }else{
    response.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
    response.end('404 Page Not Found');
  }
});

server.listen(80, function(){
    console.log('Server is running...');
    console.log('http://localhost');
    console.log('http://localhost/json');
});