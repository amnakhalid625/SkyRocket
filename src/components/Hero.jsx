import React from "react";
import Navbar from "../components/Navbar";
import HomeImage from "../assets/images/man.webp";
import rockImage from "../assets/images/rocket.png";
import batchImg from "../assets/images/batch.svg";
import puzzleImg from "../assets/images/puzzle.svg";
import graphLineImg from "../assets/images/graphLine.svg";
import navArrow from "../assets/images/NavArrow.svg";

const Hero = () => {
  return (
    <>
      <Navbar />

      {/* Main container */}
      <div className="mt-10 flex flex-col md:flex-wrap lg:flex-nowrap lg:flex-row lg:gap-6 items-start justify-between px-4 sm:px-6 md:px-12 pb-8 lg:pt-20 bg-white w-full max-w-[1450px] mx-auto container">
        {/* Left Section */}
        <div className="w-full mb-8">
          <div className="flex items-center w-fit bg-[#D1FF00] text-black py-2 px-4 md:py-2.5 md:px-5 rounded-full mb-2">
            <div className="bg-[#3B00FF] p-1 rounded-sm md:p-1.5 mr-2 flex items-center justify-center">
              <img
                src={rockImage}
                alt="rocket"
                className="w-2 h-2 object-cover"
              />
            </div>
            <span className="text-[0.75rem] font-medium break-words">
              ALL-IN-ONE WEB DESIGN & MARKETING AGENCY
            </span>
          </div>

          <h1 className="text-[2.7rem] sm:text-4xl md:text-5xl font-medium lg:max-w-lg text-gray-900 mb-6 leading-tight tracking-tight">
            Skyrocket your Detroit Business with Proven Strategies
          </h1>

          <p className="text-base sm:text-lg text-secondaryTextColor mb-8 max-w-[450px] tracking-tight">
            <span className="font-bold">
              Custom Websites. Smart Marketing. Real Results.
            </span>{" "}
            We design, build, and grow your online presence—so you can focus on
            what you do best.
          </p>

          <div className="flex flex-wrap items-center flex-row sm:flex-row gap-4 mb-12">
            <a
              href="/get-in-touch"
              className="group flex items-center space-x-2 bg-secondary hover:bg-hoverColor text-textColor px-5 py-3 rounded-full transition-all duration-300 ease-in-out"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1 font-medium">
                Get in Touch
              </span>
              <img
                src={navArrow}
                alt="navigation arrow"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <button className="border border-primary hover:border-primary text-primary hover:text-bluehover font-medium py-3 px-5 rounded-full transition duration-200">
              See all Services
            </button>
          </div>

          <div className="flex items-center justify-center md:justify-start">
            <div className="grid grid-cols-3 gap-3 sm:gap-28 lg:gap-10 text-center sm:text-left">
              <div className="max-w-[90px] text-center md:text-start">
                <p className="text-2xl sm:text-3xl md:text-[2rem] font-medium text-black">
                  350<span className="text-primary">+</span>
                </p>
                <p className="text-[.75rem] md:text-[1rem] text-gray-600">
                  Web Design Projects
                </p>
              </div>
              <div className="min-w-[90px] text-center md:text-start">
                <p className="text-2xl sm:text-3xl md:text-[2rem] font-medium text-black">
                  170<span className="text-primary">+</span>
                </p>
                <p className="text-[.75rem] md:text-[1rem] text-gray-600">
                  Marketing Projects
                </p>
              </div>
              <div className="min-w-[90px] text-center md:text-start">
                <p className="text-2xl sm:text-3xl md:text-[2rem] font-medium text-black">
                  90<span className="text-primary">+</span>
                </p>
                <p className="text-[.75rem] md:text-[1rem] text-gray-600">
                  Social Media Projects
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Image Section */}
        <div className="w-full md:w-[70%] pb-20 lg:max-w-lg md:mx-0 relative md:left-20 lg:left-0 mt-6 md:mt-0 lg:mt-[-30px]">
          <img
            src={HomeImage}
            alt="Business man"
            className="w-full sm:w-[90%] sm:mx-auto md:w-full h-auto sm:max-h-[25rem] md:max-h-[30rem] lg:max-h-[35rem] rounded-[20px] object-cover"
            style={{
              objectPosition: "top",
            }}
          />

          <div
            className="absolute bottom-12 left-0 sm:bottom-1 md:bottom-16 md:-left-20 xl:-left-28 bg-white p-4 rounded-[20px] shadow-lg border border-gray-100"
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
            }}
          >
            <div className="flex items-center sm:mb-3">
              <div className="p-2 rounded-full w-10 h-10 flex items-center justify-center">
                <img src={batchImg} alt="Award" className="w-7 h-7" />
              </div>
              <h3 className="font-medium text-[.875rem] sm:text-lg text-textColor text-tighter">
                Award-Winning Team
              </h3>
            </div>

            <div className="flex items-center sm:mb-3">
              <div className="p-2 rounded-full w-10 h-10 flex items-center justify-center">
                <img src={puzzleImg} alt="Solutions" className="w-7 h-7" />
              </div>
              <h3 className="font-medium text-[.875rem] sm:text-lg text-textColor text-tighter">
                Tailored Solutions
              </h3>
            </div>

            <div className="flex items-center">
              <div className="p-2 rounded-full w-10 h-10 flex items-center justify-center">
                <img src={graphLineImg} alt="Results" className="w-7 h-7" />
              </div>
              <h3 className="font-medium text-[.875rem] sm:text-lg text-textColor text-tighter">
                Proven Results
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
