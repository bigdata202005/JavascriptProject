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
//writeFile
fs.writeFile('newfile1.txt', 'Learn Node FS module', function (err) {
  if (err){
	  throw err;
  }
  console.log('File is created successfully.');
}); 

//appendFile
fs.appendFile('newfile2.txt', 'Learn Node FS module', function (err) {
  if (err){
	  throw err;
  }
  console.log('File is appended successfully.');
}); 

var data = "Hello! 한글 1234 !@#$%";
//write data
fs.writeFile('newfile3.txt',data,
	 // callback function that is called after writing file is done
	 function(err) {        
	     if (err){
	     	throw err;
	     }
	     console.log("Data is written to file successfully.");
	 });

//write data
fs.writeFile('newfile4.txt',data,'ascii',
	 // callback function that is called after writing file is done
	 function(err) {        
	     if (err){
	     	throw err;
	     }
	     console.log("Data is written to file successfully.");
	});
//write data
fs.writeFile('newfile5.txt',data,'utf8',
		// callback function that is called after writing file is done
		function(err) {        
	if (err){
		throw err;
	}
	console.log("Data is written to file successfully.");
});
//write data
fs.writeFile('newfile6.txt',data,'base64',
		// callback function that is called after writing file is done
		function(err) {        
	if (err){
		throw err;
	}
	console.log("Data is written to file successfully.");
});