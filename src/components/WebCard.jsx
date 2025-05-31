import React from 'react';
import navArrow from '../assets/images/NavArrow.svg';

const WebCard = () => {
  return (
    <div className="max-w-[83rem] mx-auto px-4 sm:px-6 lg:px-8"> 
      <div
        className="bg-backgroundColor rounded-[32px] p-5 sm:p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center
                   group"  >
        {/* Image */}
        <div className="overflow-hidden rounded-3xl h-[20rem] sm:h-[25rem] md:h-[30rem] lg:h-[36rem] order-1 lg:order-none"> {/* Added responsive heights and order control */}
          <img
            src="https://cdn.prod.website-files.com/6807e00132c9ff6c11834b85/680b8bef85e22d1d6bcbe8a1_sqa.png"
            alt="Sequins and Slate Interior Design Company!"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-none"> {/* Added responsive spacing */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 leading-snug transition-colors duration-300 ease-in-out group-hover:text-primary">
              Sequins and Slate Interior Design Company!
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Skyrocket Business redesigned Sequins and Slate's website and implemented SEO strategies, resulting in a 50% increase in traffic and a 30% rise in client inquiries.
            </p>
          </div>

          {/* Stats */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4 shadow-sm">
            {[
              { value: "150%", label: "Website traffic increase" },
              { value: "30%", label: "More inquiries" },
              { value: "45%", label: "Enhanced Reputation" },
              { value: "65%", label: "Increase in Sales Conversion" }
            ].map((stat, index) => (
              <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                <img
                  src="https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c0a_trending-up%20(1).svg"
                  alt=""
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <p className="text-sm sm:text-base font-semibold text-gray-900">
                  {stat.value} <span className="font-normal text-gray-700">{stat.label}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div>
            <a
              href="/get-in-touch"
              className="inline-flex items-center space-x-2 bg-[#ccff00] hover:bg-[#b6eb00] text-black px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full transition-all duration-300 font-semibold text-sm sm:text-base"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                Read More
              </span>
              <img
                src={navArrow}
                alt="navigation arrow"
                className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebCard;