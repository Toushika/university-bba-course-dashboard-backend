const express = require('express');
const router = express.Router();
const getallStudent = require('../../../models/allstudentcourses/AllStudentCoursesSchema');
var result = [];

//@route get /getUniqueStudent
//@ desc all items
//@access public
router.get('/', (req, res) => {
    getallStudent.find().distinct('Id')
        .then(data => res.json(data))
        .catch(err => res.status(404).json({ noStudentFound: "No Student found" }));
});



module.exports = router;

