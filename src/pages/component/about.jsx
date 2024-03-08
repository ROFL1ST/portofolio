import { Disclosure } from "@headlessui/react";
import React from "react";
import { Parallax } from "react-parallax";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import data from "../../assets/json/experience.json";
export default function About({
  setCursorColor,
  textEnter,
  textLeave,
  logoEnter,
}) {
  return (
    <>
      <Parallax strength={300}>
        <div
          id="about"
          className="w-full h-full bg-[#181920]  flex justify-center flex-col items-start py-32 pb-36 px-20 gap-y-10 "
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
          <div className=" flex flex-col  w-4/5">
            <p className="text-white font-semibold text-lg pb-20 w-11/12">
              Hi, I’m Danendra. I’m a Front End Developer and Android Developer
              based on Jakarta. As a recent computer science graduate with six
              months of experience at a startup company, I am excited to bring
              my coding skills and passion for problem-solving to a new team. I
              am looking for an opportunity to make a meaningful impact on the
              industry, and to continue learning and growing as a programmer.
            </p>
            <div className="lg:justify-between justify-center flex flex-col lg:flex-row w-full">
              <div className="w-1/3 left">
                <h1 className="text-white font-semibold text-2xl">
                  Experiences
                </h1>
                <div className="grid grid-rows-2 w-full gap-x-32 items-center">
                  {data.map((i, key) => (
                    <Experiences key={key} data={i} />
                  ))}
                </div>
              </div>
              <div className=" w-1/3">
                <h1 className="text-white font-semibold text-2xl">Skills</h1>
                <div className="grid grid-cols-4 relative gap-5 mt-10 ">
                  <div className="flex flex-col items-center justify-center">
                    <div className="kotak1 p-5 rounded-2xl bg-[#080E14]  flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        className="w-14 h-14 font-bold z-20"
                        viewBox="0 0 32 32"
                        onMouseEnter={() => {
                          logoEnter();
            
                          setCursorColor("#000000");
                        }}
                        onMouseLeave={() => {
                          textLeave();
                          setCursorColor("#FFD700");
                        }}
                      >
                        <circle cx="16" cy="15.974" r="2.5" fill="#00d8ff" />
                        <path
                          fill="#00d8ff"
                          d="M16 21.706a28.385 28.385 0 0 1-8.88-1.2a11.3 11.3 0 0 1-3.657-1.958A3.543 3.543 0 0 1 2 15.974c0-1.653 1.816-3.273 4.858-4.333A28.755 28.755 0 0 1 16 10.293a28.674 28.674 0 0 1 9.022 1.324a11.376 11.376 0 0 1 3.538 1.866A3.391 3.391 0 0 1 30 15.974c0 1.718-2.03 3.459-5.3 4.541a28.8 28.8 0 0 1-8.7 1.191Zm0-10.217a27.948 27.948 0 0 0-8.749 1.282c-2.8.977-4.055 2.313-4.055 3.2c0 .928 1.349 2.387 4.311 3.4A27.21 27.21 0 0 0 16 20.51a27.6 27.6 0 0 0 8.325-1.13C27.4 18.361 28.8 16.9 28.8 15.974a2.327 2.327 0 0 0-1.01-1.573a10.194 10.194 0 0 0-3.161-1.654A27.462 27.462 0 0 0 16 11.489Z"
                        />
                        <path
                          fill="#00d8ff"
                          d="M10.32 28.443a2.639 2.639 0 0 1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755 28.755 0 0 1 3.4-8.593a28.676 28.676 0 0 1 5.653-7.154a11.376 11.376 0 0 1 3.384-2.133a3.391 3.391 0 0 1 2.878 0c1.489.858 1.982 3.486 1.287 6.859a28.806 28.806 0 0 1-3.316 8.133a28.385 28.385 0 0 1-5.476 7.093a11.3 11.3 0 0 1-3.523 2.189a4.926 4.926 0 0 1-1.624.307Zm1.773-14.7a27.948 27.948 0 0 0-3.26 8.219c-.553 2.915-.022 4.668.75 5.114c.8.463 2.742.024 5.1-2.036a27.209 27.209 0 0 0 5.227-6.79a27.6 27.6 0 0 0 3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327 2.327 0 0 0-1.868.089A10.194 10.194 0 0 0 17.5 6.9a27.464 27.464 0 0 0-5.4 6.849Z"
                        />
                        <path
                          fill="#00d8ff"
                          d="M21.677 28.456c-1.355 0-3.076-.82-4.868-2.361a28.756 28.756 0 0 1-5.747-7.237a28.676 28.676 0 0 1-3.374-8.471a11.376 11.376 0 0 1-.158-4A3.391 3.391 0 0 1 8.964 3.9c1.487-.861 4.01.024 6.585 2.31a28.8 28.8 0 0 1 5.39 6.934a28.384 28.384 0 0 1 3.41 8.287a11.3 11.3 0 0 1 .137 4.146a3.543 3.543 0 0 1-1.494 2.555a2.59 2.59 0 0 1-1.315.324Zm-9.58-10.2a27.949 27.949 0 0 0 5.492 6.929c2.249 1.935 4.033 2.351 4.8 1.9c.8-.465 1.39-2.363.782-5.434A27.212 27.212 0 0 0 19.9 13.74a27.6 27.6 0 0 0-5.145-6.64c-2.424-2.152-4.39-2.633-5.191-2.169a2.327 2.327 0 0 0-.855 1.662a10.194 10.194 0 0 0 .153 3.565a27.465 27.465 0 0 0 3.236 8.1Z"
                        />
                      </svg>
                    </div>
                    <p className="text-white font-bold text-base mt-2">
                      React Js
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="kotak1 p-5 rounded-2xl bg-[#080E14] flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        className="w-14 h-14 font-bold z-20"
                        viewBox="0 0 32 32"
                        onMouseEnter={() => {
                          logoEnter();
            
                          setCursorColor("#000000");
                        }}
                        onMouseLeave={() => {
                          textLeave();
                          setCursorColor("#FFD700");
                        }}
                      >
                        <circle cx="16" cy="15.974" r="2.5" fill="#00d8ff" />
                        <path
                          fill="#00d8ff"
                          d="M16 21.706a28.385 28.385 0 0 1-8.88-1.2a11.3 11.3 0 0 1-3.657-1.958A3.543 3.543 0 0 1 2 15.974c0-1.653 1.816-3.273 4.858-4.333A28.755 28.755 0 0 1 16 10.293a28.674 28.674 0 0 1 9.022 1.324a11.376 11.376 0 0 1 3.538 1.866A3.391 3.391 0 0 1 30 15.974c0 1.718-2.03 3.459-5.3 4.541a28.8 28.8 0 0 1-8.7 1.191Zm0-10.217a27.948 27.948 0 0 0-8.749 1.282c-2.8.977-4.055 2.313-4.055 3.2c0 .928 1.349 2.387 4.311 3.4A27.21 27.21 0 0 0 16 20.51a27.6 27.6 0 0 0 8.325-1.13C27.4 18.361 28.8 16.9 28.8 15.974a2.327 2.327 0 0 0-1.01-1.573a10.194 10.194 0 0 0-3.161-1.654A27.462 27.462 0 0 0 16 11.489Z"
                        />
                        <path
                          fill="#00d8ff"
                          d="M10.32 28.443a2.639 2.639 0 0 1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755 28.755 0 0 1 3.4-8.593a28.676 28.676 0 0 1 5.653-7.154a11.376 11.376 0 0 1 3.384-2.133a3.391 3.391 0 0 1 2.878 0c1.489.858 1.982 3.486 1.287 6.859a28.806 28.806 0 0 1-3.316 8.133a28.385 28.385 0 0 1-5.476 7.093a11.3 11.3 0 0 1-3.523 2.189a4.926 4.926 0 0 1-1.624.307Zm1.773-14.7a27.948 27.948 0 0 0-3.26 8.219c-.553 2.915-.022 4.668.75 5.114c.8.463 2.742.024 5.1-2.036a27.209 27.209 0 0 0 5.227-6.79a27.6 27.6 0 0 0 3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327 2.327 0 0 0-1.868.089A10.194 10.194 0 0 0 17.5 6.9a27.464 27.464 0 0 0-5.4 6.849Z"
                        />
                        <path
                          fill="#00d8ff"
                          d="M21.677 28.456c-1.355 0-3.076-.82-4.868-2.361a28.756 28.756 0 0 1-5.747-7.237a28.676 28.676 0 0 1-3.374-8.471a11.376 11.376 0 0 1-.158-4A3.391 3.391 0 0 1 8.964 3.9c1.487-.861 4.01.024 6.585 2.31a28.8 28.8 0 0 1 5.39 6.934a28.384 28.384 0 0 1 3.41 8.287a11.3 11.3 0 0 1 .137 4.146a3.543 3.543 0 0 1-1.494 2.555a2.59 2.59 0 0 1-1.315.324Zm-9.58-10.2a27.949 27.949 0 0 0 5.492 6.929c2.249 1.935 4.033 2.351 4.8 1.9c.8-.465 1.39-2.363.782-5.434A27.212 27.212 0 0 0 19.9 13.74a27.6 27.6 0 0 0-5.145-6.64c-2.424-2.152-4.39-2.633-5.191-2.169a2.327 2.327 0 0 0-.855 1.662a10.194 10.194 0 0 0 .153 3.565a27.465 27.465 0 0 0 3.236 8.1Z"
                        />
                      </svg>
                    </div>
                    <p className="text-white font-bold text-base mt-2">
                      Next Js
                    </p>
                  </div>
                  <div className="flex flex-col text-center justify-center">
                    <div className="kotak1 p-5 rounded-2xl bg-[#080E14] flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        className="w-14 h-14 font-bold z-20"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 32 32"
                        onMouseEnter={() => {
                          logoEnter();
            
                          setCursorColor("#000000");
                        }}
                        onMouseLeave={() => {
                          textLeave();
                          setCursorColor("#FFD700");
                        }}
                      >
                        <path
                          fill="#40d0fd"
                          d="m15.383 18.316l3.361-3.274h8.349l-7.396 7.396l-4.314-4.122"
                        />
                        <path
                          fill="#41d0fd"
                          d="m4.907 16.125l4.199 4.299L27.093 2.287h-8.349L4.907 16.125z"
                        />
                        <path
                          fill="#1fbcfd"
                          d="m11.176 22.479l4.259 4.196l4.262-4.237l-4.314-4.122l-4.207 4.163z"
                        />
                        <path
                          fill="#095a9d"
                          d="m15.435 26.675l4.262-4.237l7.292 7.375h-8.396l-3.158-3.138z"
                        />
                        <path
                          fill="#0e5199"
                          d="m15.435 26.675l3.971-1.321l-1.338-1.297l-2.633 2.618z"
                        />
                      </svg>
                    </div>
                    <p className="text-white font-bold text-base mt-2">
                      Flutter
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="kotak1 p-5 rounded-2xl bg-[#080E14] flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        className="w-14 h-14 font-bold text-[#56954f] z-20"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                        onMouseEnter={() => {
                          logoEnter();
            
                          setCursorColor("#000000");
                        }}
                        onMouseLeave={() => {
                          textLeave();
                          setCursorColor("#FFD700");
                        }}
                      >
                        <path
                          fill="currentColor"
                          d="M11.998 24c-.321 0-.641-.084-.922-.247L8.14 22.016c-.438-.245-.224-.332-.08-.383c.585-.203.703-.25 1.328-.604c.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 0 0 .272 0l8.795-5.076a.277.277 0 0 0 .134-.238V6.921a.283.283 0 0 0-.137-.242l-8.791-5.072a.278.278 0 0 0-.271 0L3.075 6.68a.284.284 0 0 0-.139.241v10.15a.27.27 0 0 0 .139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745c-.508 0-.909 0-2.026-.551L2.28 18.675a1.856 1.856 0 0 1-.922-1.604V6.921c0-.659.353-1.275.922-1.603L11.075.236a1.925 1.925 0 0 1 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15a1.86 1.86 0 0 1-.924 1.604l-8.794 5.078c-.28.163-.599.247-.925.247zm7.101-10.007c0-1.9-1.284-2.406-3.987-2.763c-2.731-.361-3.009-.548-3.009-1.187c0-.528.235-1.233 2.258-1.233c1.807 0 2.473.389 2.747 1.607a.254.254 0 0 0 .247.199h1.141a.26.26 0 0 0 .186-.081a.257.257 0 0 0 .067-.196c-.177-2.098-1.571-3.076-4.388-3.076c-2.508 0-4.004 1.058-4.004 2.833c0 1.925 1.488 2.457 3.895 2.695c2.88.282 3.103.703 3.103 1.269c0 .983-.789 1.402-2.642 1.402c-2.327 0-2.839-.584-3.011-1.742a.255.255 0 0 0-.253-.215h-1.137a.252.252 0 0 0-.254.253c0 1.482.806 3.248 4.655 3.248c2.788.001 4.386-1.096 4.386-3.013z"
                        />
                      </svg>
                    </div>
                    <p className="text-white font-bold text-base mt-2">
                      Node Js
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="kotak1 p-5 rounded-2xl bg-[#080E14] flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.03em"
                        height="1em"
                        className="w-14 h-14 font-bold z-20"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 256 250"
                        onMouseEnter={() => {
                          logoEnter();
            
                          setCursorColor("#000000");
                        }}
                        onMouseLeave={() => {
                          textLeave();
                          setCursorColor("#FFD700");
                        }}
                      >
                        <path
                          fill="#00005B"
                          d="M45.333 0h165.334C235.733 0 256 20.267 256 45.333v158.934c0 25.066-20.267 45.333-45.333 45.333H45.333C20.267 249.6 0 229.333 0 204.267V45.333C0 20.267 20.267 0 45.333 0Z"
                        />
                        <path
                          fill="#99F"
                          d="M60.8 175.04V65.28c0-.747.32-1.173 1.067-1.173l1.548-.003l1.198-.01l.845-.016l.9-.023l.967-.034l.515-.021c.96-.04 1.935-.065 2.93-.086l3.055-.064c.347-.008.698-.017 1.051-.028l1.07-.035c.96-.036 1.944-.06 2.952-.08l3.093-.055l2.141-.047l1.095-.032c2.204-.07 4.361-.094 6.502-.102l3.204-.004c8.747 0 16 1.066 21.974 3.306A38.09 38.09 0 0 1 131.2 75.52a33.963 33.963 0 0 1 7.787 12.16c1.6 4.48 2.453 9.067 2.453 13.867c0 9.173-2.133 16.746-6.4 22.72c-4.267 5.973-10.24 10.453-17.173 13.013c-7.012 2.578-14.721 3.56-23.128 3.623H91.69l-1.187-.012l-.761-.018l-.448-.019l-.402-.024l-.359-.03a15.594 15.594 0 0 0-.692-.052l-.52-.023l-.57-.015l-.951-.013l-1.853-.004v34.24c.106.747-.427 1.387-1.174 1.494H62.08c-.853 0-1.28-.427-1.28-1.387Zm23.253-90.347v35.84l1.254.09a43.17 43.17 0 0 0 2.906.124h5.654c4.16 0 8.32-.64 12.266-1.92c3.414-.96 6.4-2.987 8.747-5.654c2.24-2.666 3.307-6.293 3.307-10.986a17.557 17.557 0 0 0-2.454-9.494c-1.737-2.657-4.161-4.727-7.082-5.928l-.384-.152c-3.947-1.6-8.214-2.24-12.587-2.133l-2.466.003l-1.159.007l-1.107.015l-1.051.024c-.512.014-1.003.033-1.47.058a36.471 36.471 0 0 0-.688-.028l-.639-.014a31.576 31.576 0 0 0-.3-.002l-.566.003l-.514.014l-.238.01l-.437.025l-.384.03l-.173.016l-.303.035l-.132.017Zm72.32 6.187h18.667c1.007 0 1.825.666 2.182 1.549l.058.158c.32.853.533 1.706.64 2.666c.213 1.067.427 2.24.533 3.307l.09 1.032c.07.881.124 1.818.124 2.808a39.68 39.68 0 0 1 10.82-8.849l.593-.324c4.907-2.774 10.56-4.16 16.213-4.16c.747-.107 1.387.426 1.494 1.173v21.227c0 .853-.534 1.173-1.707 1.173c-3.584-.1-7.26.173-10.77.903l-.75.164c-3.093.64-6.08 1.6-8.96 2.88c-2.027.96-3.947 2.24-5.44 3.946v54.4c0 1.067-.427 1.494-1.387 1.494H157.76c-.853.106-1.6-.427-1.707-1.28v-59.52c0-2.56 0-5.227-.106-8l-.064-2.08l-.086-4.16c-.017-.694-.037-1.387-.064-2.08c0-2.454-.213-4.8-.426-7.254c-.107-.533.213-1.066.746-1.173c0-.091.157-.104.269-.04l.051.04Z"
                        />
                      </svg>
                    </div>
                    <p className="text-white font-bold text-base mt-2">
                      Premiere Pro
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="kotak1 p-5 rounded-2xl bg-[#080E14] flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="0.67em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        className="w-14 h-14 font-bold z-20"
                        viewBox="0 0 256 384"
                        onMouseEnter={() => {
                          logoEnter();
            
                          setCursorColor("#000000");
                        }}
                        onMouseLeave={() => {
                          textLeave();
                          setCursorColor("#FFD700");
                        }}
                      >
                        <path
                          fill="#0ACF83"
                          d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64Z"
                        />
                        <path
                          fill="#A259FF"
                          d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64Z"
                        />
                        <path
                          fill="#F24E1E"
                          d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64Z"
                        />
                        <path
                          fill="#FF7262"
                          d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64V0Z"
                        />
                        <path
                          fill="#1ABCFE"
                          d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64Z"
                        />
                      </svg>
                    </div>
                    <p className="text-white font-bold text-base mt-2">
                      Figma
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
}

function Experiences({ data }) {
  return (
    <div className="mx-auto w-full text-white py-5">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex flex-col w-full  py-2 text-left ">
              <div className=" justify-between flex w-full text-lg font-medium ">
                <p>
                  <span className="text-xl text-[#FFD700] pr-2">
                    {data.year}
                  </span>{" "}
                  {data.title}
                </p>
                <ChevronDownIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white `}
                />
              </div>
              <p className="text-gray-500 text-sm">
                {data.company} • {data.place}
              </p>
            </Disclosure.Button>
            <Disclosure.Panel className="text-sm">{data.desc}</Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
