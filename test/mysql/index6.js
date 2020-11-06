var mysql_query = require('./mysql_query');

mysql_query('show tables', function(err, rows)   {
    if(err){
        throw err;
    }
    console.log(rows);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
});

mysql_query('SELECT * from person where ?', {idx: '7'}, function(err, rows)   {
    if(err){
        throw err;
    }
    console.log(rows);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
});
