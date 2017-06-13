/**
 * Created by user on 2017/6/13.
 * buffer转json
 */
var buffer = new Buffer("门前大桥下游过一群鸭");

var json = buffer.toJSON();

console.log(json);
