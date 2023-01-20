var express = require('express');
var router = express.Router();
var pool = require('../models/connection');
var categorymodel = require('../models/categorymodel');

router.get('/', async function (req, res, next) {
  console.log("Retrieving all categories");
  let result = await categorymodel.getCategories();
  console.log(result);
  res.send(result);
});

module.exports = router;