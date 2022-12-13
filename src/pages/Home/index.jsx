import gsap from "gsap";
import React from "react";

export default function Home({
  textEnter,
  textLeave,
  setCursorColor,
  socialEnter,
}) {
  return (
    <>
      <div className="w-full h-screen flex justify-center flex-col items-center py-20 px-10 gap-y-48">
        <div className="flex flex-col  mb-10  text-white justify-center items-center text-center  font-bold">
          <h1
            onMouseEnter={() => {
              textEnter();
            
            }}
            onMouseLeave={() => {
              textLeave();
              setCursorColor("#FFD700")
            }}
            className=" lg:text-6xl text-4xl"
          >
            Make Your Website
          </h1>
          <h1
            onMouseEnter={() => {
              textEnter();
            }}
            onMouseLeave={textLeave}
            className=" lg:text-6xl text-4xl mb-10"
          >
            Or App With Us
          </h1>
          <p className="w-3/4 lg:text-base text-xs">
            Design Your Imaginary Website or Application and Build It With Me
          </p>
        </div>
        <div className="lg:p-40 p-32  rounded-full  absolute top-72  z-20 bg-gradient-to-t from-[#D9D9D9]  opacity-50  "></div>

        <div
          onMouseEnter={() => {
            socialEnter();
          }}
          onMouseLeave={() => {
            textLeave();
          }}
          className="p-2 text-white rounded-full bg-[#FFD700] hover:text-[#181920]  hover:translate-y-1 ease-in-out transition hover:scale-110"
        >
          <a href="#about">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
          </a>
        </div>
      </div>
      {/* About Me */}
      <div
        id="about"
        className="w-full h-full  flex justify-center flex-col items-center py-20 px-10 gap-y-48 bg-[#D9D9D9] opacity-10"
      ></div>
    </>
  );
}
