const express = require('express');
const router = express.Router();
const { createJob, singleJob, showJobs, deleteJob } = require('../controllers/jobsController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');



//jobs routes

// /api/job/create
router.post('/job/create', isAuthenticated, isAdmin, createJob);
// /api/job/id
router.get('/job/:id', singleJob);
// /api/jobs/show
router.get('/jobs/show', showJobs);

router.delete('/job/delete/:job_id', isAuthenticated, isAdmin, deleteJob);

module.exports = router;