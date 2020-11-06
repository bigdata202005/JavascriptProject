var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);
console.log('8888포트로 서버시작!!!');
console.log('http://localhost:8888로 접속해 보세요');