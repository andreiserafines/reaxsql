import React from "react";
import DarkModeToggler from "./DarkModeToggler";

export function Navbar() {
  return (
    <div className="">
      <div className="flex items-center justify-between">

        <div className="">
          <DarkModeToggler />
        </div>
      </div>
    </div>
  );
}
