// Set : 중복을 허용하지 않는다.
let set = new Set();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
// 어떤 고객(john, mary)은 여러 번 방문할 수 있습니다.
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
// 셋에는 유일무이한 값만 저장됩니다.
console.log( set.size ); // 3
for (let user of set) {
    console.log(user.name); // // John, Pete, Mary 순으로 출력됩니다.
}

// forEach를 사용해도 동일하게 동작합니다.
set.forEach((value, valueAgain, set) => {
    console.log(value, ":", valueAgain, " : ", set);
});

/*
배열에서 중복 요소 제거하기
arr은 배열이라 가정합시다.
arr에서 중복 값을 제거해 주는 함수 unique(arr)를 만들어보세요.
참고 1: 여기선 배열 안의 요소가 모두 문자열이지만 제출 답안을 작성할 땐, 배열 내 어떤 자료형이 들어와도 동작할 수 있어야 합니다.
참고 2: Set을 사용해보세요.
*/
function unique(arr) {
    return Array.from(new Set(arr));
}
let values = ["Hare", "Krishna", "Hare", "Krishna","Krishna", "Krishna", "Hare", "Hare", ":-O"];
console.log(unique(values));

let map = new Map();
map.set("name", "John");
let keys = map.keys();
// Error: keys.push is not a function
// keys.push("more"); //  keys는 배열이 아니다.
console.log(typeof keys, keys); // object [Map Iterator] { 'name' }
keys = Array.from(map.keys()); // 배열로 만든다.
console.log(typeof keys, keys); 
keys.push("more"); // 추가 가능
console.log(typeof keys, keys); 