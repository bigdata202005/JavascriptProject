/* 유럽 기준 달력
유럽국가의 달력은 월요일부터 시작합니다(월요일-1, 화요일-2, … 일요일-7). ‘유럽’ 기준 숫자를 반환해주는 함수 
getLocalDay(date)를 만들어보세요. */
let today = new Date();
function getLocalDay(date){
    return date.getDay()==0 ? 7 : date.getDay();
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
    let dateCopy = new Date(date); // 새로운날짜 생성
    dateCopy.setDate(date.getDate() - days); // 날짜를 뺀다
    return dateCopy;//.getDate(); // 복사한 날짜를 리턴
}
date = new Date(); 
console.log(date);
console.log( getDateAgo(date, 1) ); 
console.log( getDateAgo(date, 2) ); 
console.log( getDateAgo(date, 365) ); 
console.log(date);
/* 달의 마지막 일
특정 달의 마지막 일을 반환하는 함수 getLastDayOfMonth(year, month)를 작성해보세요. 
반환 값은 30이나 31, 29(2월), 28(2월)이 될 겁니다. */ 
function getLastDayOfMonth(year, month){
    // let m=[31,28,31,30,31,30,31,31,30,31,30,31];
    // m[1] = (year%400==0 || year%4==0 && year%100!=0) ? 29 : 28;
    // return m[month-1];
    let date = new Date(year, month, 0); // 0일이면 전달의 마지막날이 된다.
    return date.getDate();
}
for(let i=1;i<=12;i++){
    console.log(i, " : ",  getLastDayOfMonth(2020,i));
}
/* 몇 초나 지났을까요?
오늘 하루가 시작된 이후 몇 초나 지났는지 반환하는 함수 getSecondsToday()를 만들어보세요.
현재 시각이 10:00 am이고, 서머타임이 적용되지 않은 경우라면 아래와 같은 결과가 나와야 합니다. */
function getSecondsToday(){
    let date1 = new Date();
    //console.log(date1.getTime()); // 1970-1-1이후의 시간을 1/1000초 단위로 알려준다.
    // 이러면 시간이 0시 0분 0초가 된다.
    let date2 = new Date(date1.getUTCFullYear(), date1.getMonth(), date1.getDate()); 
    //console.log(date2.getTime());
    return Math.round((date1-date2)/1000);
}
console.log("오늘의 초 : ", getSecondsToday());
/* 몇 초나 남았을까요?
오늘 하루가 끝날 때까지 남은 초를 반환해주는 함수 getSecondsToTomorrow()를 만들어보세요.
현재 시각이 23:00이라면 아래와 같은 결과가 나와야 합니다. */
function getSecondsToTomorrow(){
    let date1 = new Date();
    //console.log(date1.getTime()); // 1970-1-1이후의 시간을 1/1000초 단위로 알려준다.
    // 이러면 시간이 0시 0분 0초가 된다.
    let date2 = new Date(date1.getUTCFullYear(), date1.getMonth(), date1.getDate()+1); 
    //console.log(date2.getTime());
    return Math.round((date2-date1)/1000);
}
console.log("내일까지 ?초 : ", getSecondsToTomorrow());
console.log("1일은 ", getSecondsToday() + getSecondsToTomorrow(), "초");
console.log(24*60*60);

/* 상대 날짜 출력하기
date를 아래와 같은 형식으로 변경해주는 함수 formatDate(date)를 만들어보세요.
date가 지금으로부터 1초 미만 전의 날짜를 나타내면 "현재"를 반환해야 합니다.
그렇지 않고, date가 지금으로부터 1분 이하 전의 날짜를 나타내면 "n초 전"을 반환해야 합니다.
그렇지 않고, date가 지금으로부터 1시간 미만 전의 날짜를 나타내면 "n분 전"을 반환해야 합니다.
이 외의 경우는 전체 날짜를 "DD.MM.YY HH:mm"형식("일.월.연 시:분")으로 반환해야 합니다(예시: 31.12.16 10:00).
*/
function formatDate(date){
    let now = new Date();
    if((now-date)<1000){
        return "현재";
    }else if((now-date)<1000*60){
        return Math.round((now-date)/1000) + "초전";
    }else if((now-date)<1000*60*60){
        return Math.round((now-date)/1000/60) + "분전";
    }else{
        // 날짜의 포맷을 변경
        // 일, 월, 시, 분이 숫자 하나로 구성되어있는 경우, 앞에 0을 추가해줌
        let d = date;
        d = [
            '0' + d.getDate(),
            '0' + (d.getMonth() + 1),
            '' + d.getFullYear(),
            '0' + d.getHours(),
            '0' + d.getMinutes()
        ].map(component => component.slice(-2)); // 모든 컴포넌트의 마지막 숫자 2개를 가져옴

        // 컴포넌트를 조합
        return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
    }
}
console.log( formatDate(new Date(new Date() - 1)) ); // "현재"
console.log( formatDate(new Date(new Date() - 30 * 1000)) ); // "30초 전"
console.log( formatDate(new Date(new Date() - 5 * 60 * 1000)) ); // "5분 전"
// 어제를 나타내는 날짜를 "일.월.연 시:분" 포맷으로 출력
console.log( formatDate(new Date(new Date() - 86400 * 1000)) );
