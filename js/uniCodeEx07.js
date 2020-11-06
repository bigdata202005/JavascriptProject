str = "ㄱㅏㅁㅅㅏㅎㅏㅂㄴㅣㄷㅏ. 이렇ㄱㅔ도 123 qwerty ㅈㅓㅇㅁㅏㄹㄷㅚㄹㄲㅏㅇㅛ? ㄱㅏ";
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
console.log(array);




