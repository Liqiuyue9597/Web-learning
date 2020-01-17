// 匹配模型
module.exports = option => {
  return async (req, res, next) => {
    // 引入inflection库对小写的字符串做处理变为大写单数字符串
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../models/${modelName}`)
    next()
  }
}