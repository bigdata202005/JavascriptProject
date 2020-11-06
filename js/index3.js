var server = require("./server6");
var router = require("./router");

server.start(router.route);