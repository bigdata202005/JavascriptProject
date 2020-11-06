// 동기식 파일 읽기
var fs = require('fs');
// read file sample.txt
var data = fs.readFileSync('sample.txt');
console.log("Reading file completed : " + new Date().toLocaleString());
console.log("After readFileSync statement : " + new Date().toLocaleString());
 