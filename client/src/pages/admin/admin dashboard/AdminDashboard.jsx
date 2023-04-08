import React from "react";
import "./AdminDashboard.css";
import { Box } from "@mui/material";
import CreateMachine from "../../../components/create machine form/CreateMachine";
import CreateEmployee from "../../../components/create employee form/CreateEmployee";

const AdminDashboard = () => {
  return (
    <div className="AdminDashboard-outer-das">
      <Box
        sx={{
          backgroundColor: "white",
          margin: "0px",
          height: "100%",
          padding: "0px 20px",
          paddingTop: "80px",
          paddingBottom: "20px",
          width: "15%",
          color: "black",
          boxShadow:
            "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
        }}
      >
        <CreateMachine />
        <CreateEmployee />
      </Box>
      <Box
        sx={{
          backgroundColor: "#DBDBDB",
          margin: "0px",
          height: "100%",
          width: "85%",
        }}
      >
        <Box sx={{ backgroundColor: "purple", height: "50px" }}>Filters</Box>
        <Box
          sx={{ backgroundColor: "#DBDBDB", height: "100%", display: "flex" }}
        >
          <Box
            sx={{
              backgroundColor: "#DBDBDB",
              margin: "0px",
              height: "100%",
              width: "20%",
              borderRight: "2px solid #f9f9f9",
            }}
          >
            Machines and Employees
          </Box>
          <Box
            sx={{
              backgroundColor: "#DBDBDB",
              margin: "0px",
              height: "100%",
              width: "80%",
            }}
          >
            Transactions
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default AdminDashboard;
