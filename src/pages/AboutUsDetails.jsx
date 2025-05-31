import React from 'react';
import navArrow from '../assets/images/NavArrow.svg';
import servicesPattern from '../assets/images/bg.svg';
import servicesPattern2 from '../assets/images/backImg.svg';
import Mission from '../components/Mission';
import OurValues from '../components/OurValues';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AboutMap from '../components/AboutMap';

const AboutUsDetails = () => {
  return (
    <>
      <section className="bg-white">
        <div className="px-4 sm:px-6 md:padding-global py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
          <div className="mx-auto max-w-7xl">
            {/* Intro Text */}
            <div className="text-center">
              <div className="inline-block bg-secondary text-textColor px-4 py-[5px] mx-auto rounded-full text-[12px] font-semibold uppercase tracking-wider mb-1">
                Discover skyrocket business
              </div>
              <div className="h-4" />
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-textColor mb-4 leading-tight tracking-tight">
                  Your Partner in Web Design & Marketing Excellence
                </h2>
              </div>
              <div className="h-4" />
              <div className="max-w-2xl mx-auto">
                <p className="text-base md:text-lg text-secondaryTextColor leading-relaxed mb-8 font-medium">
                  Welcome to Skyrocket Business, where innovation meets strategy to drive your brand's success.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
              {/* Get in Touch Button */}
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

              {/* Join the Team Button */}
              <button className="border border-primary hover:border-primary text-primary hover:text-bluehover font-medium py-3 px-6 rounded-full transition duration-200 min-w-[180px]">
                Join the Team
              </button>
            </div>

            {/* Responsive Image */}
            <div className="max-w-[80rem] mx-auto relative">
              <img
                src="https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c51_about.webp"
                alt="Team"
                className="w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[500px] object-cover rounded-[24px] mb-6 transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-primary px-3 sm:px-4 md:px-6 lg:px-10 xl:px-20 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-16 relative overflow-hidden text-white text-center">
          {/* Top Pattern */}
          <img
            src={servicesPattern}
            alt=""
            className="absolute -top-16 -right-16 sm:-top-20 sm:-right-20 md:-top-24 md:-right-24 lg:-top-28 lg:-right-32 w-32 sm:w-40 md:w-48 lg:w-64 xl:w-72 pointer-events-none transform scale-110 hover:scale-125 transition-transform duration-500 ease-in-out opacity-90"
          />

          {/* Bottom Pattern */}
          <img
            src={servicesPattern2}
            alt=""
            className="absolute -bottom-16 -left-16 sm:-bottom-20 sm:-left-20 md:-bottom-24 md:-left-24 lg:-bottom-28 lg:-left-32 w-32 sm:w-40 md:w-48 lg:w-64 xl:w-72 pointer-events-none transform scale-110 hover:scale-125 transition-transform duration-500 ease-in-out opacity-90"
          />

          {/* Flex Items */}
          <div className="relative z-10 flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 max-w-7xl mx-auto mt-4 sm:mt-6 md:mt-8">
            <div className="min-w-[100px]">
              <div className="text-3xl sm:text-4xl md:text-5xl font-medium">
                350<span className="text-secondary">+</span>
              </div>
              <p className="mt-1 sm:mt-2 text-sm sm:text-base md:text-lg">Web Design Projects</p>
            </div>
            <div className="min-w-[100px]">
              <div className="text-3xl sm:text-4xl md:text-5xl font-medium">
                170<span className="text-secondary">+</span>
              </div>
              <p className="mt-1 sm:mt-2 text-sm sm:text-base md:text-lg">Marketing Projects</p>
            </div>
            <div className="min-w-[100px]">
              <div className="text-3xl sm:text-4xl md:text-5xl font-medium">
                90<span className="text-secondary">+</span>
              </div>
              <p className="mt-1 sm:mt-2 text-sm sm:text-base md:text-lg">Social Media Projects</p>
            </div>
          </div>
        </div>

        {/* Other Sections */}
        <Mission />
        <OurValues />
        <Team />
        <AboutMap />
        <Testimonials />
        <Contact />
        <Footer />
      </section>
    </>
  );
};

export default AboutUsDetails;
