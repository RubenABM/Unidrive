var express = require('express');
var router = express.Router();
var pool = require('../models/connection');
var yearmodel = require('../models/yearmodel');

router.get('/', async function (req, res, next) {
  console.log("Retrieving all years");
  let result = await yearmodel.getYears();
  console.log(result);
  res.send(result);
});

module.exports = router;