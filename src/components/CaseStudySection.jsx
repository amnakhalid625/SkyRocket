import React from 'react';
import { ArrowUpRight, BarChart3 } from 'lucide-react';
import caseStudyImg from '../assets/images/project1.png';
import graphImg from '../assets/images/graph.svg';
import navArrow from '../assets/images/NavArrow.svg';
import { Link } from 'react-router-dom';

const CaseStudyMainContent = ({
  tagText = "CASE STUDY",
  title = "Developed a Tailored Digital Strategy for our client Stark Inc.",
  statsText = "Increased organic traffic by 150%, social media engagement by 200%, and online sales by 35% within six months.",
  primaryButtonText = "Get a Quote",
  primaryButtonLink = "/contact-us",
  secondaryButtonText = "See Case Studies",
  secondaryButtonLink = "/case-studies"
}) => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-between px-6 py-16 max-w-[83rem] mx-auto gap-10">

      {/* Left Content */}
      <div className="flex-1 space-y-6">
        {/* Tag */}
        <span className="inline-block bg-secondary text-textColor px-3 py-[5px] mx-auto rounded-full text-[12px] font-semibold uppercase tracking-wider mb-1">
          {tagText}
        </span>

        {/* Title */}
        <h2 className="text-4xl md:text-[56px] font-medium  text-gray-900  leading-tight tracking-tighter max-w-2xl">
          {title}
        </h2>
        {/* state box */}
        <div class="bg-backgroundColor text-textColor rounded-3xl p-6 flex flex-col items-start gap-6 max-w-2xl">
          <img
            src={graphImg}
            alt="graph icon"
            class="w-14 h-14 object-contain"
          />
          <div class="text-2xl font-light leading-relaxed tracking-tight">
            Increased organic traffic by <strong>150%</strong>, social media engagement by <strong>200%</strong>, and online sales by <strong>35%</strong> within six months.
          </div>
        </div>


        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
         <Link
    to="/contact-us"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="group inline-flex items-center space-x-2 bg-secondary hover:bg-hoverColor text-textColor px-6 py-3 rounded-full transition-all duration-300 ease-in-out font-medium justify-center"
  >
    <span className="transition-transform duration-300 ">
      Get a Quote
    </span>
    <img
      src={navArrow}
      alt="navigation arrow"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 font-bold"
    />
  </Link>
            <Link
            to="/case-studies"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="border border-primary hover:border-bluehover text-primary hover:text-bluehover font-medium py-3 px-5 rounded-full transition duration-200"
          >
          See  Case Studies
          </Link>
        </div>
      </div>

    {/* Right card */}
    <Link to='/case-study/lehost-hair-wig-shop-boosting-online-presence-and-sales' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
<div className="flex-1 max-w-xl w-full">
  <div className="group bg-white border border-gray-200 rounded-3xl p-6 flex flex-col h-full  transition-all duration-500 ease-in-out transform hover:-translate-y-1 cursor-pointer">
    
    
    
    
    {/* Image Section with Tag */}
    <div className="relative mb-6 overflow-hidden rounded-2xl">
      <img
        src={caseStudyImg}
        alt="LeHost Hair & Wig Shop"
        className="w-full h-90 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      {/* Tag - same as case study */}
      <div className="absolute top-4 left-4 bg-white backdrop-blur-sm text-textColor px-2 py-1 rounded-full text-sm font-medium transition-all duration-300 ease-in-out group-hover:bg-hoverColor group-hover:text-textColor">
        Web Design & Marketing
      </div>
    </div>

    {/* Content Section */}
    <div className="flex-1 flex flex-col">
      <div>
        <h3 className="text-xl lg:text-2xl font-medium text-gray-900 mb-3 leading-tight transition-colors duration-300 group-hover:text-primary">
          LeHost Hair & Wig Shop: Boosting Online<br /> Presence and Sales
        </h3>
        
        {/* Description and Arrow in same row */}
        <div className="flex justify-between items-start gap-4">
          <p className="text-secondaryTextColor leading-relaxed  flex-2 font-medium transition-colors duration-300 group-hover:text-gray-800">
            We redesigned LeHost Hair & Wig Shop's website and implemented targeted digital marketing strategies, resulting in a 50% traffic...
          </p>
          
          {/* Arrow Icon */}
          <div className="bg-secondary group-hover:bg-hoverColor rounded-full p-3 transition-all duration-500 ease-in-out group-hover:rotate-45">
            <ArrowUpRight className="w-6 h-6 text-textColor transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</Link>

    </section>
  );
};

export default CaseStudyMainContent;