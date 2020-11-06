# Express.js란?

익스프레스([Express.js](http://expressjs.com/))는 노드(NodeJS) 상에서 동작하는 웹 개발 프레임웍입니다. 이외에도 [Hapi.js](http://hapijs.com/), [Koa.js](http://koajs.com/) 등 다양한 웹프레임웍이 있지만 현재까지 가장 많이 사용하는 것이 바로 익스프레스 엔진입니다.

익스프레스는 가볍고 유연하게 웹 프레임웍을 구성할 수 있는 장점이 있습니다. 이것은 미들웨어(Middleware) 구조 때문에 가능한 것입니다. 자바스크립트 코드로 작성된 다양한 기능의 미들웨어는 개발자가 필요한 것만 선택하여 익스프레스와 결합해 사용할 수 있습니다. 본 글에서는 익스프레스 설치와 기본구조에 대해 알아보고 웹서버 개발에 필요한 기초 사용법에 대해 알아보겠습니다.

익스프레스는 노드 모듈중 하나입니다. 따라서 노드 설치를 선행해야합니다. [노드 홈페이지](https://nodejs.org/)에서 직접 설치 파일을 다운로드하여 설치할 수 있습니다. 설치후 아래 명령어로 노드 설치 유무를 확인하세요

```
$ node --version
$ npm --version
```

`node`는 노드 실행을 위한 명령어고 `npm`은 노드 모듈설치를 위한 명령어 입니다. 노드 모듈 중 하나인 익스프레스 설치를 위해 `npm` 명령어를 사용합니다.

# 설치하기

[Node.js](https://nodejs.org/)가 이미 설치되었다고 가정한 상태에서, 애플리케이션을 보관할 디렉토리를 작성하고 그 디렉토리를 작업 디렉토리로 설정하십시오.

```
$ mkdir myapp
$ cd myapp
```

`npm init` 명령을 이용하여 애플리케이션에 대한 `package.json` 파일을 작성하십시오. `package.json`의 작동 원리에 대한 자세한 정보는 [Specifics of npm’s package.json handling](https://docs.npmjs.com/files/package.json)을 참조하십시오.

```
$ npm init
```

이 명령을 실행하면 애플리케이션의 이름 및 버전과 같은 몇 가지 정보에 대해 프롬프트합니다. 지금은 다음의 항목을 제외한 대부분의 항목에서 ENTER 키를 눌러 기본값을 수락할 수 있습니다.

```
entry point: (index.js)
```

기본 파일의 이름을 `app.js`로 입력하거나 자유롭게 입력하십시오. 기본 파일의 이름을 `index.js`로 입력하기 원하는 경우에는 ENTER 키를 눌러 제안된 기본 파일 이름을 수락하십시오.

이제 `app` 디렉토리에 Express를 설치한 후 종속 항목 목록에 저장하십시오. 예를 들면 다음과 같습니다.

```
$ npm install express --save
```

Express를 임시로 설치하고 종속 항목 목록에 추가하지 않으려면, 다음과 같이 `--save` 옵션을 생략하십시오.

```
$ npm install express
```

`--save` 옵션을 통해 설치된 Node 모듈은 `package.json` 파일 내의 `dependencies` 목록에 추가됩니다. 이후 `app` 디렉토리에서 `npm install`을 실행하면 종속 항목 목록 내의 모듈이 자동으로 설치됩니다.



##  Hello world 예제

기본적으로 이 앱은 여러분이 작성할 수 있는 가장 간단한 Express 앱일 것입니다. 이 앱은 하나의 파일로 된 앱이며 [Express 생성기](http://expressjs.com/ko/starter/generator.html)를 통해 얻게 되는 앱과는 같지 *않습니다*. (이 예제와 달리 Express 생성기를 통해 얻게 되는 앱은 다양한 목적을 위한 여러 JavaScript 파일, Jade 템플리트 및 하위 디렉토리를 포함하는 전체 앱에 대한 스캐폴딩을 작성합니다.)

먼저, `myapp`이라는 이름의 디렉토리를 작성한 후 이 디렉토리로 이동하여 `npm init`를 실행하십시오. 이후 [설치 안내서](http://expressjs.com/ko/starter/installing.html)에 따라 `express`를 종속 항목으로서 설치하십시오.

`myapp` 디렉토리에 `app.js`라는 이름의 파일을 작성한 후 다음과 같은 코드를 추가하십시오.

```
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
```

앱은 서버를 시작하며 3000번 포트에서 연결을 청취합니다. 앱은 루트 URL(`/`) 또는 *라우트*에 대한 요청에 “Hello World!”로 응답합니다. 다른 모든 경로에 대해서는 **404 Not Found**로 응답합니다.

`req`(요청) 및 `res`(응답)는 Node가 제공하는 동일한 오브젝트이며, 따라서 `req.pipe()`, `req.on('data', callback)` 그리고 Express의 관여가 필요 없는 다른 모든 항목을 호출할 수 있습니다.

다음의 명령을 이용하여 앱을 실행하십시오.

```
$ node app.js
```

이후 브라우저에서 <http://localhost:3000/>을 로드하여 결과물을 확인하십시오.

* 라우트(route)

  자원을 식별하는 URL의 일부입니다. 예를 들면, `http://foo.com/products/id`에서 “/products/id”가 라우트입니다.



## Express 애플리케이션 생성기

애플리케이션의 골격을 신속하게 작성하려면 애플리케이션 생성기 도구인 `express`를 사용하십시오.

다음의 명령을 이용해 `express`를 설치하십시오.

```
$ npm install express-generator -g
```

다음과 같이 `-h` 옵션을 이용해 명령의 옵션을 표시하십시오.

```
$ express -h

  Usage: express [options][dir]

  Options:

    -h, --help          output usage information
        --version       output the version number
    -e, --ejs           add ejs engine support
        --hbs           add handlebars engine support
        --pug           add pug engine support
    -H, --hogan         add hogan.js engine support
    -v, --view <engine> add view <engine> support (ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git           add .gitignore
    -f, --force         force on non-empty directory
```

예를 들면, 다음의 예에서는 _myapp_라는 이름의 Express 앱을 현재 작업 디렉토리에 작성합니다.

```
$ express --view=pug myapp

   create : myapp
   create : myapp/package.json
   create : myapp/app.js
   create : myapp/public
   create : myapp/public/javascripts
   create : myapp/public/images
   create : myapp/routes
   create : myapp/routes/index.js
   create : myapp/routes/users.js
   create : myapp/public/stylesheets
   create : myapp/public/stylesheets/style.css
   create : myapp/views
   create : myapp/views/index.pug
   create : myapp/views/layout.pug
   create : myapp/views/error.pug
   create : myapp/bin
   create : myapp/bin/www
```

이후 다음과 같이 종속 항목을 설치하십시오.

```
$ cd myapp
$ npm install
```

MacOS 또는 Linux에서는 다음 명령을 사용하여 앱을 실행하십시오.

```
$ DEBUG=myapp:* npm start
```

Windows에서는 다음 명령을 사용하십시오.

```
> set DEBUG=myapp:* & npm start
```

이후 브라우저에서 `http://localhost:3000/`을 로드하여 앱에 액세스하십시오.

생성된 앱은 다음과 같은 디렉토리 구조를 갖습니다.

```
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug

7 directories, 9 files
```

생성기에 의해 작성된 앱 구조는 Express 앱을 구조화하는 여러 방법 중 하나에 불과합니다. 이러한 구조를 사용하거나 사용자의 요구사항에 가장 적합하도록 구조를 수정하십시오.



# 기본 라우팅

*라우팅*은 URI(또는 경로) 및 특정한 HTTP 요청 메소드(GET, POST 등)인 특정 엔드포인트에 대한 클라이언트 요청에 애플리케이션이 응답하는 방법을 결정하는 것을 말합니다.

각 라우트는 하나 이상의 핸들러 함수를 가질 수 있으며, 이러한 함수는 라우트가 일치할 때 실행됩니다.

라우트 정의에는 다음과 같은 구조가 필요합니다.

```
app.METHOD(PATH, HANDLER)
```

여기서,

- `app`은 `express`의 인스턴스입니다.
- `METHOD`는 [HTTP 요청 메소드](http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)입니다.
- `PATH`는 서버에서의 경로입니다.
- `HANDLER`는 라우트가 일치할 때 실행되는 함수입니다.

이 학습서에서는 `app`이라는 이름의 `express` 인스턴스가 작성되며 서버가 실행 중인 것으로 가정합니다. 앱의 작성 및 시작에 익숙하지 않은 경우에는 [Hello world 예제](http://expressjs.com/ko/starter/hello-world.html)를 참조하십시오.

다음 예에서는 간단한 라우트의 정의를 설명합니다.

홈 페이지에서 `Hello World!`로 응답:

```
app.get('/', function (req, res) {
  res.send('Hello World!');
});
```

애플리케이션의 홈 페이지인 루트 라우트(`/`)에서 POST 요청에 응답:

```
app.post('/', function (req, res) {
  res.send('Got a POST request');
});
```

`/user` 라우트에 대한 PUT 요청에 응답:

```
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});
```

`/user` 라우트에 대한 DELETE 요청에 응답:

```
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});
```

 

# Express에서 정적 파일 제공

이미지, CSS 파일 및 JavaScript 파일과 같은 정적 파일을 제공하려면 Express의 기본 제공 미들웨어 함수인 `express.static`을 사용하십시오.

정적 자산이 포함된 디렉토리의 이름을 `express.static` 미들웨어 함수에 전달하면 파일의 직접적인 제공을 시작할 수 있습니다. 예를 들면, 다음과 같은 코드를 이용하여 `public`이라는 이름의 디렉토리에 포함된 이미지, CSS 파일 및 JavaScript 파일을 제공하십시오.

```
app.use(express.static('public'));
```

이제 다음과 같이 `public` 디렉토리에 포함된 파일을 로드할 수 있습니다.

```
http://localhost:3000/images/kitten.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/images/bg.png
http://localhost:3000/hello.html
```

Express는 정적 디렉토리에 대해 상대적으로 파일을 검색하며, 따라서 정적 디렉토리의 이름은 URL의 일부가 아닙니다.

여러 개의 정적 자산 디렉토리를 이용하려면 다음과 같이 `express.static` 미들웨어 함수를 여러 번 호출하십시오.

```
app.use(express.static('public'));
app.use(express.static('files'));
```

Express는 `express.static` 미들웨어 함수를 이용해 정적 디렉토리를 설정한 순서대로 파일을 검색합니다.

`express.static` 함수를 통해 제공되는 파일에 대한 가상 경로 접두부(파일 시스템 내에 해당 경로가 실제로 존재하지 않는 경우)를 작성하려면, 아래에 표시된 것과 같이 정적 디렉토리에 대한 [마운트 경로를 지정](http://expressjs.com/ko/4x/api.html#app.use)하십시오.

```
app.use('/static', express.static('public'));
```

이제 `/static` 경로 접두부를 통해 `public` 디렉토리에 포함된 파일을 로드할 수 있습니다.

```
http://localhost:3000/static/images/kitten.jpg
http://localhost:3000/static/css/style.css
http://localhost:3000/static/js/app.js
http://localhost:3000/static/images/bg.png
http://localhost:3000/static/hello.html
```

그러나 `express.static` 함수에 제공되는 경로는 `node` 프로세스가 실행되는 디렉토리에 대해 상대적입니다. Express 앱을 다른 디렉토리에서 실행하는 경우에는 다음과 같이 제공하기 원하는 디렉토리의 절대 경로를 사용하는 것이 더 안전합니다.

```
app.use('/static', express.static(__dirname + '/public'));
```

# 자주 받는 질문

## 애플리케이션을 어떻게 구조화해야 합니까?

이 질문에는 정확한 답이 없습니다. 그 답은 애플리케이션의 규모 및 참여하는 팀의 규모에 따라 달라질 수 있습니다. 최대한의 유연성을 유지하기 위하여, Express에는 구조에 대한 전제 조건이 없습니다.

라우트 및 기타 애플리케이션 특정 로직은 원하는 많큼 많은 파일에 존재할 수 있으며, 선호하는 모든 디렉토리 구조에 존재할 수 있습니다. 도움을 받으려면 다음의 예를 확인하십시오.

- [Route listings](https://github.com/strongloop/express/blob/4.13.1/examples/route-separation/index.js#L32-47)
- [Route map](https://github.com/strongloop/express/blob/4.13.1/examples/route-map/index.js#L52-L66)
- [MVC style controllers](https://github.com/strongloop/express/tree/master/examples/mvc)

또한, 이러한 패턴을 간략화할 수 있는 다음과 같은 Express용 써드파티 확장기능이 존재합니다.

- [Resourceful routing](https://github.com/expressjs/express-resource)

## 모델을 어떻게 정의해야 합니까?

Express에는 데이터베이스의 개념이 없습니다. 이러한 개념은 써드파티 Node 모듈에 따라 달라지며, 따라서 개발자는 거의 모든 데이터베이스를 사용할 수 있습니다.

모델 중심의 Express 기반 프레임워크에 대해서는 [LoopBack](http://loopback.io/)을 참조하십시오.

## 어떻게 사용자를 인증할 수 있습니까?

인증은 또 다른 주관적인 영역이며, Express는 이에 관여하지 않습니다. 개발자는 자신이 원하는 어떠한 인증 체계라도 사용할 수 있습니다. 사용자 이름 / 비밀번호 체계에 대해서는 [이 예제](https://github.com/strongloop/express/tree/master/examples/auth)를 참조하십시오.

## Express는 어느 템플리트 엔진을 지원합니까?

Express는 `(path, locals, callback)` 시그니처를 준수하는 모든 템플리트 엔진을 지원합니다. 템플리트 엔진 인터페이스 및 캐싱을 정규화하려면[consolidate.js](https://github.com/visionmedia/consolidate.js) 프로젝트를 참조하여 지원을 받으십시오. 목록에 포함되지 않은 템플리트 엔진이 Express 시그니처를 지원할 수도 있습니다.

## 404 응답을 어떻게 처리해야 합니까?

Express에서 404 응답은 오류로 인해 발생하는 결과가 아니며, 따라서 오류 핸들러(error-handler) 미들웨어는 이를 파악하지 않습니다. 이렇게 작동하는 이유는 404 응답은 단순히 실행해야 할 추가적인 작업이 없다는 것, 즉 Express는 모든 미들웨어 함수 및 라우트를 실행했으며 이들 중 어느 것도 응답하지 않았다는 것을 나타내기 때문입니다. 이를 처리하려면 다음과 같이 404 응답을 처리하기 위한 미들웨어 함수를 스택의 가장 아래(다른 모든 함수의 아래)에 추가하기만 하면 됩니다.

```
app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});
```

## 오류 핸들러를 어떻게 설정해야 합니까?

오류 처리 미들웨어는 다른 미들웨어와 동일한 방식으로 정의할 수 있지만, 다음과 같이 오류 처리 함수는 3개가 아닌 4개의 인수, 구체적으로 말하면 `(err, req, res, next)` 시그니처를 갖는다는 점이 다릅니다.

```
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```

자세한 정보는 [오류 처리](http://expressjs.com/ko/guide/error-handling.html)를 참조하십시오.

## 일반적인 HTML은 어떻게 렌더링해야 합니까?

렌더링할 필요가 없습니다! `res.render()` 함수를 이용해 HTML을 “렌더링”할 필요는 없습니다. 특정한 파일을 렌더링해야 하는 경우에는 `res.sendFile()` 함수를 사용하십시오. 하나의 디렉토리에서 여러 자산을 제공하는 경우에는 `express.static()` 미들웨어 함수를 사용하십시오.



# 라우팅

*라우팅*은 애플리케이션 엔드 포인트(URI)의 정의, 그리고 URI가 클라이언트 요청에 응답하는 방식을 말합니다. 라우팅에 대한 소개는 [기본 라우팅](http://expressjs.com/ko/starter/basic-routing.html)을 참조하십시오.

다음 코드는 매우 기본적인 라우트의 예입니다.

```
var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});
```

## 라우트 메소드

라우트 메소드는 HTTP 메소드 중 하나로부터 파생되며, `express` 클래스의 인스턴스에 연결됩니다.

다음 코드는 앱의 루트에 대한 GET 및 POST 메소드에 대해 정의된 라우트의 예입니다.

```
// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});
```

Express는 HTTP 메소드에 해당하는 다음과 같은 라우팅 메소드를 지원합니다. `get`, `post`, `put`, `head`, `delete`, `options`, `trace`, `copy`, `lock`, `mkcol`, `move`, `purge`, `propfind`, `proppatch`, `unlock`, `report`, `mkactivity`, `checkout`, `merge`, `m-search`, `notify`, `subscribe`, `unsubscribe`, `patch`, `search` 및 `connect`.

올바르지 않은 JavaScript 변수 이름으로 변환되는 메소드를 라우팅하려면 대괄호 표기법을 사용하십시오. 예를 들면 `app['m-search']('/', function ...` 등과 같습니다.

특수한 라우팅 메소드인 `app.all()`은 어떠한 HTTP 메소드로부터도 파생되지 않습니다. 이 메소드는 모든 요청 메소드에 대해 한 경로에서 미들웨어 함수를 로드하는 데 사용됩니다.

다음 예에서는, GET, POST, PUT 또는 DELETE 메소드를 사용하는 경우, 또는 [http 모듈](https://nodejs.org/api/http.html#http_http_methods)에서 지원되는 기타 모든 HTTP 요청 메소드를 사용하는 경우 등의 “/secret”에 대한 요청을 위하여 핸들러가 실행됩니다.

```
app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});
```

## 라우트 경로

라우트 경로는, 요청 메소드와의 조합을 통해, 요청이 이루어질 수 있는 엔드포인트를 정의합니다. 라우트 경로는 문자열, 문자열 패턴 또는 정규식일 수 있습니다.

Express는 라우트 경로의 일치를 위해 [path-to-regexp](https://www.npmjs.com/package/path-to-regexp)를 사용합니다. 라우트 경로를 정의할 수 있는 모든 가능성을 확인하려면 path-to-regexp 문서를 참조하십시오. [Express Route Tester](http://forbeslindesay.github.io/express-route-tester/)는 기본적인 Express 라우트의 테스트를 위한 편리한 도구이지만, 패턴 일치는 지원하지 않습니다.

조회 문자열은 라우트 경로의 일부가 아닙니다.

문자열을 기반으로 하는 라우트 경로의 몇 가지 예는 다음과 같습니다.

다음의 라우트 경로는 요청을 루트 라우트 `/`에 일치시킵니다.

```
app.get('/', function (req, res) {
  res.send('root');
});
```

다음의 라우트 경로는 요청을 `/about`에 일치시킵니다.

```
app.get('/about', function (req, res) {
  res.send('about');
});
```

다음의 라우트 경로는 요청을 `/random.text`에 일치시킵니다.

```
app.get('/random.text', function (req, res) {
  res.send('random.text');
});
```

문자열 패턴을 기반으로 하는 라우트 경로의 몇 가지 예는 다음과 같습니다.

다음의 라우트 경로는 `acd` 및 `abcd`와 일치합니다.

```
app.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});
```

다음의 라우트 경로는 `abcd`, `abbcd` 및 `abbbcd` 등과 일치합니다.

```
app.get('/ab+cd', function(req, res) {
  res.send('ab+cd');
});
```

다음의 라우트 경로는 `abcd`, `abxcd`, `abRABDOMcd` 및 `ab123cd` 등과 일치합니다.

```
app.get('/ab*cd', function(req, res) {
  res.send('ab*cd');
});
```

다음의 라우트 경로는 `/abe` 및 `/abcde`와 일치합니다.

```
app.get('/ab(cd)?e', function(req, res) {
 res.send('ab(cd)?e');
});
```

?, +, * 및 () 문자는 정규식 문자의 서브세트입니다. 하이픈(-) 및 점(.)은 문자열 기반 경로에 의해 문자 그대로 해석됩니다.

정규식을 기반으로 하는 라우트 경로의 예:

다음의 라우트 경로는 라우트 이름에 “a”가 포함된 모든 항목과 일치합니다.

```
app.get(/a/, function(req, res) {
  res.send('/a/');
});
```

다음의 라우트 경로는 `butterfly` 및 `dragonfly`와 일치하지만, `butterflyman` 및 `dragonfly man` 등과 일치하지 않습니다.

```
app.get(/.*fly$/, function(req, res) {
  res.send('/.*fly$/');
});
```

## 라우트 핸들러

[미들웨어](http://expressjs.com/ko/guide/using-middleware.html)와 비슷하게 작동하는 여러 콜백 함수를 제공하여 요청을 처리할 수 있습니다. 유일한 차이점은 이러한 콜백은 `next('route')`를 호출하여 나머지 라우트 콜백을 우회할 수도 있다는 점입니다. 이러한 메커니즘을 이용하면 라우트에 대한 사전 조건을 지정한 후, 현재의 라우트를 계속할 이유가 없는 경우에는 제어를 후속 라우트에 전달할 수 있습니다.

다음 예에 나타난 것과 같이, 라우트 핸들러는 함수나 함수 배열의 형태 또는 둘을 조합한 형태일 수 있습니다.

하나의 콜백 함수는 하나의 라우트를 처리할 수 있습니다. 예를 들면 다음과 같습니다.

```
app.get('/example/a', function (req, res) {
  res.send('Hello from A!');
});
```

2개 이상의 콜백 함수는 하나의 라우트를 처리할 수 있습니다(`next` 오브젝트를 반드시 지정해야 함). 예를 들면 다음과 같습니다.

```
app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from B!');
});
```

하나의 콜백 함수 배열은 하나의 라우트를 처리할 수 있습니다. 예를 들면 다음과 같습니다.

```
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.send('Hello from C!');
}

app.get('/example/c', [cb0, cb1, cb2]);
```

독립적인 함수와 함수 배열의 조합은 하나의 라우트를 처리할 수 있습니다. 예를 들면 다음과 같습니다.

```
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

app.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from D!');
});
```

## 응답 메소드

다음 표에 표시된 응답 오브젝트에 대한 메소드(`res`)는 응답을 클라이언트로 전송하고 요청-응답 주기를 종료할 수 있습니다. 라우트 핸들러로부터 다음 메소드 중 어느 하나도 호출되지 않는 경우, 클라이언트 요청은 정지된 채로 방치됩니다.

| 메소드                                                       | 설명                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [res.download()](http://expressjs.com/ko/4x/api.html#res.download) | 파일이 다운로드되도록 프롬프트합니다.                        |
| [res.end()](http://expressjs.com/ko/4x/api.html#res.end)     | 응답 프로세스를 종료합니다.                                  |
| [res.json()](http://expressjs.com/ko/4x/api.html#res.json)   | JSON 응답을 전송합니다.                                      |
| [res.jsonp()](http://expressjs.com/ko/4x/api.html#res.jsonp) | JSONP 지원을 통해 JSON 응답을 전송합니다.                    |
| [res.redirect()](http://expressjs.com/ko/4x/api.html#res.redirect) | 요청의 경로를 재지정합니다.                                  |
| [res.render()](http://expressjs.com/ko/4x/api.html#res.render) | 보기 템플리트를 렌더링합니다.                                |
| [res.send()](http://expressjs.com/ko/4x/api.html#res.send)   | 다양한 유형의 응답을 전송합니다.                             |
| [res.sendFile](http://expressjs.com/ko/4x/api.html#res.sendFile) | 파일을 옥텟 스트림의 형태로 전송합니다.                      |
| [res.sendStatus()](http://expressjs.com/ko/4x/api.html#res.sendStatus) | 응답 상태 코드를 설정한 후 해당 코드를 문자열로 표현한 내용을 응답 본문으로서 전송합니다. |

## app.route()

`app.route()`를 이용하면 라우트 경로에 대하여 체인 가능한 라우트 핸들러를 작성할 수 있습니다. 경로는 한 곳에 지정되어 있으므로, 모듈식 라우트를 작성하면 중복성과 오타가 감소하여 도움이 됩니다. 라우트에 대한 자세한 정보는 [Router() 문서](http://expressjs.com/ko/4x/api.html#router)를 참조하십시오.

`app.route()`를 사용하여 정의된 체인 라우트 핸들러의 예는 다음과 같습니다.

```
app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });
```

## express.Router

`express.Router` 클래스를 사용하면 모듈식 마운팅 가능한 핸들러를 작성할 수 있습니다. `Router` 인스턴스는 완전한 미들웨어이자 라우팅 시스템이며, 따라서 “미니 앱(mini-app)”이라고 불리는 경우가 많습니다.

다음 예에서는 라우터를 모듈로서 작성하고, 라우터 모듈에서 미들웨어 함수를 로드하고, 몇몇 라우트를 정의하고, 기본 앱의 한 경로에 라우터 모듈을 마운트합니다.

다음의 내용이 입력된 `birds.js`라는 이름의 라우터 파일을 앱 디렉토리에 작성하십시오.

```
var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;
```

이후 앱 내에서 다음과 같이 라우터 모듈을 로드하십시오.

```
var birds = require('./birds');
...
app.use('/birds', birds);
```

앱은 이제 `/birds` 및 `/birds/about`에 대한 요청을 처리할 수 있게 되었으며, 해당 라우트에 대한 특정한 미들웨어 함수인 `timeLog`를 호출할 것입니다.