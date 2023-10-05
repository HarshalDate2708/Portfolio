import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
      return (
        <div id="Footer" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
          <div className=" bg-black-100 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
            <h2
        data-aos="zoom-out"
         className=" font-bold text-5xl sm:text-3xl">Let's Connect</h2>
        <div className=" flex items-center justify-center gap-10 lg:gap-10 sm:gap-5">
              <a
          data-aos="fade-up" data-aos-duration="1000"
            href="https://www.linkedin.com/in/harshal-date-b233441b1"
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
                <FaLinkedin className=" text-white text-3xl hover:scale-125 hover:text-[#804dee]  cursor-pointer" />
          </a>
          <a
          data-aos="fade-up" data-aos-duration="1200"
            href="https://github.com/HarshalDate2708"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
                <FaGithub className=" text-white text-3xl hover:scale-125 hover:text-[#804dee]  cursor-pointer" />
          </a>
          <a
          data-aos="fade-up" data-aos-duration="1400"
            href="https://www.instagram.com"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
                <RiInstagramFill className=" text-white text-3xl hover:scale-125 hover:text-[#804dee]  cursor-pointer" />
          </a>
        </div>
        <div className="sm:text-[12px]">
              | Copyright &copy; <span>2023 Harshal Date </span> All rights reserved
          <a href="#"></a> |
        </div>
      </div>
    </div>
  );
};

export default Footer;