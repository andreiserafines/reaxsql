import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CircleUserRound } from "lucide-react";

export function Create() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    address: "",
    branch: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/create", values)
      .then((res) => {
        console.log(res);
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-5xl mx-4 lg:mx-auto rounded-md border border-gray-200 bg-white p-6 dark:bg-slate-800 dark:border-slate-700">
      <h2 className="text-base font-semibold text-slate-600 mb-6 px-1 dark:text-white flex items-center gap-2">
        Add Personnel
      </h2>

      <form onSubmit={handleSubmit} className="">
      
        <div className="grid grid-cols-3 items-center gap-5 mb-4">

          <div className="flex flex-row items-center border border-gray-200  rounded-sm">
            <label className="border-r border-gray-200 px-3 py-2.5 bg-gray-100" htmlFor="">
            <CircleUserRound size={20} className="text-slate-400"/></label>
            <input
              className="w-full font-semibold text-xs p-3 text-gray-700 dark:text-white dark:border-slate-600 focus:outline-none focus:ring-0 focus:ring-blue-500 focus:border-blue-500 transition"
              type="text"
              placeholder="Name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              required
            />
          </div>
          <div>
        
            <input
              className="w-full font-semibold text-xs py-3 px-3 text-gray-700 dark:text-white border border-gray-200 shadow-xs dark:border-slate-600 rounded focus:outline-none focus:ring-0 focus:ring-blue-500 focus:border-blue-500 transition"
              type="email"
              placeholder="Email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              required
            />
          </div>
          <div>
            
            <input
              className="w-full font-semibold text-xs py-3 px-3 text-gray-700 dark:text-white border border-gray-200 shadow-xs dark:border-slate-600 rounded focus:outline-none focus:ring-0 focus:ring-blue-500 focus:border-blue-500 transition"
              type="text"
              placeholder="Address"
              onChange={(e) => setValues({ ...values, address: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="">
          <button className="rounded-sm w-full justify-center bg-blue-600 hover:bg-blue-700 text-white transition py-3 font-semibold text-xs">
            Submit
          </button>
        </div>

      </form>
    </div>
  );
}
