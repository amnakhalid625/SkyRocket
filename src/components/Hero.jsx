import React from 'react';
import Navbar from '../components/Navbar';
import HomeImage from '../assets/images/man.webp';
import rockImage from '../assets/images/rocket.png';
import batchImg from '../assets/images/batch.svg';
import puzzleImg from '../assets/images/puzzle.svg';
import graphLineImg from '../assets/images/graphLine.svg';

const Hero = () => {
  return (
    <>
      <Navbar />
      
      {/* Main container with improved alignment */}
      <div className="mt-10 flex flex-col md:flex-row items-start justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-8 bg-white w-full max-w-[1450px] mx-auto">
        {/* Left Content Section */}
        <div className="w-full md:w-[45%] mb-8 md:mb-0">
          <div className="flex items-center bg-secondary text-black py-2 px-4 rounded-full w-max mb-6">
            <img src={rockImage} alt="rocket" className="w-4 h-4 mr-2" />
            <span className="text-xs font-semibold">ALL-IN-ONE WEB DESIGN & MARKETING AGENCY</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-medium text-gray-900 mb-6 leading-tight">
            Skyrocket your Detroit<br />Business with Proven<br />Strategies
          </h1>
          
          <p className="text-lg text-secondaryTextColor mb-8 max-w-[450px]">
            <span className='font-bold'>Custom Websites. Smart Marketing. Real Results.</span> We design, build, and grow your online presence—so you can focus on what you do best.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-secondary hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full transition duration-200">
              Get in Touch →
            </button>
            <button className="border border-primary hover:border-blue-600 text-primary hover:text-blue-600 font-medium py-3 px-6 rounded-full transition duration-200">
              See all Services
            </button>
          </div>
          
          <div className="flex flex-wrap gap-12">
            <div>
              <p className="text-3xl font-medium text-black">350+</p>
              <p className="text-gray-600">Web Design Projects</p>
            </div>
            <div>
              <p className="text-3xl font-medium text-black">170+</p>
              <p className="text-gray-600">Marketing Projects</p>
            </div>
            <div>
              <p className="text-3xl font-medium text-black">90+</p>
              <p className="text-gray-600">Social Media Projects</p>
            </div>
          </div>
        </div>
        
        {/* Right Image Section */}
        <div className="w-full md:w-[40%] relative flex flex-col">
          <div className="relative flex-grow">
            <img 
              src={HomeImage} 
              alt="Business man" 
              className="w-full h-auto max-h-[570px] object-cover rounded-[20px]"
              style={{ 
                objectPosition: 'top',
                aspectRatio: '1040/1390' // Matching the reference image's aspect ratio
              }}
            />
            
            <div className="absolute bottom-0 left-[-100px] bg-white p-4 rounded-[20px] shadow-lg w-[280px] border border-gray-100" style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }}>
              <div className="flex items-center mb-3">
                <div className="p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <img src={batchImg} alt="batchImage" className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-gray-800">Award-Winning Team</h3>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                <div className="p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <img src={puzzleImg} alt="puzzleImage" className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-gray-800">Tailored Solutions</h3>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <img src={graphLineImg} alt="graphLine" className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-gray-800">Proven Results</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero; 