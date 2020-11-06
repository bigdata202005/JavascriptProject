// include file system module
var fs = require('fs');

// read file sample.json file
fs.readFile('chunja2.json',
	// callback function that is called when reading file is done
	function(err, data) {		
		// json data
		var jsonData = data;

		// parse json
		var jsonParsed = JSON.parse(jsonData);

		for(var i in jsonParsed){
			console.log(jsonParsed[i].idx + ". " + jsonParsed[i].h + "(" + jsonParsed[i].k + ")");
			console.log(jsonParsed[i].t);
			console.log('-----------------------------------------------------------------------------------');
		}
});
