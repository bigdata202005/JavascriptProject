// 모듈 오버라이딩
var fs = require('fs');
 
fs.readFile("./sample.txt", function(error, content){
	if(error){
		console.log(error);
	}else{
		console.log('sample.txt 파일을 읽었습니다.');
		console.log('----------------------------------------------------');
		console.log(content.toString('utf8'));
		console.log('----------------------------------------------------');
	}
});

// 기존의 함수 삭제
// delete fs['readFile'];
// fs.readFile("sample.txt");

// 새로운 함수 등록
fs.readFile = function(str){
	console.log('====================================================');
    console.log("이 함수는 오버라이딩된 함수 입니다.");
    console.log(str);
    console.log('====================================================');
};
 
// 다시 출력
module.exports = fs;
 
// 오버라이딩된 함수 호출
fs.readFile("sample.txt");
