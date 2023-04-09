import React, { useState } from "react";
import "./SingleItem.css";
import removeIcon from "./images/remove.png";

const SingleItem = (props) => {
  const [showOptions, setShowOptions] = useState(false);
  const showOptionsHandler = () => {
    setShowOptions(true);
  };
  const hideOptionshandler = () => {
    setShowOptions(false);
  };

  //remove Item
  const removeItemhandler = () => {
    console.log("Removed Item: ", props.item);
  };
  return (
    <div
      className="SingleItem-outer-dv-sn"
      onMouseEnter={showOptionsHandler}
      onMouseLeave={hideOptionshandler}
    >
      <h2>{props.item.name}</h2>
      {showOptions && (
        <img src={removeIcon} alt="" onClick={removeItemhandler} />
      )}
    </div>
  );
};

export default SingleItem;
