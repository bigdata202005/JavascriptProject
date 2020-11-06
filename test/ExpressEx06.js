const express = require('express')
var app = express();
// 정적폴더지정 : url로 파일 직접 접근
app.use('/static', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.writeHead('200', { 'Content-Type': 'text/plain;charset=utf-8' });
    res.write('Hello\n');
    res.write('world\n');
    res.write('한글은?\n');
    res.end('끝~~~~~~~~~~');
});

/*
app.route()
app.route()를 이용하면 라우트 경로에 대하여 체인 가능한 라우트 핸들러를 작성할 수 있습니다. 
*/
app.route('/book')
    .get(function (req, res) {
        res.send('Get a random book');
    })
    .post(function (req, res) {
        res.send('Add a book');
    })
    .put(function (req, res) {
        res.send('Update the book');
    });

let port = 9999;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/`)
    console.log(`Example app listening at http://localhost:${port}/book`)

    console.log();
});