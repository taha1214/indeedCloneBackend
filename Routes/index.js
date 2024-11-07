const express = require("express");
const authRoute = require("./authRoutes");
const jobPost = require("./jobPostRoutes")
// const appliedJobsRoutes = require('./appliedjob');



const router = express.Router();

// router.use('/api', appliedJobsRoutes);
router.use("/auth", authRoute);
router.use("/jobPost", jobPost );

module.exports = router;
