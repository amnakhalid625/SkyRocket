import React from 'react';
import navArrow from '../assets/images/NavArrow.svg';
import tickImg from '../assets/images/tick.svg';
import whyUsImg from '../assets/images/whyChoose.webp';


const WhyUs = () => {
  return (
    <section className="py-12 md:py-[80px] bg-white">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Text Content - always appears first */}
            <div className="space-y-6">
              {/* Tag */}
              <div className="inline-block bg-secondary text-textColor px-4 py-[5px] rounded-full text-[12px] font-semibold uppercase tracking-wider">
               WHY US?
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-textColor leading-tight tracking-tight max-w-3xl">
               Why Choose Skyrocket?
              </h2>

          
           {/* Updated List with ticks */} <div className="flex flex-col gap-3 max-w-lg"> {[ { title: "Transparent Pricing", desc: "No hidden fees; clear and upfront costs.", }, { title: "Tailored Solutions", desc: "We understand the Detroit market and customize our services to meet local business needs.", }, { title: "Expert Team", desc: "Work with a team of experienced professionals dedicated to your success.", }, { title: "Proven Results", desc: "Our strategies are designed to drive traffic, increase engagement, and boost conversions.", }, ].map((item, index) => ( <div className="flex items-start gap-3" key={index}> <img src={tickImg} alt="tick icon" className="w-6 h-6 mt-1 flex-shrink-0" /> <div> <div className="text-textColor font-semibold text-[16px]"> {item.title} </div> <div className="text-textColor text-sm mt-1"> {item.desc} </div> </div> </div> ))} </div>

              {/* Button */}
              <div>
                <a
                  href="/contact-us"
                  className="group inline-flex items-center space-x-2 bg-secondary hover:bg-hoverColor text-textColor px-6 py-3 rounded-full transition-all duration-300 ease-in-out font-medium"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    Get in Touch
                  </span>
                  <img
                    src={navArrow}
                    alt="arrow"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={whyUsImg}
                  alt="Team working together"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;