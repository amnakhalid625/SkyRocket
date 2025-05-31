import React from 'react'
import navArrow from '../assets/images/NavArrow.svg';
import WebCard from '../components/WebCard';


const CaseStudiesDetail = () => {
  return (
   <>
   <section className="bg-white">
        <div className="px-4 sm:px-6 md:padding-global py-12 sm:py-16 md:py-20 lg:py-24 xl:py-20">
          <div className="mx-auto max-w-7xl">
            {/* Intro Text */}
            <div className="text-center">
              <div className="inline-block bg-secondary text-textColor px-4 py-[5px] mx-auto rounded-full text-[12px] font-semibold uppercase tracking-wider mb-1">
              Skyrocket case studies
              </div>
              <div className="h-4" />
              <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-textColor mb-4 leading-tight tracking-tight">
                  Skyrocket Your Business with Proven Success Stories
                </h2>
              </div>
              <div className="h-4" />
              <div className="max-w-2xl mx-auto">
                <p className="text-base md:text-lg text-secondaryTextColor leading-relaxed mb-8 font-medium">
                  
At Skyrocket Business, we tackle real-world challenges and deliver results that matter. Our case studies show how we’ve helped businesses grow through tailored strategies, stunning websites, and effective marketing. We focus on the digital side, so you can focus on what you do best.
                </p>
              </div>
            </div>
  
          </div>
        </div>
      </section> 
   
   <WebCard />
   </>
  )
}

export default CaseStudiesDetail