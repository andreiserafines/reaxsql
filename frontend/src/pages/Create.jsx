import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Create() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    address: "",
  });

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/create", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-md bg-gray-50">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl text-center text-gray-800 mb-6">
          Add Personnel
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              type="text"
              placeholder="Full Name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              type="email"
              placeholder="Email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Address
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              type="text"
              placeholder="Address"
              onChange={(e) =>
                setValues({ ...values, address: e.target.value })
              }
              required
            />
          </div>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white py-2 px-4 transition">
            Create Personnel
          </button>
        </form>
      </div>
    </div>
  );
}
