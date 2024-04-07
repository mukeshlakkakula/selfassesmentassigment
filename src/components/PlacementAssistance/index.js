import React from "react";

import "./index.css";
const PlacementAssistance = () => {
  const placementView = (
    <div className="placementContainer">
      <h2 className="text-danger">100% Placement Assistance</h2>
      <p className="text-secondary ">
        We provide resume building workshops, interview preparation sessions,
        and job placement opportunities with partner companies.
      </p>
      <h3 className="text-primary">Placement Bootcamp</h3>
      <p className="text-secondary ">
        The ACCA course at Imarticus includes a comprehensive pre-placement boot
        camp at the professional level of ACCA. The boot camp comprises
        resume-building services, interview prep sessions, soft skills,
        personality development workshops and guaranteed internships with top
        companies for ACCA professional level.
      </p>
      <h3 className="text-primary">Guaranteed Placement Or Money Back</h3>
      <p className="text-secondary ">
        While you commit to signing up for our ACCA course, you get a 100%
        placement guarantee upon completing even the first 2 levels of ACCA.
        There is a placement or internship guarantee or the candidate can get
        his money back. It's not just a course but a guaranteed career you sign
        up for when you join Imarticus.
      </p>
    </div>
  );
  return <div>{placementView}</div>;
};

export default PlacementAssistance;
