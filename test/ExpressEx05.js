const express = require('express')
var app = express();
// 정적폴더지정 : url로 파일 직접 접근
app.use('/static', express.static(__dirname + '/public'));

/*
응답 메소드
다음 표에 표시된 응답 오브젝트에 대한 메소드(res)는 응답을 클라이언트로 전송하고 
요청-응답 주기를 종료할 수 있습니다. 
라우트 핸들러로부터 다음 메소드 중 어느 하나도 호출되지 않는 경우, 
클라이언트 요청은 정지된 채로 방치됩니다.

res.download()	파일이 다운로드되도록 프롬프트합니다.
res.end()	응답 프로세스를 종료합니다.
res.json()	JSON 응답을 전송합니다.
res.jsonp()	JSONP 지원을 통해 JSON 응답을 전송합니다.
res.redirect()	요청의 경로를 재지정합니다.
res.render()	보기 템플리트를 렌더링합니다.
res.send()	다양한 유형의 응답을 전송합니다.
res.sendFile	파일을 옥텟 스트림의 형태로 전송합니다.
res.sendStatus()	응답 상태 코드를 설정한 후 해당 코드를 문자열로 표현한 내용을 응답 본문으로서 전송합니다.
*/
app.get('/', function (req, res) {
    res.writeHead('200', { 'Content-Type': 'text/plain;charset=utf-8' });
    res.write('Hello\n');
    res.write('world\n');
    res.write('한글은?\n');
    res.end('끝~~~~~~~~~~');
});
app.get('/json', function (req, res) {
    var config = require('./mysql/db_config.json');
    res.json(config);
});
app.get('/jsonp', function (req, res) {
    var config = require('./mysql/db_config.json');
    res.jsonp(config);
});

let port = 9999;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/`)
    console.log(`Example app listening at http://localhost:${port}/json`)
    console.log(`Example app listening at http://localhost:${port}/jsonp`)

    console.log();
});