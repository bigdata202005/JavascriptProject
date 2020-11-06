const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'jspuser',
  password : '123456',
  database : 'mydb'
});

connection.connect();

connection.query('SELECT * from Person', (error, rows, fields) => {
  if (error) throw error;
  console.log('Person info is: ', rows);
});

connection.end();