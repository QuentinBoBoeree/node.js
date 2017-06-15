# node.js
node.js basic learning


# nodejsInvokeDubbo工程：
问题代码如下：
```
var ZD = require('zoodubbo');
var zd = new ZD({
    // config the addresses of zookeeper
    conn: '192.168.0.88:2181',
    dubbo: '2.5.3',
});

// connect to zookeeper
zd.connect();

// get a invoker with a service path
var invoker = zd.getInvoker('com.metaship.edu.reader.service.IRecommendBookQueryService');
// excute a method with parameters
var method = 'findAllRecommendBooks';
var arg1={$class:'java.lang.String',$:'xiaoxue'}//参数1
var arg2={$class:'int',$:0}//参数2
var arg3={$class:'int',$:12}//参数2
invoker.excute(method, [arg1,arg2,arg3], function (err, data) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data)
});
```
使用node命令启动该js脚本，在commandline报错，截图如下：
![错误](https://github.com/QuentinBoBoeree/node.js/blob/master/dubbo.png)  

那么，采用程序员惯例的解决问题的方法，将错误粘入搜索框，一般情况下，stackoverflow上都会有相关的错误提示，但是这次并没有找到比较相似的错误。那么该怎么办呢。

这种情况，只能查看源码了。找到了node_modules下的zoodubbo package，关键源码index.js。
找到如下代码段：
![zoodubbo.img](https://github.com/QuentinBoBoeree/node.js/blob/master/zoodubbo.png)
关键代码片段：
```
/**
 * Get a invoker.
 *
 * @param {String} path
 * @param {Object} [opt]
 * {
 *  version: String
 *  timeout: Number
 * }
 * @returns {Invoker}
 * @public
 */
ZD.prototype.getInvoker = function (path, opt) {
    opt = opt || {};
    return new Invoker(this, {
        path: path,
        timeout: opt.timeout,
        version: (opt.version || '0.0.0').toUpperCase()
    });
};
```
从该函数可以看出来，调用过程需要传递两个参数，`path`与`opt`，那么上面的demo没有调用成功的问题似乎显露出来了。再者结合commandline中传递的错误信息来看，发现`service`没有`version`声明，恰巧函数调用与错误信息出现了同时呼应的状况(报错是理所应当了)。那么，对`service`添加上版本号的调用，再次尝试呢，ok,success!
结果：
```
D:\node.js\node.js\nodejsInvokeDubbo>node example.js
[ { groupCode: 'xiaoxue',
    groupName: '小学',
    bookId: '593aa894ee0730b57c45be57',
    joinTime: 2017-06-09T15:53:22.170Z,
    id: null },
  { groupCode: 'xiaoxue',
    groupName: '小学',
    bookId: '593aa894ee0730b57c45be58',
    joinTime: 2017-06-09T15:53:22.170Z,
    id: null },
  { groupCode: 'xiaoxue',
    groupName: '小学',
    bookId: '593aa894ee0730b57c45be59',
    joinTime: 2017-06-09T15:53:22.170Z,
    id: null },
  { groupCode: 'xiaoxue',
    groupName: '小学',
    bookId: '593aa894ee0730b57c45be5a',
    joinTime: 2017-06-09T15:53:22.170Z,
    id: null },
  { groupCode: 'xiaoxue',
    groupName: '小学',
    bookId: '593aa894ee0730b57c45be5b',
    joinTime: 2017-06-09T15:53:22.170Z,
    id: null } ]

```
