var server = require("./index3");
var router = require("./router3");

server.start(router.route);