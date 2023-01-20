var express = require('express');
var router = express.Router();
var pool = require('../models/connection');
var addfilesModel = require('../models/addfilesmodel');

const fs = require("fs");
const multer = require("multer");
var path = require('path');
var mv = require('mv');

//npm que permite ler multipart/form-data
const upload = multer({
    //pasta provisoria
  dest: "/testfolder"
  // you might also want to set some limits: https://github.com/expressjs/multer#limits
});

const handleError = (err, res) => {
  res
    .status(500)
    .contentType("text/plain")
    .end("Oops! Something went wrong!" + err);
};

router.post('/insertnewproject', async function(req, res, next) {
    let newProject = req.body;
    let result = await addfilesModel.saveProject(newProject);
    res.status(result.status).send(result.result);
});

router.post('/insertnewassociation', async function(req, res, next) {
    let newAssociation = req.body;
    let result = await addfilesModel.saveAssociation(newAssociation);
    res.status(result.status).send(result.result);
});

router.post('/insertnewcontent', upload.single("file"), async function(req, res, next) {

    let newContent = req.body;console.log(newContent)
    var proj = await addfilesModel.getProject(newContent.con_stu_pro_id);console.log(proj)

    let pathToFolder = path.join(__dirname, "../public/projetos/" + proj[0].pro_name + "/");

    if(!fs.existsSync(pathToFolder)){
      fs.mkdirSync(pathToFolder);
    }
    
    //mundança da pasta provisória  
    const tempPath = req.file.path;
    const targetPath = path.join(pathToFolder, newContent.con_name + path.extname(req.file.originalname));

    newContent.con_url = targetPath;

    //fs.rename(tempPath, targetPath, err => {
    //  if (err) return handleError(err, res);
    //});

    mv(tempPath, targetPath, function(err) {
      if (err) { throw err; }
    });

    let result = await addfilesModel.saveContent(newContent);
    res.status(result.status).send(result.result);
});

router.get('/read', function(req, res) {
    readFile(req.query.url);
});

router.post('/save', upload.single("file"),
(req, res) => {

    
});

module.exports = router;