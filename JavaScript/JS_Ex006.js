// 자바스크립트는  ‘동적 타입(dynamically typed)’ 언어라고 부릅니다.
// ‘동적 타입(dynamically typed)’ 언어 : 실행중에 타입이 결정된다.  아무타입이나 저장 가능하다.
let message = "문자열";
console.log(typeof(message), ' ', message);
message = 34;
console.log(typeof(message), ' ', message);
message = true;
console.log(typeof(message), ' ', message);
console.log()

// number type : 숫자형
message = 3.14;
console.log(typeof(message), ' ', message);
message= 34;
console.log(typeof(message), ' ', message);

// 숫자형엔 일반적인 숫자 외에 Infinity, -Infinity, NaN같은 
// '특수 숫자 값(special numeric value)'이 포함됩니다.
console.log(message/0);   // Infinity
console.log(-message/0);  // -Infinity
console.log("숫자가 아님" / 2);  // NaN(Not a Number)

// 끝에 'n'이 붙으면 BigInt형 자료입니다.
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

// string type
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = 'can embed another ${str}';
console.log(str);
console.log(str2);
console.log(phrase);
// 변수값을 포함 : {변수} 따옴표가 아니다. 역 따옴표(백틱, backtick)이다.
phrase = `can embed another ${str}`;
console.log(phrase);

let name = "John", age = 22;
console.log(`안녕 ${name}`);
// 계산식도 가능!!!
console.log(`${name}씨의 내년 나이는 ${age+1}살 입니다.`);

// 불린형 : 불린형(논리 타입)은 true와 false 두 가지 값밖에 없는 자료형입니다.
let gender = true;
console.log(`성별 : ${gender ? '남':'여'}`);
gender = ! gender;
console.log(`성별 : ${gender ? '남':'여'}`);


// 자바스크립트에선 null을 
// ‘존재하지 않는(nothing)’ 값, ‘비어 있는(empty)’ 값, ‘알 수 없는(unknown)’ 값을 나타내는데
//  사용합니다.
let age1 = null; // 은 나이(age)를 알 수 없거나 그 값이 비어있음을 보여줍니다.
console.log(age1);
// null 비교!!
console.log(age1 == null);   // == : 값만비교
console.log(age1 === null);  // === : 값과 타입까지 비교


// undefined는 '값이 할당되지 않은 상태’를 나타낼 때 사용합니다.
// 변수는 선언했지만, 값을 할당하지 않았다면 해당 변수에 undefined가 자동으로 할당됩니다.
let un;
console.log(un);
// undefined 비교
console.log(typeof un == "undefined");
console.log( un === undefined);

// ReferenceError: un2 is not defined
// console.log( un2 === undefined);

fn = function(un2){ // ()안에서 un2가 생성이되었기 때문에
    console.log( un2 === undefined); // 여기서 에러가 아니다.
}
fn(un);

// typeof 연산자는 인수의 자료형을 반환합니다. 
console.log(typeof gender);
console.log(typeof(gender));
console.log(typeof('34'/3)); // number
console.log(typeof('34'+3)); // string
console.log(typeof([])); // object
console.log(typeof({})); // object
console.log(typeof(Infinity)); // number
console.log(typeof(NaN)); // number

// 함수도 자료형이다!!!
fn2 = function(x){ // 변수에 대입이 가능하다.
    console.log(x*x);
}
fn2(4);
console.log(typeof(fn2));
console.log(fn2);


















