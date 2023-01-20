var express = require('express');
var router = express.Router();
var pool = require('../models/connection');
var institutionmodel = require('../models/institutionmodel');

router.get('/', async function (req, res, next) {
  console.log("Retrieving all institutions");
  let result = await institutionmodel.getInstitution();
  console.log(result);
  res.send(result);
});

module.exports = router;