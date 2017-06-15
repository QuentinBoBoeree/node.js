var express=require('express');
var app=express();
var path=require('path');
var index=require('./routes/index')

//设置模板引擎
app.set('view engine','jade');
app.set('views','./views/pages');

//设置静态资源
app.use(express.static(path.join(__dirname,'./public')));

app.use('/',index);

app.listen(3000,function()
{
	console.log("请访问http://localhost:3000");
}
	);
