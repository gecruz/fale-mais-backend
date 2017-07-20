var express = require('express')
var router = express.Router()
var Plan = require('../models/plan')

router.get('/', function (req, res, next) {
  res.send('Hello, World!')
})

// *** api routes *** //
router.get('/plans', findAllPlans)

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

module.exports = router
