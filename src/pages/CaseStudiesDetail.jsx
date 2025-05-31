import React from 'react'
import navArrow from '../assets/images/NavArrow.svg';
import WebCard from '../components/WebCard';
import CaseStudyCards from '../components/CaseStudyCards';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const CaseStudiesDetail = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="px-4 sm:px-6 md:padding-global py-12 sm:py-16 md:py-20 lg:py-24 xl:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <div className="inline-block bg-secondary text-textColor px-4 py-[5px] mx-auto rounded-full text-[12px] font-semibold uppercase tracking-wider mb-1 transform transition-all duration-300 hover:scale-105">
                Skyrocket case studies
              </div>
              <div className="h-4" />
              <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-textColor mb-4 leading-tight tracking-tight transition-all duration-300 hover:text-opacity-90">
                  Skyrocket Your Business with Proven Success Stories
                </h2>
              </div>
              <div className="h-4" />
              <div className="max-w-2xl mx-auto">
                <p className="text-base md:text-lg text-secondaryTextColor leading-relaxed mb-8 font-medium transition-all duration-300 hover:text-opacity-90">
                  At Skyrocket Business, we tackle real-world challenges and deliver results that matter. Our case studies show how we've helped businesses grow through tailored strategies, stunning websites, and effective marketing. We focus on the digital side, so you can focus on what you do best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="px-4 sm:px-6 md:padding-global pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28">
        <div className="mx-auto max-w-7xl space-y-16 md:space-y-20 lg:space-y-24">
          <WebCard />
          
          <div className="grid gap-12 md:gap-16">
            <CaseStudyCards />
            <CaseStudyCards />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 md:padding-global pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <Contact 
            headingText="Unleash Your Brand's Potential with Skyrocket!" 
            secondButtonText="View Services" 
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CaseStudiesDetail