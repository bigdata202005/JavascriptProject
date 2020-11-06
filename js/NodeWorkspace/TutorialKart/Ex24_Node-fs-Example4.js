/*
노드 FS는 Node.js의 내장 모듈로서 파일 작업 및 작업을 지원합니다.
노드 FS를 사용하면 파일에 대해 다음 작업을 수행 할 수 있습니다.

파일 읽기
파일 작성 또는 겹쳐 쓰기
파일 업데이트 중
파일 삭제하기
파일 이름 바꾸기
 */
var fs = require('fs');
var filename = 'test1.txt';
fs.exists(filename, function(exists) {
	console.log(filename + (exists ? "파일있음" : "파일없음"));
});
filename = 'newfile1.txt';
fs.exists(filename, function(exists) {
	console.log(filename + (exists ? "파일있음" : "파일없음"));
});
