import React from "react";
import "./SingleTransaction.css";

const SingleTransaction = (props) => {
  return <div className="SingleTransaction-outer-dv">{props.item.status}</div>;
};

export default SingleTransaction;
