// 1. fs(파일시스템) 모듈 사용
var fs = require('fs');

// 2. 비동기방식의 파일읽기. 파일을 읽은 후 마지막 파라미터에 넘긴 callback 함수가 호출
fs.readFile('package.json', 'utf-8', function(error, data) {
    // 읽기가 끝나면 자동으로 실행된다.
    console.log('01 readAsync: %s',data);
});
console.log('나는 언제 실행이 될까요 1? ')
// 3. 동기방식의 파일읽기. 파일을 읽은 후 data 변수에 저장
var data = fs.readFileSync('package.json', 'utf-8');
console.log('02 readSync: %s',data);
console.log('나는 언제 실행이 될까요 2? ')