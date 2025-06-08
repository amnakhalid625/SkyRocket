import React from 'react';
import { ArrowUpRight, BarChart3 } from 'lucide-react';
import caseStudyImg from '../assets/images/project1.png'; 

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
    <section className="w-full flex flex-col lg:flex-row items-center justify-between px-6 py-16 max-w-7xl mx-auto gap-10">
      
      {/* Left Content */}
      <div className="flex-1 space-y-6">
        {/* Tag */}
        <span className="text-xs font-semibold bg-lime-300 text-black px-3 py-1 rounded-full inline-block">
          {tagText}
        </span>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          {title}
        </h2>

        {/* Stats Box */}
        <div className="bg-gray-100 p-6 rounded-2xl flex items-start gap-4 max-w-xl">
          <div className="bg-blue-600 text-white p-3 rounded-xl">
            <BarChart3 size={24} />
          </div>
          <p className="text-gray-700 text-lg">
            {statsText}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a href={primaryButtonLink} className="bg-lime-400 text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-lime-500 transition">
            {primaryButtonText}
          </a>
          <a href={secondaryButtonLink} className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition">
            {secondaryButtonText}
          </a>
        </div>
      </div>

      {/* Right Preview Card */}
      <div className="flex-1 max-w-xl w-full">
        <div className="rounded-3xl border p-4 shadow-md bg-white">
          <div className="rounded-2xl overflow-hidden">
            <img 
              src={caseStudyImg} 
              alt="Case Study Preview" 
              className="w-full h-auto object-cover" 
            />
          </div>
          <div className="pt-4">
            <h3 className="text-xl font-semibold text-gray-900">
              LeHost Hair & Wig Shop: Boosting Online Presence and Sales
            </h3>
            <p className="text-gray-600 pt-1 text-sm">
              We redesigned LeHost Hair & Wig Shop's website and implemented targeted digital marketing strategies, resulting in a 50% traffic...
            </p>
          </div>
          <div className="pt-3">
            <ArrowUpRight className="text-lime-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyMainContent;