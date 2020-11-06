# require(), exports, module.exports 공식문서로 이해하기



안녕하세요. 개발자 Chullin입니다.

오늘은 짧은 한 줄의 코드를 digging해보려고 합니다.

```
const foo = require('foo')
```

.

이를 통해, node.js에서 require()는 어떻게 작동하는지 알아보고자 합니다.

.

**TL;DR**

- require()는 module.exports를 리턴한다.
- exports는 module.exports를 refer하고 있으며, shortcut에 불과하다.
- exports와 module.exports는 용례를 익힐 필요가 있다.

.

## Require()함수로 모듈을 가지고 온다

.

node.js에서는 모듈을 불러오기 위해 require()함수를 씁니다.

편하게 이해하기 위해, 예시를 들어보려고 해요.

두 파일을 간단히 써보겠습니다. foo.js와, bar.js입니다.

.

일단 foo.js파일입니다. 변수 a 에 데이터 10이 담겨있습니다.

```
//foo.jsconst a = 10
```

그리고 bar.js 파일입니다. 변수 a를 콘솔에 찍는 파일입니다.

```
//bar.jsconsole.log(a)
```

이 상황에서 bar.js를 실행시키면, 에러가 뜹니다. bar.js 스코프에서, 변수 a는 undefined이기 때문입니다.

```
node bar.js
ReferenceError: a is not defined
```

여기까지는 어렵지 않을거에요. 자 이제 다음으로, 이 문제를 해결해볼게요!

.

.

이 문제를 해결하는 방안으로, 굳이굳이굳이굳이!! bar.js에 foo.js 모듈을 불러오고자 합니다.

이때, require 함수를 씁니다. require함수로 foo.js를 bar.js로 가지고 옵니다.

```
//bar.jsconst foo = require('./foo.js') //foo.js, bar.js는 같은 디렉토리.
console.log(foo.a)
```

하지만, 여전히 undefined 문제가 생깁니다.

```
node bar.js
ReferenceError: a is not defined
```

왜그럴까요? 여기서 exports의 필요성을 알 수 있습니다.

.

.

구글링해보니 foo.js에 exports가 없기 때문이라고 합니다.

그래서 저는 foo.js를 다음과 같이 고쳤습니다.

```
//foo.jsconst a = 10
exports.a = a;
```

그리고 나서 실행해보니 문제없이 원하는 값이 나오게 되었습니다.

```
node bar.js
10
```

이 즈음 되면 궁금증이 스멀스멀 올라옵니다.

require()는 뭐고, exports는 무슨 역할을 하는 것일까요? module.exports와 exports는 무슨 관계일까요?

.

.

## Require()함수는 module.exports를 리턴한다.

.

Require()함수의 소스코드는 복잡합니다.

하지만, 요약하자면 다음과 같은 모양새로 구성되어있습니다. 제 요약은 아니고, 문서에서 제시한 요약입니다. [링크는 여기서 맨 아래로!](https://nodejs.org/api/modules.html)

```
var require = function(src){                 //line 1
    var fileAsStr = readFile(src)            //line 2
    var module.exports = {}                  //line 3
    eval(fileAsStr)                          //line 4
    return module.exports                    //line 5
}
```

- line 1에서는 src의 인자를 받아옵니다. 즉,

```
const foo = require('foo')
```

와 같은 경우, ‘foo’를 인자로 받아오는 식입니다.

어떻게 해당 파일을 찾는 것인지에 대해서도 몇가지 규칙이 있습니다만, 일단 오늘은 그러한 규칙이 있다는 점만 언급하고 넘어가도록 하겠습니다. 궁금하신 분은 다음의 링크에서 찾아보셔도 좋겠습니다.([Node.js require() 공식 문서의 load참조](http://nodejs.sideeffect.kr/docs/v0.10.7/api/modules.html#modules_file_modules))

- line 2에서는 소스 파일을 읽어서 fileAsStr에 저장합니다.
- line 3에서는 module.exports라는 빈 해시를 만들어 둡니다.
- line 4에서는 fileAsStr을 eval 합니다. 이 과정은 사실상 src를 복붙한다고 생각하면 좋습니다.

line4를 좀 더 부연하기 위해 예를 들어 보겠습니다.

```
const foo = require('./foo.js')
```

를 한다는 것은, 곧 require()의 src 인자로 “./foo.js”를 넣는 식이고 위 require()의 line 4 는

```
eval(fileAsStr)                          //line 4
```

다음의 볼드체와 같이 변경되는 것과 마찬가지인 셈입니다.

```
var require = function(src){                 //line 1
    var fileAsStr = readFile(src)            //line 2
    var module.exports = {}                  //line 3
    const a = 10
    exports.a = a;                           
    return module.exports                    //line 5
}
```

결국 exports 해시의 a라는 key에 10이 들어가는 셈입니다.

- 마지막으로 line 5에서 require는 해당 exports 해시를 아웃풋으로 내보냅니다.

각 line에 대한 설명은 이 정도로 충분할 듯 싶군요. 좀 더 쉽게 이해하자면 다음과 같이 이해하면 될 것입니다.

따라서, bar.js는 원래 다음과 같이 생겼지만

```
//bar.jsconst foo = require('./foo.js') //foo.js, bar.js는 같은 디렉토리.
console.log(foo.a)
```

런타임에는 사실 이런 모습이라고 보면 됩니다.

```
//bar.jsconst foo = { a : 10 }
console.log(foo.a)
```

foo에서 exports에 들어간 <key,value>들이 require()함수의 아웃풋으로 나오는 것이지요.

.

.

## require()에 대해서는 이해했으니, 이제 exports로 넘어가 볼까요?

.

위에서 exports는 foo.js함수의 특정 값을 bar.js로 넘겨주고 싶을 때 등장했는데요.

그 과정이 왜 필요한지 앞선 사례를 통해 재확인해보고자 합니다.

.

일단, 위에서도 밝혔듯이, require()함수는 다음과 같습니다. (위와 동일)

```
var require = function(src){                 //line 1
    var fileAsStr = readFile(src)            //line 2
    var module.exports = {}                  //line 3
    eval(fileAsStr)                          //line 4
    return module.exports                    //line 5
}
```

line4의 eval 단계가 일종의 코드 복붙 단계라고 보면 된다고 말씀드렸습니다.

```
var require = function(src){                 //line 1
    var fileAsStr = readFile(src)            //line 2
    var module.exports = {}                  //line 3
    const a = 10                             //line 4.1
    exports.a = a;                           //line 4.2
    return module.exports                    //line 5
}
```

여기서 트릭입니다.

exports와 module.exports는 같은 대상을 지칭하고 있는 서로 다른 두 명칭이라는 점입니다.

따라서, 바로 위 스니펫을 다시 해석하자면,

- line 3에서 module.exports의 변수명으로 빈 해시를 만들었고
- line 4.2에서 exports에 <key: value>로서 <a : 10>을 넣은 것이며 이는 곧,
- module.exports에 <key: value>로서 <a : 10>을 넣은 것과 같습니다.

이 즈음 되면 궁금해집니다. exports와 module.exports는 무슨 차이일까요?

.

## exports와 module.exports의 차이

.

`exports`는 단순히 `module.exports`를 참조할 뿐입니다. 짧은 alias일 뿐입니다. 끝.

공식문서가 그게 다랍니다.

module.exports와 exports는 같은 객체를 바라보고 있으며, exports는 (위에 걸어둔 공식 문서대로 말하자면) module.exports의 shortcut입니다.

잠시 확인차, 공식문서에 나온 표현을 읽고 넘어갈까요?

> **exports**
>
> A reference to the `module.exports` that is shorter to type. See the section about the [exports shortcut](https://nodejs.org/api/modules.html#modules_exports_shortcut) for details on when to use`exports` and when to use `module.exports`.
>
> 출처: [Node.js v10.6.0 Documentation](https://nodejs.org/api/modules.html#modules_exports)

exports에는 개발자의 귀차니즘 정신이 담겼다고 보면 될것이에요. module.exports의 m,o,d,u,l,e 그리고 마지막 . 까지 총 7개의 문자를 반복해 쓰지 않기 위한 개발자의 혼이 담겨있지요.

**개념적 차이는 없는 반면, 어떻게 사용해야 할 것인지가 문제**일 것입니다. 어떻게?

.

## 목적에 따라, 예쁘게

.

우문현답이지만, 예쁘게 쓰면 그만입니다.

제가 알아본 바로는 목적은 크게 두 가지 입니다.

.

- **목적 (1)__ exported value/function를 담는 컨테이너로 쓰기.**
- **목적 (2)__ constructor function으로 쓰기.**

.

.

- **목적 (1)__ exported value/function를 담는 컨테이너로 쓰기.**

아주 일반적인 케이스로, bar.js에서 foo.js의 함수와 값들을 읽어오고 싶은 경우입니다.

```
//bar.jsconst value_Function_Container = require('./foo.js')
```

이 경우에, bar.js에서는 다음처럼 값을 가져옵니다.

```
//bar.jsconst value_Function_Container.value1
const value_Function_Container.value2
const value_Function_Container.value3
const value_Function_Container.function1
const value_Function_Container.function2
...
```

- **목적 (2)__ constructor function으로 쓰기.**

이런 경우를 본 적이 있을 거에요.

```
const express = require('express')
const app = express()
```

단순히 값을 가져오는 것이 아니라, exporess의 객체를 생성하는 식이지요.

목적 1 에서는 프로퍼티가 담긴 오브젝트가 require()의 아웃풋이 되도록 exports한 것입니다. 반면, 목적 2에서는 오브젝트가 아웃풋으로 나오도록 exports하는 식입니다.

물론, 목적 1처럼 쓸 수도 있습니다. 하지만, 그러면 좀 길어지는 문제, 가독성이 떨어지는 문제가 생기는 듯 싶어요. 아래처럼 **기이이일게** 써야 하니까요.

```
const express = require('express')
const app = express.init()
```

.

각 경우마다, 주의해야 할 것이 있습니다. 용례의 주의사항을 한 번 짚고 넘어가볼게요.

.

## exported property/function 들의 컨테이너로 쓸 경우 — 첫 용례

.

정석대로 쓰려면 아래처럼 써야 합니다.

```
🔵🔵🔵 module.exports.foo = "bar"                            🔵🔵🔵
```

더욱 짧게 쓸 수도 있습니다. exports는 module.exports를 refer하기 때문입니다.

```
🔵🔵🔵 exports.foo = "bar"                                  🔵🔵🔵
```

“bar” 이라는 property 대신 어떤 임의의 함수가 들어가도 물론 괜찮습니다.

```
🔵🔵🔵 module.exports.foo = function() { console.log("foo") }🔵🔵🔵
```

property를 넣을 때와 마찬가지로 짧게 쓰는 것도 가능하지요.

```
🔵🔵🔵 exports.foo = function() { console.log("foo") }       🔵🔵🔵
```

하지만, 만약 아래와 같이 쓰는 것은 불가능합니다.

```
❌❌❌ exports = {foo : "bar"}                               ❌❌❌  
❌❌❌ exports = function() { console.log("foo") }           ❌❌❌
```

위처럼 쓰면, 기존의 module.exports에 key, value를 넣는 것이 아니게 됩니다.

module.exports 와는 다른 exports라는 변수에, 새로운 값을 넣은 것에 불과합니다.

결국, 정작 값을 저장해야 할 module.exports는 비어있게 됩니다.

정 exports를 새로 정의하고 싶다면 아래처럼 써야 합니다.

```
🔵🔵module.exports = exports = function() { console.log("foo") }🔵🔵
```

이제 두 번째 목적을 향해 넘어가볼까요?

.

## constructor function으로 쓰는 경우 — 첫 용례

.

다음과 같이 쓰는 것은 불가능합니다.

```
❌❌❌ exports = function() { console.log(“foo”)} ❌❌❌
```

기존의 module.exports에 넣는 것이 아니기 때문입니다. module.exports 와는 다른 exports라는 변수에, 새로운 값을 넣은 것에 불과합니다. 결국, 정작 값을 저장해야 할 module.exports는 비어있게 됩니다.

exported property/function 들의 컨테이너로 쓸 경우(1) 과 같은 이유로 안되는 것이지요.

.

## constructor function으로 쓰는 경우 — 둘째 용례

.

정석대로 쓰려면 아래처럼 써야 합니다.

```
🔵🔵🔵 module.exports = function() { console.log(“foo”)} 🔵🔵🔵
```

하지만, 아래와 같이 쓰는 것은 비추합니다. **안되는 것은 아니고 비추입니다.**

```
🔺🔺🔺 module.exports = function() { console.log(“foo”)} 🔺🔺🔺
🔺🔺🔺 module.exports.one = 1                            🔺🔺🔺
```

물론, 코드가 컴파일되는 것 자체가 불가능하거나, 값이 안들어가는 것은 아닙니다.

다만, constructor function으로 쓰는 경우, constructor 하나만 들어가는 것이 훨씬 가독성이 높기 때문입니다.

프로퍼티/함수를 동일한 계층으로 보고 한꺼번에 묶어서 exports하는 것은 납득이 갑니다만, 오브젝트와 프로퍼티 혹은 오브젝트와 함수를 동일한 계층으로 보는 것은 문제가 있다고 보기 때문입니다.

물론, 저를 포함한 몇몇 사람들의 의견입니다. **논쟁의 여지가 있어요.**

.

식견이 짧아 저는 여기까지 용례를 파악했습니다만, 혹시라도 다른 사례가 있다면 지적 부탁드립니다.

앞으로 다른 용례를 볼 때마다 추가해두려고 합니다. 아직 많이 읽어보지는 않았습니다만 몇몇 소스코드를 읽다보면, module.exports가 여러 목적으로 활용되는 듯 싶어서 목적을 나눠보고 싶었습니다.

.

개발자 Chullin이었습니다.

오늘의 digging을 정리해보자면 다음과 세 가지 입니다.

**TL;DR**

- require()는 module.exports를 리턴한다.
- exports는 module.exports를 refer하고 있으며, shortcut에 불과하다.
- exports와 module.exports는 용례를 익힐 필요가 있다.

.

감사합니다.