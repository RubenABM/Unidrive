var express = require('express');
var router = express.Router();
var pool = require('../models/connection');
var countmodel = require('../models/countmodel');

router.get('/', async function (req, res, next) {
  console.log("Retrieving project count");
  let result = await countmodel.getCountProjetos();
  console.log(result);
  res.send(result);
});

module.exports = router;