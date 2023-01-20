var express = require('express');
var router = express.Router();
var pool = require('../models/connection');
var unitsmodel = require('../models/unitsmodel');

router.get('/', async function (req, res, next) {
  console.log("Retrieving all units");
  let result = await unitsmodel.getUnits();
  console.log(result);
  res.send(result);
});

module.exports = router;