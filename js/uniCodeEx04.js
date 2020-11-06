function getConstantVowel(kor){
    // 유니코드(UTF-8) 한글
    const f = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ'.split("");// 초성
    const s = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ'.split("");// 중성
    const t = 'ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ'.split("");// 종성
    t.unshift(''); // 받침없는것 맨앞에 추가
    // 위치 구하기
    fn = parseInt((kor.charCodeAt(0) - 0xAC00) / t.length / s.length);
    sn = parseInt((kor.charCodeAt(0) - 0xAC00) / t.length % s.length);
    tn = parseInt((kor.charCodeAt(0) - 0xAC00) % t.length);
    // 객체로 리턴
    return {
        f : f[fn],
        s : s[sn],
        t : t[tn]
    };
}
// 테스트
console.log(getConstantVowel("마"));
console.log(getConstantVowel("뷁"));
console.log(getConstantVowel("뱗"));
console.log(getConstantVowel("뮻"));
console.log();
console.log(getConstantVowel("똠"));
console.log(getConstantVowel("방"));
console.log(getConstantVowel("각"));
console.log(getConstantVowel("하"));
