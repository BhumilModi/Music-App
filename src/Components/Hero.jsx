import React from "react";
import { useState } from "react";
import DownloadAds from "./DownloadAds";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

function Hero() {
  const [elementVisible, setElementVisible] = useState(false);
  const bg = {
    true: {
      left: "7rem",
    },
    false: {
      left: "19rem",
    },
  };
  const musicPlayer = {
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
  const heart = {
    true: {
      left: "9rem",
    },
    false: {
      left: "12.5rem",
    },
  };

  return (
    <VisibilitySensor
      onChange={(isVisible) => setElementVisible(isVisible)}
      minTopValue={300}
    >
      <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]">
        <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
          <span>Experience The</span>{" "}
          <span>
            <b>Best Quality MUSIC</b>
          </span>
          <span className="text-[15px] text-[#525D6E]">
            Donec laoreet nec velit vitae aliquam. Ut quis tincidunt purus.
            <br />
            Suspendisse in leo non risus tincidunt lobortis.
          </span>
          <div>
            <span className="text-[13px]">Download now on IOS or Android</span>
            <DownloadAds />
          </div>
        </div>
        <div className="images relative w-[50%]">
          <motion.img
            transition={{ duration: 1, type: "ease-out" }}
            variants={bg}
            animate={`${elementVisible}`}
            src={require("../img/backgraphics.png")}
            alt=""
            className="absolute top-[-8rem] left-[19rem]"
          />
          <img
            src={require("../img/p 1.png")}
            alt=""
            className="absolute top-[-15rem] left-[13rem] h-[34rem]"
          />
          <motion.img
            variants={musicPlayer}
            animate={`${elementVisible}`}
            transition={{
              duration: 1,
              type: "ease-out",
            }}
            src={require("../img/p 2.png")}
            alt=""
            className="absolute top-[94px] left-[235px] w-[175px]"
          />
          <motion.img
            variants={rect}
            animate={`${elementVisible}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src={require("../img/p 3.png")}
            alt=""
            className="absolute top-[12rem] left-[13rem] w-[5rem]"
          />
          <motion.img
            variants={heart}
            animate={`${elementVisible}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src={require("../img/p 4.png")}
            alt=""
            className="absolute top-[12rem] left-[12.5rem] w-[5rem]"
          />
        </div>
      </div>
    </VisibilitySensor>
  );
}

export default Hero;
