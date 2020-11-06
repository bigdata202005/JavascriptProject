// 옵셔널 체이닝(optional chaining) : ?.
// ?.을 사용하면 프로퍼티가 없는 중첩 객체를 에러 없이 안전하게 접근할 수 있습니다.

let user = {}; // 주소 정보가 없는 사용자
// console.log(user.address.street); // TypeError: Cannot read property 'street' of undefined
// 
console.log( user && user.address && user.address.street ); // undefined
console.log(user?.address?.street); // SyntaxError: Unexpected token '.'