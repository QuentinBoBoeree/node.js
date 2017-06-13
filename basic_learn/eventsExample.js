/**
 * Created by user on 2017/6/13.
 */
// 引入 events 模块
var events = require("events");
// 创建 eventEmitter 对象
var eventsEmitter = new events.EventEmitter();
// 绑定事件及事件的处理程序
eventsEmitter.on('eventName', eventHandler);
eventsEmitter.emit('eventName');

