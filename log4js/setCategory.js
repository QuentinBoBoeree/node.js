var log4js=require('log4js');
//日志分类，标识日志所属的文件
var logger=log4js.getLogger('setCategory.js');
var logger_1=log4js.getLogger('dateFileLog');
logger.debug('Time',new Date());
logger_1.error('Time',new Date());