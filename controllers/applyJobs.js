// const AppliedJobs = require('../Model/appliedJobs');

// const applyForJob = (req, res) => {
//   const { userId, jobId } = req.body;

//   console.log("User ID:", userId); // Add debugging logs
//   console.log("Job ID:", jobId);

//   AppliedJobs.findOne({ userId, jobId })
//     .then(existingApplication => {
//       if (existingApplication) {
//         console.log("User already applied for this job");
//         return res.status(400).send({
//           message: 'You have already applied for this job',
//         });
//       }

//       const newApplication = new AppliedJobs({ userId, jobId });
//       return newApplication.save();
//     })
//     .then(response => {
//       console.log("Job applied successfully", response);
//       res.send({
//         message: 'Job applied successfully',
//         appliedJob: response,
//       });
//     })
//     .catch(err => {
//       console.error("Error while applying for the job:", err); // Log the error details
//       res.status(500).send({
//         message: 'Error applying for the job',
//         error: err.message,
//       });
//     });
//   }


  
//   // const getAppliedJobs = async (req, res) => {
//   //   const userId = req.params.userId;
  
//   //   // Log userId for debugging
//   //   console.log('Fetching applied jobs for User ID:', userId);
  
//   //   if (!userId) {
//   //     return res.status(400).send({ message: 'User ID is required' });
//   //   }
  
//   //   try {
//   //     const appliedJobs = await AppliedJobs.find({ userId }).populate('jobId').exec();
//   //     if (!appliedJobs.length) {
//   //       return res.status(404).send({ message: 'No applied jobs found for this user' });
//   //     }
//   //     res.send(appliedJobs);
//   //   } catch (error) {
//   //     console.error('Error fetching applied jobs:', error);
//   //     res.status(500).send({
//   //       message: 'Error fetching applied jobs',
//   //       error: error.message,
//   //     });
//   //   }
//   // };
  
// // Export both functions
// module.exports = {
//   applyForJob,
//   // getAppliedJobs
// };
