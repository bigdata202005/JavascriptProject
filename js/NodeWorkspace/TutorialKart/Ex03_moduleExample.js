// 사용자 정의 모듈 사용하기
// 이름만 지정하면 현재 폴더에서 파일을 찾고 폴더명만 지정하면 폴더의 index.js파일을 찾습니다.
var calculator = require('./my_module/calculator');
var myModule = require('./my_module/module');
 
var a=10, b=5;
 
console.log("더하기 : " + calculator.add(a,b));
console.log("빼기 : " + calculator.sub(a,b));
console.log("곱하기 : " + calculator.mul(a,b));
console.log("나누기 : " + calculator.div(a,b));
console.log();
console.log(myModule.version());
console.log(myModule.sayHello('한사람'));
