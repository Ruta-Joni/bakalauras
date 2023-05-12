
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;


const jobSchema = new mongoose.Schema({

    title: {
        type: String,
        trim: true,
        required: [true, 'Pavadinimas būtinas'],
        maxlength: 70,
    },

    description: {
        type: String,
        trim: true,
        required: [true, 'Aprašymas'],
    },
    salary: {
        type: String,
        trim: true,
        required: [true, 'Atlyginimas būtinas'],
    },
    location: {
        type: String,
    },
    available: {
        type: Boolean,
        default: true
    },
    jobType: {
        type: ObjectId,
        ref: "JobType",
        required: true
    },
    user: {
        type: ObjectId,
        ref: "User",
        required: true
    },
    jobSen: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model("Job", jobSchema);