var express = require('express');
var router = express.Router();
var pool = require('../models/connection');
var countmodel = require('../models/countmodel');

router.get('/', async function (req, res, next) {
  console.log("Retrieving user geral count");
  let result = await countmodel.getCountUtilizadoresGerais();
  console.log(result);
  res.send(result);
});

module.exports = router;