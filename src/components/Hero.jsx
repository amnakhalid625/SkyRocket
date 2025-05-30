import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
              <img src="https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/680e407427b16308a5f4b851_Black%20%26%20Blue%20Minimalist%20Modern%20Initial%20Font%20Logo%20(5).png" alt="Logo" className="w-6 h-6 rounded-full" />
              all-in-one Web design & marketing agency
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Skyrocket your Detroit Business with{' '}
              <span className="text-blue-600">Proven Strategies</span>
            </h1>

            {/* Description */}
            <div className="max-w-lg">
              <p className="text-lg text-gray-600 leading-relaxed">
                <strong className="text-gray-900">Custom Websites. Smart Marketing. Real Results</strong>. 
                We design, build, and grow your online presence—so you can focus on what you do best.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Get in Touch
                <img src="https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834b7a_arrow-right%20(8).svg" alt="Arrow" className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200">
                See all Services
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                  350<span className="text-blue-600">+</span>
                </div>
                <div className="text-sm text-gray-600">Web Design Projects</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                  170<span className="text-blue-600">+</span>
                </div>
                <div className="text-sm text-gray-600">Marketing Projects</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                  90<span className="text-blue-600">+</span>
                </div>
                <div className="text-sm text-gray-600">Social Media Projects</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image & Features */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative">
              <img 
                src="https://cdn.prod.website-files.com/6807e00032c9ff6c11834c3e/6807e00132c9ff6c11834c3e_Home%20Hero%20Img%20(1).webp" 
                alt="Team Member" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>

            {/* Feature Points */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <img src="https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834bab_award.svg" alt="Award" className="w-6 h-6" />
                  <span className="text-sm font-medium text-gray-700">Award-Winning Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834ba9_puzzle.svg" alt="Puzzle" className="w-6 h-6" />
                  <span className="text-sm font-medium text-gray-700">Tailored Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834b7f_trending-up.svg" alt="Trending" className="w-6 h-6" />
                  <span className="text-sm font-medium text-gray-700">Proven Results</span>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">98%</div>
                <div className="text-xs text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;