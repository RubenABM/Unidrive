var express = require('express');
var router = express.Router();
var pool = require('../models/connection');
var contentsmodel = require('../models/contentsmodel');
//var user_cat_id = sessionStorage.getItem("usercat");

router.get('/:usercat', async function (req, res, next) {
  let usercat = req.params.usercat; 
  console.log("Retrieving all contents by category");
  let result = await contentsmodel.getContentsByCategory(usercat);
  console.log(result);
  res.send(result);
});

router.get('/:usercat/:word', async function (req, res, next) {
  let usercat = req.params.usercat; 
  let word = req.params.word; 
  console.log("Retrieving all contents by category and word");
  let result = await contentsmodel.getStudentProjectsbyWord(usercat, word);
  console.log(result);
  res.send(result);
});

router.get('/', async function (req, res, next) {
  console.log("Retrieving all contents");
  let result = await contentsmodel.getContents();
  console.log(result);
  res.send(result);
});

router.get('/sim', async function (req, res, next) {
  console.log("Retrieving all contents by id");
  //let id = req.params.id;
  let result = await contentsmodel.getContentsByID();
  console.log(result);
  res.send(result);
});

module.exports = router;