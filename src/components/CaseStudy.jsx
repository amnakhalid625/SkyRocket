import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import arrow from '../assets/images/staright-arrow.svg';
import CaseStudyCards from './CaseStudyCards';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const CaseStudies = () => {
  return (
    <motion.div
      className="bg-white text-secondaryTextColor px-4 sm:px-6 py-12 md:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-[83rem] mx-auto">
        {/* Header Section */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-start mb-8 md:mb-16"
          variants={itemVariants}
        >
          <div className="flex-1">
            <motion.div
              className="inline-block bg-secondary text-textColor px-4 py-1 rounded-full text-xs sm:text-[12px] font-semibold uppercase tracking-wider mb-4 sm:mb-6"
              variants={itemVariants}
            >
              skyrocket business in Action
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] max-w-3xl font-medium text-textColor mb-4 sm:mb-6 leading-wider  tracking-tight"
              variants={itemVariants}
            >
              Transforming Brands with Detroit Web Design & Marketing Excellence.
            </motion.h2>

            <motion.div
              className="flex flex-col lg:flex-row items-start justify-between lg:items-center gap-4 sm:gap-6"
              variants={itemVariants}
            >
              <p className="text-base sm:text-lg text-secondaryTextColor max-w-2xl leading-wider tracking-tight font-medium">
                Here are some of our standout case studies that showcase our expertise and commitment to excellence.
              </p>

              {/* Buttons */}
              <div className="hidden md:flex gap-4 flex-wrap">
                <Link to="/contact-us"
                onClick={() => {
               window.scrollTo({ top: 0, behavior: 'smooth' });
             }}
                > 
                <motion.button
                  className="bg-secondary text-textColor px-6 py-3 rounded-full font-semibold hover:bg-hoverColor transition-all duration-300 ease-in-out flex items-center gap-2 whitespace-nowrap"
                  variants={itemVariants}
                >
                  Get in Touch
                  <img src={arrow} alt="" />
                </motion.button>
                </Link>
                <Link to ="/case-studies"
                 onClick={() => {
               window.scrollTo({ top: 0, behavior: 'smooth' });
             }}
             >
                  <motion.button
                    className="border border-primary hover:border-bluehover text-primary hover:text-bluehover font-medium py-3 px-6 rounded-full transition-all duration-300 ease-in-out"
                    variants={itemVariants}
                  >
                    All Case Studies
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Cards Section */}
        <motion.div variants={itemVariants}>
          <CaseStudyCards />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CaseStudies;
