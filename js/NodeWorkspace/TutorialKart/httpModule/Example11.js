var server = require("./index7");
var router = require("./router7");
var requestHandlers = require("./requestHandlers7");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);