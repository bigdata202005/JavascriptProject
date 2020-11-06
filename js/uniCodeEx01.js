// 유니코드(UTF-8) 한글 코드표, 한글코드 범위 {AC00-D7A3} : 11172글자!!!!
for(let i=0xAC00;i<=0xD7A3;i++){
    console.log(i-0xAC00+1, " : ", i ,":", "0x" + i.toString(16)," : ", String.fromCharCode(i));
}
