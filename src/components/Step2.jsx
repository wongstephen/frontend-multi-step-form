import React, { useContext } from "react";
import Plans from "./presentational/Plans";
import BillingType from "./presentational/BillingType";
import { DataContext } from "../App";

const Step2 = () => {
  const { formData, setFormData } = useContext(DataContext);
  const plans = {
    arcade: { title: "Arcade", mo: 9, yr: 90 },
    advanced: { title: "Advanced", mo: 12, yr: 120 },
    pro: { title: "Pro", mo: 15, yr: 150 },
  };
  const handleClick = (title, rate) => {
    console.log("clicked");
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
            planTitle={plans.arcade.title}
            planPrice={plans.arcade[formData.billing]}
            planBilling={formData.billing}
            handleClick={handleClick}
          />
          <Plans
            planTitle={plans.advanced.title}
            planPrice={plans.advanced[formData.billing]}
            planBilling={formData.billing}
            handleClick={handleClick}
          />
          <Plans
            planTitle={plans.pro.title}
            planPrice={plans.pro[formData.billing]}
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
