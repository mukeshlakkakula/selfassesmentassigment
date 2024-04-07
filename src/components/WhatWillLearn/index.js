import React from "react";
import "./index.css";
const WhatWillLearn = () => {
  const whatwilllearnView = (
    <div className="whatFullContainer">
      <div className="whatInsideContainers">
        <h3>Business and Technology (BT)</h3>
        <p>
          ACCA paper on Business and Technology aims to develop an understanding
          of the modern business environment and the functioning of accounts and
          finance domains in businesses and provide insight into the principles
          of efficient management. In ACCA subjects, the Business and Technology
          paper is short-coded as BT and termed an ACCA F1 paper.
        </p>
        <ul>
          <li>
            Organisational structure, leadership, and management in business
          </li>
          <li>Business Environmental factors</li>
          <li>Accounting in business, Accounting functions</li>
          <li>Accounting and Finance control processes in a business</li>
        </ul>
      </div>
      <div className="whatInsideContainers">
        <h3>Corporate and Business Law (LW)</h3>
        <p>
          ACCA paper on Corporate and Business Law builds your understanding of
          the legal system with context to the business world. You learn various
          terminologies and concepts of law from the angle of accounting and
          finance. In ACCA subjects, the Corporate and Business Law paper is
          short-coded as LW and termed as an ACCA F4 paper.
        </p>
        <ul>
          <li>The overall structure of the legal system </li>
          <li>Laws related to business, companies and financial affairs</li>
          <li>Establishment and structure of business organisations</li>
          <li>Capital, business finance and regulation of companies</li>
        </ul>
      </div>
      <div className="whatInsideContainers">
        <h3>Strategic Business Leader (SBL) (BT)</h3>
        <p>
          ACCA paper on Strategic Business Leader is more of a management skill
          subject to build governance in organisational management. It includes
          risk assessment, ethical framework, professional judgement and values,
          etc.In ACCA subjects, the Strategic Business Leader paper is
          short-coded as SBL and termed ACCA P1 and ACCA P3 papers.
        </p>
        <ul>
          <li>Efficient management of an organisation </li>
          <li>Role and function of governance in the management</li>
          <li>Ethical framework for professional values and decision making</li>
          <li>Business strategies and corporate governance</li>
        </ul>
      </div>
    </div>
  );
  return <div>{whatwilllearnView}</div>;
};

export default WhatWillLearn;
