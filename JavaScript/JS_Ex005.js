var a = 10;
console.log(a);
var a = 20;
console.log(a);

let b = 10;
console.log(b);
// let b = 20;   // 이미 선언된 변수를 재선언할 수 없다!!! -- Error!!!
b = 20;
console.log(b);

const PI = 3.14;  // 상수 선언한다. 변경 금지!!
console.log(PI);
// PI = 3.141592;    // 에러다!!!
console.log(PI);

// 여러개를 동시에 선언
let user = 'John', age = 25, message = 'Hello';
console.log('이름 : ', user);
console.log('나이 : ', age);
console.log('알림 : ', message);

// 한글로도 변수 선언이 가능하지만 권장하지 않는다.
let 이름 = '한사람', 나이=34;
console.log('이름 : ', 이름);
console.log('나이 : ', 나이);




