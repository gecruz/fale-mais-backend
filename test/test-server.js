process.env.NODE_ENV = 'test'

var chai = require('chai')
var chaiHttp = require('chai-http')
var mongoose = require('mongoose')

var server = require('../server/app')
var Plan = require('../server/models/plan')
var Destination = require('../server/models/destination')

var should = chai.should()
chai.use(chaiHttp)

describe('Plans', function () {
  Plan.collection.drop()

  beforeEach(function (done) {
    var newPlan = new Plan({
      name: 'FaleMais 30',
      minutes: 30
    })
    newPlan.save(function (err) {
      done()
    })
  })
  afterEach(function (done) {
    Plan.collection.drop()
    done()
  })

  it('should list ALL plans on /plans GET', function (done) {
    chai.request(server)
      .get('/plans')
      .end(function (err, res) {
        res.should.have.status(200)
        res.should.be.json
        res.body.should.be.a('array')
        res.body[0].should.have.property('_id')
        res.body[0].should.have.property('name')
        res.body[0].should.have.property('minutes')
        res.body[0].name.should.equal('FaleMais 30')
        res.body[0].minutes.should.equal(30)
        done()
      })
  })
})

describe('Destinations', function () {
  Destination.collection.drop()

  beforeEach(function (done) {
    var newDestination = new Destination({
      origin: '016'
    })
    newDestination.save(function (err) {
      done()
    })
  })
  afterEach(function (done) {
    Destination.collection.drop()
    done()
  })

  it('should list ALL destinations on /destinations GET', function (done) {
    chai.request(server)
      .get('/destinations')
      .end(function (err, res) {
        res.should.have.status(200)
        res.should.be.json
        res.body.should.be.a('array')
        res.body[0].should.have.property('_id')
        res.body[0].should.have.property('origin')
        res.body[0].origin.should.equal('016')
        done()
      })
  })
})
