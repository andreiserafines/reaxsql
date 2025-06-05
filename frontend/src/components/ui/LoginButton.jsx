// components/LoginButton.jsx
import React from "react";

export function LoginButton({ loading }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition-all duration-200 flex justify-center items-center gap-2"
    >
      {loading ? (
        <>
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Logging in...
        </>
      ) : (
        "Login"
      )}
    </button>
  );
}
