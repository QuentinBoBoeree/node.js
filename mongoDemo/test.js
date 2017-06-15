var express = require('express');

var app = express();



/*****官方例子*****/
//引入mongoose模块
var mongoose = require('mongoose');
//创建数据库连接
var db=mongoose.connect('mongodb://192.168.0.88:27017/test');

//检查是否连接成功
db.connection.on("error",function(error){
    console.log("数据库连接失败："+error);
});

db.connection.on("open",function(error){
    console.log("++++++数据库连成功++++++");
});


//插入数据测试
//创建了一个名为Cat的模型model并规定了属性name为String
var inventory = mongoose.model('inventory', { item: String,type:String,qty:String });
//一个kitty对象
var kitty = new inventory({ item: '1234',type:'1234',qty:'1234'  });
//存入一条记录
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('成功插入数据');
  }
});

/************/
module.exports = app;