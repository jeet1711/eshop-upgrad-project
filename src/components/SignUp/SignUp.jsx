import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { pink } from "@mui/material/colors";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./SignUp.css";
import React, { useState } from "react";

const SignUp = () => {
  const [signupInfo, setSignupInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
  });
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [contactError, setContactError] = useState("");

  const isValidForm = () => {
    let isValid = true;
    if (signupInfo.firstname === undefined || signupInfo.firstname === "") {
      setFirstnameError("Please enter firstname");
      isValid = false;
    }
    if (signupInfo.lastname === undefined || signupInfo.lastname === "") {
      setLastnameError("Please enter lastname");
      isValid = false;
    }
    if (signupInfo.email === undefined || signupInfo.email === "") {
      setEmailError("Enter a valid Email");
      isValid = false;
    }
    if (signupInfo.password === undefined || signupInfo.password === "") {
      setPasswordError("Please enter a password");
      isValid = false;
    }
    if (
      signupInfo.confirmPassword === undefined ||
      signupInfo.confirmPassword === ""
    ) {
      setConfirmPasswordError("Please confirm your password");
      isValid = false;
    }
    if (signupInfo.contact === undefined || signupInfo.contact === "") {
      setContactError("Please enter a contact number");
      isValid = false;
    }
    return isValid;
  };

  const isPasswordMatch = () => {
    if (signupInfo.password === signupInfo.confirmPassword) {
      return true;
    }
    return false;
  };

  const clearErrorState = (event) => {
    if (event.target.name === "firstname") {
      setFirstnameError("");
    } else if (event.target.name === "lastname") {
      setLastnameError("");
    } else if (event.target.name === "email") {
      setEmailError("");
    } else if (event.target.name === "password") {
      setPasswordError("");
    } else if (event.target.name === "confirmPassword") {
      setConfirmPasswordError("");
    } else if (event.target.name === "contact") {
      setContactError("");
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    clearErrorState(event);

    setSignupInfo({
      ...signupInfo,
      [event.target.name]: value,
    });
    console.log(signupInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidForm()) {
      if (isPasswordMatch()) {
        alert("user added");
      } else {
        alert("password mismatch");
      }
    } else {
        alert("fields empty");
    }
  };
  return (
    <div className="signup-container">
      <NavBar UserPage={false} />
      <form className="signup-form">
        <div className="signup-icon">
          <AccountCircleIcon fontSize="large" sx={{ color: pink[500] }} />
        </div>
        <div className="signup-title">
          <span>Sign Up</span>
        </div>
        <div className="login-input">
          <TextField
            label="First Name"
            required
            fullWidth
            onChange={handleChange}
            error={firstnameError !== "" ? true : false}
            helperText={firstnameError}
            name="firstname"
          />
        </div>
        <div className="login-input">
          <TextField
            label="Last Name"
            required
            fullWidth
            onChange={handleChange}
            error={lastnameError !== "" ? true : false}
            helperText={lastnameError}
            name="lastname"
          />
        </div>
        <div className="login-input">
          <TextField
            label="Email Address"
            required
            fullWidth
            onChange={handleChange}
            error={emailError !== "" ? true : false}
            type={"email"}
            helperText={emailError}
            name="email"
          />
        </div>
        <div className="login-input">
          <TextField
            label="Password"
            type="password"
            required
            fullWidth
            onChange={handleChange}
            error={passwordError !== "" ? true : false}
            helperText={passwordError}
            name="password"
          />
        </div>
        <div className="login-input">
          <TextField
            label="Confirm Password"
            type="password"
            required
            fullWidth
            name="confirmPassword"
            onChange={handleChange}
            error={confirmPasswordError !== "" ? true : false}
            helperText={confirmPasswordError}
          />
        </div>
        <div className="login-input">
          <TextField
            label="Contact Number"
            required
            fullWidth
            name="contact"
            onChange={handleChange}
            error={contactError !== "" ? true : false}
            helperText={contactError}
          />
        </div>
        <div className="signup-btn">
          <input
            type="submit"
            className="btn-submit"
            value="SIGN UP"
            onClick={handleSubmit}
          />
          <span className="login-link">
            <Link to="/login">Already have an account? Sign In</Link>
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

export default SignUp;
