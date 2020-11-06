const mysql      = require('mysql');
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'jspuser',
  password : '123456',
  database : 'mydb'
});
db.connect();
console.log("연결 성공!!!")

db.end();
console.log("연결 종료!!!")
