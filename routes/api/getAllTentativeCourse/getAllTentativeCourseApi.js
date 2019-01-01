const express = require('express');
const router = express.Router();
const getallStudentCourse = require('../../../models/allstudentcourses/AllStudentCoursesSchema');
const allBbaCourse = require('../../../models/allbbacourses/AllBbaCoursesSchema');
var result = [];

// @route   post  /getAllTentativeCourse
// @desc    post Student by id
// @access  Public
router.post("/", (req, res) => {
    console.log('request:: ', req.body);
  
//    var temp = new Promise(getAllCourses());

    return res.json(new Promise(getAllCourses()));
});


function getAllCourses (req, res) {
    allBbaCourse.find()
    .then((data) => {
        console.log('data:', data);            
        return res.json(data)
    })
    .catch(err => res.status(404).json({ noStudentFound: "No Student found" }));
}
module.exports = router;

