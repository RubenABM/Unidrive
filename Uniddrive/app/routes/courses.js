var express = require('express');
var router = express.Router();
var pool = require('../models/connection');
var coursesmodel = require('../models/coursesmodel');

router.get('/', async function (req, res, next) {
  console.log("Retrieving all courses");
  let result = await coursesmodel.getCourses();
  console.log(result);
  res.send(result);
});

module.exports = router;