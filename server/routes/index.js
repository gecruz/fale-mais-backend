var express = require('express')
var router = express.Router()
var Plan = require('../models/plan')
var Destination = require('../models/destination')

router.get('/', function (req, res, next) {
  res.send('Bem vindo ao Fale Mais!')
})

// *** api routes *** //
router.get('/plans', findAllPlans)
router.get('/destinations', findAllDestinations)

// *** get ALL plans *** //
function findAllPlans (req, res) {
  Plan.find(function (err, plans) {
    if (err) {
      res.json({'ERROR': err})
    } else {
      res.json(plans)
    }
  })
}

// *** get ALL destinations *** //
function findAllDestinations (req, res) {
  Destination.find(function (err, plans) {
    if (err) {
      res.json({'ERROR': err})
    } else {
      res.json(plans)
    }
  })
}

module.exports = router
