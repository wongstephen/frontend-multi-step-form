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
          <div class="step-add-on-container">
            {Object.keys(services.plans).map((plan, idx) => {
              return (
                <Plans
                  key={plan + idx}
                  planTitle={services.plans[plan].title}
                  planPrice={services.plans[plan][formData.billing]}
                  planBilling={formData.billing}
                  handleClick={handleClick}
                />
              );
            })}
          </div>
          <BillingType />
        </div>
      </div>
    </div>
  );
};

export default Step2;
