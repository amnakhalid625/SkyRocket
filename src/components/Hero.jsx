import React from 'react';
import Navbar from '../components/Navbar';
import HomeImage from '../assets/images/man.webp';
import rockImage from '../assets/images/rocket.png';
import batchImg from '../assets/images/batch.svg';
import puzzleImg from '../assets/images/puzzle.svg';
import graphLineImg from '../assets/images/graphLine.svg';
import navArrow from '../assets/images/NavArrow.svg';

const Hero = () => {
  return (
    <>
      <Navbar />

      {/* Main container */}
      <div className="mt-10 flex flex-col md:flex-row items-start justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-8 bg-white w-full max-w-[1450px] mx-auto">
        {/* Left Section */}
        <div className="w-full md:w-[55%] mb-8 md:mb-0">
          <div className="flex items-center bg-secondary text-black py-2 px-4 rounded-full w-max mb-6">
            <img src={rockImage} alt="rocket" className="w-4 h-4 mr-2" />
            <span className="text-xs font-semibold">ALL-IN-ONE WEB DESIGN & MARKETING AGENCY</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight tracking-tight">
            Skyrocket your Detroit<br />Business with Proven<br />Strategies
          </h1>

          <p className="text-base sm:text-lg text-secondaryTextColor mb-8 max-w-[450px] tracking-tight">
            <span className='font-bold'>Custom Websites. Smart Marketing. Real Results.</span> We design, build, and grow your online presence—so you can focus on what you do best.
          </p>

          <div className="flex flex-row sm:flex-row gap-4 mb-12">
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

            <button className="w-full sm:w-auto border border-primary hover:border-primary text-primary hover:text-bluehover font-medium py-3 px-6 rounded-full transition duration-200">
              See all Services
            </button>
          </div>

          <div className="flex flex-wrap gap-6 sm:gap-10">
  <div className="min-w-[100px] text-center sm:text-left">
    <p className="text-2xl sm:text-3xl font-medium text-black">
      350<span className="text-primary">+</span>
    </p>
    <p className="text-gray-600">Web Design Projects</p>
  </div>
  <div className="min-w-[100px] text-center sm:text-left">
    <p className="text-2xl sm:text-3xl font-medium text-black">
      170<span className="text-primary">+</span>
    </p>
    <p className="text-gray-600">Marketing Projects</p>
  </div>
  <div className="min-w-[100px] text-center sm:text-left">
    <p className="text-2xl sm:text-3xl font-medium text-black">
      90<span className="text-primary">+</span>
    </p>
    <p className="text-gray-600">Social Media Projects</p>
  </div>
</div>

        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-[40%] relative mt-6 md:mt-0 lg:mt-[-30px]">
          <div className="relative">
            <img
              src={HomeImage}
              alt="Business man"
              className="w-full h-auto max-h-[570px]  rounded[20px]"
              style={{
                objectPosition: 'top',
                aspectRatio: '1040 / 1390'
              }}
            />

            <div className="absolute bottom-0 left-2 md:left-[-100px] bg-white p-4 rounded-[20px] shadow-lg w-[280px] border border-gray-100"
              style={{
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
              }}
            >
              <div className="flex items-center mb-3">
                <div className="p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <img src={batchImg} alt="Award" className="w-7 h-7" />
                </div>
                <h3 className="font-medium text-lg text-textColor text-tighter">Award-Winning Team</h3>
              </div>

              <div className="flex items-center mb-3">
                <div className="p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <img src={puzzleImg} alt="Solutions" className="w-7 h-7" />
                </div>
                <h3 className="font-medium text-lg text-textColor text-tighter">Tailored Solutions</h3>
              </div>

              <div className="flex items-center">
                <div className="p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <img src={graphLineImg} alt="Results" className="w-7 h-7" />
                </div>
                <h3 className="font-medium text-lg text-textColor text-tighter">Proven Results</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
