const mysql   = require('mysql');
var config  = require('./db_config.json');
//                                         명령, 인수, 콜백함수
var sqlConnection = function sqlConnection(sql, values, next) {
    // 콜백함수가 없으면  : 두번째 인수를 콜백함수로 사용
    if (arguments.length === 2) {
        next = values;
        values = null;
    }
    // DB 연결
    var connection = mysql.createConnection(config.db);
    connection.connect(function (err) {
        if (err !== null) {
            console.log("[MYSQL] Error connecting to mysql:" + err + '\n');
        }
    });
    // 쿼리 실행
    connection.query(sql, values, function (err) {
        connection.end(); 
        if (err) {
            throw err;
        }
        // 콜백함수를 실행!!!!!
        next.apply(this, arguments);
    });
}
module.exports = sqlConnection;
