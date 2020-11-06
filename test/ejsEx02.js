const express = require('express')
const mysql_query = require('./db/mysql_query');
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
app.get('/list', (req, res) => {
    mysql_query('select * from member', function(err, rows)   {
        if(err){
            throw err;
        }
        console.log(rows);
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        res.render('list', { rows : rows });
    });
});

let port = 9999;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    console.log(`Example app listening at http://localhost:${port}/list`);
});