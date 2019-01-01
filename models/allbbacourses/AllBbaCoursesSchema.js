const mongoose =require('mongoose');
const  Schema = mongoose.Schema;

const AllBbaCoursesSchema = new Schema({

    No: {
        type: Number,    
    },

    Semester: {
        type: Number,    
    },

    Course: {
        type: String,    
    }

   });

module.exports = AllBbaCoursesModel  = mongoose.model('allbbacourses', AllBbaCoursesSchema);
