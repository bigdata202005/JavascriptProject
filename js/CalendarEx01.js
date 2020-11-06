const { firstCharLowerCase } = require("xml2js/lib/processors");

// 갑,을 - 청색, 병,정 - 적색, 무,기 - 황색, 경,신 - 백색, 임,계 - 흑색
let gan = "갑|甲|청|靑,을|乙|청|靑,병|丙|적|赤,정|丁|적|赤,무|戊|황|黃,기|己|황|黃,경|庚|백|白,신|辛|백|白,임|壬|흑|黑,계|癸|흑|黑".split(",");
let ji = "자|子|쥐|서(鼠),축|丑|소|우(牛),인|寅|호랑이|호(虎),묘|卯|토끼|토(兔 또는 兎),진|辰|용|용(龍 또는 龙),사|巳|뱀|사(蛇),오|午|말|마(馬 또는 马),미|未|양|양(羊),신|申|원숭이|후(猴),유|酉|닭|계(雞 또는 鸡),술|戌|개|구(狗) 또는 견(犬),해|亥|돼지|저(豬 또는 猪)".split(",");
/* 
간지를 해마다 하나씩 배당한 것을 세차(歲次), 달에 하나씩 배당한 것을 월건(月建), 
날에 하나씩 배당한 것을 일진(日辰), 시간에 배당하는것을 시진(時辰) 이라고 합니다.
*/
function getGanji(year) {
    year -= 4;
    gg = gan[year % 10];
    jj = ji[year % 12];
    return {
        y: year + 4,
        gk: gg.split("|")[0] + jj.split("|")[0],
        gh: gg.split("|")[1] + jj.split("|")[1],
        dk: gg.split("|")[2] + jj.split("|")[2],
        dh: gg.split("|")[3] + jj.split("|")[3].charAt(2)
    };
}

// console.log(getGanji(2019));
// console.log(getGanji(2020));
// console.log(getGanji(2021));

//숫자를 앞에 0을 붙여 len자리 만들기
function zero_fill(num, len){
    return ("0000000000000000"+num).slice(-len);
}
function make_yymmdd(yy, mm, dd){
    return zero_fill(yy,2) + zero_fill(mm,2) + zero_fill(dd,2);
}
function make_mmdd(mm, dd){
    return zero_fill(mm,2) + zero_fill(dd,2);;
}

// console.log(make_yymmdd(2020,1,2));
// console.log(make_yymmdd(20,11,22));
// console.log(make_mmdd(1,2));
// console.log(make_mmdd(11,22));

// 월/일을 넘겨 별자리 알아내기
function getStar(month, day) {
    let date = make_mmdd(month, day);
    let result = "염소";
    if(date>="0121" && date<="0218") result = "물병";
    if(date>="0219" && date<="0320") result = "물고기";
    if(date>="0321" && date<="0420") result = "양";
    if(date>="0421" && date<="0521") result = "황소";
    if(date>="0522" && date<="0621") result = "쌍둥이";
    if(date>="0622" && date<="0722") result = "게";
    if(date>="0723" && date<="0822") result = "사자";
    if(date>="0823" && date<="0923") result = "처녀";
    if(date>="0924" && date<="1023") result = "천칭";
    if(date>="1024" && date<="1122") result = "전갈";
    if(date>="1123" && date<="1221") result = "사수";
    return result+'자리';
}
// console.log(getStar(1,24));
// console.log(getStar(12,24));

// 월을 리턴하여 탄생석 알아내기
function getStone(month) {
    var tt = new Array(
        "",
        "가넷(Garnet) : 우애, 충실, 정조, 인내",
        "자수정(Ametheyst) : 결혼 15주년 기념 보석, 성실, 마음의 평화",
        "애쿼머린(Aqamarine) : 신념, 용기, 총명, 침착",
        "다이아몬드(Diamond) : 평화, 순수, 신뢰, 청정무구",
        "에메랄드(Emerald) : 행복, 행운",
        "진주(Pearl) : 건강, 장수, 부, 처녀의 상징",
        "루비(Rubi) : 애정, 정열, 용기, 자선, 위엄",
        "감람석(Olivine) : 부부의 행복, 화합, 건강, 장수, 정신의 만족",
        "사파이어(Sapphire) : 결혼 35주년 기념 보석, 자애, 성실, 덕망, 정절",
        "오팔(Opal) : 환희, 안락, 인내, 비애의 극복",
        "토파즈(Topaz) : 참다운 우애, 우정, 사랑, 희망, 결백",
        "터키석(Turquoise) : 성공, 행운, 친근한 관계"
    );
    return tt[parseInt(month)];
}
// for(let i=1;i<=12;i++){
//     console.log(i, " :", getStone(i));
// }
//===========================================================================
// 윤년을 판단하는 함수
function isLeapYear(year) {
    return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
}
// 월의 마지막 날짜를 리턴하는 함수
function getLastDayOfMonth(year, month) {
    var monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    monthDay[1] = isLeapYear(year) ? 29 : 28;
    return monthDay[month - 1];
}
// 1년 1월 1일부터 지정날짜까지의 총일수
function getTotalDay(year, month, day) {
    var totalDay =
    (year - 1) * 365 +
    Math.floor((year - 1) / 4) -
    Math.floor((year - 1) / 100) +
    Math.floor((year - 1) / 400);
    for (var i = 1; i < month; i++) totalDay += getLastDayOfMonth(year, i);
    totalDay += day;
    return totalDay;
}
// 요일을 숫자로
function getDayOfWeekNum(year, month, day) {
    return getTotalDay(year, month, day) % 7;
}
// 요일을 문자로
function getDayOfWeekStr(year, month, day) {
    return "일월화수목금토".charAt(getDayOfWeekNum(year, month, day));
}
//===========================================================================
// 문자를 앞에 공백을 붙여 len자리 만들기
function space_fill(str, len){
    return ("                                      "+str).slice(-len);
}
// let today = new Date();
// let yy = today.getFullYear(); // 년
// let mm = today.getMonth()+1;  // 월
// let dd = today.getDate();     // 일
// let ww = today.getDay();      // 요일
// console.log(yy, mm, dd, ww);
// console.log(getDayOfWeekNum(yy,mm,dd));  // 요일 숫자
// console.log(getDayOfWeekStr(yy,mm,dd));  // 요일 문자
// for(let i=0;i<7;i++){
//     console.log(space_fill(getDayOfWeekStr(1, 1,i),5));  // 요일 문자
// }

