/**
 * Created by user on 2017/6/13.
 * 缓冲区拷贝
 */

var buffer = new Buffer('ABC');
var buffer1 = new Buffer(3);

buffer.copy(buffer1);

console.log("缓冲区的内容:" + buffer1.toString())
