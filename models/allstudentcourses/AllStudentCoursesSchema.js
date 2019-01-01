const mongoose =require('mongoose');
const  Schema = mongoose.Schema;

const AllStudentCoursesSchema = new Schema({

    No: {
        type: Number,    
    },

    Id: {
        type: String,    
    },

    Semester: {
        type: Number,    
    },

    Course: {
        type: String,    
    },

    Grade: {
        type: String,    
    }

   });

module.exports = AllStudentCoursesModel  = mongoose.model('allstudentcourses', AllStudentCoursesSchema);
