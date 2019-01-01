const mongoose =require('mongoose');
const  Schema = mongoose.Schema;

const allUniqueIdSchema = new Schema({

   No: { $inc: { seq: 1 } },

    Id: {
        type: String,    
    },

   });

module.exports = AllUniqueIdModel  = mongoose.model('alluniqueidmodels', allUniqueIdSchema);
