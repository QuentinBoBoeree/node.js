/**
 * Created by user on 2017/6/13.
 */
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('some_event',function () {
    console.log("执行事件触发响应");
});

setTimeout(function () {
    event.emit('some_event');
},3000);
