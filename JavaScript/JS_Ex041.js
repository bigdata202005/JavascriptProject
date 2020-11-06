// 배열과제
/*
border-left-width를 borderLeftWidth로 변경하기
"my-short-string"같이 여러 단어를 대시(-)로 구분한 문자열을 카멜 표기법을 사용한 문자열 
"myShortString"로 변경해주는 함수를 작성해보세요.
대시는 모두 지우고 각 단어의 첫 번째 글자는 대문자로 써주면 됩니다.
*/

function camelize(str){
    let arr = str.split("-");
    for(i in arr){
        if(i==0)
            arr[i] = arr[i];
        else
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
    }
    return arr.join("");
}

console.log(camelize("border-left-width"));
console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');
function camelize(str){
    return( 
        str
        .split("-")
        .map((item, index) => index==0 ? item : item.charAt(0).toUpperCase() + item.substring(1))
        .join("")
    );
}
console.log(camelize("border-left-width"));
console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');

/*
특정 범위에 속하는 요소 찾기
배열 arr의 요소 중 a이상 b 이하 범위에 속하는 요소만 골라 새로운 배열에 집어넣고, 
해당 요소를 출력해주는 함수 filterRange(arr, a, b)를 작성해봅시다.
새로 작성하는 함수는 기존 배열 arr을 변경하면 안 되고, 반환되는 함수는 새로운 배열이어야 합니다.
*/
function filterRange(ar, a, b){
    return ar.filter(function(item){
        return item>=a && item<=b;
    });
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log( filtered ); // 3,1 (조건에 맞는 요소)
console.log( arr ); // 5,3,8,1 (기존 배열은 변경되지 않았습니다.)

/*
배열 arr의 요소 중 a와 b 사이에 속하지 않는 요소는 삭제해주는 함수 filterRangeInPlace(arr, a, b)를 작성해보세요. 
배열의 모든 요소(i)는 다음 조건을 만족해야 합니다. 
a ≤ arr[i] ≤ b
*/
function filterRangeInPlace(arr, a, b){
    /*
    for(let i=0;i<arr.length;i++){
        if(arr[i]<a || arr[i]>b){
            arr.splice(i,1);
            i--;
        }
    }
    */
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i]<a || arr[i]>b){
            arr.splice(i,1);
        }
    }
}
filterRangeInPlace(arr, 1, 4);
console.log(arr);

/* 내림차순으로 정렬하기
let arr = [5, 2, 1, -10, 8];
// 요소를 내림차순으로 정렬해주는 코드를 여기에 작성해보세요.
alert( arr ); // 8, 5, 2, 1, -10
*/
arr = [5, 2, 1, -10, 8];
console.log(arr);
arr.sort((a,b) => (b-a));
console.log(arr);
/* 배열 복사본을 정렬하기
문자열이 담긴 배열 arr을 복사한 다음 해당 배열을 정렬해봅시다. 단 이때 arr은 변경되면 안 됩니다.
함수 copySorted(arr)는 복사 후 정렬된 배열을 반환해야 합니다.*/
function copySorted(arr){
    return arr.slice().sort();
}
arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log(arr);
console.log(sorted);
/* 확장 가능한 계산기
기능을 "확장"할 수 있는 계산기 객체를 만들어 주는 생성자 함수 Calculator를 작성해봅시다.
Calculator는 두 단계를 거쳐 만들 수 있습니다.
첫 번째 단계는 "1 + 2"와 같은 문자열을 받아서 “숫자 연산자 숫자” 형태(공백으로 구분)로 
바꿔주는 메서드 calculate(str)를 구현하는 것입니다. 
이 함수는 +와 -를 처리할 수 있어야 하고, 연산 결과를 반환해야 합니다.
예시:
let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10
*/
function Calculator(){ // 생성자 함수
    this.methods = { // 멤버로 methods라는 객체 생성
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    // 계산해주는 멥버함수 생성
    this.calculate = function(str) {
        let split = str.split(' '), a = +split[0], op = split[1], b = +split[2] // 3개로 나누어 연산자와 숫자로 변경
        if (!this.methods[op] || isNaN(a) || isNaN(b)) return NaN; // 없는 연산자이거나 숫자가 아니면 NaN리턴
        return this.methods[op](a, b); // 연산자를 키로 사용하여 알맞은 함수를 실행하여 결과를 리턴
    }
    this.addMethod = function(op, func) { // 연산자를 키로 method객체에 멤버 추가
        this.methods[op] = func;
    };
}
let calc = new Calculator;
console.log( calc.calculate("3 + 7") ); // 10
/*
두 번째 단계는 계산기가 새로운 연산을 학습할 수 있도록 해주는 메서드 
addMethod(name, func)를 추가해 주는 것입니다. 
연산자 이름을 나타내는 name과 인수가 두개인 익명 함수 func(a,b)를 받는 새 메서드를 구현해야 하죠.
구현된 메서드를 이용해 곱셈 *과 나눗셈 /, 거듭제곱 **연산자를 추가해주는 예시는 아래와 같습니다.
*/
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
powerCalc.addMethod("^", (a, b) => a ** b);
powerCalc.addMethod("%", (a, b) => a % b);
let result = powerCalc.calculate("2 ** 3");
console.log(result);
console.log(powerCalc.calculate("4 ^ 2"));
console.log(powerCalc.calculate("7 % 4"));

/* 이름 매핑하기
name을 나타내는 프로퍼티를 가진 객체 user가 담긴 배열이 있습니다. 
name의 값만 담은 새로운 배열을 만들어주는 코드를 작성해보세요.
*/
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];
// map함수 : 함수를 인수로 받아 배열의 내용을 처리하고 새로운 배열을 리턴한다.
let names = users.map((item)=>item.name);
console.log(names);
let ages = users.map(function(item,index,arr){
    return item.name + "("+item.age +"세)";
});
console.log(ages);

