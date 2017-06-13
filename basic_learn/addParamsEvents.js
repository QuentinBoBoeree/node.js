/**
 * Created by user on 2017/6/13.
 */

var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('param_event', function (arg1, arg2,arg3) {
    console.log('listener1', arg1, arg2,arg3);
});

emitter.on('param_event', function (arg1, arg2) {
    console.log('listener2', arg1, arg2);
})

emitter.emit('param_event','参数1','参数2',"参数3");