function viewCalendar(year, month){
    let result = space_fill( zero_fill(year, 4)+"년 " + zero_fill(month, 2)+"월 ", 25);
    result += "\n\n ";
    for(let i=0;i<7;i++){
        result += space_fill(getDayOfWeekStr(1, 1,i),5);  // 요일 문자
    }
    result += "\n";
    let ww = getDayOfWeekNum(year, month, 1);
    for(let i=0;i<ww;i++){
        result += space_fill(" ", 6);
    }
    let lastday = getLastDayOfMonth(year, month);
    for(let i=1;i<=lastday;i++){
        result += space_fill(zero_fill(i, 2), 6);
        ww = getDayOfWeekNum(year, month, i);
        if(ww==6)  result += "\n";
    }
    result += '\n\n';
    return result;
}
// console.log(viewCalendar(yy,mm));
// console.log(viewCalendar(yy,mm+1));
// console.log(viewCalendar(yy,mm+2));
// console.log(viewCalendar(yy, 2));

// 생활연령 계산하기
// 알고자하는 년,월,일
function getAgeCompute(year, month, date) {
    // 생활연령 계산
    var nd = new Date(); // 현재 년월일
    var id = new Date(year, month - 1, date); // 알고자하는 년월일을 이용하여 Date객체 생성
   
    var rd = (nd.getTime() - id.getTime()) / 1000 / 60 / 60 / 24;
    var ryear = nd.getFullYear() - id.getFullYear();
    var rmonth = nd.getMonth() - id.getMonth();
    var rdate = nd.getDate() - id.getDate();
   
    if (rdate < 0) {
      rmonth--;
      rdate += 30;
    }
    if (rmonth < 0) {
      ryear--;
      rmonth += 12;
    }
    var rmonthMix = ryear * 12 + rmonth;
   
    var obj = { year: year, month: month, date: date };
    obj.rYear = ryear; // ?세
    obj.rMonth = rmonth; // ?개월
    obj.rDate = rdate; // ?일
    // 살아온날
    obj.rMonthMix = rmonthMix; // 몇개월 살았는가?
    obj.totalday = getTotalDay(nd.getFullYear(), nd.getMonth() + 1, nd.getDate()) -   getTotalDay(year, month, date) +  1; // 몇일 살았는가?
    obj.weekday =  getDayOfWeekStr(id.getFullYear(), id.getMonth() + 1, id.getDate()) +  "(" +   getDayOfWeekNum(id.getFullYear(), id.getMonth() + 1, id.getDate()) + ")"; // 요일
    // 나이 계산
    var agek = nd.getFullYear() - id.getFullYear() + 1;
    var agem = nd.getFullYear() - id.getFullYear() - 1;
    if ((nd.getMonth() >= id.getMonth() && nd.getDate() >= id.getDate()) || nd.getMonth() > id.getMonth()) {
      agem++;
    }
    obj.ageK = agek; // 우리 나이
    obj.ageM = agem; // 만나이
    return obj;
    //  년,월,일,?년,?개월,?일살았나,총개월수(rMonthMix),살아온일수(totalDay),요일(weekday),우리나이(ageK),만나이(ageM)
    // {"year":2019,"month":2,"date":7,"rYear":0,"rMonth":0,"rDate":0,"rMonthMix":0,"totalday":1,"weekday":"목(4)","ageK":1,"ageM":0}
  }

  console.log(getAgeCompute(1999,2, 5));
  console.log(getAgeCompute(1992,8, 22));


  function getLastDay2(year, month){
      return new Date(year,month, 0).getDate(); // 이번달 0일이면 이전달 마지막날짜이다.
  }

  for(let i=1;i<=12;i++){
      console.log(getLastDay2(2019,i), " :", getLastDay2(2020,i))
  }