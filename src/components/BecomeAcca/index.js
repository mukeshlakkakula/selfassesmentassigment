import React from "react";
import "./index.css";
const BecomeAcca = () => {
  const becomeAccaView = (
    <div className="whyChooseContainer">
      <h2 className="text-primary">Become ACCA In 18 Months</h2>
      <p>
        Join our accelerated ACCA program and become a qualified professional in
        just 18 months.
      </p>
      <ul className="text-primary">
        <li>Fast-track your career</li>
        <li>Flexible learning options</li>
        <li>Expert guidance throughout</li>
      </ul>
    </div>
  );
  return <div>{becomeAccaView}</div>;
};

export default BecomeAcca;
