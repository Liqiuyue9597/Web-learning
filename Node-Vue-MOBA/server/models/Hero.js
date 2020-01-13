const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  avatar: String,
  title: String,
  categories: [{type:mongoose.SchemaTypes.ObjectId, ref:'Category'}],
  scores: {
    difficult: Number,
    skill: Number,
    attack: Number,
    survive: Number
  },
  skills: [{
    icon: String,
    name: String,
    description: String,
    tips: String
  }],
  items1: [{type: mongoose.SchemaTypes.ObjectId, ref:"Item"}],
  items2: [{type: mongoose.SchemaTypes.ObjectId, ref:"Item"}],
  usageTips: String,
  battleTips: String,
  teamTips: String,
  heroRelations: [{
    hero: {type:mongoose.SchemaTypes.ObjectId, ref:"Category"},
    description: String
  }]
})

module.exports = mongoose.model('Hero', schema)