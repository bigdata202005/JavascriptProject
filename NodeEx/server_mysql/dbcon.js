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
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
connection.query('SELECT * from Person where age>=10 and age<=20', (error, rows) => {
  if (error) throw error;
  console.log('무서운 10대들.....');
  for(row of rows){
    console.log('이름 :', row.NAME);
    console.log('나이 :', row.age);
    console.log('-------------------------');
  }
});
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

connection.end();