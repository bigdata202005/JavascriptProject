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
/*
fs.open() 해당 파일을 엽니다. 옵션 'w' 의 경우 해당 파일이 없다면 생성합니다. 
해당 옵션에 따라 파일의 접근이 달라집니다. 
 r  : 파일을 읽기로 열며 해당 파일이 없다면 에러발생
 r+ : 읽기/쓰기 상태로 파일을 열며 파일이 없다면 에러 발생 
 w  : 쓰기로 파일을 열며 존재 하지 않으면 생성. 파일이 존재하면 내용을 지우고 처음부터 씀.
 w+ : 읽기/쓰기로 열며  존재 하지 않으면 생성. 파일이 존재하면 내용을 지우고 처음부터 씀.
 a  : 추가 쓰기로 열며 파일이 존재하지 않으면 만듬. 
 a+ : 추가 읽기/쓰기로 열며 파일이 존재 하지 않으면 만듬. 
 */
//open function
fs.open('newfile7.txt', 'r', function (err, file) {
  if (err){
	  // throw err;
	  console.log(err);
  }else{
	  console.log('File is opened in r mode.');
  }
  console.log(file);
}); 
//open function
fs.open('newfile7.txt', 'r+', function (err, file) {
	  if (err){
		  // throw err;
		  console.log(err);
	  }else{
		  console.log('File is opened in r+ mode.');
	  }
	  console.log(file);
}); 
//open function
fs.open('newfile7.txt', 'w', function (err, file) {
	if (err){
		// throw err;
		console.log(err);
	}else{
		console.log('File is opened in w mode.');
	}
	console.log(file);
}); 
//open function
fs.open('newfile7.txt', 'w+', function (err, file) {
	if (err){
		// throw err;
		console.log(err);
	}else{
		console.log('File is opened in w+ mode.');
	}
	console.log(file);
}); 
//open function
fs.open('newfile7.txt', 'a', function (err, file) {
	if (err){
		// throw err;
		console.log(err);
	}else{
		console.log('File is opened in a mode.');
	}
	console.log(file);
}); 
//open function
fs.open('newfile7.txt', 'a+', function (err, file) {
	if (err){
		// throw err;
		console.log(err);
	}else{
		console.log('File is opened in a+ mode.');
	}
	console.log(file);
}); 
