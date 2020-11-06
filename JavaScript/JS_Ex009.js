// 기본 연산자와 수학
let x = 1;
console.log('x = ',  x );
x = -x;  // 단항연산 :  : 연산대상(피연산자)이 1개인 연산
console.log('x = ',  x );
let y = 3;
console.log('y - x = ',  y - x ); // 이항연산 : 연산대상(피연산자)이 2개인 연산
//  삼항연산 : 연산대상(피연산자)이 3개인 연산
console.log('x>y?true:false = ', x>y ? true : false );
console.log();
/*
자바스크립트에서 지원하는 수학 연산자는 다음과 같습니다.

덧셈 연산자 +,
뺄셈 연산자 -,
곱셈 연산자 *,
나눗셈 연산자 /,
나머지 연산자 %,
거듭제곱 연산자 **
*/
console.log('x + y = ', x + y);
console.log('x - y = ', x - y);
console.log('x * y = ', x * y);
console.log('x / y = ', x / y);
console.log('x % y = ', x % y);
console.log('x ** y = ', x ** y);
console.log('2 + 2 + "1" = ', 2 + 2 + "1");
console.log('"" + 2 + 2 + "1" = ', "" + 2 + 2 + "1");
console.log();
console.log(+x);
console.log(-y);
console.log(+true);  //  true가 숫자 1로 변경되고 +연산이( * 1)처리되어 결과가 1이다.
console.log(-"0");   //  "0"가 숫자 0로 변경되고 -연산이( * -11)처리되어 결과가 -0이다.
console.log(typeof(-"0"));   //  number
console.log();

let apples = "2";
let oranges = "3";
console.log(apples + oranges);                  // "23"
console.log(+apples + +oranges);                // 5  : 연산자 수준의 계산이 더 빠르다.
console.log(Number(apples) + Number(oranges));  // 5
console.log();

let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
console.log("a = ", a);     // 3
console.log("b = ", b);     // 2
console.log("c = ", c);     // 0
console.log();

// 복합 할당 연산자
a += 4;
b *= 2;
c /= 3;
console.log("a = ", a);     // 7
console.log("b = ", b);     // 4
console.log("c = ", c);     // 0
console.log();

b **= 3;
console.log("b = ", b);     // 64
console.log();

// 증가·감소 연산자 : ++ , -- 
a = b = c = 10;
a++; b++; c = a + b;
console.log(a,b,c);     // 11 11 22
--a; --b; c = a + b;
console.log(a,b,c);     // 10 10 20

c = a++ + ++b;
console.log(a,b,c);     // 11 11 21

c = --a + b--;
console.log(a,b,c);     // 10 10 21
console.log();


// 비트 연산자
/*
비트 AND ( & )
비트 OR ( | )
비트 XOR ( ^ )
비트 NOT ( ~ )
왼쪽 시프트(LEFT SHIFT) ( << )
오른쪽 시프트(RIGHT SHIFT) ( >> )
부호 없는 오른쪽 시프트(ZERO-FILL RIGHT SHIFT) ( >>> )
*/
a = 5, b = 3; // , 연산자
console.log(a, ' | ', b , " = ", a|b);     // 7 : 0011 | 0101 = 0111 = 7
console.log(a, ' & ', b , " = ", a&b);     // 1
console.log(a, ' ^ ', b , " = ", a^b);     // 6
console.log('~', a, " = ",  ~a);           // -5

a = 1;
for(i=1;i<=10;i++){
    console.log(a, "<<", i, " = ", a<<i);  // a << n :  a *  2**n
}
a = 1024;
for(i=1;i<=10;i++){
    console.log(a, ">>", i, " = ", a>>i);  // a << n :  a /  2**n
}

a = 24;
console.log(a >> 2);        // 6
console.log(a >>> 2);       // 6

a = -24;
console.log(a >> 2);        // -6
console.log(a >>> 2);       // 1073741818

a=10;   // 1~9로 시작하면 10진수
console.log("a = ", a);
a=010; // 0으로 시작하면 8진수
console.log("a = ", a);
a=0x10;// 0x로 시작하면 16진수
console.log("a = ", a);
a=0b10;// 0b로 시작하면 2진수
console.log("a = ", a);

a = 10;
b = 7;
c = a + (~b+1);  // 빼기 계산 : 2의 보수를 더하면 뺄셈이된다.
console.log(a, " - ", b, " = ", c);
console.log();

// , 연산자
// 한 줄에서 세 개의 연산이 수행됨
for (a = 1, b = 3, c = a * b; a < 10; a++) {
    console.log(b , " * ",  a , " = ",  c);
}
console.log();

// " \t \n"는 숫자형으로 변환 시 길이가 0인 문자열로 취급되어 숫자 0이 됩니다.
console.log("\t \n" * -2);
console.log();

