const express = require('express');
const multer = require("multer");
const csv = require('csvtojson');
const mongoose = require('mongoose');
const getAllStudentCourses = require('../../../models/allstudentcourses/AllStudentCoursesSchema');

var fileOriginalName = '';

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../uploadedCsv/')
    },
    filename: function (req, file, cb) {
        fileOriginalName = fileOriginalName + file.originalname
        cb(null, file.originalname)
    }
})

var uploadAll = multer({ storage: storage });

const router = express.Router();

//@route post /uploadAll
//@ desc all items
//@access public

//WORKING PARTIAL
router.post('/', uploadAll.single('csvFile'), (req, res) => {
    console.log("uploaded");
    convertJson();
});


function convertJson() {
    const csvFilePath = '../uploadedCsv/' + fileOriginalName;
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            
            for(var i=0;i<jsonObj.length;i++){
                console.log(jsonObj[i].No);

                const getAllTakenCourses = new getAllStudentCourses({
                    No: jsonObj[i].No,
                    Id: jsonObj[i].Id,
                    Semester: jsonObj[i].Semester,
                    Course:jsonObj[i].Course,
                    Grade:jsonObj[i].Grade 
                   
                });

                getAllTakenCourses.save(function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("test: ");
                        console.log("Data Saved!!");
                      
                    }
            
                });


            }


        })
}

module.exports = router;