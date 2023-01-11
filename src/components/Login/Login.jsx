import NavBar from "../NavBar/NavBar";
import { TextField } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { pink } from "@mui/material/colors";
import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    pass: "",
  });
  const [emailFieldError, setEmailFieldError] = useState("");
  const [passFieldError, setPassFieldError] = useState("");

  let navigate = useNavigate();

  const handleChange = (event) => {
    const value = event.target.value;
    if (event.target.name === "email") {
      setEmailFieldError("");
    } else {
      setPassFieldError("");
    }
    setLoginInfo({
      ...loginInfo,
      [event.target.name]: value,
    });
  };

  const isValidForm = () => {
    let isValid = true;
    if (loginInfo.email === undefined || loginInfo.email === "") {
      setEmailFieldError("Please enter valid email");
      isValid = false;
    }
    if (loginInfo.pass === undefined || loginInfo.pass === "") {
      setPassFieldError("Please enter Password");
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidForm()) {
      var data = require("../../assets/users/user-list.json");
      data.users.forEach((user) => {
        if (
          user.email === loginInfo.email &&
          user.password === loginInfo.pass
        ) {
          navigate("/userhome", {
            state: { user },
          });
        }
      });
    } else {
      console.log("fields empty");
    }
  };

  return (
    <div className="login-container">
      <NavBar UserPage={false} />
      <form className="login-form">
        <div className="signin-icon">
          <AccountCircleIcon fontSize="large" sx={{ color: pink[500] }} />
        </div>
        <div className="signin-title">
          <span>Sign In</span>
        </div>
        <div className="login-input">
          <TextField
            label="Email Address"
            type={"email"}
            onChange={handleChange}
            required
            name="email"
            fullWidth
            error={emailFieldError !== "" ? true : false}
            helperText={emailFieldError}
          />
        </div>
        <div className="login-input">
          <TextField
            label="Password"
            type="password"
            name="pass"
            onChange={handleChange}
            required
            fullWidth
            error={passFieldError !== "" ? true : false}
            helperText={passFieldError}
          />
        </div>
        <div className="login-btn">
          <input
            type="submit"
            className="btn-submit"
            value="SIGN IN"
            onClick={handleSubmit}
          />
          <span className="signup-link">
            <Link to="/signup">Don't have an account? Sign Up</Link>
          </span>
        </div>
        <div className="copyright">
          <span className="copyright-message">
            Copyright <span>&copy;</span>
            <a href="https://www.upgrad.com/">Upgrad</a> 2023
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
