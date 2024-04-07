import React from "react";

const AccaEligibility = () => {
  const accaElgibilityView = (
    <div className="whyChooseContainer">
      <h2 className="text-danger">ACCA Eligibility</h2>
      <p className="text-success ">
        The candidate needs to be a 10+2 pass with English & Accounts / Maths
        with 65% Marks each and overall 50% Marks. Those with higher
        qualifications such as graduates, B.Com, BBA, M.Com, MBA can join ACCA
        as well and on account of having a higher qualification, they get
        certain exemptions on exams too.
      </p>
    </div>
  );
  return <div>{accaElgibilityView}</div>;
};

export default AccaEligibility;
