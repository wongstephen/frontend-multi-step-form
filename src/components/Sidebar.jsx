import React, { useContext } from "react";
import "./Sidebar.css";
import { DataContext } from "../App";

export const Sidebar = ({ step }) => {
  const { formData } = useContext(DataContext);

  return (
    <div className="sidebar">
      <ul className="sidebar">
        <SideBarNum i={1} step={formData.step} />
        <SideBarNum i={2} step={formData.step} />
        <SideBarNum i={3} step={formData.step} />
        <SideBarNum i={4} step={formData.step} />
      </ul>
      {/* <!-- Sidebar start --> */}
      {/* Step 1 Your info Step 2 Select plan Step 3 Add-ons Step 4 Summary */}
      {/* <!-- Sidebar end --> */}
    </div>
  );
};

function SideBarNum({ i, step }) {
  return (
    <li className="sidebar">
      <p className={`sidebar-num ${step === i && "sidebar-num-active"}`}>{i}</p>
    </li>
  );
}
