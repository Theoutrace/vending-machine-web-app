import { Button } from "@mui/material";
import React, { useRef } from "react";
import "./CreateMachine.css";
import axios from "axios";

const CreateMachine = () => {
  const token = localStorage.getItem("token");
  const compName = useRef();
  const descInp = useRef();
  const insLoc = useRef();

  const onAddMachinehandler = async (e) => {
    e.preventDefault();
    const machineObj = {
      companyName: compName.current.value,
      description: descInp.current.value,
      installLocation: insLoc.current.value,
    };
    const response = await axios.post("API", machineObj, {
      headers: { Authorization: token, "Content-Type": "application/json" },
    });

    console.log(response);
  };
  return (
    <form className="create-machine-form-outer" onSubmit={onAddMachinehandler}>
      <h3>Add Machine</h3>
      <input placeholder="Company name" ref={descInp} />
      <textarea placeholder="Description" ref={descInp} />
      <input placeholder="Install Location" ref={insLoc} />
      <Button
        sx={{
          marginTop: "25px",
          backgroundColor: "green",
          color: "white",

          "&:hover": {
            backgroundColor: "green",
            color: "white",
          },
        }}
        type="submit"
      >
        + Machine
      </Button>
    </form>
  );
};

export default CreateMachine;
