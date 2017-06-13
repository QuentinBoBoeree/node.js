/**
 * Created by user on 2017/6/13.
 */
var events = require('events');
var eventEmitter = new events.EventEmitter();

//连接处理程序
var connectHandler = function connected() {
    console.log("连接成功");
    //触发数据接收事件
    eventEmitter.emit('data_received');
}

//绑定连接处理程序
eventEmitter.on('connect', connectHandler);

//绑定接收数据处理程序
eventEmitter.on('data_received', function () {
    console.log("接收数据成功");
});
//触发连接事件
eventEmitter.emit('connect');
