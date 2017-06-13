/**
 * Created by user on 2017/6/13.
 * 缓冲区裁剪
 */

var buffer = new Buffer('ABC');

var buffer1 = buffer.slice(0, 2);

console.log("buffer1内容为:" + buffer1.toString());
