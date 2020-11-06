var fs = require('fs');

// 비동기식 파일 읽기
fs.readFile('sample.txt',
	// 콜백함수 지정
	function(err, data) {		
		if (err){
			throw err;
		}else{
			console.log("Reading file completed : " + new Date().toLocaleString());
			console.log(data.toString('UTF-8'));
		}
});
console.log("After readFile asynchronously : " + new Date().toLocaleString());