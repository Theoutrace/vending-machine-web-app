import React from "react";
import "./AdminDashboard.css";
import { Button, Box, Typography } from "@mui/material";
import CreateMachine from "../../../components/create machine form/CreateMachine";
import CreateEmployee from "../../../components/create employee form/CreateEmployee";
import Transactions from "../../../components/transactions/Transactions";
import Container from "../../../components/machines and employees/Container";

const AdminDashboard = () => {
  return (
    <div className="AdminDashboard-outer-das">
      <Box
        sx={{
          backgroundColor: "white",
          margin: "0px",
          height: "100%",
          overflowY: "scroll",
          padding: "0px 20px",
          paddingTop: "80px",
          paddingBottom: "20px",
          width: "15%",
          color: "black",
          boxShadow:
            "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
        }}
      >
        <Box sx={{ marginBottom: "200px" }}>
          <CreateMachine />
          <CreateEmployee />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#DBDBDB",
          margin: "0px",
          height: "100%",
          width: "85%",
        }}
      >
        <Box
          sx={{
            backgroundColor: "purple",
            height: "50px",
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            paddingRight: "80px",
          }}
        >
          <Typography sx={{ color: "white", marginRight: "20px" }}>
            Quick Filters
          </Typography>
          <Button
            sx={{
              backgroundColor: "white",
              height: "30px",
              margin: "5px",
              borderRadius: "20px",
              padding: "5px 20px",
              "&:hover": {
                backgroundColor: "#a4ffdc",

                color: "black",
              },
            }}
          >
            Failed
          </Button>
          <Button
            sx={{
              backgroundColor: "white",
              height: "30px",
              margin: "5px",
              borderRadius: "20px",
              padding: "5px 20px",
              "&:hover": {
                backgroundColor: "#a4ffdc",
                color: "black",
              },
            }}
          >
            Success
          </Button>
          <Button
            sx={{
              backgroundColor: "white",
              height: "30px",
              margin: "5px",
              borderRadius: "20px",
              padding: "5px 20px",
              "&:hover": {
                backgroundColor: "#a4ffdc",
                color: "black",
              },
            }}
          >
            Select Company
          </Button>
          <Button
            sx={{
              backgroundColor: "red",
              height: "30px",
              color: "white",
              margin: "5px",
              borderRadius: "20px",
              padding: "5px 20px",
              "&:hover": {
                backgroundColor: "#a4ffdc",
                color: "black",
              },
            }}
          >
            Clear
          </Button>
        </Box>
        <Box
          sx={{ backgroundColor: "#DBDBDB", height: "100%", display: "flex" }}
        >
          <Box
            sx={{
              backgroundColor: "#DBDBDB",
              margin: "0px",
              height: "100%",
              width: "30%",
              borderRight: "2px solid #f9f9f9",
            }}
          >
            <Container />
          </Box>
          <Box
            sx={{
              backgroundColor: "#DBDBDB",
              margin: "0px",
              height: "100%",
              width: "70%",
            }}
          >
            <Transactions />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default AdminDashboard;
