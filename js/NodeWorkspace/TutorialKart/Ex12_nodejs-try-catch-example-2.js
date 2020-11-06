// Node.js Try Catch with Asynchronous Callback Function
var fs = require('fs');

try{
	fs.readFile('sample.txta',
		// callback function
		function(err, data) {		
			if (err){
				throw err;
			}
	});
} catch(err){
	console.log("In Catch Block");
	console.log(err);
}
console.log("Next Statements");

/*
결과
----
Next Statements
C:\JS\NodeWorkspace\TutorialKart\Ex12_nodejs-try-catch-example-2.js:8
			if (err) throw err;
			         ^

Error: ENOENT: no such file or directory, open 'C:\JS\NodeWorkspace\TutorialKart\sample.txta'
*/