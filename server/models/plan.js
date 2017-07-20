var mongoose = require('mongoose')
var Schema = mongoose.Schema

var planSchema = new Schema({
  name: String,
  minutes: { type: Number }
})

module.exports = mongoose.model('plans', planSchema)
