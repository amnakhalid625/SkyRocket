import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import navArrow from '../assets/images/NavArrow.svg';
import growthLine from '../assets/images/growthLine.svg';
import webCardImg from '../assets/images/webCard.png';

const WebCard = () => {
  return (
    <div className="max-w-[83rem] mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-backgroundColor rounded-[32px] p-5 sm:p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center group "
      >
        {/* Image */}
        <motion.div
          className="overflow-hidden rounded-3xl h-[20rem] sm:h-[25rem] md:h-[30rem] lg:h-[36rem] order-1 lg:order-none "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={webCardImg}
            alt="Sequins and Slate Interior Design Company!"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <div className="flex flex-col justify-center space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-none">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-textColor mb-2 sm:mb-3 leading-snug transition-colors duration-300 ease-in-out group-hover:text-primary">
              Sequins and Slate Interior Design Company!
            </h2>
            <p className="text-secondaryTextColor text-sm sm:text-base font-medium">
              Skyrocket Business redesigned Sequins and Slate's website and implemented SEO strategies, resulting in a 50% increase in traffic a...
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4 shadow-sm"
          >
            {[
              { value: "150%", label: "Website traffic increase" },
              { value: "30%", label: "More inquiries" },
              { value: "45%", label: "Enhanced Reputation" },
              { value: "65%", label: "Increase in Sales Conversion" }
            ].map((stat, index) => (
              <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                <img
                  src={growthLine}
                  alt="growthLine"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <p className="text-sm sm:text-lg font-semibold text-textColor">
                  {stat.value} <span className="font-medium text-textColor">{stat.label}</span>
                </p>
              </div>
            ))}
          </motion.div>

          {/* Button */}
          <motion.div
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link
              to="/case-study/sequins-and-slate-interior-design-company"
              className="inline-flex items-center space-x-2 bg-secondary hover:bg-hoverColor text-textColor px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full transition-all duration-300 font-semibold text-sm sm:text-base"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                Read More
              </span>
              <img
                src={navArrow}
                alt="navigation arrow"
                className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WebCard;
