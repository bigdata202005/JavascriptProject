function getConstantVowel(kor){
    // 유니코드(UTF-8) 한글
    const first  = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ'.split("");// 초성
    const second = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ'.split("");// 중성
    const third  = 'ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ'.split("");// 종성
    third.unshift(''); // 받침없는것 맨앞에 추가
    // 위치 구하기
    let firstIndex = parseInt((kor.charCodeAt(0) - 0xAC00) / third.length / second.length);
    let secondIndex = parseInt((kor.charCodeAt(0) - 0xAC00) / third.length % second.length);
    let thirdIndex = parseInt((kor.charCodeAt(0) - 0xAC00) % third.length);
    // 객체로 리턴
    return {
        f : firstIndex,
        s : secondIndex,
        t : thirdIndex,
        fn : first[firstIndex],
        sn : second[secondIndex],
        tn : third[thirdIndex]
    };
}

// 유니코드(UTF-8) 한글 결합하기
/*
초성위치 = (((글자 - 0xAC00) - (글자 - 0xAC00) % 28 ) ) / 28 ) / 21
중성위치 = (((글자 - 0xAC00) - (글자 - 0xAC00) % 28 ) ) / 28 ) % 21
종성위치 =  (글자 - 0xAC00) % 28
의 식을 거치면 초성 중성 종성을 파악할수있다
다시 그 후 붙여주면 끝
붙일때는 0xAC00 + 28 * 21 * (초성의 index) + 28 * (중성 index) + (종성 index)
*/
let kor = "강";

let obj = getConstantVowel(kor);
console.log(obj);
// 붙일때는 0xAC00 + 28 * 21 * (초성의 index) + 28 * (중성 index) + (종성 index)
let kor2 = 0xAC00 + (28 * 21 * obj.f) + (28*obj.s) + (obj.t);
console.log(kor2, " :", String.fromCharCode(kor2));

function getHangul(str){
    // 유니코드(UTF-8) 한글
    const first  = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';// 초성
    const second = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ';// 중성
    const third  = ' ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ';// 종성
    let firstIndex = first.indexOf(str.charAt(0))
    let secondIndex = second.indexOf(str.charAt(1))
    let thirdIndex = 0;
    if(str.length>2) thirdIndex = third.indexOf(str.charAt(2))
    // return String.fromCharCode(0xAC00 + (28 * 21 * firstIndex) + (28*secondIndex) + thirdIndex);
    return getHangul2(firstIndex, secondIndex, thirdIndex);
}
function getHangul2( firstIndex, secondIndex, thirdIndex ) {
	return String.fromCharCode(0xAC00 + (28 * 21 * firstIndex) + (28*secondIndex) + thirdIndex);
}

console.log(getHangul('ㄱㅏㅇ'));
console.log(getHangul('ㄱㅏ'));
console.log( getHangul2(0,0,0) ); // 가
console.log( getHangul2(0,0,1) ); // 각
console.log( getHangul2(0,0,27) ); // 갛
console.log( getHangul2(1,0,0) ); // 까
console.log( getHangul2(18,20,27) ); // 힣

obj = getConstantVowel('삶');
console.log(obj.fn+obj.sn+obj.tn)
console.log(getHangul(obj.fn+obj.sn+obj.tn));
console.log(getHangul2(obj.f,obj.s,obj.t));




