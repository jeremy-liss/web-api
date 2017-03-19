var express = require('express')
var router = express.Router()

var db = require('../db')

router.get ('/users/:id', function (req, res) {
  db.getUser(req.app.get('knex'))
    .then(function (users) {
      res.send({ users: user })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
