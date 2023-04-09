/**
{
    _id: "a125435asd4590",
    status: "Success",
    machineId: "m2",
    employeeId: "E3",
    slotname: "Donut",
}
*/

import React, { useState } from "react";
import "./SingleTransaction.css";
import { Box } from "@mui/material";
import removeIcon from "./images/remove.png";

const SingleTransaction = (props) => {
  const [showRemove, setShowRemove] = useState(false);
  const obj = props.item;
  const transactionRemovehandler = () => {
    console.log("Removed Transaction obj: ", props.item);
  };
  return (
    <div
      className={`SingleTransaction-outer-dv ${
        obj.status ? "success-cls" : "failed-cls"
      } ${props.status && "heading-cls"}`}
      onMouseEnter={() => setShowRemove(true)}
      onMouseLeave={() => setShowRemove(false)}
    >
      <Box sx={{ width: "20%", margin: "5px" }}>{obj._id}</Box>

      {props.status ? (
        <Box sx={{ width: "10%", margin: "5px" }}>Status</Box>
      ) : (
        <Box sx={{ width: "10%", margin: "5px" }}>
          {obj.status ? "Success" : "Failed"}
        </Box>
      )}
      <Box sx={{ width: "20%", margin: "5px" }}>{obj.employeeId}</Box>
      <Box sx={{ width: "20%", margin: "5px" }}>{obj.machineId}</Box>
      <Box sx={{ width: "10%", margin: "5px" }}>{obj.slotname}</Box>
      {showRemove && !props.status && (
        <img src={removeIcon} alt="" onClick={transactionRemovehandler} />
      )}
    </div>
  );
};

export default SingleTransaction;
