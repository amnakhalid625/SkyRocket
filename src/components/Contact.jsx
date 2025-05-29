import React from 'react';
import arrowIcon from '../assets/images/staright-arrow.svg';
import mapImage from '../assets/images/map.webp';

const Contact = () => {
  return (
    <div className="section-cta py-20 bg-gray-100">
      <div className="px-4 sm:px-6">
        <div className="max-w-[83rem] mx-auto">
          <div 
            className="cta-wrap relative overflow-hidden"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.25fr 1fr',
              gap: '1.5rem',
              backgroundColor: '#240cf2',
              color: 'white',
              borderRadius: '32px',
              padding: '5rem',
              alignItems: 'center',
              position: 'relative',
              minHeight: '450px'
            }}
          >
            {/* Clear Background Image */}
            <div 
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${mapImage})`,
                backgroundPosition: 'right center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                // opacity: 1, // Increased opacity for clearer image
                right: '0',
                transformOrigin: 'right center'
              }}
            ></div>


            {/* Content */}
            <div className="cta-content relative z-10">
              <div className="inline-block bg-secondary text-black px-4 py-1 rounded-full text-xs sm:text-[12px] font-semibold uppercase tracking-wider mb-4 sm:mb-6">
              OUR PROCESS
            </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Skyrocket Results with Marketing That Makes Sense!
              </h2>
              <div className="max-w-lg">
                <p className="text-blue-100 text-lg leading-relaxed mb-8">
                  Join the hundreds of satisfied clients who have transformed their business with Skyrocket Business. Contact us today to get started!
                </p>
              </div>
            </div>

            {/* Button Group */}
            <div className="button-group relative z-10 flex flex-col sm:flex-row gap-4 lg:justify-end">
              <a 
                href="/contact" 
                className="bg-lime-400 text-black px-8 py-4 rounded-full font-bold hover:bg-lime-300 transition-all flex items-center justify-center gap-3 whitespace-nowrap shadow-lg"
              >
                <span>Get in Touch</span>
                <img 
                  src={arrowIcon} 
                  alt="" 
                  className="w-5 h-5" 
                />
              </a>
              <a 
                href="/services" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold py-4 px-8 rounded-full transition-all text-center"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;