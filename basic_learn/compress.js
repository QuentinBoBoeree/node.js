/**
 * Created by user on 2017/6/13.
 */
var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('res\\input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('res\\input.txt.gz'));

console.log("文件压缩完成。");
