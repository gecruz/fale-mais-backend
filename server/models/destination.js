var mongoose = require('mongoose')
var Schema = mongoose.Schema

var destinationSchema = new Schema({
  origin: String
})

module.exports = mongoose.model('destinations', destinationSchema)
