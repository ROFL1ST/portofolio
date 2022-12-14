import React from "react";
import Lottie from "react-lottie";
import laptop from "../../assets/json/63487-programming-computer.json";
export default function Home({
  textEnter,
  textLeave,
  setCursorColor,
  socialEnter,
}) {
  const defaultOpt = {
    loop: true,
    autoPlay: true,
    animationData: laptop,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
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
              setCursorColor("#FFD700");
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
        className="w-full h-full  flex justify-center flex-col items-start py-20 pb-36 px-20 gap-y-20 bg-[#222222]"
      >
        {/* title */}
        <div className="w-[15%]">
          <h1 className="font-bold text-white text-5xl">
            Learn <br /> About Me
          </h1>
          <div className="relative">
            <div className="p-2 top-0 left-[256px] rounded-full bg-[#FFD700] absolute"></div>
            <div className="pt-2 border-b   border-[#FFD700]"></div>
          </div>
        </div>
        {/* title */}
        <div className="flex justify-between items-center w-full">
          <div className="w-1/4 items-start justify-start flex flex-col gap-y-5 ">
            <h1 className="text-white font-bold text-3xl ">Hi, Im Danendra</h1>
            <p className="font-bold text-white text-base">
              I’m a Front End Developer and Android Developer based on Jakarta.
              I’m here to help making your dream comes true
            </p>
            <p className="font-bold text-white text-base mb-20">
              I’m a Front End Developer and Android Developer based on Jakarta.
              I’m here to help making your dream comes true
            </p>
            <h1 className="text-white font-bold text-3xl ">Why Choose Me?</h1>
            <p className="font-bold text-white text-base">
              I’m a Front End Developer and Android Developer based on Jakarta.
              I’m here to help making your dream comes true
            </p>
            <p className="font-bold text-white text-base">
              I’m a Front End Developer and Android Developer based on Jakarta.
              I’m here to help making your dream comes true
            </p>
          </div>
          <div className="w-2/5 h-full items-center flex justify-center my-auto">
            <Lottie options={defaultOpt}></Lottie>
          </div>
        </div>
      </div>
    </>
  );
}
