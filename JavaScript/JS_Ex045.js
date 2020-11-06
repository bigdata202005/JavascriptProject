// Date 객체와 날짜
let today = new Date();
console.log(today);
console.log(today.toTimeString());
console.log(today.toLocaleDateString());
console.log(today.toLocaleTimeString());
console.log(today.toLocaleString());

let date1 = new Date(0);
console.log(date1);

let date2 = new Date(50*365*24*60*60*1000);
console.log(date2);
console.log(date2-date1);
console.log(new Date(date2-date1));

// new Date(datestring) : 인수가 하나인데, 문자열이라면 해당 문자열은 자동으로 구문 분석(parsed)됩니다. 
let date3 = new Date("2020-10-02");
console.log(date3);
let date4 = new Date("2020-01-01");
console.log(date4);
// new Date(year, month, date, hours, minutes, seconds, ms)
let date5 = new Date(2011, 0, 1, 0, 0, 0, 0); // 2010-12-31T15:00:00.000Z
console.log(date5);
let date6 = new Date(2020, 10, 1); // 2020-10-31T15:00:00.000Z
console.log(date6);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log(today.getFullYear()); // 년자리 연도
console.log(today.getYear()); // 1900년 이후 연도수
console.log(today.getMonth()); // 월(0~11)
console.log(today.getDate()); // 일
console.log(today.getDay());  // 요일
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMinutes());
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')


/*
날짜 생성하기
2012년 2월 20일, 오전 3시 12분을 나타내는 Date 객체를 만들어보세요(시간대는 로컬).
그리고 alert 함수를 이용해 생성한 객체를 출력하세요.
*/
let date7 = new Date(2012,1,20,3,12); // 월값은 -1해야 한다.
console.log(date7.toLocaleString());

/*
요일 보여주기
날짜를 입력하면 ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’ 형식으로 요일을 보여주는 함수 getWeekDay(date)를 만들어보세요.
*/
function getWeekDay(date){
    return "일,월,화,수,목,금,토".split(",")[date.getDay()] + "요일";
}
console.log(getWeekDay(today));
for(let day=1;day<=31;day++){
    console.log("2020-10-", day, " : " , getWeekDay(new Date(2020,9,day)));
}
/* 유럽 기준 달력
유럽국가의 달력은 월요일부터 시작합니다(월요일-1, 화요일-2, … 일요일-7). ‘유럽’ 기준 숫자를 반환해주는 함수 
getLocalDay(date)를 만들어보세요. */
function getLocalDay(date){
    return date.getDay()+1;
}
console.log(today.getDay());
console.log(getLocalDay(today));
for(let day=1;day<=31;day++){
    today2 = new Date(2020,9,day);
    console.log("2020-10-", day, " : " , today2.getDay(), " : ", getLocalDay(today2));
}
/* n일 전 '일' 출력하기
date를 기준으로 days일 전 '일’을 반환하는 함수 getDateAgo(date, days)를 만들어보세요,
오늘이 20일이라면 getDateAgo(new Date(), 1)는 19를, getDateAgo(new Date(), 2)는 18을 반환해야 합니다.
days가 365일 때도 제대로 동작해야 합니다. */
function getDateAgo(date, days){
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy;//.getDate();
}
date = new Date(); // 2015년 1월 2일
console.log(date);
console.log( getDateAgo(date, 1) ); // 1, (2015년 1월 1일)
console.log( getDateAgo(date, 2) ); // 31, (2014년 12월 31일)
console.log( getDateAgo(date, 365) ); // 2, (2014년 1월 2일)
console.log(date);