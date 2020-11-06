const express = require('express')
var app = express();
// view engine지정
app.set('view engine', 'ejs');
// views 폴더지정
app.set('views', 'views');
app.get('/', (req, res) => {
    let data = [
        { name: "kimc", age: 33, gender: true },
        { name: "leec", age: 22, gender: true },
        { name: "shinc", age: 11, gender: false }
    ];
    res.render('index2', { data: data, error_msg:'에러라구!'});
});
let port = 9999;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});