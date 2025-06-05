import React from 'react';
import arrow from '../assets/images/staright-arrow.svg';
import Articles from './Articles';

const Blogs = () => {


  return (
    <section className="py-20 bg-white">
      <div className="px-4 sm:px-6">
        <div className="max-w-[83rem] mx-auto">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start mb-8 md:mb-16">
            <div className="flex-1">
              <div className="inline-block bg-secondary text-black px-4 py-1 rounded-[24px] text-xs sm:text-[12px] font-semibold uppercase tracking-wider mb-4 sm:mb-6">
                skyrocket business blog
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-textColor mb-4 sm:mb-6 leading-tight">
                The Skyrocket Business<br /> Blog: Insights for your<br /> Digital Growth
              </h2>
              <div className="flex flex-col lg:flex-row items-start justify-between lg:items-end gap-4 sm:gap-6">
                {/* Buttons - hidden on mobile, sm, and md - only visible from lg up */}
                <div className="hidden lg:flex gap-4 flex-wrap ml-auto mt-[-60px]">
                  <button className="bg-secondary text-textColor px-6 py-3 rounded-[24px] font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2 whitespace-nowrap">
                    Get in Touch
                    <span className="text-lg">
                      <img src={arrow} alt="arrow" className="w-4 h-4" />
                    </span>
                  </button>
                  <button className="border border-primary hover:border-blue-600 text-primary hover:text-blue-600 font-medium py-3 px-6 rounded-full transition duration-200">
                    View All Blogs
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="h-4"></div>

          {/* Blog Posts Grid */}
         <Articles />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
