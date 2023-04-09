import React from "react";
import "./Transactions.css";
import SingleTransaction from "./SingleTransaction";
const DummyTrasnsactions = [
  {
    _id: "a125435asd4587",
    status: true,
    machineId: "m2",
    employeeId: "E1",
    slotname: "Cola",
  },
  {
    _id: "a125435asd4588",
    status: false,
    machineId: "m1",
    employeeId: "E3",
    slotname: "Chips",
  },
  {
    _id: "a125435asd4589",
    status: true,
    machineId: "m3",
    employeeId: "E2",
    slotname: "Chips",
  },
  {
    _id: "a125435asd4590",
    status: true,
    machineId: "m2",
    employeeId: "E3",
    slotname: "Donut",
  },
];

const heading = {
  _id: "ID",
  status: "Status",
  machineId: "Machine ID",
  employeeId: "Employee ID",
  slotname: "Slot Name",
};

const Transactions = () => {
  return (
    <div className="Transactions-outer-cls">
      <SingleTransaction item={heading} status={heading.status} />
      <>
        {DummyTrasnsactions.map((item) => {
          return <SingleTransaction item={item} />;
        })}
      </>
    </div>
  );
};

export default Transactions;
