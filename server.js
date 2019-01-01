const  express = require('express');
const  bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('./routes/api/allBbaCourses/allBbaCoursesApi');
const allTakenCoursesUpload = require('./routes/api/studentTakenCoursesUpload/studentTakenCoursesUpload');
const uniqueStudent = require('./routes/api/getUniqueStudent/getUniqueStudent');
const getAllStudentCourses = require('./routes/api/getIndividualDetails/getIndividualDetails');
const  getAllTentativeCourseDetail = require('./routes/api/getAllTentativeCourse/getAllTentativeCourseApi');
const getAllBbaCourseList = require('./routes/api/getAllBbaCourse/getAllBbaCourseApi');
const courseCompareList = require('./routes/api/courseListCompare/courseListCompareApi');

const app = express();
//body parse  middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

var server = app.listen(5000, "127.0.0.1", function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("app listening at: ", host, port);
});

const db = require('./db_connection/connection').mongoURI;

mongoose.connect(db,{ useNewUrlParser: true })
.then(()=>console.log('Mongo Db Connect'))
.catch(err => console.log(err));

app.use('/upload',cors(),fileUpload);
app.use('/uploadAll',cors(),allTakenCoursesUpload);
app.use('/getUniqueStudent',cors(),uniqueStudent);
app.use('/getIndividual',cors(),getAllStudentCourses);
app.use('/getAllTentativeCourse',cors(),getAllTentativeCourseDetail);
app.use('/getAllBbaCourse',cors(),getAllBbaCourseList);
app.use('/courseCompare',cors(),courseCompareList);


