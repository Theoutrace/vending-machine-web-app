import { Box } from "@mui/material";
import React from "react";

const SingleBox = (props) => {
  const onClickHandler = () => {
    props.onClickFunction(props.item);
  };
  return (
    <Box
      sx={{
        margin: "10px",
        width: "300px",
        backgroundColor: "black",
        textAlign: "center",
        borderRadius: "20px",
        color: "white",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "purple",
        },
      }}
      onClick={onClickHandler}
    >
      <h2>{props.item.name}</h2>
    </Box>
  );
};

export default SingleBox;
