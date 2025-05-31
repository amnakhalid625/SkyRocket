import React from 'react';

const AboutMap = () => {
  return (
    <section className="bg-backgroundColor py-14 md:py-24 section-offices">
      <div className="px-4 sm:px-6 max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block bg-secondary text-textColor px-4 py-[5px] mx-auto rounded-full text-[12px] font-semibold uppercase tracking-wider mb-3">
          Our Global Presence
        </div>

        {/* Heading */}
        <div className="max-w-5xl mx-auto mt-3 mb-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-textColor leading-tight tracking-tight">
            Skyrocket Offices Around the World
          </h2>
        </div>

        {/* Paragraph */}
        <div className="max-w-2xl mx-auto">
          <p className="text-sm sm:text-base md:text-lg text-secondaryTextColor leading-relaxed mb-8 font-medium">
            To better serve our clients, Skyrocket has established a strong global presence with offices in 03-key locations.
          </p>
        </div>

        {/* Map Image */}
        <div className="overflow-hidden">
          <img
            src="https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c32_Maps%20(1).webp"
            alt="Map"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-contain transform scale-100 sm:scale-105 md:scale-110 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMap;
