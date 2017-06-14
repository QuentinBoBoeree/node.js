var request = require('request');
var Service=require('node-zookeeper-dubbo');
 var opt={
    env:'1.0.1', // dubbo服务端版本号
    group:'test', // dubbo group（Product，Dev，Test）
    conn:'192.168.0.88:2181', // zookeeper url
    path:'com.metaship.edu.reader.service.IRecommendBookQueryService' // service接口地址
    //version:'1.0.1' // dubbo的版本号，可以省略
  };

  var method="findAllRecommendBooks";//方法名
  var arg1={$class:'java.lang.String',$:'xiaoxue'}//参数1
  var arg2={$class:'int',$:12208}//参数2
  var args=[arg1];//参数数组

  var service = new Service(opt);//连接zk
  service.excute(method,args,function(err,data){
    if(err){
      console.log(err);
      return;
    }
    console.log(data)
  });


