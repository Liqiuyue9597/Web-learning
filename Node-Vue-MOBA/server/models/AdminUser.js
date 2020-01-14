const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  password: {
    type:String, 
    select: false,
    // 将用户密码hash成乱码存入，但是只能hash一次，所以设置select为false不选中
    set(val) {
      return require('bcryptjs').hashSync(val, 10)
    }
  }
})

module.exports = mongoose.model('AdminUser', schema)