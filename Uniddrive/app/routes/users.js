var express = require('express');
var router = express.Router();
var pool = require('../models/connection');
var usersmodel = require('../models/usersmodel');
var testModel = require('../models/testmodel');

/* GET users listing.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

router.post('/loginuser', async function (req, res, next) {
  let user = req.body;
  console.log("Number = " + JSON.stringify(user));
  let result = await usersmodel.authUser(user);
  res.status(result.status).send(result.result);
});

router.get('/', async function (req, res, next) {
  console.log("Retrieving all users");
  let result = await usersmodel.getUsers();
  console.log(result);
  res.send(result);
});

router.post('/insertnewuser', async function(req, res, next) {
  let newUser = req.body;
  let result = await usersmodel.saveUser(newUser);
  res.status(result.status).send(result.result);
});

router.post('/deleteuser', async function(req, res, next) {
  let deleteUser = req.body;
  let result = await usersmodel.deleteUser(deleteUser);
  res.status(result.status).send(result.result);
});

module.exports = router;


