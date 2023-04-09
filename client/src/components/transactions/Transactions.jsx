import React from "react";
import "./Transactions.css";
import SingleTransaction from "./SingleTransaction";
const DummyTrasnsactions = [
  { status: "Success" },
  { status: "failed" },
  { status: "Success" },
  { status: "Success" },
];

const Transactions = () => {
  return (
    <div className="Transactions-outer-cls">
      {DummyTrasnsactions.map((item) => {
        return <SingleTransaction item={item} />;
      })}
    </div>
  );
};

export default Transactions;
