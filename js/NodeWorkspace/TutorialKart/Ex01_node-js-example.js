// http module을 읽어들입니다.
var http = require('http');
 
// 8087번 포트를 이용하여 서버를 시작합니다.
http.createServer(function (req, res) {
    // 클라이언트로 데이터를 전송합니다.
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'}); 
    res.write('<h1>안녕 하세요 Node.js</h1>');
    res.end();
}).listen(8087);

console.log("8087번 포트를 이용하여 서버를 시작했습니다.");
console.log("http://localhost:8087/로 접속해보세요!!!");