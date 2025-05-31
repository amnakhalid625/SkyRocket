import React from 'react';

const About = () => {
  return (
    <section className="py-12 md:py-[80px] bg-backgroundColor">
      <div className="px-4 sm:px-6 md:padding-global">
        <div className="mx-auto">
          <div className="text-center">
            <div className="inline-block bg-secondary text-black px-4 py-[5px] mx-auto rounded-full text-[12px] font-semibold uppercase tracking-wider mb-1">
              about skyrocket business
            </div>
            <div className="h-4"></div>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-textColor mb-4 leading-tight">
                Your Partner in Detroit<br className="hidden sm:inline" /> Web Design & Marketing Excellence
              </h2>
            </div>
            <div className="h-4"></div>
            <div className="max-w-2xl mx-auto">
              <p className="text-base md:text-lg text-secondaryTextColor leading-relaxed mb-8 font-medium">
                We help Detroit businesses grow online with custom websites, smart SEO, engaging social media, and eye-catching branding. Whether you're starting fresh or scaling up, we'll tailor everything to fit your goals — with a clear focus on results and real growth.
              </p>
            </div>
          </div>
          
          {/* Image container with increased height */}
          <div className="max-w-[80rem] mx-auto relative">
            <img
              src="https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c51_about.webp"
              alt="Team"
              className="w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[500px] object-cover rounded-[24px] mb-6 transition-all duration-300 ease-in-out"
            />
            
            {/* Responsive card positioning */}
            <div className="hidden md:block bg-white rounded-[24px] p-5 w-[90%] max-w-[500px] shadow-md absolute right-4 bottom-4
                          sm:[770px]:w-[80%] sm:[770px]:right-6 sm:[770px]:bottom-6
                          md:[953px]:w-[70%] md:[953px]:right-8 md:[953px]:bottom-8
                          lg:[1225px]:w-[60%] lg:[1225px]:right-10 lg:[1225px]:bottom-10">
              <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-medium text-textColor mb-2">
                    350+
                  </div>
                  <div className="text-sm md:text-base text-secondaryTextColor font-medium">Web design Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-textColor mb-2">
                    170<span className="text-primary">+</span>
                  </div>
                  <div className="text-sm md:text-base text-secondaryTextColor font-medium">Marketing Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-medium text-textColor mb-2">
                    90<span className="text-primary">+</span>
                  </div>
                  <div className="text-sm md:text-base text-secondaryTextColor font-medium">Social Media Projects</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <a
              href="/about-us"
              className="button bg-secondary text-textColor px-6 py-3 rounded-full font-semibold inline-flex items-center shadow-md hover:shadow-lg transition-all duration-200"
            >
              <span>Learn More</span>
              <img
                src="https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834b7a_arrow-right%20(8).svg"
                alt="Arrow"
                className="w-4 h-4 ml-2"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;