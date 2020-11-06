const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'jspuser',
    password: '123456',
    database: 'mydb'
});
//db.connect();
console.log("연결 성공!!!")

db.query('SELECT * FROM person', function (err, result, fields) {
    if (err) {
        console.log('DB Query incorrect')
    } else {
        console.log(result);
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        console.log(fields);
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        db.end();
        console.log("연결 종료!!!")
    }
});
