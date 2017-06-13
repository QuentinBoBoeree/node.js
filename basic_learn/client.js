/**
 * Created by user on 2017/6/13.
 */
var http = require('http');

// 用于请求的选项
var options = {
    host: '192.168.0.88',
    port: '8088',
    path: '/v1/recommendbooks/query-jointime',
    method:'get',
    param:{'groupCode':'xiaoxue'}
};

// 处理响应的回调函数
var callback = function(response){
    // 不断更新数据
    var body = '';
    response.on('data', function(data) {
        body += data;
    });

    response.on('end', function() {
        // 数据接收完成
        console.log(body);
    });
}
// 向服务端发送请求
var req = http.request(options, callback);
req.end();