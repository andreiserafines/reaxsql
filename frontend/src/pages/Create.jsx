import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CircleUserRound, Mail, MapPinHouse } from "lucide-react";

export function Create() {
  const [values, setValues] = useState({
    name: "",
    branch: "",
    email: "",
    password: "",
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

  const branches = ["Network", "Admin", "Billing", "Programmer"];

  return (
    <div className="max-w-5xl mx-4 lg:mx-auto rounded-md border border-gray-200 bg-white p-6 dark:bg-slate-800 dark:border-slate-700">
      <h2 className="text-base font-semibold text-slate-600 mb-6 px-1 dark:text-white flex items-center gap-2">
        Add Personnel
      </h2>

      <form onSubmit={handleSubmit} className="">

        <div className="grid grid-cols-3 items-center gap-5 mb-4">

          <div className="flex flex-row items-center rounded-sm shadow-xs">
            <label className="border border-gray-200 px-3 py-2.5 bg-gray-200 dark:bg-slate-600 dark:border-slate-600 rounded-tl-sm rounded-bl-sm" htmlFor="">
              <CircleUserRound size={20} className="text-slate-400" />
            </label>
            <input
              className="w-full rounded-tr-sm rounded-br-sm text-xs p-3 text-gray-800 dark:text-white border border-gray-200 dark:border-slate-600 focus:outline-none focus:ring-0 focus:ring-blue-500 focus:border-blue-500 transition"
              type="text"
              placeholder="Name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              required
            />
          </div>

          
          <div className="flex flex-row items-center rounded-sm shadow-xs">
            <label className="border border-gray-200 px-3 py-2.5 bg-gray-200 dark:bg-slate-600 dark:border-slate-600 rounded-tl-sm rounded-bl-sm" htmlFor="">
              <CircleUserRound size={20} className="text-slate-400" />
            </label>
            <input
              className="w-full rounded-tr-sm rounded-br-sm text-xs p-3 text-gray-800 dark:text-white border border-gray-200 dark:border-slate-600 focus:outline-none focus:ring-0 focus:ring-blue-500 focus:border-blue-500 transition"
              type="password"
              placeholder="Password"
              onChange={(e) => setValues({ ...values, password: e.target.value })}
              required
            />
          </div>

          <div className="flex flex-row items-center rounded-sm shadow-xs">
            <label className="border border-gray-200 px-3 py-2.5 bg-gray-200 dark:bg-slate-600 dark:border-slate-600 rounded-tl-sm rounded-bl-sm" htmlFor="">
              <Mail size={20} className="text-slate-400" /></label>
            <input
              className="w-full rounded-tr-sm rounded-br-sm text-xs p-3 text-gray-800 dark:text-white border border-gray-200 dark:border-slate-600 focus:outline-none focus:ring-0 focus:ring-blue-500 focus:border-blue-500 transition"
              type="text"
              placeholder="juandc@example.com"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              required
            />
          </div>

          <div className="flex flex-row items-center rounded-sm shadow-xs">
            <label className="border border-gray-200 px-3 py-2.5 bg-gray-200 dark:bg-slate-600 dark:border-slate-600 rounded-tl-sm rounded-bl-sm" htmlFor="">
              <MapPinHouse size={20} className="text-slate-400" /></label>
            <input
              className="w-full rounded-tr-sm rounded-br-sm text-xs p-3 text-gray-800 dark:text-white border border-gray-200 dark:border-slate-600 focus:outline-none focus:ring-0 focus:ring-blue-500 focus:border-blue-500 transition"
              type="text"
              placeholder="Hometown"
              onChange={(e) => setValues({ ...values, address: e.target.value })}
              required
            />
          </div>

          <div className="">
            <label htmlFor="">Select Branch:</label>
            <select value={values.branch} id="branch" onChange={(e) => setValues({ ...values, branch: e.target.value })} required>
              <option value="" disabled>Select a branch</option>
              {branches.map((branch, index) => (
                <option key={index} value={branch}>{branch}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="">
          <button className="rounded-sm w-full justify-center bg-blue-600 hover:bg-blue-700 text-white transition py-2.5 text-xs font-semibold">
            Submit
          </button>
        </div>

      </form>
    </div>
  );
}
