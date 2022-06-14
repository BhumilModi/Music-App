import React from "react";
import CenterMenu from "./CenterMenu";

import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

import { BsLinkedin } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";

export const Footer = () => {
  const SocialStyle = "rounded-full border-2 border-whit p-2 mr-[5rem]";
  return (
    <div className=" footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[35rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
      <CenterMenu />
      {/* Social icons */}
      <div className="flex w-[100%] justify-center mt-14">
        <div className={SocialStyle}>
          <FaFacebookSquare />
        </div>{" "}
        <div className={SocialStyle}>
          <FaTwitterSquare />
        </div>{" "}
        <div className={SocialStyle}>
          <AiFillYoutube />
        </div>{" "}
        <div className={SocialStyle}>
          <BsLinkedin />
        </div>
      </div>
      {/* detail */}
      <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
        Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
        Vestibulum ullamcorper volutpat varius.
      </span>
    </div>
  );
};

export default Footer;
