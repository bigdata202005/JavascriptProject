var str = '{ "name": "John Doe", "age": 42 }';
console.log(typeof str);
console.log(str);
var obj = JSON.parse(str);
console.log(typeof obj);
console.log(obj);

var chunja = require('./chunja.json');
console.log(typeof chunja);
console.log(chunja);

for(c of chunja){
    console.log(c.idx , " : ", c.h ,"(",c.m1,")")
}