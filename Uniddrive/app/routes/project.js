var express = require('express');
var router = express.Router();
var pool = require('../models/connection');
var projectmodel = require('../models/projectmodel');

router.get('/', async function (req, res, next) {
  console.log("Retrieving all projects");
  let result = await projectmodel.getProjects();
  console.log(result);
  res.send(result);
});

module.exports = router;