/*
process 모듈 이해
process 모듈은 require()를 사용하지 않고도 Node.js 애플리케이션에 접근할 수 있는 전역객체다. 
동작중인 프로세스에 접근할 수 있는 권한을 제공한다.

process 모듈로 하는 프로세스 실행 제어
process 모듈은 현재 프로세스를 중단시키고, 또 다른 프로세스를 종료하고, 
이벤트 큐에 동작을 등록시킨다. 

현재 Node.js 프로세스를 종료시키고 싶다면 다음과 같이 한다.
process.exit(0);

process 모듈의 정보 가져오기
process 모듈은 동작하는 프로세스 및 시스템 아키텍처에 관한 풍부한 정보를 가지고 있다. 
예를 들어 process.pid 속성은 프로세스 ID 값을 전달하고, 애플리케이션에서는 이 ID 값을 활용할 수 있다.


 */

// var process = require('process'); // 전역객체
var fs = require('fs');
// 경로 변경
// process.chdir('c:\\windows');
process.chdir('../..');
console.log(process.cwd());
//절대경로
fs.realpath(".", function(err, resolvedPath) {
	console.log(resolvedPath);
});
/*
//processExample.js
console.log(process.env);           // 컴퓨터 환경과 관련된 정보를 가진 객체
console.log(process.version);       // node.js의 버전
console.log(process.versions);      // node.js와 연관된 프로그램들의 버전을 가진 객체
console.log(process.arch);          // 프로세서의 아키텍처(arm/ia32/x64)
console.log(process.platform);      // 플랫폼(win32/linux/sunos/freebsd/darwin)
console.log(process.memoryUsage()); // 메모리 사용 정보를 가진 객체
console.log(process.uptime());      // 현재 프로그램이 실행된 시간
*/