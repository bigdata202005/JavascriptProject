"use strict";
let currentTempC = 22;
console.log(currentTempC);
console.log(undefined == null);
console.log('undefined' == typeof currentTempC2);

function test(t) {
    return (t === undefined) ? 'Undefined value!' : t;
}

let x;

console.log(test(x));

const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
console.log(korean.test('string'));
console.log(korean.test('string한글'));