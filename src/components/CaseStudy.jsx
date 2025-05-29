import React from 'react';
import arrow from '../assets/images/staright-arrow.svg';
import form1 from '../assets/images/form1.webp';
import form2 from '../assets/images/form2.webp';
import form3 from '../assets/images/form3.webp';


const CaseStudies = () => {
  return (
   <div className="bg-white text-gray-700 px-4 sm:px-6 py-12 md:py-16">
         <div className="max-w-[83rem] mx-auto">
           {/* Header Section */}
           <div className="flex flex-col lg:flex-row justify-between items-start mb-8 md:mb-16">
             <div className="flex-1">
               <div className="inline-block bg-secondary text-black px-4 py-1 rounded-full text-xs sm:text-[12px] font-semibold uppercase tracking-wider mb-4 sm:mb-6">
                 OUR PROCESS
               </div>
               <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-textColor mb-4 sm:mb-6 leading-tight">
                 From Vision to Victory
               </h2>
               <div className="flex flex-col lg:flex-row items-start justify-between lg:items-center gap-4 sm:gap-6">
                 <p className="text-base sm:text-lg text-secondaryTextColor max-w-2xl leading-relaxed">
                   Our streamlined process is designed to deliver outstanding results at every stage of your web design & marketing journey. Here's how we do it:
                 </p>
                 {/* Buttons - hidden on mobile and sm (md and below), visible from md up */}
                 <div className="hidden md:flex gap-4 flex-wrap">
                   <button className="bg-secondary text-textColor px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2 whitespace-nowrap">
                     Get in Touch
                     <span className="text-lg">
                       <img src={arrow} alt="arrow" className="w-4 h-4" />
                     </span>
                   </button>
                   <button className="border border-primary hover:border-blue-600 text-primary hover:text-blue-600 font-medium py-3 px-6 rounded-full transition duration-200">
                     Browse Services
                   </button>
                 </div>
               </div>
             </div>
           </div>
   
           {/* Process Cards */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
             {/* Step 1 - Discovery & Strategy */}
             <div className="border border-gray-200 rounded-3xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
               <div className="overflow-hidden rounded-xl bg-gray-50 mb-4 sm:mb-6">
                 <img 
                   src={form1} 
                   alt="Discovery & Strategy" 
                   className="w-full h-auto object-cover"
                 />
               </div>
               <div>
                 <div className="text-blue-600 font-semibold text-xs sm:text-sm mb-2 uppercase tracking-wider">
                   STEP 1
                 </div>
                 <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
                   Discovery & Strategy
                 </h3>
                 <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                   We start by understanding your goals, challenges, and audience to create a plan that's perfect for your business.
                 </p>
               </div>
             </div>
   
             {/* Step 2 - Execution & Optimization */}
             <div className="border border-gray-200 rounded-3xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
               <div className="overflow-hidden rounded-xl bg-gray-50 mb-4 sm:mb-6">
                 <img 
                   src={form2} 
                   alt="Execution & Optimization" 
                   className="w-full h-auto object-cover"
                 />
               </div>
               <div>
                 <div className="text-blue-600 font-semibold text-xs sm:text-sm mb-2 uppercase tracking-wider">
                   STEP 2
                 </div>
                 <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
                   Execution & Optimization
                 </h3>
                 <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                   We put the plan into action, constantly checking performance and making adjustments to get the best results.
                 </p>
               </div>
             </div>
   
             {/* Step 3 - Analysis & Growth */}
             <div className="border border-gray-200 rounded-3xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
               <div className="overflow-hidden rounded-xl bg-gray-50 mb-4 sm:mb-6">
                 <img 
                   src={form3} 
                   alt="Analysis & Growth" 
                   className="w-full h-auto object-cover"
                 />
               </div>
               <div>
                 <div className="text-blue-600 font-semibold text-xs sm:text-sm mb-2 uppercase tracking-wider">
                   STEP 3
                 </div>
                 <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
                   Analysis & Growth
                 </h3>
                 <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                   We review the results, gather insights, and refine our approach to keep driving growth for your business.
                 </p>
               </div>
             </div>
           </div>
         </div>
       </div>
  );
};

export default CaseStudies;