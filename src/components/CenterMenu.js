import React from "react";
import { Link } from "react-router-dom";

function CenterMenu() {
  const liStyle = "mr-[3rem] hover:cursor-pointer";
  return (
    <div className="menu flex">
      <div className="flex w-[100%] justify-between">
        <li className={liStyle}>Home</li>
        <li className={liStyle}>About</li>
        <li className={liStyle}>Services</li>
      </div>
    </div>
  );
}

export default CenterMenu;
