import React, { useState } from "react";
import validation from "./Validation";
import { useNavigate } from "react-router-dom";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Login() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    password: "",
  });

  const [errors, setError] = useState({});

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    //e.preventDefault();
    let validationResponse = validation(values);
    setError(validationResponse);
    if (Object.keys(validationResponse).length === 0) {
      navigate("/dashboard");
    }
  }
  return (

    <div class="container">
      <div id="login-form">
        <h1><LockOpenIcon />Login</h1>
        <br />
        <div class="input-control">
          <TextField id="outlined-basic" name="name" label="UserName" variant="outlined" type="text" value={values.name} onChange={handleChange} />

          {errors.name && (
            <p style={{ color: "red", fontSize: "13px" }}>{errors.name}</p>
          )}
          <div class="error"></div>
        </div>
        <div class="input-control">
          <TextField id="outlined-basic" name="password" label="Password" variant="outlined" type="password" value={values.password} onChange={handleChange} />

          {errors.password && (
            <p style={{ color: "red", fontSize: "13px" }}>
              {errors.password}
            </p>
          )}
          <div class="error"></div>
        </div>
        <Button variant="contained"
          type="submit"
          className="login-button"
          onClick={() => handleSubmit()}>
          Register
        </Button>
      </div>
    </div>
  );
}

