const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var app = express();
/*
http모듈로만 post body를 파싱하려면, req.on('data', function(chunk) { body += chunk; }); 와 같이 
이벤트를 등록해야한다. 그다음에 인코딩처리를 해줘야한다.
그치만 body-parser를 쓰면 bodyParser.urlencoded()를 등록하면, 
자동으로 req에 body속성이 추가되고 저장된다. 
만약 urls에 접근하고싶다면, req.body.urls이다. 
인코딩도 default로 UTF-8로 해준다. 이벤트등록할 필요 자체가 사라진다.
*/
/*
extended는 중첩된 객체표현을 허용할지 말지를 정하는 것이다. 
객체 안에 객체를 파싱할 수 있게하려면 true.
*/
app.use(bodyParser.urlencoded({ extended: false }));
/*
요청된 쿠키를 쉽게 추출할 수 있도록 해주는 미들웨어.
request 객체에 cookies 속성이 부여된다.
*/
// 쿠키 사용 지정
app.use(cookieParser());
// view engine지정
app.set('view engine', 'ejs');
// views 폴더지정
app.set('views', 'views');

let favorite;

app.get('/', (req, res) => {
  let data = [
    {name:"kimc",age:33,gender:true},
    {name:"leec",age:22,gender:true},
    {name:"shinc",age:11,gender:false}
  ];
  //                    쿠키값을 템플릿으로 전송
  res.render('index', { favorite: req.cookies.favorite, data:data });
});
app.post('/', (req, res) => {
  favorite = req.body.favorite; // post로 넘어온 데이터 접근
  res.cookie('favorite', favorite); // 쿠키에 저장
  res.redirect('/');
});

let port = 9999;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});