let gan = "갑|甲,을|乙,병|丙,정|丁,무|戊,기|己,경|庚,신|辛,임|壬,계|癸".split(",");
console.log(gan.length, " :", gan);
let ji = "자|子,축|丑,인|寅,묘|卯,진|辰,사|巳,오|午,미|未,신|申,유|酉,술|戌,해|亥".split(",");
console.log(ji.length, " :", ji);

let gCount = 0;
let jCount = 0;
for (let i = 0; i < 60; i++) {
    console.log(gan[gCount].charAt(0) + ji[jCount].charAt(0), " :", gan[gCount].charAt(2) + ji[jCount].charAt(2));
    gCount = ++gCount%10;
    jCount = ++jCount%12;
}