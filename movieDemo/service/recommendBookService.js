var ZD = require('zoodubbo');
var returnData;
var zd = new ZD({
    // config the addresses of zookeeper
    conn: '192.168.0.88:2181',
    dubbo: '2.5.3',
});

// connect to zookeeper
zd.connect();

// get a invoker with a service path
//由于正在使用的框架的service有version信息，因此，在获取invoker的过程中需要填写version信息
var invoker = zd.getInvoker('com.metaship.edu.reader.service.IRecommendBookQueryService', {"version":"1.0"});
// excute a method with parameters
var method = 'findAllRecommendBooks';
var arg1={$class:'java.lang.String',$:'xiaoxue'}//参数1
var arg2={$class:'int',$:0}//参数2
var arg3={$class:'int',$:12}//参数2
// invoker.excute(method, [arg1,arg2,arg3], function (err, data) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data)
//     returnData=data;
// });


var test=function(callback)
{
	invoker.excute(method, [arg1,arg2,arg3], function (err, data) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data)
    returnData=data;
    console.log("returnData:"+JSON.stringify(returnData));
    callback(returnData);
});
}


// module. exports={
// var find= function(callback){
// //var next = callback;
// invoker.excute(method, [arg1,arg2,arg3], function (err, data) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data)
//     returnData=data;
//     console.log("returnData:"+JSON.stringify(returnData));
//     callback(returnData);
// });

// },
// save:function(){}
// ,
// test: function(next) {
// 	next('1234');
// }
// };

module.exports=test;

// module.exports = data;