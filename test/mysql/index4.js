var db = require('./db');

db.query('show tables', function (err, result) {
    if (err) {
        console.log('DB Query incorrect')
    } else {
        console.log(`전체 ${result.length}개의 테이블이 있습니다.`);
        for(let table of result){
            console.log(table.Tables_in_mydb);
        }
        db.end();
        //console.log("연결 종료!!!")
    }
});