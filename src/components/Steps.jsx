import React, { useContext } from "react";
import "./Steps.css";
import { DataContext } from "../App";

export const Steps = () => {
  const { formData, setFormData } = useContext(DataContext);
  function handleClick(action) {
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
