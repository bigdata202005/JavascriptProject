// 유니코드(UTF-8) 한글 코드표 자음 30자
console.log('한글 자음')
console.log('ㄱ'.charCodeAt(0), " :", "0x"+'ㄱ'.charCodeAt(0).toString(16));
console.log('ㅎ'.charCodeAt(0), " :", "0x"+'ㅎ'.charCodeAt(0).toString(16));
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
for(let i='ㄱ'.charCodeAt(0);i<='ㅎ'.charCodeAt(0);i++){
    console.log(i-'ㄱ'.charCodeAt(0)+1," : ", i ," : ", "\\u" + i.toString(16)," : ", String.fromCharCode(i));
}
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
// 유니코드(UTF-8) 한글 코드표 모음 21자
console.log('한글 모음')
console.log('ㅏ'.charCodeAt(0), " :", "0x"+'ㅏ'.charCodeAt(0).toString(16));
console.log('ㅣ'.charCodeAt(0), " :", "0x"+'ㅣ'.charCodeAt(0).toString(16));
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
for(let i='ㅏ'.charCodeAt(0);i<='ㅣ'.charCodeAt(0);i++){
    console.log(i-'ㅏ'.charCodeAt(0)+1," : ", i ," : ", "\\u" + i.toString(16)," : ", String.fromCharCode(i));
}
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')



