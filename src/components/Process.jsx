import React from 'react';

const Process = () => {
  return (
    <div className="bg-white text-gray-700 px-10 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <div className="flex-1">
            <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              OUR PROCESS
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              From Vision to Victory
            </h2>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                Our streamlined process is designed to deliver outstanding results at every stage of your web design & marketing journey. Here's how we do it:
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2 whitespace-nowrap">
                  Get in Touch
                  <span className="text-lg">→</span>
                </button>
                <button className="bg-white text-black border border-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap">
                  Browse Services
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Process Cards - Rest of your existing card code remains the same */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 - Discovery & Strategy */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
            {/* ... existing card content ... */}
          </div>

          {/* Step 2 - Execution & Optimization */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
            {/* ... existing card content ... */}
          </div>

          {/* Step 3 - Analysis & Growth */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
            {/* ... existing card content ... */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;