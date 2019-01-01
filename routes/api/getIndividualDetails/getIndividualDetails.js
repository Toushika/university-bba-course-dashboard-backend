const express = require('express');
const router = express.Router();
const getallStudentCourse = require('../../../models/allstudentcourses/AllStudentCoursesSchema');
var result = [];

// @route   post  getIndividual
// @desc    post Student by id
// @access  Public
router.post("/", (req, res) => {
    console.log('request:: ', req.body);
    getallStudentCourse.find({ 'Id': req.body.Id }).sort('Semester')
        .then((response) => {

            var semesterList = [];
            var tempList = [];
            for (var i = 0; i < response.length; i++) {
                
                if (tempList.indexOf(response[i].Semester) <= -1) {
                    tempList.push(response[i].Semester);

                    var temp ={
                        semester: response[i].Semester,
                        courseList:[
                            {
                                course:response[i].Course,
                                grade:response[i].Grade
                            }
                        ]
                    };
                    semesterList.push(temp);
                }else{
                    var temp = {
                        course:response[i].Course,
                        grade:response[i].Grade
                    };
                    var semLocation = tempList.indexOf(response[i].Semester);
                    semesterList[semLocation].courseList.push(temp);
                }
                              
            }
            return res.json(semesterList);
        })
        .catch(err =>
            res.status(404).json({ noStudentFound: "No Student Found" })
        );
});
module.exports = router;

