const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  items: [{
    image: String,
    link: String
  }]
})

module.exports = mongoose.model('Ad', schema)