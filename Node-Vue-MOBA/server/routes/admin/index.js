module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')

  // 1.根据用户名找用户
  const AdminUser = require('../../models/AdminUser')

  // CRUD（增删改查）的接口
  // 1.1向数据库新增数据
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  // 1.2如果数据id存在则向数据库中修改此数据
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  // 1.3删除数据库中的数据
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })
  // 在数据库中查询数据(资源列表)
  router.get('/', async (req, res, next) => {
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token, 402, '请登录')
    const { id } = jwt.verify(token, app.get('secret'))
    assert(id, 401, '请登录')
    req.user = await AdminUser.findById(id)
    assert(req.user, 401, '请登录')
    next()
  }, async (req, res) => {
    const queryOption = {}
    if (req.Model.modelName === 'Category') {
      queryOption.populate = 'parent'
    }
    // populate会将ref连接的collection的数据完整打印
    const items = await req.Model.find().setOptions(queryOption).limit(10)
    res.send(items)
  })
  // 获取详情页
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })

  // 将CRUD封装为通用的CRUD接口
  app.use('/admin/api/rest/:resource', async (req, res, next) => {
    // 引入inflection库对小写的字符串做处理变为大写单数字符串
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../../models/${modelName}`)
    next()
  }, router)

  // 上传图片的接口
  const multer = require('multer')
  const upload = multer({
    dest: __dirname + '/../../uploads'
  })
  app.post('/admin/api/upload', upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3200/uploads/${file.filename}`
    res.send(file)
  })

  // 用户登录的接口
  app.post('/admin/api/login', async (req, res) => {
    const {username,password} = req.body
   
    // select('+...')用+去覆盖select:false的命令，能够找到password
    const user = await AdminUser.findOne({name:username}).select('+password')
    // 用新的http-assert包做错误判断
    assert(user, 422, '用户不存在')
    // if (!user) {
    //   return res.status(421).send({
    //     message: '用户不存在'
    //   })
    // }
    // 这个错误应该全局捕获，所以去http里用interceptor全局捕获

    // 2.校验密码
    // 将hash的密码和用户输入的密码比较
    const isValid = require('bcryptjs').compareSync(password, user.password)
    if (!isValid) {
      return res.status(422).send({
        message: '密码错误'
      })
    }

    // 3.返回token
    
    const token = jwt.sign({id: user._id}, app.get('secret'))
    res.send({token})
  })


  // 错误处理函数
  app.use(async(err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message:err.message
    })
  })
}