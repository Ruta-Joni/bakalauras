const JobType = require('../models/jobTypeModel');
const ErrorResponse = require('../utils/errorResponse');

//create job type
exports.createJobType = async (req, res, next) => {
    try {
        const jobT = await JobType.create({
            jobTypeName: req.body.jobTypeName,
        });
        res.status(201).json({
            success: true,
            jobT
        })
    } catch (error) {
        next(error);
    }
}


//all jobs type
exports.allJobsType = async (req, res, next) => {
    try {
        const jobT = await JobType.find();
        res.status(200).json({
            success: true,
            jobT
        })
    } catch (error) {
        next(error);
    }
}


//delete job type
exports.deleteJobType = async (req, res, next) => {
    try {
        const jobT = await JobType.findByIdAndRemove(req.params.type_id);
        res.status(200).json({
            success: true,
            message: "Sritis ištrinta"
        })
    } catch (error) {
        next(new ErrorResponse("server error", 500));
    }
}












