// include url module
var url = require('url');
var address = 'http://localhost:8080/path/index.php?type=page&action=update&id=5221#hash';
var q = url.parse(address, true);

console.log(q); // url 객체 정보 출력
console.log(url.format(q)); // url 객체를 문자열로 출력

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/index.php'
console.log(q.search); //returns '?type=page&action=update&id=5221'

var qdata = q.query; // returns an object: { type: page, action: 'update',id='5221' }
console.log(qdata.type); //returns 'page'
console.log(qdata.action); //returns 'update'
console.log(qdata.id); //returns '5221'
