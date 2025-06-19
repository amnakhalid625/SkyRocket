import React from 'react';
import { motion } from 'framer-motion';
import arrow from '../assets/images/staright-arrow.svg';
import Articles from './Articles';
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="px-4 sm:px-6">
        <div className="max-w-[83rem] mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col lg:flex-row justify-between items-start mb-8 md:mb-16"
          >
            <div className="flex-1">
              <div className="inline-block bg-secondary text-textColor px-4 py-1 rounded-[24px] text-xs sm:text-[12px] font-semibold uppercase tracking-wider mb-4 sm:mb-6">
                skyrocket business blog
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-textColor mb-4 sm:mb-6 leading-tight ">
                The Skyrocket Business<br />Blog: Insights for your<br />Digital Growth
              </h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-col lg:flex-row items-start justify-between lg:items-end gap-4 sm:gap-6"
              >
                {/* Buttons */}
                <div className="hidden lg:flex gap-4 flex-wrap ml-auto mt-[-60px]">
           <Link to="/contact-us"
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
           >       <button className="bg-secondary text-textColor px-6 py-3 rounded-[24px] font-semibold hover:bg-hoverColor transition-colors duration-200 flex items-center gap-2 whitespace-nowrap">
                    Get in Touch
                    <span className="text-lg">
                      <img src={arrow} alt="arrow" className="w-4 h-4" />
                    </span>
                  </button>
                  </Link>
              <Link to="/blogs"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >    <button className="border border-primary hover:border-bluehover text-primary hover:text-bluehover font-medium py-3 px-6 rounded-full transition duration-200">
                    View All Blogs
                  </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="h-4"></div>

          {/* Blog Posts Grid with fade-in */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Articles />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
