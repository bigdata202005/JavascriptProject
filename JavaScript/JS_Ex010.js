// 비교 연산자
/*
보다 큼·작음: a > b, a < b.
보다 크거나·작거나 같음: a >= b, a <= b.
같음(동등): a == b. 등호 =가 두 개 연달아 오는 것에 유의하세요. 
a ​​= b와 같이 등호가 하나일 때는 할당을 의미합니다.
같지 않음(부등): 같지 않음을 나타내는 수학 기호 ≠는 자바스크립트에선 a != b로 나타냅니다. 
                할당연산자 = 앞에 느낌표 !를 붙여서 표시합니다.
*/
a = 10, b=13;
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a!=b);
console.log();

a = '1', b=1;
console.log(a==b);
console.log(a===b);  // 타입과 값이 모두 일치하는지를 판단한다.
console.log();

// 정확히는 사전순이 아니라 유니코드 순입니다.
console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true
console.log( 'Bee' > '한글' ); // false
console.log( 'ㄱ' > 'ㅎ' ); // false
console.log();

// null이나 undefined와 비교하기
a = null;
console.log(a == null);       // true

// console.log(x == undefined);  // ReferenceError: x is not defined
// console.log(undefined == x);  // ReferenceError: x is not defined
// if(x){
//     console.log('x가 없다!!!');
// }

let x;
console.log(typeof(x)=='undefined');
console.log(x==undefined);

function check(x){
    return x == undefined;
}

console.log(check(x));
x  = 10;
console.log(check(x));
console.log();

console.log(typeof null);       // object
console.log(typeof undefined);  // undefined
console.log(null == undefined); // true
console.log(null === undefined);// false
console.log();

// null과 0을 비교해 봅시다.
// null이 숫자형으로 변환돼 0이 되기 때문입니다.
// 그런데 동등 연산자 ==는 피연산자가 undefined나 null일 때 형 변환을 하지 않습니다.
console.log(null>0);        // false  ---> 형 변환한다.
console.log(null==0);       // false  ---> 형 변환을 하지 않습니다.
console.log(null*1==0);     // true   ---> 강제형변환
console.log(null>=0);       // true   ---> 형 변환한다.
console.log(null===0);      // false
console.log();


// 3항 연산자의 중첩
age = 18;
let message = (age < 3) ? '아기야 안녕?' :
  (age < 18) ? '안녕!' :
  (age < 100) ? '환영합니다!' :
  '나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!';
console.log(message);

function ageCheck(age){
    return (age < 3) ? '아기야 안녕?' :
    (age < 18) ? '안녕!' :
    (age < 100) ? '환영합니다!' :
    '나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!';
}

console.log(ageCheck(2));
console.log(ageCheck(16));
console.log(ageCheck(27));
console.log(ageCheck(105));
console.log();