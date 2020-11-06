var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'jspuser',
    password: '123456',
    database: 'mydb'
});
db.connect(function(err) {
    if (err) throw err;
});
module.exports = db;