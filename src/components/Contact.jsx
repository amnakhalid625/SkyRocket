import React from 'react';
import arrowIcon from '../assets/images/staright-arrow.svg';
import mapImage from '../assets/images/map.webp';

const Contact = ({
  secondButtonText = 'View Services',
  secondButtonHref = '/services',
  secondButtonClassName = 'border border-white hover:border-bluehover text-white hover:text-white font-medium py-3 px-6 rounded-full transition-all duration-300 ease-in-out',
headingText = 'Skyrocket Results with Marketing That Makes Sense!',
}) => {
  return (
    <div className="section-cta py-20 ">
      <div className="px-4 sm:px-6">
        <div className="max-w-[83rem] mx-auto">
          <div
            className="cta-wrap relative overflow-hidden bg-primary text-white rounded-[32px] min-h-[400px] p-6 sm:p-8 lg:p-[5rem] grid lg:grid-cols-[1.25fr_1fr] gap-6 items-center"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${mapImage})`,
                backgroundPosition: 'right center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                right: '0',
                transformOrigin: 'right center',
              }}
            ></div>

            {/* Text Content */}
            <div className="cta-content relative z-10 text-center lg:text-left">
              <div className="inline-block bg-secondary text-black px-4 py-1 rounded-full text-xs sm:text-[12px] font-semibold uppercase tracking-wider mb-4 sm:mb-6">
                contact us
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium mb-4 sm:mb-6 leading-tight tracking-tight text-white">
              {headingText}
              </h2>
              <div className="max-w-lg mx-auto lg:mx-0">
                <p className=" text-lg leading-relaxed mb-8 text-white tracking-tight">
                  Join the hundreds of satisfied clients who have transformed their business with Skyrocket Business. Contact us today to get started!
                </p>
              </div>
            </div>

            {/* Button Group */}
            <div className="button-group relative z-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-end items-center lg:items-end text-center">
              <a
                href="/contact-us"
                className="group flex items-center space-x-2 bg-secondary hover:bg-hoverColor text-textColor px-5 py-3 rounded-full transition-all duration-300 ease-in-out"
              >
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  Get in Touch
                </span>
                <img
                  src={arrowIcon}
                  alt="navigation arrow"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href={secondButtonHref}
                className={secondButtonClassName}
              >
                {secondButtonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
