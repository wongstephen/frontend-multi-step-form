import React, { useContext } from "react";
import AddOns from "./presentational/AddOns";
import { DataContext } from "../App";

const Step3 = () => {
  const { services, formData, setFormData } = useContext(DataContext);
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
            title={services.onlineServices.title}
            subtitle={services.onlineServices.subtitle}
            rate={services.onlineServices[formData.billing]}
            billing={formData.billing}
            active={formData.onlineServices}
            type="onlineServices"
            handlePlanClick={handlePlanClick}
          />
          <AddOns
            title={services.largerStorage.title}
            subtitle={services.largerStorage.subtitle}
            rate={services.largerStorage[formData.billing]}
            billing={formData.billing}
            active={formData.largerStorage}
            type="largerStorage"
            handlePlanClick={handlePlanClick}
          />
          <AddOns
            title={services.customizableProfile.title}
            subtitle={services.customizableProfile.subtitle}
            rate={services.customizableProfile[formData.billing]}
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
