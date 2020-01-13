module.exports = app => {
  const express = require('express')
  const router = express.Router()
  // 1.1向数据库新增数据
  router.post('/', async (req,res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  // 1.2如果数据id存在则向数据库中修改此数据
  router.put('/:id', async (req,res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id,req.body)
    res.send(model)
  })
  // 1.3删除数据库中的数据
  router.delete('/:id', async (req,res) => {
    await req.Model.findByIdAndDelete(req.params.id,req.body)
    res.send({
      success: true
    })
  })
  // 在数据库中查询数据
  router.get('/', async (req,res) => {
    const queryOption = {}
    if(req.Model.modelName === 'Category') {
      queryOption.populate = 'parent'
    }
    // populate会将ref连接的collection的数据完整打印
    const items = await req.Model.find().setOptions(queryOption).limit(10)
    res.send(items)
  })
  // 获取详情页
  router.get('/:id', async (req,res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })
// 通用的CRUD接口
  app.use('/admin/api/rest/:resource', async (req,res,next) => {
    // 引入inflection库对小写的字符串做处理变为大写单数字符串
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../../models/${modelName}`)
    next()
  } ,router)

  const multer = require('multer')
  const upload = multer({dest: __dirname + '/../../uploads'})
  app.post('/admin/api/upload', upload.single('file'),async (req,res) => {
    const file = req.file
    file.url = `http://localhost:3130/uploads/${file.filename}`
    res.send(file)
  })
}