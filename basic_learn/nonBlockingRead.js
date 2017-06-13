/**
 * Created by user on 2017/6/13.
 */
var fs = require("fs");
fs.readFile('res\\input.txt', function (error, data) {
        if (error) return console.error(error);
        console.log(data.toString());
    }
);
console.log("程序执行结束");