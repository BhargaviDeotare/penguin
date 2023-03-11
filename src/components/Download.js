import React from "react";
import DownloadAds from "./DownloadAds";

function Download() {
  return (
    <div className="flex flex-col items-center justify-start px-[5rem] bg-[#bae6fd] h-[48rem] pt-[18rem] mt-[-10rem] relative z-[0] rounded-b-[5rem]">
      {/* tild icon or path icon */}
      <img
        src={require("../images/Path 318.png")}
        alt=""
        className="w-[5rem]"
      />
      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>Services</span>
        <span>
          <b>
            QA Leadership <br /> DevOps Services
            <br /> Mobile Devlopment
          </b>
        </span>
        <span className="text-[2rem] text-gray-400 px-[15rem] text-center mt-[1rem]">
          Test Automation Services.
        </span>
      </div>
      {/* dowload ads */}
    </div>
  );
}

export default Download;
