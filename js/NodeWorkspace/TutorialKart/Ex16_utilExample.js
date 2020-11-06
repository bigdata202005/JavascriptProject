/*
util 모듈
=========
util.format(format, [...])
util.debug(string)
util.error([...])
util.puts([...])
util.print([...])
util.log(string)
util.inspect(object, [options])
Customizing util.inspect colors
util.isArray(object)
util.isRegExp(object)
util.isDate(object)
util.isError(object)
util.pump(readableStream, writableStream, [callback])
util.inherits(constructor, superConstructor)

util 모듈은 node.js의 보조적인 유용한 기능들을 모아놓은 모듈입니다.

util.format(format, [...])
console.log() 메소드와 비슷한 기능을 합니다. 
차이점이라면 console.log()는 화면에 출력하는 역할을 하지만 util.format은 문자열로 반환합니다.

%s - String.
%d - Number (integer or floating point value).
%i - Integer.
%f - Floating point value.
%j - JSON.
%o - object. util.inspect()옵션과 유사합니다 { showHidden: true, showProxy: true }
%O - object
% - single percent sign ('%'). This does not consume an argument.

placeholder와 인자간의 개수가 맞지 않을 때 어떻게 반환되는지는 공식 문서에 가면 간단한 예제가 나와 있습니다.
*/

var util = require('util');
var data = util.format('%d, %s, %j', 10, 'abc', { name: 'node.js'});
 
console.log(data);
console.log(util.format('%j',{name:'한사람',age:22, say : function(){}}));
console.log(util.format('%o',{name:'한사람',age:22, say : function(){}}));
console.log(util.format('%O',{name:'한사람',age:22, say : function(){}}));
 
// 출력 결과
// 10, abc, {"name":"node.js"}