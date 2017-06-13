/**
 * Created by user on 2017/6/13.
 */
var buffer = new Buffer("第一个buffer内容", "utf-8");

console.log(buffer.toString());

var buffer2 = new Buffer(256);
len=buffer.write("第一个buffer内容");

console.log("写入字节长度为:"+len);
