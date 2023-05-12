
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



const jobsHistorySchema = new mongoose.Schema({

    title: {
        type: String,
        trim: true,
        maxlength: 70,
    },

    description: {
        type: String,
        trim: true
    },
    salary: {
        type: String,
        trim: true,
    },
    location: {
        type: String
    },
    user: {
        type: ObjectId,
        ref: "User",
        required: true
    },
    jobSen: {
        type: String
    },
    jobID:{
        type: String
    }


}, { timestamps: true })

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        trim: true,
        required: [true, 'Vardas būtinas'],
        maxlength: 32,
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, 'Pavardė būtina'],
        maxlength: 32,
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'El.paštas būtinas'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Slaptažodis būtinas'],
        minlength: [8, 'Slaptažodis turi sudaryti bent 8 ženklai'],
    },

    jobsHistory: [jobsHistorySchema],

    role: {
        type: Number,
        default: 0
    }

}, { timestamps: true })

//encrypting password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)
})

// compare user password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// return a JWT token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
        expiresIn: 3600
    });
}



module.exports = mongoose.model("User", userSchema);