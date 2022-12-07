import React from "react";

function JobButtons({ jobs, value , setValue }) {
  return (
    <div>
      {/* button contianer */}
      <div className="btn-container">
        {/* create button for each item of array */}
        {jobs.map((job, index ) => {
          return (
            <button
              key={job.id}
              onClick={() => {
                {
                  /* create onclick function to setValue with index of job */
                }
                setValue(index);
              }}
              // put class job-btn by default then checked if index of that button === value then adding active class
              className={`job-btn ${index === value && "active-btn"}`}
            >
              {job.company}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default JobButtons;
