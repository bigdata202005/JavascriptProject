var square = require('./square.js');
var mymodule = require('./mymodule.js');
var mymodule2 = require('./mymodule2');
var mySquare = square(4);
console.log('한변의길이가 4인 정사각형의 넓이 : ' + mySquare.area());
console.log('메세지1 : ' + mymodule.message1);
console.log('메세지2 : ' + mymodule.message2);
console.log('메세지1 : ' + mymodule2.message1);
console.log('메세지2 : ' + mymodule2.message2);
/*
만약 위처럼 확장자를 입력하지 않으면 어떻게 될까요?
먼저 mymodule.js 파일을 찾습니다. 있다면 그 파일을 추출합니다.
mymodule.js 파일이 없다면 mymodule 이라는 폴더를 찾습니다. 
그리고 그 폴더의 index.js 파일을 찾아 추출합니다.
*/