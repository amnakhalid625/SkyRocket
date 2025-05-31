import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import arrow from '../assets/images/staright-arrow.svg';
import CaseStudyCards from './CaseStudyCards';


const CaseStudies = () => {
    return (
        <div className="bg-white text-gray-700 px-4 sm:px-6 py-12 md:py-16">
            <div className="max-w-[83rem] mx-auto">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-8 md:mb-16">
                    <div className="flex-1">
                        <div className="inline-block bg-secondary text-black px-4 py-1 rounded-full text-xs sm:text-[12px] font-semibold uppercase tracking-wider mb-4 sm:mb-6">
                            skyrocket business in Action
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] max-w-3xl font-medium text-gray-900 mb-4 sm:mb-6 leading-tight">
                            Transforming Brands with Detroit Web Design & Marketing Excellence.
                        </h2>
                        <div className="flex flex-col lg:flex-row items-start justify-between lg:items-center gap-4 sm:gap-6">
                            <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
                                Here are some of our standout case studies that showcase our expertise and commitment to excellence
                            </p>
                            {/* Buttons - hidden on mobile and sm (md and below), visible from md up */}
                            <div className="hidden md:flex gap-4 flex-wrap">
                                <button className="bg-secondary text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-lime-400 transition-all duration-300 ease-in-out flex items-center gap-2 whitespace-nowrap">
                                    Get in Touch
                                    <img src={arrow} alt="" />

                                </button>
                                <button className="border border-primary hover:border-primary text-primary hover:text-primary font-medium py-3 px-6 rounded-full transition-all duration-300 ease-in-out">
                                    All Case Studies
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

               <CaseStudyCards />
            </div>
        </div>
    );
};

export default CaseStudies;