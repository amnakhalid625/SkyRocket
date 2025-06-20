import React from 'react'
import navArrow from '../assets/images/NavArrow.svg';
import WebCard from '../components/WebCard';
import CaseStudyCards from '../components/CaseStudyCards';
import Contact from '../components/Contact';
import projectThree from '../assets/images/project3.png';
import projectFour from '../assets/images/project4.png';



const CaseStudiesDetail = () => {

  const newCaseStudies = [
  {
    id: 1,
    image: projectThree,
    alt: "Custom Project",
    tag: "Web Design & Marketing",
    title: "Nutrivita Shop: Boosting E-commerce Sales with a Streamlined Online Store",
    description: "Skyrocket Business redesigned Nutrivita Shop's website, optimized for SEO and mobile, resulting in a 60% increase in traffic and a 40% rise in conversions.",
     link: '/case-study/nutrivita-shop-boosting-e-commerce-sales-with-a-streamlined-online-store',
  
  },
  
    {
    id: 2,
    image: projectFour,
    alt: "Custom Project",
    tag: "Web Design & SEO",
    title: "Lisburn Web Design: Crafting a Strong Online Presence for Local Businesses",
    description: "Skyrocket Business built Lisburn Web Design’s website from scratch, optimized for local SEO and lead generation, resulting in a 60% increase in traffic and a 40% boost in client inquiries.",
      link: '/case-study/lisburn-web-design-crafting-a-strong-online-presence-for-local-businesses',

 
  }
  
];


  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="px-4 sm:px-6 md:padding-global py-12 sm:py-16 md:py-20 lg:py-24 xl:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <div className="inline-block bg-secondary text-textColor px-4 py-[5px] mx-auto rounded-full text-[12px] font-semibold uppercase tracking-wider mb-1 transform transition-all duration-300 ">
                Skyrocket case studies
              </div>
              <div className="h-4" />
              <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-5xl  font-medium text-textColor mb-4 leading-tight tracking-tight transition-all duration-300 hover:text-opacity-90">
                  Skyrocket Your Business with Proven Success Stories
                </h2>
              </div>
              <div className="h-4" />
              <div className="max-w-2xl mx-auto">
                <p className="text-base md:text-lg text-secondaryTextColor leading-relaxed font-medium transition-all duration-300 hover:text-opacity-90">
                  At Skyrocket Business, we tackle real-world challenges and deliver results that matter. Our case studies show how we've helped businesses grow through tailored strategies, stunning websites, and effective marketing. We focus on the digital side, so you can focus on what you do best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="px-4 sm:px-6 md:padding-global pb-5 sm:pb-5 md:pb-5 lg:pb-5 xl:pb-10">
        <div className="mx-auto max-w-7xl space-y-16 md:space-y-20 lg:space-y-24">
          <WebCard />
          
          <div className="grid gap-12 md:gap-16">
            <CaseStudyCards />
           <CaseStudyCards caseStudies={newCaseStudies} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 md:padding-global pb-10 sm:pb-5 md:pb-5 lg:pb-10">
        <div className="mx-auto max-w-7xl">
          <Contact 
            headingText="Unleash Your Brand's Potential with Skyrocket!" 
            secondButtonText="View Services" 
          />
        </div>
      </section>

    </div>
  )
}

export default CaseStudiesDetail