## JavaScript , strict mode 란 무엇인가? 왜 써야되나? 

최근 쓰여진 javascript 코드들을 보면 전역 컨텍스트 맨 윗단에 **"use strict"** 라고 쓰여진 문구를 볼 수 있다.

이 문구는 ECMAScript5부터 적용되는 키워드인데 쉽게말해 안전한 코딩을 위한 가이드라인 이라 할 수 있겠다.

javascript를 좀 다뤄본 사람이라면 JSLint가 무엇인지 알 수 있을 것이다.

JSLint는 안좋은 자바스크립트 코딩패턴들을 코칭해주는 자바스크립트 문법 검사기다. (더글라스 크락포드 횽아가 만들었다고...)

무튼 여기에 자바스크립트 코드를 넣고 돌려보면 

```
Problem at line 1 character 1: Missing “use strict” statement.
```

 요로코롬 에러메시지를 뿜어내준다. "use strict"가 없다는 에러다. "use strict"는 필수적으로 사용해야하는 구문은 아니다.

strict 모드를 사용하게 되면

암시적으로 선언한 변수를 사용하거나 읽기 전용 속성에 값을 할당하거나 확장할 수 없는 개체에 속성을 추가할 수 없다.

일단 strict 모드를 사용하기 위해서는 전역객체에 사용하는 방법과 함수내에 사용하여 함수에서만 strict 모드를 운용하는 방법이 있다.



**strict 모드의 선언법**

**1.전역에서 strict 모드를 사용하고자 한다면 자바스크립트 코드의 맨 윗부분에 "use strict"를 쓴다.**

```javascript
"use strict";  
function a(){      
	var hello = 7;      
	return hello; 
}  //구문 오류. hello = 5;
```

strict 모드를 전역에 설정하였기 때문에 hello라는 변수를 함수 밖의 변수로 선언할 수 없다.



**2. 함수내에서만 strict 모드를 사용하고자 할 때는 함수 내의 최상위에 "use strict"를 쓴다.**

 ```javascript
function a(){      
	"use strict"            //구문 오류      
	hello = 7;      
	return hello; 
}  
hello = 5;
 ```

strict모드를 함수내에서만 사용하였기 때문에 함수내에서 선언의 경우 구문오류가 발생한다.



**3. strict 모드의 제한**

"use strict"; 를 사용하였을 때 제한이 되는 경우를 나열해 보자.

* 선언하지 않고 변수를 사용할 때.

```javascript
"use strict"; 
x = 3.14; //선언하지 않고 사용하여 오류
```

* 변수,함수,매개변수를 삭제하려할 때.

```javascript
"use strict"; 
x = 3.14; 
delete x; //삭제 안됨
```

* 동일한 프로퍼티를 한번 이상 선언하려 할 때.

```javascript
"use strict"; 
var x = { p1 : 10, p1 : 20}; //오류
```

* 매개변수 이름이 동일할 때.

```javascript
"use strict"; 
function x(p1, p1) {
    
}; //오류
```

* 8진법의 숫자 리터럴 과 특수문자를 할당하려 할 때.

```javascript
"use strict"; 
var x = 010; //오류 
var x = /010; //오류
```

* 읽기전용에 할당하려 할 때.

```
"use strict"; 
var obj = {}; 
obj.defineProperty(obj, "x", {value:0, writable:false}); 
obj.x = 3.14; //오류
```

* 얻기 전용 (get-only)  에 할당하려 할 때.

```javascript
"use strict"; 
var obj = {
	get x() {
		return 0
	} 
}; 
obj.x = 3.14; //오류
```

* 삭제불가능한 프로퍼티를 삭제하려 할 때.

```javascript
"use strict"; 
delete Object.prototype; //오류
```

* with 키워드를 사용하려 할 때.

```javascript
"use strict"; 
with (Math){ 
	x = cos(2) 
}; //오류
```

* eval() 을 사용하려 할 때.

```javascript
"use strict"; 
eval("var x = 2"); 
alert(x); //오류
```

with 와 eval() 은 대표적으로 사용하지말아야 할 키워드다. 어떤 책에서는 eval() 을 evil로 불러버리기도 한다.  그렇게 기억하라고 ㅋㅋ 악마같은 존재를 배재하라는 뜻.

**주의점!!**

1. "use strict"는 함수나 스크립트의 최상위에서 사용되어야 한다.

2. IE 10 이전 버전에서는 사용할 수 없다.

참고사이트

1. <http://msdn.microsoft.com/ko-kr/library/ie/br230269%28v=vs.94%29.aspx>

2. <http://www.w3schools.com/js/js_strict.asp>

 