// include file system module
var fs = require('fs');

// read file sample.json file
fs.readFile('sample.json',
	// callback function that is called when reading file is done
	function(err, data) {		
		// json data
		var jsonData = data;

		// parse json
		var jsonParsed = JSON.parse(jsonData);

		// access elements
		console.log(jsonParsed.persons[0].name + "'s office phone number is " + jsonParsed.persons[0].phone.office);
		console.log(jsonParsed.persons[1].name + " is from " + jsonParsed.persons[0].city);
		
		for(var i in jsonParsed.persons){
			console.log("이름 : ", jsonParsed.persons[i].name);
			console.log("주소 : ", jsonParsed.persons[i].city);
			console.log("집전화 : ", jsonParsed.persons[i].phone.office);
			console.log("회사전화 : ", jsonParsed.persons[i].phone.home);
			console.log('------------------------');
		}
});
