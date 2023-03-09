import React from "react";
import "./AddOns.css";
const AddOns = () => {
  return (
    <div className="step-add-on">
      <button className="card-addon-btn">
        <div className="card-left">
          <input type="checkbox"></input>
        </div>
        <div className="card-mid">
          <p className="add-on-title">Online service</p>
          <p className="add-on-subtitle">Access to multiplayer games</p>
        </div>
        <div className="card-right">
          <p className="add-on-price">+$1/mo</p>
        </div>
      </button>
    </div>
  );
};

export default AddOns;


