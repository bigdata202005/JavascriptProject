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
var filename = 'file1.txt';
fs.exists(filename, function(exists) {
	console.log(filename + (exists ? "파일있음" : "파일없음"));
	if(exists){
		fs.open(filename, 'a+', function(err, fd) {
			if (err){
				throw err;
			}else{
				console.log('file a+ mode open complete');
				fs.write(fd, "1234567890", function(){
					console.log('저장완료!!')
				});
			}
		});
	}else{
		fs.open(filename, 'w+', function(err, fd) {
			if (err){
				throw err;
			}else{
				console.log('file w+ mode open complete');
				fs.write(fd, "1234567890", function(){
					console.log('저장완료!!')
				});
			}
		});
	}
});
