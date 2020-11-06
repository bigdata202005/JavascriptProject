/**
 * http://usejsdoc.org/
 */
var http = require('http');
var fs = require("fs");

http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type' : 'text/html'
	});
	res.write("Hellow Nod1e.js<br>");
	res.write("Hellow Nod1e.js<br>");
	res.write("Hellow Nod1e.js<br>");
	res.write("Hellow Nod1e.js<br>");
	res.end();
}).listen(4000, function() {
	console.log("server is listening on 4000");
});
