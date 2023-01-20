var express = require('express');
var router = express.Router();
var pool = require('../models/connection');
var unitcoursemodel = require('../models/unitcoursemodel');

router.get('/', async function (req, res, next) {
  console.log("Retrieving all units and courses");
  let result = await unitcoursemodel.getUnitCourses();
  console.log(result);
  res.send(result);
});

module.exports = router;