// json data
var jsonData = '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}';
console.log('======================================');
console.log(jsonData);
// parse json
var jsonParsed = JSON.parse(jsonData);

console.log('======================================');
console.log(jsonParsed);
// access elements
console.log('======================================');
console.log(jsonParsed.persons[0].name);
console.log('======================================');
for(var i in jsonParsed.persons ){
	console.log("이름 : ", jsonParsed.persons[i].name);
	console.log("도시 : ", jsonParsed.persons[i].city);
	console.log('------------------------');
}