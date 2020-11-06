// 모듈 만들기
/*

[형식]
exports.함수명 = function (argument_1, argument_2, .. argument_N) {
  함수 내용...
};

exports : 함수가 모듈 외부에서 사용 가능하다는 것을 Node.js에 알리는 키워드입니다.

*/
// 더하기 함수
exports.add = function (a, b) {
    return a+b;
}; 
// 빼기 함수
exports.sub = function (a, b) {
    return a-b;
}; 
// 곱하기 함수
exports.mul = function (a, b) {
    return a*b;
}; 
// 나누기 함수
exports.div = function (a, b) {
    return a/b;
}; 

