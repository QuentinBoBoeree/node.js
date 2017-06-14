var Service=require('node-zookeeper-dubbo');

var opt={
  env:'test',
  conn:'192.168.0.88:2181',
  path:'com.metaship.edu.reader.service.IRecommendBookQueryService'
}

var method="findAllRecommendBooks";
var arg1={$class:'java.lang.String',$:'xiaoxue'}//参数1
var arguments=[arg1];

var service = new Service(opt);
service.excute(method,arguments,function(err,data){
  if(err){
    console.log(err);
    return;
  }
  console.log(data)
})