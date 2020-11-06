/*
Query String
querystring.stringify(obj, [sep], [eq])
querystring.parse(str, [sep], [eq], [options])
querystring.escape
querystring.unescape

querystring 모듈은 url 객체의 query와 관련된 모듈입니다. 
분명 유용한 모듈이긴 하지만 url 모듈의 두 번째 인자 값을 조정함으로써 해결할 수도 있습니다.

매개 변수 [sep], [eq]
sep는 separator로 기본값은 '&' 입니다.
쿼리가 여러 개가 있을 때 쿼리와 쿼리 간의 구분자 역할을 합니다. 
eq는 assignment 역할을 하는 기호로 기본값은 '=' 입니다.

일반적인 쿼리 문자열은 다음과 같습니다. (아래는 네이버에 querystring을 검색했을 때 쿼리로 붙은 결과값입니다.)

where=nexearch&query=querystring&sm=top_hty&fbm=1&ie=utf8
parse(str, [sep], [eq], [options]), stringify(obj, [sep], [eq]) 

querystring.parse() 는 쿼리 문자열을 쿼리 객체로 바꿔주는 역할을, 
querystring.stringify() 는 쿼리 객체를 쿼리 문자열로 바꿔주는 역할을 합니다. 
둘 다 sep과 eq 옵션을 통해 구분자와 대입자를 임의로 정할 수 있습니다.

querystring.parse() 의 options는 객체 형식이며 maxKeys 속성을 통해 최대 개수를 제한할 수 있습니다. 
기본값은 1000이며 0으로 설정할 경우 그 제한을 없앨 수 있습니다.(하지만 잘 사용하지는 않습니다.)
*/
var querystring = require('querystring');
 
var qStr = 'where=nexearch&query=querystring&sm=top_hty&fbm=1&ie=utf8';
var qObj = querystring.parse(qStr); // 일반적인 사용
var qObj2 = querystring.parse(qStr, '&', '=', { maxKeys: 3 });
// 구분 문자열이 다를 경우 &와 = 자리에 해당 문자를 넣어 사용합니다.
// maxKeys로 3을 넘겨주면 값을 3개만 가져옵니다.
 
console.log(qObj); // 쿼리의 값들을 모두 가져옴
console.log(querystring.stringify(qObj));
console.log(querystring.stringify(qObj, '; ', '->'));
 
console.log(qObj2); // 쿼리의 값을 3개만 가져옴
console.log(querystring.stringify(qObj2));
console.log(querystring.stringify(qObj2, '; ', '->'));

var str = "name=한사람&age=21";
console.log(str);
var obj = querystring.parse(str);
console.log(obj);
var query = querystring.stringify(obj);
console.log(query);
query = querystring.escape(str);
console.log(query);
query = querystring.unescape(query);
console.log(query);

