
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;


const jobTypeSchema = new mongoose.Schema({

    jobTypeName: {
        type: String,
        trim: true,
        required: [true, 'Sritis būtina'],
        maxlength: 70,
    },

    user: {
        type: ObjectId,
        ref: "User"
    }



}, { timestamps: true })

module.exports = mongoose.model("JobType", jobTypeSchema);