'use strict';

const log = require('npmlog')
// 通过log.level可以决定有些不打印
log.level = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'info' //判断是否启用debug模式
// heading 打印自定义前缀
log.heading = 'hst'
log.headingStyle = {fg: 'red', bg: 'black'}
//  定制打印颜色
log.addLevel('success', 2000, {fg: 'green', blod: true}) // 添加自定义命令
function testLog () {
  log.info('cli', 'test_log')
  return 'Hello from log';
}


module.exports = log;
