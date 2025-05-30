import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/list");
        } else {
          alert(res.data.Error);  // Display the actual error
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col space-y-2">
      <h1>LOGIN PAGE</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          autoComplete="off"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />

        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
