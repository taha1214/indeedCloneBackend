const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
    {
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        author: { 
            type: mongoose.Types.ObjectId,
             ref: "user" 
        },
        requirements:{
          type: String,
          // required: true,
        },
        applyUsers:{
          type: String,
        },
      },
     
      {
        timestamps: true,
      },
    );

const Jobs = mongoose.model("jobs", jobSchema);

module.exports = Jobs;