/**
 * Created by user on 2017/6/13.
 */
var fs = require('fs');

fs.stat('getFileStatus.js', function (err, stats) {
    console.log(stats.isFile()); 		//true
})