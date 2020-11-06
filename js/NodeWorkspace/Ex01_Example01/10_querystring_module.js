//모듈을 추출한다.
var url = require('url');
var querystring = require('querystring');

//모듈을 사용한다.
var parsedObject = url.parse('http://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ie=utf8&query=node.js&x=0&y=0');
console.log(querystring.parse(parsedObject.query));