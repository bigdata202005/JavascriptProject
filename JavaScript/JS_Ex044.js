// 배열 분해하기
// 이름과 성을 요소로 가진 배열
let arr = ["Bora", "Lee"]
// 구조 분해 할당을 이용해
// firstName엔 arr[0]을
// surname엔 arr[1]을 할당하였습니다.
let [firstName, surname] = arr;
console.log(arr);
console.log(firstName);
console.log(surname);

[firstName, surname] = "한 사람".split(' ');
console.log(firstName);
console.log(surname);

// 쉼표를 사용하여 요소 무시하기
[firstName, ,surname] = "한사람,두사람,세사람,네사람".split(',');
console.log(firstName);
console.log(surname);

// 할당 연산자 우측엔 모든 이터러블이 올 수 있습니다.
[a,b,c]  = [1,2,3];
console.log(a,b,c);
[a,b,c]  = new Set([1,2,3]);
console.log(a,b,c);

// 할당 연산자 좌측엔 뭐든지 올 수 있습니다.
let user = {};
[user.name, user.surname] = "Bora Lee".split(' ');
console.log(user);

/*
Object.entries()로 반복하기
Object.entries(obj)는 이전 챕터에서 학습한 바 있습니다.
이 메서드와 구조 분해를 조합하면 객체의 키와 값을 순회해 변수로 분해 할당할 수 있습니다.
*/
// 객체의 키와 값 순회하기
for (let [key, value] of Object.entries(user)) {
    console.log(`${key} : ${value}`); // name:John, age:30이 차례대로 출력
}

let guest = "Jane";
let admin = "Pete";
console.log(guest, admin);
// 변수 guest엔 Pete, 변수 admin엔 Jane이 저장되도록 값을 교환함
[guest, admin] = [admin, guest];
console.log(guest, admin);

// ...으로 나머지 모두 받기
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(name1);
console.log(name2);
console.log(rest);

// 기본값을 가질수 있다.
[name = "Guest", surname = "Anonymous"] = ["Julius"];
console.log(name);
console.log(surname);

/*
객체 분해하기 : 배열은 [], 객체는 {}
구조 분해 할당으로 객체도 분해할 수 있습니다.
기본 문법은 다음과 같습니다.
let {var1, var2} = {var1:…, var2:…}
*/

let options = {
    title: "Menu",
    width: 100,
    height: 200
};
let {title, width, height} = options;
console.log(options);
console.log(title);
console.log(width);
console.log(height);

// {...} 안의 순서가 바뀌어도 동일하게 동작함
let {height2, width2, title2} = { title2: "Menu", height2: 200, width2: 100 };
console.log(title2);
console.log(width2);
console.log(height2);
// { 객체 프로퍼티: 목표 변수 }
let {width: w, height: h, title: t} = options;
console.log(w);
console.log(h);
console.log(t);

// 기본값
options = {name3:"한사람"}
let {width3 = 100, height3 = 200, name3} = options;
console.log(width3)
console.log(height3);
console.log(name3)

// 없는값은 입력받아 할당한다.
// let {width4 = prompt("width?"), name3 = prompt("title?")} = options;
// console.log(width4)
// console.log(name3)

/*
구조 분해 할당
아래와 같은 객체가 있다고 가정해봅시다.
let user = {
  name: "John",
  years: 30
};
구조 분해 할당을 사용해 아래 미션을 수행해 보세요.
name 프로퍼티의 값을 변수 name에 할당하세요.
years 프로퍼티의 값을 변수 age에 할당하세요.
isAdmin 프로퍼티의 값을 변수 isAdmin에 할당하세요. isAdmin이라는 프로퍼티가 없으면 false를 할당하세요.
*/
let user3 = {
    name: "John",
    years: 30
};
// 이렇게 한다.
({name,years,isAdim=false} = user3);

console.log(name);
console.log(years);
console.log(isAdim);

/*
최대 급여 계산하기 : 급여 관련 정보가 저장된 객체 salaries가 있다고 가정해 봅시다.
가장 많은 급여를 받는 사람의 이름을 반환해주는 함수 topSalary(salaries)를 만들어봅시다. 조건은 아래와 같습니다.
salaries가 비어있으면 함수는 null을 반환해야 합니다.
최대 급여를 받는 사람이 여러 명이라면 그 중 아무나 한 명 반환하면 됩니다.
힌트: Object.entries와 구조 분해를 사용해 키-값 쌍을 순회하는 방식을 사용해보세요.
*/
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
function topSalary(salaries){
    let max = 0;
    let maxName = null;
    for (let [key, value] of Object.entries(salaries)) {
        if(max<value){
            max = value;
            maxName = key;
        }
    }
    return maxName;
}
console.log('~~~~~~~~~~~~~');
console.log(topSalary(salaries));
console.log(topSalary({}));
console.log('~~~~~~~~~~~~~');