import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const JobInfo = ({ company, duties, dates, title, id }) => {
  return (
    <div>
      {/* jobs info */}
      <article key={id} className="job-info">
        {/* display those value */}
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {/* itterate over duties  duties is array */}

        {duties.map((duty, index) => {
          return (
            <div key={index} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{duty}</p>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default JobInfo;
