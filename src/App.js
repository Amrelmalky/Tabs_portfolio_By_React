import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import JobButtons from "./JobButtons";
import JobInfo from "./JobInfo";

// API data array of objects
const url = "https://course-api.com/react-tabs-project";
function App() {
  // setup jobs initial -> as an empty array later we will store the rcvd API data
  const [jobs, setJobs] = useState([]);
  // setup loading message before fetching data
  const [loading, setLoading] = useState(true);
  // Since jobs is Array and Array is Zero index so we have to setup value with initial value 0 to use thi value later
  const [value, setValue] = useState(0);

  // create Function to fetch data from url API
  const getJobsData = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();

    setJobs(newJobs); // store rcvd data in jobs variabe
    setLoading(false); // change loading state to be false
  };

  //using useEffect to invoke feth function
  useEffect(() => {
    getJobsData(); //invoke fetch function
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h2> Loading...</h2>
      </section>
    );
  }

  // Diplay the first Job in the array = index 0
  // destructure jobs(array of objects) && jobs[0] is the 1st object in array
  // const { company, duties, dates, title, id } = jobs[value];

  return (
    // Diplay the Job
    <section className="section">
      {/* section title */}
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>

      {/* center of jbs */}

      <div className="jobs-center">
        {/* create sperated comp */}
        <JobButtons jobs={jobs} value={value} setValue={setValue} />
        <JobInfo {...jobs[value]} />
      </div>
      <button className="btn">More Info</button>
    </section>
  );
}

export default App;
