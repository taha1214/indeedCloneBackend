const express = require("express");
const {
  createJobs,
  getAllJobs,
  updateJobs,
} = require("../controllers/jobPost");

const router = express.Router();

router.post("/updateJobs/:jobId", updateJobs);
router.post("/CreateJObs", createJobs);
router.get("/GetAllJobs", getAllJobs);
// router.post("/updateProfile/:userId", updateProfile);

module.exports = router;