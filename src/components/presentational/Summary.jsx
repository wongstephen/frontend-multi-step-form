import React, { useContext } from "react";
import "./Summary.css";
import { DataContext } from "../../App";
const Summary = () => {
  const { services, formData, setFormData } = useContext(DataContext);
  const setStep = () => {
    setFormData((prev) => {
      return { ...prev, step: 2 };
    });
  };
  const totalPrice = () => {
    let total = 0;
    total = services[formData.plan.toLowerCase()][formData.billing];
    if (formData.onlineServices) {
      total += services.onlineServices[formData.billing];
    }
    if (formData.largerStorage) {
      total += services.largerStorage[formData.billing];
    }
    if (formData.customizableProfile) {
      total += services.customizableProfile[formData.billing];
    }
    return total;
  };
  return (
    <>
      <ul className="step4-list">
        <li className="step4-list">
          <div>
            <p className="summary-text-plan-title font-thick">
              {formData.plan} (
              {formData.billing === "mo" ? "Monthly" : "Yearly"})
            </p>
            <p className="summary-link" onClick={setStep}>
              Change
            </p>
          </div>
          <p className="summary-text-plan-price font-thick ">
            ${services[formData.plan.toLowerCase()][formData.billing]}/
            {formData.billing}
          </p>
          {(formData.onlineServices ||
            formData.largerStorage ||
            formData.customizableProfile) && (
            <div className="step4-list-line"></div>
          )}
        </li>
        {formData.onlineServices && (
          <li className="step4-list">
            <p className="summary-addon-text">
              {services.onlineServices.title}
            </p>
            <p className="summary-text-plan-price">
              ${services.onlineServices[formData.billing]}/{formData.billing}
            </p>
          </li>
        )}
        {formData.largerStorage && (
          <li className="step4-list">
            <p className="summary-addon-text">{services.largerStorage.title}</p>
            <p className="summary-text-plan-price">
              ${services.largerStorage[formData.billing]}/{formData.billing}
            </p>
          </li>
        )}
        {formData.customizableProfile && (
          <li className="step4-list">
            <p className="summary-addon-text">
              {services.customizableProfile.title}
            </p>
            <p className="summary-text-plan-price">
              ${services.customizableProfile[formData.billing]}/
              {formData.billing}
            </p>
          </li>
        )}
      </ul>
      <div className="step4-list summary-total-container">
        <p className="summary-addon-text">
          Total (per {formData.billing === "mo" ? "month" : "year"})
        </p>
        <p className="summary-total-price font-thick">
          +{totalPrice()}/{formData.billing}
        </p>
      </div>
    </>
  );
};

export default Summary;
