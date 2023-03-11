import { React, useState } from "react";
import DownloadAds from "./DownloadAds";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

function Hero() {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "7rem",
    },
    false: {
      left: "19rem",
    },
  };
  const box = {
    true: {
      left: "295px",
    },
    false: {
      left: "235px",
    },
  };
  const rect = {
    true: {
      left: "11rem",
    },
    false: {
      left: "13rem",
    },
  };
  const recycle = {
    true: {
      left: "2rem",
    },
    false: {
      left: "8.5rem",
    },
  };
  return (
    <VisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      minTopValue={300}
    >
      <div className="wrapper bg-gradient-to-r from-indigo-500 flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]">
        {/* left side */}
        <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
          <span>QA PENGUIN</span>{" "}
          <span>
            <b>Automation Solutions for Your Test Execution!</b>
          </span>
          <span className="text-[15px] text-[#000000]">
            <b>
              Our Automation Test methodology and framework are shaped to suit
              our clients by selecting right testing tools and practices. Our
              offerings range from Test Architecture to Test execution steps.
            </b>
          </span>
          {/* download ads */}
          <div>
            <span className="text-[13px]">Customers</span>
            <DownloadAds />
          </div>
        </div>
        {/* right side */}
        <div className="images relative w-[50%]">
          <motion.img
            variants={bg}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out" }}
            src={require("../images/bggg.png")}
            alt=""
            className="absolute top-[-12rem] left-[9rem] border-[2px] rounded-[10px]"
          />
          <img
            src={require("../images/ada.png")}
            alt=""
            className="absolute top-[-2rem] h-[18rem] left-[1rem] border-[2px] rounded-[10px]"
          />
          <motion.img
            variants={box}
            animate={`${elementIsVisible}`}
            transition={{
              duration: 1,
              type: "ease-out",
            }}
            src={require("../images/ATT.png")}
            alt=""
            className="absolute left-[235px] top-[94px] w-[175px] border-[2px] rounded-[10px]"
          />
          <motion.img
            variants={rect}
            animate={`${elementIsVisible}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src={require("../images/QA.png")}
            alt=""
            className="absolute w-[5rem] left-[13rem] top-[12rem] rounded-[10px]"
          />
          <motion.img
            variants={recycle}
            animate={`${elementIsVisible}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src={require("../images/QAT.png")}
            alt=""
            className="absolute w-[5rem] left-[12.5rem] top-[12rem]"
          />
        </div>
      </div>
    </VisibilitySensor>
  );
}

export default Hero;
