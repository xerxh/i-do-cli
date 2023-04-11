#!/usr/bin/env node
console.log('开启核心库应用')
const importLocal = require('import-local')

if (importLocal(__filename)) { // 加载本地的脚手架日志
  require('npmlog').info('cli', '正在使用imooc-cli本地版本')
} else {
  require('../lib')(process.argv.slice(2))
}