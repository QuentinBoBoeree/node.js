var log4js=require('log4js');
log4js.configure({
  appenders: [{
     type: 'dateFile',
     filename: 'log/access',
     pattern: "_yyyy-MM-dd.log", 
      alwaysIncludePattern: true,
     maxLogSize: 20480,
     backups: 3,//默认为5，指定了pattern之后backups参数无效了，除非pattern是小于backups的数字，原理是不指定pattern时备份的文件是在文件名后面加'.n'的数字，n从1开始自增
     category: 'customAppend.js'
  }]
})
var logger=log4js.getLogger('customAppend.js');
logger.debug('Time',new Date);
