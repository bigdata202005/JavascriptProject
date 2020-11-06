// null 병합 연산자(nullish coalescing operator) ??를 사용하면 짧은 문법으로 
// 여러 피연산자 중 그 값이 ‘확정되어있는’ 변수를 찾을 수 있습니다.

// a ?? b의 평가 결과는 다음과 같습니다.
// a가 null도 아니고 undefined도 아니면 a 그 외의 경우는 b 
// null 병합 연산자 ??없이 x = a ?? b와 동일한 동작을 하는 코드를 작성하면 다음과 같습니다.
let a;
let b = 10
x = (a !== null && a !== undefined) ? a : b;
console.log(x);
// x = a ?? b
x = a || b;
console.log(x);