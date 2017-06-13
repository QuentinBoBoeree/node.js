/**
 * Created by user on 2017/6/13.
 * 缓冲区合并
 */

var buffer1 = new Buffer("这是一只鸡");

var buffer2 = new Buffer("这是一只鸭");

var buffer3 = Buffer.concat([buffer1, buffer2]);

console.log("buffer3 内容为:" + buffer3.toString());
