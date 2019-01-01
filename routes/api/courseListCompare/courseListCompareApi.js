const express = require('express');
const router = express.Router();
const getallBbaCourseModel = require('../../../models/allbbacourses/AllBbaCoursesSchema');
const getAllTakenCourseModel = require('../../../models/allstudentcourses/AllStudentCoursesSchema');
var result = [];

//@route post /courseCompare
//@ desc all items
//@access public

router.post("/", (req, res) => {

   var array = getBBACourses();

   return res.json(array);     
});

function getBBACourses(){
    var bbaCourseList=[];
    var takenCourseList=[];

    getallBbaCourseModel.find().sort()
    .then((response) => {  
        for(var i=0;i<response.length;i++){
            var course={
              course:response[i].Course
            };
            bbaCourseList.push(course);
        }   
        return bbaCourseList;
        console.log("bbaCourseList:: "+JSON.stringify(bbaCourseList));
    })
    .catch(err =>
       console.log(err)
    );

}

module.exports = router;