import React from 'react';
import navArrow from '../assets/images/NavArrow.svg';
import BlogCards from '../components/BlogCard';

const Blogs = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="px-10 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center opacity-100 mb-16">
              <div className="inline-block bg-[#c6f806] text-[#0a0d14] px-4 py-[5px] rounded-full text-[12px] font-semibold uppercase tracking-wider mb-4 transform transition-all duration-300 hover:scale-105">
                skyrocket business blog
              </div>
              
              <div className="max-w-5xl mx-auto mb-4">
                <h1 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-[#0a0d14] leading-tight tracking-tight transition-all duration-300 hover:text-opacity-90">
                  Stay Ahead with Expert Web Design, Marketing Insights & Strategies for Detroit Businesses
                </h1>
              </div>
              
              <div className="max-w-4xl mx-auto mb-8">
                <p className="text-base md:text-lg text-[#525866] leading-relaxed font-normal transition-all duration-300 hover:text-opacity-90">
                  Welcome to the Skyrocket Business Blog, where we share the latest web design, marketing trends, tips, and strategies tailored for businesses in Detroit. From SEO and social media management to content creation and web development, our blog provides valuable insights to help your business grow and succeed online. Stay informed, get inspired, and elevate your digital presence with our expert advice.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-4">
                <a
                  href="/contact-us"
                  className="group flex items-center space-x-2 bg-[#240cf2] hover:bg-[#1a0bcd] text-white px-6 py-3 rounded-full transition-all duration-300 ease-in-out font-medium min-w-[160px] justify-center"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    Get in Touch
                  </span>
                  <img
                    src={navArrow}
                    alt="navigation arrow"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 filter brightness-0 invert"
                  />
                </a>
                
                <a
                  href="/services"
                  className="border border-[#240cf2] hover:border-[#1a0bcd] text-[#240cf2] hover:text-[#1a0bcd] hover:bg-[#f4f7fb] font-medium py-3 px-6 rounded-full transition-all duration-300 min-w-[160px] text-center"
                >
                  View Services
                </a>
              </div>
            </div>
            
            {/* Blog Cards Grid */}
            <div className="pt-8">
              <BlogCards />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;