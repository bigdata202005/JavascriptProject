// 함수 호출
fn1();
// fn2(); // Error!!!! : 선언되기 전에 호출했다!!!

// 함수 선언문 방식으로 함수 만들기
function fn1(){
    console.log("함수 선언문 방식으로 함수 만들기");
}
// 함수 표현식으로 함수 만들기
let fn2 = function() {
    console.log("함수 표현식으로 함수 만들기");
}

// 함수 호출
fn1();
fn2();

console.log(typeof fn1);
console.log(typeof fn2);

console.log(fn1);
console.log(fn2);
