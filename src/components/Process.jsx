import React from 'react';
import { motion } from 'framer-motion';
import arrow from '../assets/images/staright-arrow.svg';
import form1 from '../assets/images/form1.webp';
import form2 from '../assets/images/form2.webp';
import form3 from '../assets/images/form3.webp';
import { Link } from 'react-router-dom';

const Process = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="bg-white secondaryTextColor px-4 sm:px-6 py-12 md:py-16"
    >
      <div className="max-w-[83rem] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8 md:mb-16">
          <div className="flex-1">
            <motion.div variants={itemVariants}>
              <div className="inline-block bg-secondary text-textColor px-4 py-1 rounded-full text-xs sm:text-[12px] font-semibold uppercase tracking-wider mb-4 sm:mb-6">
                OUR PROCESS
              </div>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-textColor mb-4 sm:mb-6 tracking-tight">
              From Vision to Victory
            </motion.h2>
            
            <motion.div variants={itemVariants} className="flex flex-col lg:flex-row items-start justify-between lg:items-center gap-4 sm:gap-6">
              <p className="text-base sm:text-lg text-secondaryTextColor max-w-2xl leading-relaxed font-medium">
                Our streamlined process is designed to deliver outstanding results at every stage of your web design & marketing journey. Here's how we do it:
              </p>
              {/* Buttons - hidden on mobile and sm (md and below), visible from md up */}
              <div className="hidden md:flex gap-4 flex-wrap">
             <Link to="/contact-us"
             onClick={() => {
               window.scrollTo({ top: 0, behavior: 'smooth' });
             }}
             >   <button className="bg-secondary text-textColor px-6 py-3 rounded-full font-semibold hover:bg-hoverColor transition-colors duration-200 flex items-center gap-2 whitespace-nowrap">
                  Get in Touch
                  <span className="text-lg">
                    <img src={arrow} alt="arrow" className="w-4 h-4" />
                  </span>
                </button>
                </Link>
                <Link to="/services"
               
                >
                <button className="border border-primary hover:border-bluehover text-primary hover:text-bluehover font-medium py-3 px-6 rounded-full transition duration-200">
                  Browse Services
                </button>

                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Process Cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
        >
          {/* Step 1 - Discovery & Strategy */}
          <motion.div 
            variants={cardVariants}
            custom={0}
            className="border border-gray-200 rounded-3xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300"
          >
            <div className="overflow-hidden rounded-[24px] mb-4 sm:mb-6">
              <img 
                src={form1} 
                alt="Discovery & Strategy" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <div className="text-primary font-semibold text-xs sm:text-sm mb-2 uppercase tracking-wider">
                STEP 1
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-textColor mb-2 sm:mb-4">
                Discovery & Strategy
              </h3>
              <p className="text-sm sm:text-base text-secondaryTextColor font-medium leading-relaxed">
                We start by understanding your goals, challenges, and audience to create a plan that's perfect for your business.
              </p>
            </div>
          </motion.div>

          {/* Step 2 - Execution & Optimization */}
          <motion.div 
            variants={cardVariants}
            custom={1}
            className="border border-gray-200 rounded-3xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300"
          >
            <div className="overflow-hidden rounded-[24px] mb-4 sm:mb-6">
              <img 
                src={form2} 
                alt="Execution & Optimization" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <div className="text-primary font-semibold text-xs sm:text-sm mb-2 uppercase tracking-wider">
                STEP 2
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-textColor mb-2 sm:mb-4">
                Execution & Optimization
              </h3>
              <p className="text-sm sm:text-base text-secondaryTextColor font-medium leading-relaxed">
                We put the plan into action, constantly checking performance and making adjustments to get the best results.
              </p>
            </div>
          </motion.div>

          {/* Step 3 - Analysis & Growth */}
          <motion.div 
            variants={cardVariants}
            custom={2}
            className="border border-gray-200 rounded-3xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300"
          >
            <div className="overflow-hidden rounded-[24px] mb-4 sm:mb-6">
              <img 
                src={form3} 
                alt="Analysis & Growth" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <div className="text-primary font-semibold text-xs sm:text-sm mb-2 uppercase tracking-wider">
                STEP 3
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-textColor mb-2 sm:mb-4">
                Analysis & Growth
              </h3>
              <p className="text-sm sm:text-base text-secondaryTextColor font-medium leading-relaxed">
                We review the results, gather insights, and refine our approach to keep driving growth for your business.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Process;