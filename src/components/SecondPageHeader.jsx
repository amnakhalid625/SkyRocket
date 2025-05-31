import React from 'react';
import navArrow from '../assets/images/NavArrow.svg';

const BlogHeader = () => {
    const stats = [
        { number: '350', label: 'Web Design Projects' },
        { number: '170', label: 'Marketing Projects' },
        { number: '90', label: 'Social Media Projects' },
    ];

    return (
        <header className="py-20 px-4 text-center bg-white">
            <div className="text-center">
                <div className="inline-block bg-secondary text-textColor px-4 py-[5px] mx-auto rounded-full text-[12px] font-semibold uppercase tracking-wider mb-1">
                    OUR Services
                </div>
                <div className="h-4" />
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-textColor mb-4 leading-tight tracking-tight">
                        Skyrocket Your Business with Tailored Solutions
                    </h2>
                </div>
                <div className="h-4" />
                <div className="max-w-lg mx-auto">
                    <p className="text-base md:text-lg text-secondaryTextColor leading-relaxed mb-8 font-medium">
                        At Skyrocket Business, we design, build, and grow your online presence—so you can focus on what you do best. From creating stunning websites to driving impactful SEO results, we take care of the digital strategy, helping your business thrive in a competitive market.
                    </p>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
                <a
                    href="/get-in-touch"
                    className="group flex items-center space-x-2 bg-secondary hover:bg-hoverColor text-textColor px-5 py-3 rounded-full transition-all duration-300 ease-in-out font-medium min-w-[180px] justify-center"
                >
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                        Get in Touch
                    </span>
                    <img
                        src={navArrow}
                        alt="navigation arrow"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                </a>

                <button className="border border-primary hover:border-primary text-primary hover:text-bluehover font-medium py-3 px-6 rounded-full transition duration-200 min-w-[180px]">
See Case Studies
                </button>
            </div>

            {/* Stats Section */}
            <div className="flex flex-wrap justify-center items-start gap-12 mt-8 text-center">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="transform transition-transform duration-500 hover:scale-105 opacity-100"
                    >
                        <div className="text-4xl font-medium text-textColor">
                            {stat.number}
                            <span className="text-primary">+</span>
                        </div>
                        <div className="mt-2 text-secondaryTextColor text-sm md:text-base">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </header>
    );
};

export default BlogHeader;
