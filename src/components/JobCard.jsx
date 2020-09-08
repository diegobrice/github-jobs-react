import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="JobCard" key={job.id}>
      <div className="JobCard__image">
        <img src={job.company_logo} alt="" />
      </div>
      <div className="JobCard__body">
        <p className="company">{job.company}</p>
        <p className="title">{job.title}</p>
        <p className="type">{job.type}</p>
        <div className="details">
          <div className="location">
            <i class="material-icons">public</i>
            <p>{job.location}</p>
          </div>
          <div className="created">
            <i class="material-icons">access_time</i>
            <p>{job.created_at}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
