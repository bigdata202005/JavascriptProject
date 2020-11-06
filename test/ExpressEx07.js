var express = require('express');
var birds = require('./birds');
var app = express();
// 정적폴더지정 : url로 파일 직접 접근
app.use('/static', express.static(__dirname + '/public'));
app.use('/birds', birds);
app.use('/', birds);
let port = 9999;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/`)
    console.log(`Example app listening at http://localhost:${port}/about`)
    console.log(`Example app listening at http://localhost:${port}/birds`)
    console.log(`Example app listening at http://localhost:${port}/birds/about`)

    console.log();
});