const express = require('express');
const multer = require("multer");
const csv = require('csvtojson');
const mongoose = require('mongoose');
const getAllBbaCourses = require('../../../models/allbbacourses/AllBbaCoursesSchema');

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

var upload = multer({ storage: storage });

const router = express.Router();

//@route post /upload
//@ desc all items
//@access public

//WORKING PARTIAL
router.post('/', upload.single('csvFile'), (req, res) => {
    // console.log("uploaded");
    convertJson();
});


function convertJson() {
    const csvFilePath = '../uploadedCsv/' + fileOriginalName;
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            
            for(var i=0;i<jsonObj.length;i++){
                console.log(jsonObj[i].No);

                const getBBA = new getAllBbaCourses({
                    No: jsonObj[i].No,
                    Semester: jsonObj[i].Semester,
                    Course:jsonObj[i].Course  
                   
                });

                getBBA.save(function (err) {
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