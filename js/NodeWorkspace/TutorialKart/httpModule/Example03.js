// 1번 예제를 리펙토링하면....
var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain;charset=UTF-8"});
  response.write("Hello World 한글은?");
  response.end();
}

http.createServer(onRequest).listen(8888);
