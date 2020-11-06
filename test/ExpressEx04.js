const express = require('express')
var app = express();
// 정적폴더지정 : url로 파일 직접 접근
app.use('/static', express.static(__dirname + '/public'));

app.get('/', function(req, res) { 
  res.send('root');
});

app.get('/about', function (req, res) {
  res.send('about');
});
app.get('/random.txt', function (req, res) {
  res.send('random.txt');
});

// 다음의 라우트 경로는 acd, abcd와 일치
// b? : b가 0 또는 1글자
app.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});

// 다음의 라우트 경로는 abc, abbc 및 abbbc 등과 일치합니다.
// b+ : b가 1개이상
app.get('/ab+c', function(req, res) {
  res.send('ab+cd');
});

// 다음의 라우트 경로는 abce, abxce, abRABDOMce 및 ab123ce 등과 일치합니다.
// * : 임의의 문자가 0개이상들어와도 된다.
app.get('/ab*ce', function(req, res) {
  res.send('ab*ce');
});
// 다음의 라우트 경로는 /abx 및 /abcdx와 일치합니다.
// (문자열)? : ()안의 문자 0,1회
app.get('/ab(cd)?x', function(req, res) {
 res.send('ab(cd)?x');
});
// ?, +, * 및 () 문자는 정규식 문자의 서브세트입니다. 
// 하이픈(-) 및 점(.)은 문자열 기반 경로에 의해 문자 그대로 해석됩니다.

// 다음의 라우트 경로는 라우트 이름에 “y”가 포함된 모든 항목과 일치합니다.
app.get(/y/, function(req, res) {
  res.send('/y/');
});
// 다음의 라우트 경로는 butterfly 및 dragonfly와 일치하지만, 
// butterflyman 및 dragonfly man 등과 일치하지 않습니다.
// $는 지정문자로 끝나면!~~~
app.get(/.*fly$/, function(req, res) {
  res.send('/.*fly$/');
});

// 하나의 콜백 함수는 하나의 라우트를 처리할 수 있습니다
app.get('/example/a', function (req, res) {
  res.send('Hello from A!');
});

// 2개 이상의 콜백 함수는 하나의 라우트를 처리할 수 있습니다(next 오브젝트를 반드시 지정해야 함).
app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from B!');
});
// 하나의 콜백 함수 배열은 하나의 라우트를 처리할 수 있습니다. 
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}
var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}
var cb2 = function (req, res) {
  res.send('Hello from C!');
}
app.get('/example/c', [cb0, cb1, cb2]);

// 독립적인 함수와 함수 배열의 조합은 하나의 라우트를 처리할 수 있습니다. 
app.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from D!');
});



let port = 9999;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/`)
    console.log(`Example app listening at http://localhost:${port}/about`)
    console.log(`Example app listening at http://localhost:${port}/random.txt`)
    console.log(`Example app listening at http://localhost:${port}/acd`)
    console.log(`Example app listening at http://localhost:${port}/abbbc`)
    console.log(`Example app listening at http://localhost:${port}/abXXXXce`)
    console.log(`Example app listening at http://localhost:${port}/abcdx`)
    console.log(`Example app listening at http://localhost:${port}/y`)
    console.log(`Example app listening at http://localhost:${port}/xyz`)
    console.log(`Example app listening at http://localhost:${port}/butterfly`)
    console.log(`Example app listening at http://localhost:${port}/dragonfly`)
    console.log(`Example app listening at http://localhost:${port}/example/a`)
    console.log(`Example app listening at http://localhost:${port}/example/b`)
    console.log(`Example app listening at http://localhost:${port}/example/c`)
    console.log(`Example app listening at http://localhost:${port}/example/d`)
    console.log();
});