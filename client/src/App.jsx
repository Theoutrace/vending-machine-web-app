import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import EmployeeUI from "./pages/employee/EmployeeUI";
import Admin from "./pages/admin/Admin";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    (async function getAllMachines() {
      console.log("getting all machines");
      const response = await axios.get(`http://localhost:3000/allMachines`);
      console.log(response);

      /**
      *   const locations = [
            { name: "Mumbai", machineId: "m1" },
            { name: "Pune", machineId: "m2" },
            { name: "Indore", machineId: "m3" },
            { name: "Raipur", machineId: "m4" },
          ];
      */
    })();
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<EmployeeUI />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
