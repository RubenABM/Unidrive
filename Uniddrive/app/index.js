var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require('mysql');
const session = require('express-session');
const bodyParser = require('body-parser');
var brcypt = require('bcrypt');

const fs = require("fs");
var mv = require('mv');

const port = process.env.PORT || 3000;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var coursesRouter = require('./routes/courses');
var unitsRouter = require('./routes/units');
var studentsRouter = require('./routes/students');
var categoryRouter = require('./routes/category');
var projectRouter = require('./routes/project');
var unitCourseRouter = require('./routes/unitcourses');
var filesRouter = require('./routes/files');
var studentprojectsRouter = require('./routes/studentprojects');
var contentsRouter = require('./routes/contents');
var rolesRouter = require('./routes/roles');
var countRouterDocente = require('./routes/countdocente');
var countRouterProject = require('./routes/countprojetos');
var countRouterUserGeral = require('./routes/countusersgerais');
var contentDetailRouter = require('./routes/details');
var yearRouter = require('./routes/year');
var institutionRouter = require('./routes/institution');

var app = express();

app.use(session({secret: 'secret'}));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses', coursesRouter);
app.use('/units', unitsRouter);
app.use('/students', studentsRouter);
app.use('/categories', categoryRouter);
app.use('/projects', projectRouter);
app.use('/unitcourses', unitCourseRouter);
app.use('/files', filesRouter);
app.use('/studentprojects', studentprojectsRouter);
app.use('/contents', contentsRouter);
app.use('/roles', rolesRouter);
app.use('/countdocente', countRouterDocente);
app.use('/countprojects', countRouterProject);
app.use('/countgeral', countRouterUserGeral);
app.use('/details', contentDetailRouter);
app.use('/years', yearRouter);
app.use('/institutions', institutionRouter);


app.listen(port, () => {
    console.log("App is running on port " + port);
  });

module.exports = app;
