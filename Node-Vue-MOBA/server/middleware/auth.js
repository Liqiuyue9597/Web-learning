// 登录校验中间件
module.exports = options => {
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  // 根据用户名找用户
  const AdminUser = require('../models/AdminUser')

  return async (req, res, next) => {
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token, 401, '请登录')
    const {
      id
    } = jwt.verify(token, req.app.get('secret'))
    assert(id, 401, '请登录')
    req.user = await AdminUser.findById(id)
    assert(req.user, 401, '请登录')
    next()
  }
}