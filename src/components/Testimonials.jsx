import servicesPattern from "../assets/images/bg.svg";
import servicesPattern2 from "../assets/images/backImg.svg";
import client1 from '../assets/images/client1.jpg';
import client2 from '../assets/images/client2.jpg';
import companyLogo1 from '../assets/images/companyLogo1.jpg';
import companyLogo2 from '../assets/images/companyLogo2.png';
import blueArrow from '../assets/images/blueArrow.svg';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: client1,
      logo: companyLogo1,
      quote:
        "Skyrocket Business completely transformed our online presence. The new website captured our brand beautifully, and our social media engagement soared. We saw a noticeable increase in online sales. Their team just gets it—they're creative, professional, and genuinely understood our vision.",
      name: "Haith Johnson",
      title: "CEO LeHost",
    },
    {
      id: 2,
      image: client2,
      logo: companyLogo2,
      quote:
        "Working with Skyrocket Business was the best decision we made for our company. They made everything so easy—from building our website to helping us get more local customers. We really felt supported every step of the way!",
      name: "Martha Nielsen",
      title: "CEO Mop and Glow Cleaning",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <div className="min-h-screen bg-primary px-4 py-16 relative overflow-hidden">
      {/* Top Right Decorative Image */}
      <img
        src={servicesPattern}
        alt="servicesImg"
        className="absolute top-0 right-0 z-0"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <div className="text-center mb-12">
          <motion.div
            className="inline-block bg-secondary text-textColor px-3 sm:px-4 py-1 sm:py-[5px] mx-auto rounded-full text-[10px] sm:text-[12px] font-semibold uppercase tracking-wider mb-3 sm:mb-4 md:mb-6 lg:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Testimonials
          </motion.div>
          <h1 className="text-3xl md:text-[48px] lg:text-[3.5rem] font-semibold text-white mb-8 leading-tight tracking-tighter lg:max-w-xl mx-auto">
            What Our Clients Say About Working with Skyrocket Business
          </h1>
          <p className="md:text-[18px] lg:text-lg font-medium text-white max-w-2xl mx-auto tracking-tightest mb-8">
            Real words from real businesses. Here's how Skyrocket Business
            helped them grow, connect, and succeed in the digital space.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white rounded-[24px] shadow-xl max-w-[83rem] md:p-8 mx-auto relative min-h-[350px] lg:min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentData.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col lg:flex-row gap-6 h-full"
            >
              {/* Image Section */}
              <div className="w-full lg:w-[50%] xl:w-[35%] flex-shrink-0">
                <div className="overflow-hidden rounded-2xl h-full md:max-w-full md:max-h-[35rem] lg:max-h-[32rem] mx-auto">
                  <img
                    src={currentData.image}
                    alt="Testimonial Giver"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 flex flex-col p-8">
                {/* Logo and Buttons */}
                <div className="flex justify-between items-center mb-6 gap-4 flex-wrap">
                  <img
                    src={currentData.logo}
                    alt="Company Logo"
                    className="h-14 w-auto object-contain"
                    loading="lazy"
                  />
                  <div className="flex gap-3">
                    <button
                      onClick={prevTestimonial}
                      className="w-12 h-12 rounded-full border border-primary bg-white text-primary  hover:text-white transition-all duration-200 flex items-center justify-center"
                    >
                      <img
                        src={blueArrow}
                        className="w-5 h-5 transform rotate-180"
                        alt="Previous"
                      />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-12 h-12 rounded-full border border-primary bg-white text-primary  hover:text-white transition-all duration-200 flex items-center justify-center"
                    >
                      <img src={blueArrow} className="w-5 h-5" alt="Next" />
                    </button>
                  </div>
                </div>

                {/* Quote Section */}
                <div className="flex-1 flex flex-col justify-center lg:justify-end">
                  <p className="text-textColor text-[18px] lg:text-xl font-semibold mb-6 italic leading-relaxed">
                    "{currentData.quote}"
                  </p>
                  <div className="text-black text-base lg:text-lg font-normal italic">
                    {currentData.name} - {currentData.title}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Left Decorative Image */}
      <img
        src={servicesPattern2}
        alt="patterntwo"
        className="absolute bottom-0 left-0 z-0"
      />
    </div>
  );
};

export default Testimonials;
