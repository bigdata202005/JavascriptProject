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

function makeVowel(str){
    let result = "";
    for(let s of str ){
        if(s.charCodeAt(0)>= 0xAC00 && s.charCodeAt(0)<=0xD7A3){
            obj = getConstantVowel(s);
            result += obj.fn+obj.sn+obj.tn;
        }else{
            result += s;
        }
    }
    return result;
}

str = "감사합니다. 123 qwerty 정말될까요?";
console.log(makeVowel(str));



