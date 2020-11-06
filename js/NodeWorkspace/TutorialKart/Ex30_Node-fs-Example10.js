var fs = require('fs');

// 경로 변경
process.chdir('c:\\windows');
console.log(process.cwd());
var fs = require('fs');
var results = [];
fs.readdir('.', function(err, list) {
	if (err)
		throw err;
	console.log('dir length : ' + list.length);
	list.forEach(function(file) {
		fs.stat(file, function(err, stat) {
			if (err)
				throw err;
			console.log('file : ' + file);
			console.log('isFile : ' + stat.isFile() + ' , isDir : '
					+ stat.isDirectory());
		});
	});
});

var exec = require('child_process').exec;
exec('dir', function(error, stdout, stderr) {
	console.log('stdout : ' + stdout);
	console.log('stderr : ' + stderr);
	console.log('----------------------------------------------');
	if (error !== null) {
		console.log('exec error:' + error);
	}
});

