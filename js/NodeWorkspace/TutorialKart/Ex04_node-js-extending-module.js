// 모듈의 확장
// ---------------
// 모듈 사용
var fs = require('fs');
// 함수 추가
fs.printMessage = function(str){
	console.log("이 함수는 기존 모듈에 추가된 함수 입니다.");
	console.log(str);
};
// 재 지정
module.exports = fs;
// 사용 
fs.printMessage("성공!!!");