//모듈을 추출한다.
var util = require('util');

//모듈을 사용한다.
var data = util.format('%d + %d = %d', 52, 273, 52 + 273);
console.log(data);