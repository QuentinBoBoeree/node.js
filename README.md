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
