import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function CreateCredentials() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/user_credentials', values)
    .then((response) => {
      console.log(response);
      navigate('/list');
    })
    .catch((error) => console.log(error));
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit} className="flex gap-3">
        <label htmlFor="">Username</label>
        <input
          className="border"
          type="text"
          onChange={(e) => setValues({ ...values, username: e.target.value })}
        />

        <label htmlFor="">Email</label>
        <input
          className="border"
          type="email"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />

        <label htmlFor="">Password</label>
        <input
          className="border"
          type="password"
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />

        <button className="border bg-gray-300">Submit</button>
      </form>
    </div>
  );
}
