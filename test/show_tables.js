var mysql_query = require('./db/mysql_query');

mysql_query('select * from member', function(err, rows)   {
    if(err){
        throw err;
    }
    console.log(rows);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
});