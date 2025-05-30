import React from 'react';

const OurValues = () => {
  return (
    <section className="py-20 bg-backgroundColor">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            {/* Tag */}
            <div className="inline-block bg-secondary text-textColor px-4 py-[5px] mx-auto rounded-full text-[12px] font-semibold uppercase tracking-wider mb-1">
              OUR VALUES
            </div>

            {/* Main Heading */}
            <div className="max-w-4xl mx-auto mb-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-textColor leading-tight tracking-tight mt-3">
                The Pillars of Our Success
              </h2>
            </div>

            {/* Description */}
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-secondaryTextColor leading-relaxed">
                At Skyrocket Business, our core values define who we are and guide everything we do.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 custom-md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Integrity Card */}
            <div className="bg-transparent group max-w-[400px] w-full mx-auto">
              <div className="mb-6 relative overflow-hidden rounded-2xl h-[300px] sm:h-[350px] custom-md:h-[400px]">
                <img
                  src="https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c53_values1.webp"
                  alt="Integrity"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 w-16 h-16 transform -rotate-12 rounded-lg"></div>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-textColor text-center mb-3">
                  Integrity
                </h3>
                <p className="text-base text-secondaryTextColor leading-tight text-center">
                  We believe in honest communication, clear results, and doing what's right — always. Our clients trust us to deliver with transparency.
                </p>
              </div>
            </div>

            {/* Innovation Card */}
            <div className="bg-transparent group max-w-[400px] w-full mx-auto">
              <div className="mb-6 relative overflow-hidden rounded-2xl h-[300px] sm:h-[350px] custom-md:h-[400px]">
                <img
                  src="https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c56_values2.webp"
                  alt="Innovation"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-4 right-4 w-20 h-12 transform rotate-12 rounded-lg"></div>
                <div className="absolute bottom-8 right-8 w-12 h-16 transform -rotate-12 rounded-lg"></div>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-textColor text-center mb-3">
                  Innovation
                </h3>
                <p className="text-base text-secondaryTextColor leading-tight text-center">
                  At Skyrocket Business, we think ahead. From strategy to execution, we push boundaries to craft digital solutions that drive real growth.
                </p>
              </div>
            </div>

            {/* Collaboration Card */}
            <div className="bg-transparent group max-w-[400px] w-full mx-auto md:col-span-2 lg:col-span-1">
              <div className="mb-6 relative overflow-hidden rounded-2xl h-[300px] sm:h-[350px] custom-md:h-[400px]">
                <img
                  src="https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c52_values3.webp"
                  alt="Collaboration"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 w-12 h-20 transform rotate-45 rounded-lg"></div>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-textColor text-center mb-3">
                  Collaboration
                </h3>
                <p className="text-base text-secondaryTextColor leading-tight text-center">
                  We don't just work for you — we work with you. Together, we align on your goals and build strategies that truly move the needle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
