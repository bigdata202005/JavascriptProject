var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use(function(req, res, next) {
  res.status(404).send('없는 페이지에 접근했습니다.');
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  console.log('웹 브라우저에서 http://localhost:3000/로 접속해 보세요!!!');
});
