const mysql   = require('mysql');
// dbConfig.json파일을 사용하기
var config  = require('./db_config.json');
// console.log(config);
var db = mysql.createConnection(config.db); // 연결
db.connect(function(err) {
    if (err !== null) {
        console.log("[MYSQL] Error connecting to mysql:" + err+'\n');
    }
});
module.exports = db;