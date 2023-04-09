import { Box } from "@mui/material";
import React, { useState } from "react";
import SingleItem from "./SingleItem";

const dummyMachines = [
  { name: "Mumbai" },
  { name: "Pune" },
  { name: "Raipur" },
  { name: "Delhi" },
  { name: "Bangalore" },
];
const dummyEmployees = [
  { name: "Raju" },
  { name: "Shayam" },
  { name: "Shital" },
  { name: "Langotiya" },
  { name: "Mara hua jeet" },
];

const Container = (props) => {
  const [showMachines, setShowMachines] = useState(true);

  const onSelectMachinesHandler = () => {
    setShowMachines(true);
  };

  const onSelectEmployeesHandler = () => {
    setShowMachines(false);
  };
  return (
    <Box sx={{ padding: "10px" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          marginBottom: "10px",
        }}
      >
        <Box
          onClick={onSelectMachinesHandler}
          sx={{
            color: showMachines ? "white" : "black",
            backgroundColor: showMachines ? "black" : "white",
            borderRadius: "10px 10px 0px 0px",
            width: "50%",
            height: "30px",
            margin: "2px",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            padding: "5px 10px",
            "&:hover": {
              backgroundColor: "black",
              cursor: "pointer",
              color: "white",
            },
          }}
        >
          Machines
        </Box>
        <Box
          onClick={onSelectEmployeesHandler}
          sx={{
            backgroundColor: !showMachines ? "black" : "white",
            color: !showMachines ? "white" : "black",
            borderRadius: "10px 10px 0px 0px",

            width: "50%",
            height: "30px",
            margin: "2px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px 10px",
            "&:hover": {
              backgroundColor: "black",
              cursor: "pointer",
              color: "white",
            },
          }}
        >
          Employees
        </Box>
      </Box>
      <p>{showMachines ? "All Machines" : "All Employees"}</p>
      <>
        {showMachines ? (
          <div>
            {dummyMachines.map((item) => {
              return <SingleItem item={item} />;
            })}
          </div>
        ) : (
          <div>
            {dummyEmployees.map((item) => {
              return <SingleItem item={item} />;
            })}
          </div>
        )}
      </>
    </Box>
  );
};

export default Container;
