// 1번 예제를 리펙토링하면....
var http = require("http");

function onRequest(request, response) {
  console.log("Request received."); // 이부분 추가
  response.writeHead(200, {"Content-Type": "text/plain;charset=UTF-8"});
  response.write("Hello World 한글은?");
  response.end();
}

http.createServer(onRequest).listen(8888);

// 콘솔에 Request received.가 두번 출력된다. 왜?
// 한번의 브라우저 요청에 “Request received.” 메시지가 두번 STDOUT으로 찍히는 것은 
// 대부분의 브라우저가 http://localhost:8888/을 요청할 때 
// http://localhost:8888/favicon.ico를 로드하려고 하기 때문입니다.