/*객체 매핑하기
세 개의 프로퍼티 name과 surname, id를 가진 객체 user가 담긴 배열이 있습니다.
name과 surname을 조합해 fullName을 만들고, 이를 이용해 
두 개의 프로퍼티 id와 fullName을 가진 객체를 담은 새로운 배열을 반환해주는 코드를 작성해보세요.
*/
john = { name: "John", surname: "Smith", id: 1 };
pete = { name: "Pete", surname: "Hunt", id: 2 };
mary = { name: "Mary", surname: "Key", id: 3 };
users = [ john, pete, mary ];
let usersMapped = users.map((item)=>({fullName:(item.name + ' ' + item.surname), id:item.id}));
console.log(usersMapped);
/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith

/* 나이를 기준으로 객체 정렬하기
프로퍼티 age가 있는 객체가 담긴 배열이 있습니다. 이 배열을 age를 기준으로 정렬해주는 함수 sortByAge(users)를 만들어보세요.
*/
john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 28 };
arr = [ pete, john, mary ];
function sortByAge(arr){
    arr.sort((a,b)=>(a.age-b.age));
}
sortByAge(arr);
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete

/* 배열 요소 무작위로 섞기
배열의 요소를 무작위로 섞어주는 함수 shuffle(array)을 작성해 보세요.
shuffle을 여러 번 실행하면 요소의 정렬 순서가 달라야 합니다. 예시를 살펴봅시다.
문제를 풀 때 주의할 점은 모든 순열이 동일한 확률로 일어나야 한다는 점입니다. 
예를 들어 [1,2,3] 은 [1,2,3]이나 [1,3,2], [3,1,2]로 재정렬 될 수 있는데, 
이 배열들이 만들어지는 빈도는 같아야 합니다.
*/
for(let i=0;i<10;i++){
    console.log(Math.random() - 0.5);
}

function shuffle(arr){
    arr.sort(() => Math.random() - 0.5);
}
arr = [1, 2, 3];
console.log(arr);
shuffle(arr); 
console.log(arr);
shuffle(arr); 
console.log(arr);
shuffle(arr); 
console.log(arr);

// 평균나이 구하기
arr = [ pete, john, mary ];
// reduce : 이전 실행결과를 기억하여 계산
function getAverageAge(arr){
   return arr.reduce((prev, arr) => prev + arr.age, 0) / arr.length;
}
console.log(getAverageAge(arr));

// 중복요소 제거하기
function unique(arr) {
    let result = []; // 새로운 배열 생성
    for (let str of arr) { // 배열 반복 : of면 값이 전달
      if (!result.includes(str)) { // 새로운 배열에 포함하고 있지 않으면
        result.push(str); // 배열에 추가!!
      }
    }
    return result; // 새로운 배열 리턴
  }
  let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O" ];
  console.log( unique(strings) );
  console.log( strings );


