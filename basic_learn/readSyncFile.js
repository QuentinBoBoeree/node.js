/**
 * Created by user on 2017/6/13.
 */
var fs = require("fs");

var data = fs.readFileSync('res\\input.txt');

console.log(data.toString());

console.log("执行结束");
