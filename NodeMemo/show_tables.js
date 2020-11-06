var mysql_query = require('./db/mysql_query');

mysql_query('show tables', function(err, rows)   {
    if(err){
        throw err;
    }
    console.log(rows);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
});