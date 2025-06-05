import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginButton } from "../components/ui/LoginButton";
import axios from "axios";

export function Login() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:3001/login", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          setTimeout(() => navigate("/home"), 2000);
        } else {
          alert(res.data.Error);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <div className="md:min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-3xl bg-white md:rounded-lg shadow-xl overflow-hidden">
        {/* Left side */}
        <div className="hidden md:flex flex-col justify-center items-center bg-white p-10 w-1/2 relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white to-green-100 rounded-bl-3xl" />
          <div className="text-center space-y-4 z-10 relative">
            <div className="absolute inset-x-0 -top-6 w-20 h-20 rounded-full bg-green-300 mx-auto" />
            <h2 className="text-2xl font-bold text-green-800 relative">Polarisphere.</h2>
            <p className="text-gray-500 [font-size:13.5px] pt-5 leading-snug">
              The social hub for Polaris—bringing people together through updates, events, and community.
            </p>
          </div>
          <div className="absolute -bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-white to-green-300 rounded-tr-full" />
        </div>

        {/* Right side */}
        <div className="w-full md:w-sm p-8 relative">
          <div className="absolute top-0 -left-0 w-20 h-20 bg-green-100 rounded-br-3xl" />
          <div className="py-10">
            <h2 className="text-xl font-semibold text-center text-gray-800">Welcome</h2>
            <p className="text-center text-gray-500 [font-size:13.5px] mb-6">Login to continue</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md bg-white [font-size:13.5px] focus:ring-2 focus:ring-green-500 outline-none"
                  onChange={(e) => setValues({ ...values, email: e.target.value })}
                  placeholder="Email or username"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <input
                  type="password"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md bg-white [font-size:13.5px] focus:ring-2 focus:ring-green-500 outline-none"
                  onChange={(e) => setValues({ ...values, password: e.target.value })}
                  placeholder="Password"
                />
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between [font-size:13.5px] text-gray-600">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox text-green-500" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-green-600 hover:underline">
                  Forgot password?
                </a>
              </div>

              <LoginButton loading={loading} />
            </form>

            {/* Footer */}
            <div className="mt-6 text-center [font-size:13.5px] text-gray-600">
              <p>
                Not registered yet?{" "}
                <a href="#" className="text-green-600 hover:underline">
                  Create your account
                </a>
              </p>
            </div>
            <div className="absolute -bottom-5 right-0 w-20 h-20 bg-green-200 rounded-tl-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
