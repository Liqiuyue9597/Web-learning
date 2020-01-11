module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const Category = require('../../models/Category')
  // 1.1向数据库新增数据
  router.post('/categories', async (req,res) => {
    const model = await Category.create(req.body)
    res.send(model)
  })
  // 1.2如果数据id存在则向数据库中修改此数据
  router.put('/categories/:id', async (req,res) => {
    const model = await Category.findByIdAndUpdate(req.params.id,req.body)
    res.send(model)
  })
  // 在数据库中查询数据
  router.get('/categories', async (req,res) => {
    const items = await Category.find().limit(10)
    res.send(items)
  })
  // 获取详情页
  router.get('/categories/:id', async (req,res) => {
    const model = await Category.findById(req.params.id)
    res.send(model)
  })

  app.use('/admin/api', router)
}