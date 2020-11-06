
function say(word) {
  console.log(word);
}

function execute(someFunction, value) {
  someFunction(value);
}
// 함수를 인수로 전달할 수 있다.
execute(say, "Hello");

function execute(someFunction, value) {
  someFunction(value);
}
// 익명함수 사용 가능
execute(function(word){ console.log(word) }, "Hello");