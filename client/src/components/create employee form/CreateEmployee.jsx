import { Button } from "@mui/material";
import React, { useRef } from "react";
import "./CreateEmployee.css";
import axios from "axios";

const CreateEmployee = () => {
  const token = localStorage.getItem("token");
  const compName = useRef();
  const empName = useRef();
  const emailInp = useRef();
  const contactInp = useRef();
  const cardNum = useRef();
  const departName = useRef();
  const balInp = useRef();

  const onAddEmployeehandler = async (e) => {
    e.preventDefault();
    const empObj = {
      companyName: compName.current.value,
      employeeName: empName.current.value,
      contactNo: contactInp.current.value,
      cardNumber: cardNum.current.value,
      email: emailInp.current.value,
      department: departName.current.value,
      balance: balInp.current.value,
    };
    const response = await axios.post("API", empObj, {
      headers: { Authorization: token, "Content-Type": "application/json" },
    });

    console.log(response);
  };
  return (
    <form
      className="create-employee-form-outer"
      onSubmit={onAddEmployeehandler}
    >
      <h3>Add Employee</h3>
      <input placeholder="Company name" ref={compName} />
      <input placeholder="Employee Name" ref={empName} />
      <input placeholder="Card Number" ref={cardNum} />
      <input placeholder="Email" ref={emailInp} />
      <input placeholder="Contact Number" ref={contactInp} />
      <input placeholder="Department" ref={departName} />
      <input placeholder="Balance" ref={balInp} />
      <Button
        sx={{
          marginTop: "25px",
          color: "white",
          backgroundColor: "green",
          border: "1px dashed grey",
          "&:hover": {
            backgroundColor: "green",
            color: "white",
          },
        }}
        type="submit"
      >
        + Employee
      </Button>
    </form>
  );
};

export default CreateEmployee;
