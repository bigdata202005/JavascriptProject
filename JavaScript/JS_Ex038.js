// 문자열!!!
let str1 = "큰따옴표";
let str2 = '작은따옴표';
let str3 = `백틱`;
console.log(str1);
console.log(str2);
console.log(str3);
console.log(`표현식이 가능 : ${10*10}`);
let str4 = `
첫번째줄
두번째줄
세번째줄
백틱을 이용하면 이렇게 여러줄을 사용할 수 있다.
`
console.log(str4);
console.log( "\u{1F60D}");
console.log("나의 이름은 '한사람'입니다.");
console.log("나의 이름은 \"한사람\"입니다.");
console.log('나의 이름은 "한사람"입니다.');
console.log('나의 이름은 \'한사람\'입니다.');

let str5 = "Hello";
for(i in str5){
    console.log(str5[i], str5.charAt(i));
}
console.log();
// for ~ of를 사용하면 index가 아닌 값이 넘어온다.
for(i of str5){
    console.log(i);
}
console.log();
for(i of [1,2,3,4,5,6]){
    console.log(i);
}
console.log();
// 문자열은 불변 객체이다. 변하지 않는다. 항상 새로운 객체를 리턴한다.
let str6 = "Hi";
str6[0] = 'h'; // 변경되지 않는다.
console.log(str6);



// ucFirst(str) : 첫글자를 대문자로 바꾸는 함수 작성
function ucFirst(str){
    return (str[0]+"").toUpperCase() + str.substring(1);
}
console.log(ucFirst("hello"));
console.log(ucFirst("title"));

// 스팸 문자열 걸러내기
// str에 'viagra’나 'XXX’라는 문자열이 있으면 true를 반환해주는 함수 checkSpam(str)을 만들어보세요.
// 해당 문자열이 없으면 false를 반환하면 됩니다.
function checkSpam(str){
    return str.toLowerCase().includes("viagra") || str.toUpperCase().includes("XXX");
}
console.log(checkSpam('buy ViAgRA now'))// true
console.log(checkSpam('free xxxxx')) // true
console.log(checkSpam("innocent rabbit")); // false

// str의 길이를 확인하고, 최대 길이 maxlength를 초과하는 경우 str의 끝을 생략 부호 ("…")로 
// 대체해주는 함수 truncate(str, maxlength)를 만들어봅시다. 
// 새로 만든 문자열의 길이는 maxlength가 되어야 합니다.
// 함수의 반환 값은 원하는 길이로 줄여진 문자열이 되어야 합니다.
function truncate(str, maxlength){
    if(str!=null && str.length > maxlength){
        str = str.substring(0, maxlength-3) + "...";
    }
    return str;
}
str7 = truncate("What I'd like to tell on this topic is:", 20);
console.log(str7.length, str7);
//  "What I'd like to te…"
console.log(truncate("Hi everyone!", 20));
// "Hi everyone!"

// 달러 표시가 먼저 나오고 그 뒤에 숫자가 나오는 문자열 "$120"가 있다고 가정해 봅시다.
// 위와 같은 문자열에서 숫자만 뽑아내는 함수 extractCurrencyValue(str)를 작성해 봅시다.
// 실행 결과는 아래와 같아야 합니다.
function extractCurrencyValue(str){
    return parseInt(str.substring(1));
}
console.log(extractCurrencyValue('$120') === 120)