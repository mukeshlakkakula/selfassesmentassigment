import React from "react";
import "./index.css";

const WhyChooseUs = () => {
  const whyChooseView = (
    <div className="whyChooseContainer">
      <h2 className="text-danger">Why Choose Us</h2>
      <p>We focus on personalized learning tailored to your needs.</p>
      <ul className="text-success ">
        <li>Experienced faculty</li>
        <li>Comprehensive study materials</li>
        <li>High success rates</li>
        <li>To Become A Global CA</li>
        <li>Work With The Top Companies Worldwide</li>
        <li>Inbuilt Internship And Placements</li>
        <li>More Flexible Than CA India Program</li>
        <li>Building Diversified Skill Set</li>
      </ul>
    </div>
  );
  return <div>{whyChooseView}</div>;
};

export default WhyChooseUs;
