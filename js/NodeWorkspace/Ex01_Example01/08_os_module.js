//모듈을 추출한다.
var os = require('os');
//모듈을 사용한다.
/*
hostname() : 운영체제의 호스트 이름을 리턴한다.
type() : 운영체제의 이름을 리턴한다.
platform() : 운영체제의 플랫폼을 리턴한다.
arch() : 운영체제의 아키텍처를 리턴한다.
release() : 운영체제의 버전을 리턴한다.
uptime() : 운영체제가 실행된 시간을 리턴한다.
loadavg() : 로드 에버리지 정보를 담은 배열을 리턴한다.
totalmem() : 시스템의 총 메모리를 리턴한다.
freemem() : 시스템의 사용 가능한 메모리를 리턴한다.
cpus() : CPU의 정보를 담은 객체를 리턴한다.
getNetworkInterfaces() : 네트워크 인터페이스의 정보를 담은 배열을 리턴한다.
 */
console.log(os.hostname());
console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.release());
console.log(os.uptime());
console.log(os.loadavg());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.cpus());
console.log(os.getNetworkInterfaces());