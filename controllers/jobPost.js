const Jobs = require("../Model/jobPost")



const getAllJobs = (req, res) => {
  Jobs.find()
    .populate("author")
    .then((allJobs) => {
        res.send({
            message: "fetched Jobs successfully",
            allJobs,
        })
      })
        .catch((err) => {
            res.status(400).send({
                err: err.message,
                error: err,
            })
        })
    
}


const createJobs = (req, res) => {
    const body = req.body;
    console.log("🚀 ~ body:", body);
  
        const newJObs = new Jobs({
          title: body.title,
          description: body.description,
          requirements: body.requirements,
          author: body.authorId,
        });
        newJObs
          .save()
          .then((response) => {
            if (response) {
              res.send({ message: "Jobs created successfully", Jobs: response });
            } else {
              res.status(400).send({
                message: "Something went wrong try again letter",
                blog: null,
              });
            }
          })
          .catch((err) => {
            console.log("🚀 ~ .then ~ err =>>:", err);
            res.status(400).send({
              message: err?.message,
              error: err,
            });
          });
      }

      const updateJobs = (req, res) => {
        const { jobId } = req.params; // Get jobId from request parameters
        const { userId } = req.body; // Get userId from request body
    
        // console.log("Request body:", req.body);
        
        // Update the userId for the specified jobId
        Jobs.findOneAndUpdate(
            { _id: jobId }, // Filter by jobId
            { applyUsers: userId }, // Update the userId
            { new: true } // Return the updated document
        )
        .then(updatedJob => {
            if (!updatedJob) {
                return res.status(404).send({ message: "Job not found" });
            }
            res.status(200).send(updatedJob); // Send the updated job back
        })
        .catch(err => {
            console.error(err);
            res.status(500).send({ message: "Error updating job", error: err });
        });
    };
    
     
    module.exports = { createJobs, getAllJobs, updateJobs }

  
  