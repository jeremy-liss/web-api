var express = require('express')
var router = express.Router()

var db = require('../db')

router.get ('/', function (req, res) {
  db.getUsers(req.app.get('knex'))
    .then(function (users) {
      res.send({ users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get ('/:id', function (req, res) {

  db.getUser(req.params.id, req.app.get('knex'))
  .then(function (result) {
    res.send(result[0])
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

//adding new user:
router.post('/', function (req, res) {

// console.log(req.body.name, req.body.email);
  db.addUser(req.body.name, req.body.email, req.app.get('knex'))
  .then(function (result) {
    res.send(result)

    })

    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.put('/:id', function (req, res) {
  db.updateUser(req.params.id, req.body.name, req.body.email, req.app.get('knex'))
  .then(function (result) {
    res.json(result)
    })

    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})



module.exports = router
