var fs = require('fs');
// 이름 변경
fs.rename('sample2.txt', 'sample3.txt',
	// 첫번째 콜백함수
	function (err) {
		if (err){
			throw err;
		}
		console.log('File Renamed.');
		// 파일 삭제
		fs.unlink('sample3.txt',
			//  두번째 콜백함수
			function (err) {
				if (err){
					throw err;
				}
				console.log('File Deleted.');
			}
		); 
	}
);
