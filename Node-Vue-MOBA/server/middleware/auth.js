// 登录校验中间件
module.exports = options => {
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  // 根据用户名找用户
  const AdminUser = require('../models/AdminUser')

  return async (req, res, next) => {
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token, 401, '缺少token')
    const {id} = jwt.verify(token, req.app.get('secret'))
    console.log(req)
    assert(id, 401, '用户id不存在')
    req.user = await AdminUser.findById(id)
    assert(req.user, 401, '用户不存在')
    await next()
  }
}