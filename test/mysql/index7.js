var mysql_query = require('./mysql_query2');

mysql_query('show tables', function(err, rows)   {
    if(err){
        throw err;
    }
    console.log(rows);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
});
let data = { idx:7 };
let sql = `select * from person where idx=${data.idx}`;
mysql_query(sql, function(err, rows)   {
    if(err){
        throw err;
    }
    console.log(rows);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
});
