var log4js = require('log4js');
var logger = log4js.getLogger();
logger.debug("Time:", new Date());
logger.info('Time:',new Date());
logger.error("Time",new Date());
logger.warn("Time",new Date());