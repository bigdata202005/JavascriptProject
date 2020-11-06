const express = require('express')
var app = express();

app.get('/', function(req, res) {
  res.send('hello world');
});
let port = 9999;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});