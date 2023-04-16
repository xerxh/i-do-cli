'use strict'

module.exports = core
// require 加载  .js/json/.node
// .js -> module.exports/export
// .json -> JSON.parse
// .node -> process.open 打开一个 C++插件
// 其他所有文件 全部默认当.js进行解析
const semver = require('semver')
const colors = require('colors')
const log = require('@my-cli-dev/log')
const constant = require('./const')
const pkg = require('../package.json')

function core() {
  try {
    checkPkgVersion()
    checkNodeVersion()
  } catch (error) {
    log.error(error.message)
  }
}

function checkPkgVersion() {
  log.success('test', 'success ...')
  log.notice('cli', pkg.version)
}

function checkNodeVersion() {
  // 获取当前node版本号和最低版本号
  const currentVersion = process.version
  const lowestVersion = constant.LOWEST_NODE_VERSION
  // 比对最低版本号
  // 当前版本号不大于最低版本号
  if (!semver.gte(currentVersion, lowestVersion)) {
    throw Error(
      colors.red(
        `i-do-cli-dev脚手架 需要安装 ${lowestVersion} 以上版本的Node.js`
      )
    )
  }
}
