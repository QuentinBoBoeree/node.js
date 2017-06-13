var http = require('http');
var world = "hello world";
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(8887);
console.log('Server running at http://127.0.0.1:8887/');

/**
 * 其他模块调用的方法
 */
/*
exports.world = function () {
    console.log('Hello World');
}
*/

function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
};
module.exports = Hello;