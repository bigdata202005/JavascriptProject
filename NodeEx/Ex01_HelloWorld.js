// 모듈 읽기
const http = require('http');
// 전역변수 선언
const hostname = '127.0.0.1'; // 서버 주소
const port = 3000; // 포트번호
// 서버 생성
const server = http.createServer((req, res) => {
  res.statusCode = 200; // http 응답코드 : 200(성공)
  res.setHeader('Content-Type', 'text/html'); // 문서 형식 지정
  res.end('<h1>Hello World</h1>'); // 출력
});
// 서버 시작
server.listen(port, hostname, () => {
  // 로그 출력
  console.log(`Server running at http://${hostname}:${port}/`);
});