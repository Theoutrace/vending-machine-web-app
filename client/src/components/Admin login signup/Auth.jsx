import { Box, Button } from "@mui/material";
import React, { useRef, useState } from "react";
import "./Auth.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AdminActions } from "../../Store/reducers/admin-reducer";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState(false);
  const nameInpRef = useRef();
  const emailInpRef = useRef();
  const passInpRef = useRef();
  const history = useNavigate();

  const authFormSubmitHandler = async (e) => {
    e.preventDefault();

    let endPoint = loginForm
      ? "http://localhost:3000/user/login"
      : "http://localhost:3000/user/signup";

    const bodyObj = {
      name: !loginForm && nameInpRef.current.value,
      email: emailInpRef.current.value,
      password: passInpRef.current.value,
    };
    // const response = await axios.post(endPoint, bodyObj, {
    //   headers: { "Content-Type": "application/json" },
    // });
    // console.log(response);
    dispatch(AdminActions.adminLogin(true));
    history("/admin");
  };
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "4px",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      }}
    >
      <h2 className="cls-register-login-txt-above-frm">
        {!loginForm ? "Register" : "Login"}
      </h2>
      <form className="form-login-admin" onSubmit={authFormSubmitHandler}>
        {!loginForm && <input placeholder="Name" ref={nameInpRef} />}
        <input placeholder="Email" ref={emailInpRef} />
        <input placeholder="Password" type="password" ref={passInpRef} />
        <Button
          sx={{
            width: "100%",
            border: "1px dashed grey",
            marginTop: "40px",
            "&:hover": {
              backgroundColor: "rgb(53, 82, 211)",
              border: "1px solid blue",
              color: "white",
            },
          }}
          type="submit"
        >
          {loginForm ? "Login" : "Register"}
        </Button>
      </form>
      <div className="dv-p-register-already-container-txt">
        {!loginForm ? "Already have an account?" : "Don't have an account? "}{" "}
        <p onClick={() => setLoginForm((p) => !p)}>
          {!loginForm ? "Login" : "Register"}
        </p>
      </div>
    </Box>
  );
};

export default Auth;
