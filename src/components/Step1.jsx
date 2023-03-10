import React, { useContext } from "react";
import "./StepCards.css";
import { DataContext } from "../App";

const Step1 = () => {
  const { formData, setFormData } = useContext(DataContext);
  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className="step-container">
      <div className="step-body">
        <h2>Personal Info</h2>
        <h3>Please provide your name, email address, and phone number.</h3>
        <form>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            placeholder="e.g. Stephen King"
            onChange={handleChange}
            value={formData.name}
          ></input>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            onChange={handleChange}
            value={formData.email}
          ></input>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="e.g. +1 234 567 890"
            onChange={handleChange}
            value={formData.phone}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Step1;
