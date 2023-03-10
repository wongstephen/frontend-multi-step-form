import React, { useContext } from "react";
import Plans from "./presentational/Plans";
import BillingType from "./presentational/BillingType";
import { DataContext } from "../App";

const Step2 = () => {
  const { services, formData, setFormData } = useContext(DataContext);

  const handleClick = (title, rate) => {
    setFormData((prev) => {
      return { ...prev, plan: title };
    });
  };
  return (
    <div className="step-container">
      <div className="step-body">
        <h2>Select your plan</h2>
        <h3>You have the option of monthly or yearly billing.</h3>
        <div className="step-add-on">
          <Plans
            planTitle={services.arcade.title}
            planPrice={services.arcade[formData.billing]}
            planBilling={formData.billing}
            handleClick={handleClick}
          />
          <Plans
            planTitle={services.advanced.title}
            planPrice={services.advanced[formData.billing]}
            planBilling={formData.billing}
            handleClick={handleClick}
          />
          <Plans
            planTitle={services.pro.title}
            planPrice={services.pro[formData.billing]}
            planBilling={formData.billing}
            handleClick={handleClick}
          />
          <BillingType />
        </div>
      </div>
    </div>
  );
};

export default Step2;
