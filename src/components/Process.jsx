import React from 'react';
import arrow from '../assets/images/staright-arrow.svg';

const Process = () => {
  return (
    <div className="bg-white text-gray-700 px-10 py-16">
      <div className="max-w-[83rem] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <div className="flex-1">
            <div className="inline-block bg-secondary text-black px-4 py-[5px]  rounded-full text-[12px] font-semibold uppercase tracking-wider mb-8">
              OUR PROCESS
            </div>
            <h2 className="text-5xl lg:text-[56px] font-medium text-textColor mb-6 leading-none tracking-tight">
              From Vision to Victory
            </h2>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              <p className="text-lg text-secondaryTextColor max-w-2xl leading-relaxed">
                Our streamlined process is designed to deliver outstanding results at every stage of your web design & marketing journey. Here's how we do it:
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-secondary text-textColor px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2 whitespace-nowrap">
                  Get in Touch
                  <span className="text-lg">
                    <img src={arrow} alt="arrowImage" />
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 - Discovery & Strategy */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-8">
              <div className="bg-gray-50 rounded-xl p-8 h-64 flex flex-col items-center justify-center relative">
                <div className="bg-white rounded-lg shadow-md w-full max-w-xs p-4">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="bg-blue-600 rounded-lg p-3 flex items-center gap-3">
                    <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
                      <span className="text-blue-600 text-sm">🔍</span>
                    </div>
                    <div className="bg-white rounded h-2 flex-1"></div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="bg-gray-200 h-2 rounded w-3/4"></div>
                    <div className="bg-gray-200 h-2 rounded w-full"></div>
                    <div className="bg-gray-200 h-2 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-blue-600 font-semibold text-sm mb-2 uppercase tracking-wider">
                STEP 1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Discovery & Strategy
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We start by understanding your goals, challenges, and audience to create a plan that's perfect for your business.
              </p>
            </div>
          </div>

          {/* Step 2 - Execution & Optimization */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-8">
              <div className="bg-gray-50 rounded-xl p-8 h-64 flex flex-col items-center justify-center">
                <div className="bg-white rounded-lg shadow-md w-full max-w-xs p-4">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div className="bg-gray-200 h-2 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div className="bg-gray-200 h-2 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div className="bg-gray-200 h-2 rounded flex-1"></div>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <div className="bg-yellow-400 rounded-lg w-16 h-10 flex items-center justify-center">
                      <div className="w-0 h-0 border-l-4 border-l-black border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-blue-600 font-semibold text-sm mb-2 uppercase tracking-wider">
                STEP 2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Execution & Optimization
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We put the plan into action, constantly checking performance and making adjustments to get the best results.
              </p>
            </div>
          </div>

          {/* Step 3 - Analysis & Growth */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-8">
              <div className="bg-gray-50 rounded-xl p-8 h-64 flex flex-col items-center justify-center">
                <div className="bg-white rounded-lg shadow-md w-full max-w-xs p-4">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div className="bg-gray-200 h-2 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div className="bg-gray-200 h-2 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div className="bg-gray-200 h-2 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div className="bg-gray-200 h-2 rounded flex-1"></div>
                    </div>
                  </div>
                  <div className="bg-yellow-400 rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                      <div className="space-y-1">
                        <div className="flex gap-1">
                          <div className="w-2 h-4 bg-blue-600 rounded"></div>
                          <div className="w-2 h-6 bg-blue-600 rounded"></div>
                          <div className="w-2 h-3 bg-blue-600 rounded"></div>
                          <div className="w-2 h-8 bg-blue-600 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-blue-600 font-semibold text-sm mb-2 uppercase tracking-wider">
                STEP 3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Analysis & Growth
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We review the results, gather insights, and refine our approach to keep driving growth for your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;