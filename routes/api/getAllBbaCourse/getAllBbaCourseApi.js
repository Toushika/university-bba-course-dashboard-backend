const express = require('express');
const router = express.Router();
const getallBbaCourseModel = require('../../../models/allbbacourses/AllBbaCoursesSchema');
var result = [];

//@route post /getAllBbaCourse
//@ desc all items
//@access public

router.post("/", (req, res) => {
    getallBbaCourseModel.find().sort('Semester')
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
                                course:response[i].Course
                             
                            }
                        ]
                    };
                    semesterList.push(temp);
                }else{
                    var temp = {
                        course:response[i].Course,
                    };
                    var semLocation = tempList.indexOf(response[i].Semester);
                    semesterList[semLocation].courseList.push(temp);
                }
                              
            }
            
            return res.json(semesterList);
            
        })
        .catch(err =>
            res.status(404).json({ noBBACourseFound: "No BBA Course Found" })
        );
});

module.exports = router;