var mongoose = require('mongoose')
var Schema = mongoose.Schema

var destinationSchema = new Schema({
  origin: String,
  destinations: []
})

module.exports = mongoose.model('destinations', destinationSchema)
