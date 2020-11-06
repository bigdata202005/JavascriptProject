let map = new Map();
console.log(map.size); // 요소의 개수
map.set('name','한사람'); // 요소 추가
map.set('age',33);
map.set('age',37); // 수정
map.set(1,'뭐지?'); // 키가 숫자로도 가능
console.log(map);
console.log(map.size);
console.log(map.get(1)); // 요소 얻기
console.log(map.get('name'));
map.delete('name'); // 요소 제거
console.log(map);
// 메서드 체이닝 가능
map.set('1', 'str1')
   .set(1, 'num1')
   .set(true, 'bool1');
console.log(map.size, " : ", map);
// set과 []의 차이점 : set을 써라!!!
let john = { name: "John" };
map.set(john,123);
console.log(map.get(john)); // 123
map[john] = 321; // 올바른 방법이 아니다. ==> 키가  john이 아니라 문자열로 형변환되어 [object Object]로 인식
console.log(map[john]); // 321 
console.log(map['[object Object]']); // 321
map[{}] = 333;
console.log(map.get(john)); // 123 : set으로 넣으면 변경되지 않지만
console.log(map[john]); // 333 : []로 넣으면 변경되어버린다.
console.log(map['[object Object]']); // 333

// 맵요소 반복
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
]);
// 키(vegetable)를 대상으로 순회합니다.
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
}
// 값(amount)을 대상으로 순회합니다.
for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
}
// [키, 값] 쌍을 대상으로 순회합니다.
for (let entry of recipeMap) { // recipeMap.entries()와 동일합니다.
    console.log(entry); // cucumber,500 ...
}

// forEach를 지원한다.
// 각 (키, 값) 쌍을 대상으로 함수를 실행
recipeMap.forEach( (value, key, map) => {
    console.log(`${key}: ${value} : ${map}`); 
});

// Object.entries: 객체를 맵으로 바꾸기
// 각 요소가 키-값 쌍인 배열이나 이터러블 객체를 초기화 용도로 맵에 전달해 새로운 맵을 만들 수 있습니다.
// 각 요소가 [키, 값] 쌍인 배열을 넣어 맵을 생성
map = new Map([
    ['1',  'str1'],
    [1,    'num1'],
    [true, 'bool1']
]); 
console.log(map);
console.log(map.get(1));
// 객체를 전달해서 맵을 작성
// Object.entries()를 사용함
let obj = {
    name: "John",
    age: 30
};
map = new Map(Object.entries(obj));
console.log(map);
console.log(map.get('age'));

// 맵을 객체로 만들기
// Object.fromEntries: 맵을 객체로 바꾸기
obj = Object.fromEntries(map);
console.log(obj,":", obj.name, obj.age);







