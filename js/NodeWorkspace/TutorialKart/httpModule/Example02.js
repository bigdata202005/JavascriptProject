// 함수를 인수로 전달하기 1
function say(word) {
	console.log(word);
}
function execute1(someFunction, value) {
	someFunction(value);
}

execute1(say, "Hello");

//함수를 인수로 전달하기 2
function execute2(someFunction, value) {
	someFunction(value);
}

execute2(function(word) {
	console.log(word)
}, "Hello");