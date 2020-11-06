// 배열!!!!
let ar1 = new Array(1,2,3,4);
console.log(ar1.length, " : ", ar1);
let ar2 = new Array(10);
console.log(ar2.length, " : ", ar2);
let ar3 = [];
console.log(ar3.length, " : ", ar3);
let ar4 = [0,0,0,0,0,0,0,0,0,0];
console.log(ar4.length, " : ", ar4);

for(let i in ar4){
    ar4[i] = parseInt(Math.random()*100);
    console.log(`ar4[${i}]=${ar4[i]}`);
}
console.log();
for(let i of ar4){
    console.log(`${i}`);
}
// 새로운 요소 추가, 자료형 상관 없다.
ar4[10] = '레몬';
ar4[11] = true;
console.log(ar4.length, " : ", ar4);
console.log(ar4[12]); // undefined

// 요소에 여러 가지 자료형이 섞여 있습니다.
let arr = [ '사과', { name: '이보라' }, true, function() { console.log('안녕하세요.'); } ];
// 인덱스가 1인 요소(객체)의 name 프로퍼티를 출력합니다.
console.log( arr[1].name ); // 이보라
// 인덱스가 3인 요소(함수)를 실행합니다.
arr[3](); // 안녕하세요.

// 배열의 마지막 요소는 객체와 마찬가지로 쉼표로 끝날 수 있습니다.
let fruits = [ "사과", "오렌지", "자두",];
console.log(fruits);

// 스텍처럼 사용이 가능하다.
// pop(꺼내기), push(넣기)
fruits.push('살구');
fruits.push('포도');
fruits.push('배');
console.log(fruits);

console.log(fruits.pop());
console.log(fruits.pop());
console.log(fruits.pop());
console.log(fruits);

// shift(앞에서 제거), unshift(앞에 추가)
console.log(fruits.shift());
console.log(fruits.shift());
console.log(fruits);

fruits.push('살구');
fruits.push('포도');
fruits.push('배');
console.log(fruits);

console.log(fruits.unshift("밤"));
console.log(fruits.unshift("대추"));
console.log(fruits);

let array = fruits; // 참조를 복사함(두 변수가 같은 객체를 참조)
array.push("딸기");
console.log(array.length, " : ", array);
console.log(fruits.length, " : ", fruits);
console.log();

fruits[99999] = 5; // 배열의 길이보다 훨씬 큰 숫자를 사용해 프로퍼티를 만듭니다.
fruits.age = 25;   // 임의의 이름을 사용해 프로퍼티를 만듭니다.
console.log(fruits.length, " : ", fruits);
console.log(fruits.age);

// 배열의 길이를 줄이고 늘릴수 있다.
console.log(fruits.length);
fruits.length = 5;
console.log(fruits.length);
console.log(fruits[6]);  // undefined
fruits.length = 15;
console.log(fruits.length);
console.log(fruits[6]);  // undefined

/*
배열과 관련된 다섯 가지 연산을 해봅시다.

요소 “Jazz”, "Blues"가 있는 styles 배열을 생성합니다.
"Rock-n-Roll"을 배열 끝에 추가합니다.
배열 정 중앙에 있는 요소를 "Classics"로 바꿉니다. 
가운데 요소를 찾는 코드는 요소가 홀수 개인 배열에서도 잘 작동해야 합니다.
배열의 첫 번째 요소를 꺼내서 출력합니다.
"Rap"과 "Reggae"를 배열의 앞에 추가합니다.
단계를 하나씩 거칠 때마다 배열 모습은 아래와 같이 변해야 합니다.

Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll

*/
let myArray = ["Jazz", "Blues"];
console.log(myArray);
myArray.push("Rock-n-Roll");
console.log(myArray);
let mid = parseInt(myArray.length/2);
myArray[mid] = "Classics";
console.log(myArray);
// myArray.push("Rock-n-Roll2");
// mid = parseInt(myArray.length/2);
// myArray[mid] = "Classics";
// console.log(myArray);
console.log(myArray.shift());
console.log(myArray);
myArray.unshift("Rap");
myArray.unshift("Reggae");
console.log(myArray);


/*
배열 컨텍스트에서 함수 호출하기
아래 코드를 실행하면 어떤 결과가 나올까요? 그리고 그 이유는 무엇일까요?
*/
let arr9 = ["a", "b"];
console.log(arr9);
// 함수 추가
arr9.push(function() {
    console.log( this );
})
console.log(arr9);
// 배열에 추가된 함수 실행!!
arr9[2]();  // 배열 자체
console.log(typeof(arr9)); // object : 배열도 객체다!!!!




