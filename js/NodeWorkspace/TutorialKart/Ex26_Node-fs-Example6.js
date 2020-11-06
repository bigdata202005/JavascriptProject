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
// 파일 생성
fs.writeFile(filename, 'Learn Node FS module', function(err) {
	if (err) {
		throw err;
	}
	console.log('File is created successfully.');
	// 파일명 변경
	fs.rename(filename, 'file2.txt', function(err) {
		if (err) {
			throw err;
		}
		console.log('renamed complete');
		fs.readFile('file2.txt',
		// callback function
		function(err, data) {
			if (err) {
				throw err;
			}
			console.log('----------------------------------------');
			console.log('file2.txt 내용');
			console.log('----------------------------------------');
			console.log(data.toString('utf8'));
			console.log('----------------------------------------');
			// 파일 삭제
			fs.unlink('file2.txt', function(err) {
				if (err) {
					throw err;
				}
				console.log('successfully deleted text2.txt');
			});
		});
	});
});
