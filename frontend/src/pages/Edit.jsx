import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    branch: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3001/read/` + id) // Update URL here
      .then((res) => {
        console.log("Fetched data:", res.data);
        setValues({
          name: res.data.name || "",
          branch: res.data.branch || "",
          email: res.data.email || "",
          address: res.data.address || "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/update/" + id, values)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="">
      <div className="">
        <h2 className="text-base font-semibold text-gray-800 mb-6">
          Update Personnel
        </h2>
        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 mb-1">
              Full Name
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              type="text"
              value={values.name}
              placeholder="Full Name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">
              Branch
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              type="text"
              value={values.branch}
              placeholder="Branch"
              onChange={(e) => setValues({ ...values, branch: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">
              Email
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              type="email"
              value={values.email} // Set the value from the state dat
              placeholder="Email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">
              Address
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              type="text"
              value={values.address}
              placeholder="Address"
              onChange={(e) =>
                setValues({ ...values, address: e.target.value })
              }
              required
            />
          </div>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white py-2 px-4 transition">
            Update Details
          </button>
        </form>
      </div>
    </div>
  );
}
