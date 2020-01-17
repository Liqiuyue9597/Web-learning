module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')

  // 1.根据用户名找用户
  const AdminUser = require('../../models/AdminUser')

  const authMiddleware = require('../../middleware/auth')
  const resourceMiddleware = require('../../middleware/resource')

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

  // 1.4在数据库中查询数据(资源列表)
  router.get('/', authMiddleware(), async (req, res) => {
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
  app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware(), router)

  // 上传图片的接口
  const multer = require('multer')
  const upload = multer({
    dest: __dirname + '/../../uploads'
  })
  // upload.single('file')中file是表单formData的entries，这里默认是file，可以在formData.entries中修改
  // FormData.entries() 方法返回一个 iterator对象 ，此对象可以遍历访问FormData中的键值对
  app.post('/admin/api/upload', authMiddleware(), upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3130/uploads/${file.filename}`
    res.send(file)
  })

  // 用户登录的接口
  app.post('/admin/api/login', async (req, res) => {
    const {username,password} = req.body
    // select('+...')用+去覆盖select:false的命令，能够找到password
    const user = await AdminUser.findOne({name:username}).select('+password')
    // 用新的http-assert包做错误判断
    assert(user, 421, '用户不存在')
    // if (!user) {
    //   return res.status(421).send({
    //     message: '用户不存在'
    //   })
    // }
    // 这个错误应该全局捕获，所以去http里用interceptor全局捕获

    // 2.校验密码
    // 将hash的密码和用户输入的密码比较
    const isValid = require('bcryptjs').compareSync(password, user.password)
    assert(isValid, 422, '密码错误')
    // if (!isValid) {
    //   return res.status(422).send({
    //     message: '密码错误'
    //   })
    // }

    // 3.返回token(jwt的签名)
    
    const token = jwt.sign({id: user._id}, app.get('secret'))
    res.send({token})
  })


  // 错误处理函数
  app.use(async(err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}