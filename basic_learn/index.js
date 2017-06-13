/**
 * Created by user on 2017/6/13.
 */
var server = require("./server");
var router = require("./router");

server.start(router.route);
