import React from "react";
import AddOns from "./presentational/AddOns";

const Step3 = () => {
  return (
    <div className="step-container">
      <div className="step-body">
        <h2>Pick add-ons</h2>
        <h3>Add-ons help enhance your gaming experience.</h3>
        <div className="step-content-container">
          <AddOns />
          <AddOns />
          <AddOns />
        </div>
      </div>
    </div>
  );
};

export default Step3;

// Pick add-ons
// Add-ons help enhance your gaming experience.

// Online service
// Access to multiplayer games
// +$1/mo

// Larger storage
// Extra 1TB of cloud save
// +$2/mo

// Customizable Profile
// Custom theme on your profile
// +$2/mo

// Go Back
// Next Step
