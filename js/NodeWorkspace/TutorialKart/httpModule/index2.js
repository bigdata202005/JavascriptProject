// 다른 HTTP 요청이 코드의 다른 부분을 가리키도록 하는 것을 “라우팅(routing)” 이라고 합니다. 
// 자 그럼 router를 만들어 봅시다.
var http = require("http");
var url = require("url");

function start() {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;