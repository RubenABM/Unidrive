var express = require('express');
var router = express.Router();
var pool = require('../models/connection');
var studentprojectmodel = require('../models/studentprojectsmodel');

router.get('/', async function (req, res, next) {
  console.log("Retrieving all students projects");
  let result = await studentprojectmodel.getStudentProjects();
  console.log(result);
  res.send(result);
});

module.exports = router;