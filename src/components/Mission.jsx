import React from 'react';
import navArrow from '../assets/images/NavArrow.svg';
import tickImg from '../assets/images/tick.svg';

const Mission = () => {
  return (
    <section className="py-12 md:py-[80px] bg-white">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Text Content - always appears first */}
            <div className="space-y-6">
              {/* Tag */}
              <div className="inline-block bg-secondary text-textColor px-4 py-[5px] rounded-full text-[12px] font-semibold uppercase tracking-wider">
                Our Mission
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-textColor leading-tight tracking-tight max-w-3xl">
                Skyrocket your Business with clarity, creativity, and results.
              </h2>

              {/* Description */}
              <div className="text-base md:text-lg text-secondaryTextColor leading-relaxed space-y-4 max-w-lg">
                <p>
                  At Skyrocket Business, we're not just another digital agency — we're your growth partner. Born from the belief that great marketing should be clear, effective, and human, we help brands like yours stand out, connect, and convert.
                </p>
                <p>
                  Whether you need a stunning website, a content plan that clicks, or marketing strategies that drive real growth — we're here to make it happen. No fluff. No confusing jargon. Just smart work that works.
                </p>
                <p className="font-semibold text-textColor">
                  What We Bring:
                </p>
              </div>

              {/* Mission List */}
              <div className="space-y-4">
                {[
                  {
                    title: "Personal Attention",
                    desc: "We listen, we care, we act.",
                  },
                  {
                    title: "Smart Strategies",
                    desc: "Rooted in data, driven by creativity.",
                  },
                  {
                    title: "Real Results",
                    desc: "From better branding to higher sales.",
                  },
                ].map((item, index) => (
                  <div className="flex items-start space-x-3" key={index}>
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mt-0.5">
                      <img src={tickImg} alt="tick icon" />
                    </div>
                    <div className="text-base text-textColor">
                      <strong>{item.title}</strong> – {item.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div>
                <a
                  href="/contact-us"
                  className="group inline-flex items-center space-x-2 bg-secondary hover:bg-hoverColor text-textColor px-6 py-3 rounded-full transition-all duration-300 ease-in-out font-medium"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    Get in Touch
                  </span>
                  <img
                    src={navArrow}
                    alt="arrow"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c55_mission.webp"
                  alt="Team working together"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;