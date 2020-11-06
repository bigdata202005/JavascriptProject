const express = require('express')
var app = express();

app.get('/', function(req, res) { // get방식 요청
  res.send('hello world');
});
app.get('/hello1', function(req, res) { // post방식 요청
  res.send('hello world Get!!!!');
});
app.post('/hello1', function(req, res) { // post방식 요청
  res.send('hello world Post!!!!');
});
app.all('/hello2', function(req, res) { // 모든 요청
  res.send('hello world All');
});


let port = 9999;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});