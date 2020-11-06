str = "ㄱㅏㅁㅅㅏㅎㅏㅂㄴㅣㄷㅏ. 이렇ㄱㅔ도 123 qwerty ㅈㅓㅇㅁㅏㄹㄷㅚㄹㄲㅏㅇㅛ? ㄱㅏ";
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
function getHangul3(str){
    const first  = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';// 초성
    const second = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ';// 중성
    const third  = 'ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ';// 종성
    array = [];
    result = "";
    for(let i=0;i<str.length;i++){
        ch = str.charAt(i);
        // console.log(ch);
        if(first.includes(ch) || second.includes(ch) || third.includes(ch)){
            result += ch;
            // 현재가 자음이고 다음 글자가 자음이면 새로운 글자 시작이다.
            if(third.includes(ch) && first.includes(str.charAt(i+1))){
                array.push(result);
                result = "";
            }
            // 현재글자가 모음이고 다음다음 글자도 모음이면 새로운 글자 시작이다.
            if(second.includes(ch) && second.includes(str.charAt(i+2))){
                array.push(result);
                result = "";
            }
        }else{
            if(result!=""){
                array.push(result);
                result = "";
            }
            array.push(ch);
        }
    }
    if(result!=""){
        array.push(result);
    }
    result = "";
    for(let s of array){
        ch = s.charAt(0);
        if(first.includes(ch) || second.includes(ch) || third.includes(ch)){
            result += getHangul(s);
        }else{
            result += s;
        }
    }
    return result;
}

console.log(str);
console.log(getHangul3(str));

