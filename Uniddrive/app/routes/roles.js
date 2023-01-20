var express = require('express');
var router = express.Router();
var pool = require('../models/connection');
var rolesmodel = require('../models/rolesmodel');


router.get('/', async function (req, res, next) {
  console.log("Retrieving all roles");
  let result = await rolesmodel.getRoles();
  console.log(result);
  res.send(result);
});


module.exports = router;


