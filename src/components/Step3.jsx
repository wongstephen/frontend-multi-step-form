import React, { useContext } from "react";
import AddOns from "./presentational/AddOns";
import { DataContext } from "../App";

const addOns = {
  onlineServices: {
    title: "Online Service",
    subtitle: "Access to multiplayer games",
    mo: 1,
    yr: 10,
  },
  largerStorage: {
    title: "Larger storage",
    subtitle: "Extra 1TB of cloud save",
    mo: 2,
    yr: 20,
  },
  customizableProfile: {
    title: "Customizable Profile",
    subtitle: "Custom theme on your profile",
    mo: 2,
    yr: 20,
  },
};
const Step3 = () => {
  const { formData, setFormData } = useContext(DataContext);
  const handlePlanClick = (addon) => {
    setFormData((prev) => {
      return { ...prev, [addon]: !prev[addon] };
    });
  };
  return (
    <div className="step-container">
      <div className="step-body">
        <h2>Pick add-ons</h2>
        <h3>Add-ons help enhance your gaming experience.</h3>
        <div className="step-content-container">
          <AddOns
            title={addOns.onlineServices.title}
            subtitle={addOns.onlineServices.subtitle}
            rate={addOns.onlineServices[formData.billing]}
            billing={formData.billing}
            active={formData.onlineServices}
            type="onlineServices"
            handlePlanClick={handlePlanClick}
          />
          <AddOns
            title={addOns.largerStorage.title}
            subtitle={addOns.largerStorage.subtitle}
            rate={addOns.largerStorage[formData.billing]}
            billing={formData.billing}
            active={formData.largerStorage}
            type="largerStorage"
            handlePlanClick={handlePlanClick}
          />
          <AddOns
            title={addOns.customizableProfile.title}
            subtitle={addOns.customizableProfile.subtitle}
            rate={addOns.customizableProfile[formData.billing]}
            billing={formData.billing}
            active={formData.customizableProfile}
            type="customizableProfile"
            handlePlanClick={handlePlanClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Step3;
