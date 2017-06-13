/**
 * Created by user on 2017/6/13.
 */
var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function (req, res) {
    //此处需要声明编码格式，否则会出现乱码
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});

    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    res.write("网站名称：" + params.name, 'utf-8');
    res.write("\n");
    res.write("网站 URL：" + params.url, 'utf-8');
    res.end();

}).listen(3000);