import React from "react";
import "./Summary.css";
const Summary = () => {
  return (
    <>
      <ul className="step4-list">
        <li className="step4-list">
          <div>
            <p className="summary-text-plan-title font-thick ">
              Arcade (monthly)
            </p>
            <a href="" className="summary-link">
              Change
            </a>
          </div>
          <p className="summary-text-plan-price font-thick ">$9/mo</p>
          <div className="step4-list-line"></div>
        </li>
        <li className="step4-list">
          <p className="summary-addon-text">Online service</p>
          <p className="summary-text-plan-price">$1/mo</p>
        </li>
        <li className="step4-list">
          <p className="summary-addon-text">Larger storage</p>
          <p className="summary-text-plan-price">$2/mo</p>
        </li>
      </ul>
      <div className="step4-list summary-total-container">
        <p className="summary-addon-text">Total (per month)</p>
        <p className="summary-total-price font-thick">+12/mo</p>
      </div>
    </>
  );
};

export default Summary;
