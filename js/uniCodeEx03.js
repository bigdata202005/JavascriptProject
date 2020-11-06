// 유니코드(UTF-8) 한글
// 초성
const f = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ'.split("");
console.log(f.length, " : " , f);
// 중성
const s = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ'.split("");
console.log(s.length, " : " , s);
// 종성
const t = 'ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ'.split("");
t.unshift(''); // 받침없는것
console.log(t.length, " : " , t);
/*
// 한글 초, 중, 종성 구분하기 
문자 내에서 초성, 중성, 종성으로 쓰이는 자모음은 
종성 숫자 1마다, 중성은 29마다, 초성은 589마다 값이 변한다는 사실을 알 수 있다. 
이 내용을 토대로 한글 문자를 분리하는 기능을 만들어보자.
*/
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log("초성 차이 :", '까'.charCodeAt(0) - '가'.charCodeAt(0));
console.log("중성 차이 :", '개'.charCodeAt(0) - '가'.charCodeAt(0));
console.log("종성 차이 :", '각'.charCodeAt(0) - '가'.charCodeAt(0));
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log("초성 차이 :", s.length*t.length);
console.log("중성 차이 :", t.length);
console.log("종성 차이 :", '각'.charCodeAt(0) - '가'.charCodeAt(0));
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

kor = "똠";
const ga = '가'.charCodeAt(0); // 한글 유니코드 첫번째 값
console.log(ga, " : ", "\\U" + ga.toString(16).toUpperCase())

// 첫번째 글자만 취한다.
let uni = kor.charCodeAt(0);
// 두 코드의 차이값
uni = uni - ga;
console.log("두 코드의 차이값 :", uni);
// 초성은 589마다 값이 바뀌는데 배열의 시작번호는 0번이므로 uni를 588로 나눠준 값을 입력한다. 
// 이때 소수점은 없어야하기 때문에 parseInt( )함수로 정수로 변환해준다.
let fn = parseInt(uni / 588);
console.log(fn, " :", f[fn]); // 초성

// 중성은 매 29마다 값이 바뀌는데 배열의 시작번호가 0번이므로 28을 나눠주며, 
// 초성이 바뀔때마다 다시 처음부터 반복되기 때문에 uni 값에서 초성 값을 빼준다.
// console.log(fn, fn * 588, uni, uni-(fn*588));
let sn = parseInt((uni - (fn * 588)) / 28);
console.log(sn, " :", s[sn]); // 중성

// 종성은 매 1마다 값이 바뀌며, 총 28개의 배열 값을 지니고 있기 때문에 uni를 28로 나눈 나머지를 값으로 받아들인다.
let tn = parseInt(uni % 28);
console.log(tn, " :", t[tn]); // 종성
// ================================================================================
/**
	초성 중성 종성 분리 하기
	
	유니코드 한글은 0xAC00 으로부터 
	초성 19개, 중상21개, 종성28개로 이루어지고
	이들을 조합한 11,172개의 문자를 갖는다.
	한글코드의 값 = ((초성 * 21) + 중성) * 28 + 종성 + 0xAC00 
	(0xAC00은 'ㄱ'의 코드값)
	따라서 다음과 같은 계산 식이 구해진다. 
	유니코드 한글 문자 코드 값이 X일 때,
	초성위치 = (X - 0xAC00) / 28 / 21
	중성위치 = (X - 0xAC00) / 28 % 21
	종성위치 = (X - 0xAC00) % 28
	이 때 초성, 중성, 종성의 값은 각 소리 글자의 코드값이 아니라
	이들이 각각 몇 번째 문자인가를 나타내기 때문에 다음과 같이 다시 처리한다. 
	초성문자코드 = 초성 + 0x1100 //('ㄱ')
	중성문자코드 = 중성 + 0x1161 // ('ㅏ')
	종성문자코드 = 종성 + 0x11A8 - 1 // (종성이 없는 경우가 있으므로 1을 뺌)
**/
fn = parseInt((kor.charCodeAt(0) - ga) / t.length / s.length);
console.log(fn, " :", f[fn]); // 초성
sn = parseInt((kor.charCodeAt(0) - ga) / t.length % s.length);
console.log(sn, " :", s[sn]); // 중성
tn = parseInt((kor.charCodeAt(0) - ga) % t.length);
console.log(tn, " :", t[tn]); // 종성
