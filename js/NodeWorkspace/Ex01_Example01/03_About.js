/**
https://nodejs.org/en/about/
node.js 홈페이지에 들어가서 [About]탭에 들어가면 바로 나오는 코드이다.
자신의 실체를 몇줄의 코드로 명확히 밝히고 있다.
*/
const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;
http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello World\n');
	}).listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});

/*
Server running at http://127.0.0.1:1337/
이 코드의 전체적인 취지는
" hostname을 통해서 접속한 사용자에게 1337포트로 응답하라. "
이것이다.

세세하게 살펴보면

const http = require('http');
> require('http');
-> require 라는 함수이다. require는 언어로 보자면 '요구하다','필수적이다'란 뜻이다.
즉 , ' http '라는 모듈을 요구하는 코드이다.
require 함수의 return 값이 http 이므로
const 로 http 라는 상수를 선언한 뒤 http에 return값을 담는다.
> const http
-> JavaScript의 최신 문법으로 그 뜻은 상수이다. 데이터를 담는 다는 면에서 변수와 그 의미가 비슷하다.
단 이 상수는 변하지 않는다. 값이 한 번 '할당'되면 그 값이 변할 수 없다.
한번 http 모듈을 로드해오면 바뀔 이유가 없다.
그것을 명시하기 위해 const를 사용하는게 관습이다.

http.createServer((req, res)
.createSever 라는 메서드.
createServer 라는 메서드를 통해서 서버를 생성한다.
Returns a new instance of http.Server  = http.Server 라는 객체를 리턴한다.
그 객체링크를 타고 들어가며 그 객체가 listen이라는 메서드를 갖고 있는 걸 알 수 있다.
그래서 .listen 을 호출할 수 있다.
.listen 에 앞에서 선언한 port라는 인자 전달하고  = (1337)
hostname 인자를 전달한다 (= 컴퓨터의 IP)
createServer에 req , res 는
각각 request , respond의 줄임말로 요청 / 응답의 의미를 갖고 있다.
말 그대로 서버에 어떤 값을 요청하는가를 'req'로 나타내고
서버가 어떤 값으로 응답하는가를 'res'로 나타낸다.

console.log(`Server running at http://${hostname}:${port}/`);});
마지막 console.log 는 명령 프롬프트 상 서버가 제대로 실행됬다는 것을 알려주기 위한 코드이다.
*/