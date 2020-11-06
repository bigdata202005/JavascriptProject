/*
노드 FS는 Node.js의 내장 모듈로서 파일 작업 및 작업을 지원합니다.
노드 FS를 사용하면 파일에 대해 다음 작업을 수행 할 수 있습니다.
 */
var fs = require('fs');
// 파일 상태 확인
fs.stat('./example.html', function(err, stats) {
	if (err) {
		throw err;
	}
	console.log(stats);
	console.log('is file : ' + stats.isFile());
});
// 디렉토리 생성
fs.mkdir('./exampleDir', '0777', function(err){
	if(err) {
		// throw err;
		console.log('실패 : ' + err);
	}
	console.log('exampleDir 디렉토리 생성');
	// 절대경로
	fs.realpath(".", function(err, resolvedPath) {
		console.log(resolvedPath);
	});
});
// fs.unlink(); //파일을 삭제.
// fs.rmdir();//디렉토리를 삭제
// fs.realpath();//절대경로
