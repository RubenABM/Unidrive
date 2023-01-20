var express = require('express');
var router = express.Router();
var pool = require('../models/connection');
var detailsmodel = require('../models/detailsmodel');

router.get('/:id', async function (req, res, next) {
  console.log("Retrieving all courses detailed");
  let id = req.params.id; 
  let result = await detailsmodel.getContentByID(id);
  console.log(result);
  res.send(result);
});

router.post('/deletecontent', async function(req, res, next) {
  let deletecontent = req.body;
  let result = await detailsmodel.deleteContent(deletecontent);
  res.status(result.status).send(result.result);
});

module.exports = router;