import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import EmployeeUI from "./pages/employee/EmployeeUI";
import Admin from "./pages/admin/Admin";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function App() {
  const adminLogin = useSelector((state) => state.admin.adminLogin);
  useEffect(() => {
    (async function getAllMachines() {
      console.log("getting all machines");
      const response = await axios.get(`http://localhost:3000/allMachines`);
      console.log(response);
    })();
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<EmployeeUI />} />
        {!adminLogin && (
          <Route path="/admin" element={<Navigate to="/adminlogin" />} />
        )}
        <Route path="/adminLogin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
