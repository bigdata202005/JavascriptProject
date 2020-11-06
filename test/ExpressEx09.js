const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// 세션의 사용!!!!
// npm install express-session
// npm install session-file-store
// 세션 스토어는 세션이 데이터를 저장하는 곳을 말합니다. 
// 대표적으로 Memory Store, File Store, Mongo Store 가 있습니다.
const session = require('express-session');
const FileStore = require('session-file-store')(session);

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// 쿠키 사용 지정
app.use(cookieParser());
// view engine지정
// npm install ejs
app.set('view engine', 'ejs');
// views 폴더지정
app.set('views', 'views');
// 세션을 사용하겠다.
/*
secret: 세션을 암호화 해줌
resave: 세션을 항상 저장할지 여부를 정하는 값. (false 권장)
saveUninitialized: 초기화되지 않은채 스토어에 저장되는 세션
store: 데이터를 저장되는 형식
*/
app.use(session({
    secret: 'keyboard cat',  // 암호화
    resave: false,
    saveUninitialized: true,
    store: new FileStore()
}));
// 이후 서버에서 세션에 접근을 하려면 req.session을 이용하면 됩니다.

app.get('/', (req, res, next) => {
    console.log(req.session);
    if (!req.session.num) {
        req.session.num = 1;
    } else {
        req.session.num = req.session.num + 1;
    }
    res.send(`Number : ${req.session.num}`);
});

let port = 9999;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});