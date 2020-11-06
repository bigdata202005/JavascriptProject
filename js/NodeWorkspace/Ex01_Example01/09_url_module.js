/*
parse(urlStr, [, parseQueryString=false, slashesDenoteHost=false]) : URL 문자열을 URL 객체로 변환해 리턴한다.
format(urlObj) : URL 객체를 URL 문자열로 변환해 리턴한다.
resolve(from, to) : 매개변수를 조합하여 완전한 URL 문자열을 생성해 리턴한다.
*/
//모듈을 추출한다.
var url = require('url');
//모듈을 사용한다.
var parsedObject = url.parse('http://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ie=utf8&query=node.js&x=0&y=0');
console.log(parsedObject);
parsedObject = url.resolve('/one/two/three', 'four');         
console.log(parsedObject);
parsedObject = url.resolve('http://example.com/', '/one');    
console.log(parsedObject);
parsedObject = url.resolve('http://example.com/one', '/two'); 
console.log(parsedObject);

