// Express의 미들웨어 불러오기
const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const mysql_query = require('./db/mysql_query');
//express 객체 생성
var app = express();

// body-parser : post로 요쳥했을 때의 요청 파라미터 확인 방법을 제공
// body-parser를 이용해 application/x=www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }));
// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json());
// 쿠키 사용 지정
app.use(cookieParser());
// view engine지정
// npm install ejs
app.set('view engine', 'ejs');
// views 폴더지정
app.set('views', 'views');
// 정적폴더를 사용하겠다.
app.use('/public', serveStatic(path.join(__dirname, 'HTML')));
// 세션을 사용하겠다.
app.use(session({
    secret: 'keyboard cat',  // 암호화
    resave: false,
    saveUninitialized: true,
    store: new FileStore()
}));

app.get('/', (req, res, next) => {
    // nodemon을 사용하면 수정하면 서버가 자동으로 재식된다.
    console.log("세션정보 : ", req.session.user);
    res.render('login', { member: req.session.user });

});
// 로그아웃을 하는 주소 생성
app.get('/logout', (req, res, next) => {
    // nodemon을 사용하면 수정하면 서버가 자동으로 재식된다.
    req.session.user = null; // 세션에 저장된 user값을 지운다.
    console.log("세션정보 : ", req.session.user);
    res.render('login', { member: req.session.user });

});

// 회원 목록을 보여주는 주소 생성
app.get('/list', (req, res) => {
    mysql_query('select * from member', function (err, rows) {
        if (err) {
            throw err;
        }
        console.log(rows);
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        res.render('list', { rows: rows });
    });
});

// 회원 가입을 해주는 주소 생성
app.get('/adduser', (req, res) => {
    // GET방식으로 요청하면 잘못된 요청이므로 메인화면으로 보낸다.
    res.redirect('/');
});
app.post('/adduser', (req, res) => {
    // 넘어온 데이터 받기
    let userid = req.body.id;
    let password = req.body.password;
    let username = req.body.name;
    // 쿼리 생성하기
    let sql = `insert into member (userid,PASSWORD,username)  values ('${userid}','${password}','${username}')`;
    console.log("실행할 SQL :", sql);
    // 쿼리 실행
    mysql_query(sql, function (err, rows) {
        if (err) {
            throw err;
        }
        console.log("저장 결과 :", rows);
        res.redirect('/list'); // 저장이 완료되면 회원목록으로 보내기!!!
    });
});
// 로그인을 해주는 주소 생성
app.get('/loginOk', (req, res) => {
    // GET방식으로 요청하면 잘못된 요청이므로 메인화면으로 보낸다.
    res.redirect('/');
});
app.post('/loginOk', (req, res) => {
    // 넘어온 데이터 받기
    let userid = req.body.id;
    let password = req.body.password;
    // 쿼리 생성하기
    let sql = `select * from member where userid = '${userid}'`;
    console.log("실행할 SQL :", sql);
    // 쿼리 실행
    mysql_query(sql, function (err, rows) {
        if (err) {
            throw err;
        }
        console.log("실행 결과 :", rows);
        console.log("실행 결과 :", rows.length);
        let message = "";
        req.session.user = null;
        if (rows.length == 0) {
            // 데이터가 없다면 아이디가 존재하지 않는다!!!
            message = "아이디가 존재하지 않습니다.";
        } else {
            // 데이터가 있다면 비밀번호가 같은지 검사한다.
            if (rows[0].PASSWORD == password) {
                // 비번이 같으면 로그인 처리를 한다.(세션에 저장을 한다)
                message = "로그인 성공!!!!";
                if (!req.session.user) {
                    req.session.user = rows[0];
                }
            } else {
                // 비번이 다르면 에러를 출력한다.
                message = "비밀번호가 일치하지 않습나다.";
            }
        }
        // 어딘가로 보내야 한다.....
        console.log("세션값 :", req.session);
        res.render('result', { message: message, user: req.session.user });
    });
});

app.get('/user/findid', function(req,res){
    // GET방식으로 요청하면 잘못된 요청이므로 메인화면으로 보낸다.
    res.redirect('/');
});
app.post('/user/findid', function(req,res){
    // 데이터 받고
    let username = req.body.name;
    // 쿼리 생성하기
   let sql = `select * from member where username = '${username}'`;
   console.log("findid 실행할 SQL :", sql);
   // 쿼리 실행
   mysql_query(sql, function (err, rows) {
       if (err) {
           throw err;
       }
       console.log("실행 결과 :", rows);
       let message = "";
       if(rows.length==0){
           message = `${username}님은 회원이 아닙니다.`;
       }else{
           message = `${username}님의 아이디는 "${rows[0].userid}"입니다.`;
       }
       res.render('findidOk', {message:message});
   });
});

app.get('/user/findpass', function(req,res){
    // GET방식으로 요청하면 잘못된 요청이므로 메인화면으로 보낸다.
    res.redirect('/');
});
app.post('/user/findpass', function(req,res){
    // 데이터 받고
    let userid = req.body.id;
    let username = req.body.name;
    // 쿼리 생성하기
   let sql = `select * from member where userid='${userid}' and username = '${username}'`;
   console.log("findpass 실행할 SQL :", sql);
   // 쿼리 실행
   mysql_query(sql, function (err, rows) {
       if (err) {
           throw err;
       }
       console.log("실행 결과 :", rows);
       let message = "";
       if(rows.length==0){
           message = `${username}님정보가 일치하지 않습니다.`;
       }else{
           message = `${username}님의 아이디는 "${rows[0].userid}"이고 비밀번호는 "${rows[0].PASSWORD}"입니다.`;
       }
       res.render('findpassOk', {message:message});
   });
});


var host = 'localhost';
var port = 3000;
http.createServer(app).listen(3000, function () {
    console.log('Express 서버가 시작되었습니다.');
    console.log(`"http://${host}:${port}/"에 접속해주세요`);
});

