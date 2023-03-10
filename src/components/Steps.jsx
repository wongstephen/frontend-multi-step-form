import React, { useContext } from "react";
import "./Steps.css";
import { DataContext } from "../App";

export const Steps = () => {
  const { formData, setFormData } = useContext(DataContext);
  function handleClick(action) {
    if (formData.step === 1 && !formData.name) {
      setFormData((prev) => {
        return { ...prev, nameErr: true };
      });
    } else {
      setFormData((prev) => {
        return { ...prev, nameErr: false };
      });
    }
    if (formData.step === 1 && !formData.email) {
      setFormData((prev) => {
        return { ...prev, emailErr: true };
      });
    } else {
      setFormData((prev) => {
        return { ...prev, emailErr: false };
      });
    }
    if (formData.step === 1 && !formData.phone) {
      setFormData((prev) => {
        return { ...prev, phoneErr: true };
      });
    } else {
      setFormData((prev) => {
        return { ...prev, phoneErr: false };
      });
    }

    if (!formData.name || !formData.email || !formData.phone) {
      return;
    }
    const num = formData.step + action;
    setFormData((prev) => {
      return { ...prev, step: num };
    });
  }
  return (
    <div className="steps">
      <button
        className={`back-step ${formData.step === 1 && "back-hidden"}`}
        onClick={() => handleClick(-1)}
      >
        Go Back
      </button>
      <button className="next-step" onClick={() => handleClick(1)}>
        {formData.step === 4 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
};
