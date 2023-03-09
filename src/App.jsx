import { useState, createContext } from "react";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { Steps } from "./components/Steps";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";

export const DataContext = createContext(null);

function App() {
  const [formData, setFormData] = useState({
    step: 1,
    name: "",
    email: "",
    phone: "",
    billing: "mo",
    plan: "",
  });
  console.log(formData);
  const stepArr = [<Step1 />, <Step2 />, <Step3 />, <Step4 />, <Step5 />];
  return (
    <main className="App">
      <DataContext.Provider value={{ formData, setFormData }}>
        <Sidebar step={formData.step} />
        {stepArr[formData.step - 1]}
        {formData.step !== 5 && <Steps />}
      </DataContext.Provider>
    </main>
  );
}

export default App;
