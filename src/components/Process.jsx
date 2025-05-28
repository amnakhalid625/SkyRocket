import React from 'react';
import arrow from '../assets/images/staright-arrow.svg';
import form1 from '../assets/images/form1.webp';
import form2 from '../assets/images/form2.webp';
import form3 from '../assets/images/form3.webp';

const Process = () => {
  return (
    <div className="bg-white text-gray-700 px-10 py-16">
      <div className="max-w-[83rem] mx-auto">
        {/* Header Section (unchanged) */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <div className="flex-1">
            <div className="inline-block bg-secondary text-black px-4 py-[5px] rounded-full text-[12px] font-semibold uppercase tracking-wider mb-8">
              OUR PROCESS
            </div>
            <h2 className="text-5xl lg:text-[56px] font-medium text-textColor mb-6 leading-none tracking-tight">
              From Vision to Victory
            </h2>
            <div className="flex flex-col lg:flex-row items-start justify-between lg:items-center gap-6">
              <p className="text-lg text-secondaryTextColor max-w-2xl leading-relaxed">
                Our streamlined process is designed to deliver outstanding results at every stage of your web design & marketing journey. Here's how we do it:
              </p>
              <div className="flex gap-4 flex-wrap">
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

        {/* Process Cards - Updated to match reference styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 - Discovery & Strategy */}
          <div 
            className="process-card"
            style={{
              transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              opacity: 1
            }}
          >
            <div className="process-card-image-wrap mb-6">
              <img 
                src={form1} 
                alt="Discovery & Strategy" 
                className="process-card-image w-full h-auto rounded-xl"
              />
            </div>
            <div>
              <div className="process-number text-blue-600 font-semibold text-sm mb-2 uppercase tracking-wider">
                STEP 1
              </div>
              <h3 className="text-size-large text-2xl font-bold text-gray-900 mb-4">
                Discovery & Strategy
              </h3>
              <div className="spacer-xsmall h-2"></div>
              <p className="text-size-regular text-gray-600 leading-relaxed">
                We start by understanding your goals, challenges, and audience to create a plan that's perfect for your business.
              </p>
            </div>
          </div>

          {/* Step 2 - Execution & Optimization */}
          <div 
            className="process-card"
            style={{
              transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              opacity: 1
            }}
          >
            <div className="process-card-image-wrap mb-6">
              <img 
                src={form2} 
                alt="Execution & Optimization" 
                className="process-card-image w-full h-auto rounded-xl"
              />
            </div>
            <div>
              <div className="process-number text-blue-600 font-semibold text-sm mb-2 uppercase tracking-wider">
                STEP 2
              </div>
              <h3 className="text-size-large text-2xl font-bold text-gray-900 mb-4">
                Execution & Optimization
              </h3>
              <div className="spacer-xsmall h-2"></div>
              <p className="text-size-regular text-gray-600 leading-relaxed">
                We put the plan into action, constantly checking performance and making adjustments to get the best results.
              </p>
            </div>
          </div>

          {/* Step 3 - Analysis & Growth */}
          <div 
            className="process-card"
            style={{
              transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              opacity: 1
            }}
          >
            <div className="process-card-image-wrap mb-6">
              <img 
                src={form3} 
                alt="Analysis & Growth" 
                className="process-card-image w-full h-auto rounded-xl"
              />
            </div>
            <div>
              <div className="process-number text-blue-600 font-semibold text-sm mb-2 uppercase tracking-wider">
                STEP 3
              </div>
              <h3 className="text-size-large text-2xl font-bold text-gray-900 mb-4">
                Analysis & Growth
              </h3>
              <div className="spacer-xsmall h-2"></div>
              <p className="text-size-regular text-gray-600 leading-relaxed">
                We review the results, gather insights, and refine our approach to keep driving growth for your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add these styles to your global CSS or CSS-in-JS solution */}
      <style jsx>{`
        .process-card {
          display: flex;
          flex-flow: column;
          gap: 1.5rem;
          border: 1px solid #e2e4e9;
          border-radius: 32px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }
        .process-card:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .process-card-image-wrap {
          overflow: hidden;
          border-radius: 16px;
          background-color: #f4f7fb;
        }
        .text-size-large {
          font-size: 1.5rem;
          line-height: 2rem;
        }
        .text-size-regular {
          font-size: 1rem;
          line-height: 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default Process;