const express = require('express')
var app = express();
// 정적폴더지정 : url로 파일 직접 접근
app.use(express.static('public'));
// public 폴더를 static주소로 연결
// app.use('/static', express.static('public'));
// 경로가 변경될수 있기때문에 경로를 지정시 __dirname을 사용하면 편리하다.
app.use('/static', express.static(__dirname + '/public'));

app.get('/', function(req, res) { // get방식 요청
  res.send('hello world');
});

let port = 9999;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/hello.html`)
    console.log(`Example app listening at http://localhost:${port}/css/style.css`)
    console.log(`Example app listening at http://localhost:${port}/js/my_util.js`)
    console.log(`Example app listening at http://localhost:${port}/file/sgvEx.html`)
    console.log(`Example app listening at http://localhost:${port}/images/111.png`)
    console.log();
    console.log(`Example app listening at http://localhost:${port}/static/images/111.png`)
    console.log(`Example app listening at http://localhost:${port}/static/css/style.css`)
    console.log(`Example app listening at http://localhost:${port}/static/js/my_util.js`)
    console.log(`Example app listening at http://localhost:${port}/static/file/sgvEx.html`)
    console.log(`Example app listening at http://localhost:${port}/static/images/111.png`)
    console.log("__dirname :", __dirname); // 현재 경로
    console.log("__filename : ", __filename); // 실행 파일명
    console.log();
});