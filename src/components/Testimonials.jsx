import servicesPattern from '../assets/images/bg.svg';
import servicesPattern2 from '../assets/images/backImg.svg';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import blueArrow from '../assets/images/blueArrow.svg';
const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const testimonials = [
    {
      id: 1,
      image: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/68091cde2ff066794554c24d_le%20host%20ceo.jpg",
      logo: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/68091e6715a4b7258ceffd1d_LeHost_Hair_and_Wigs_Logo_1_310x-ezgif.com-avif-to-jpg-converter.jpg",
      quote: "Skyrocket Business completely transformed our online presence. The new website captured our brand beautifully, and our social media engagement soared. We saw a noticeable increase in online sales. Their team just gets it—they're creative, professional, and genuinely understood our vision.",
      name: "Haith Johnson",
      title: "CEO LeHost"
    },
    {
      id: 2,
      image: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c40_testi2.webp",
      logo: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/680a66ba288d87f5060adc8e_WEBLogo-1.png",
      quote: "Working with Skyrocket Business was the best decision we made for our company. They made everything so easy—from building our website to helping us get more local customers. We really felt supported every step of the way!",
      name: "Martha Nielsen",
      title: "CEO Mop and Glow Cleaning"
    }
  ];

  const nextTestimonial = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 250);
  };

  const prevTestimonial = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, 250);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsFading(false), 500);
    return () => clearTimeout(timeout);
  }, [currentTestimonial]);

  const currentData = testimonials[currentTestimonial];

  return (
    <div className="min-h-screen bg-primary px-4 py-16 relative overflow-hidden">
      {/* Top Right Decorative Image */}
      <img
        src={servicesPattern}
        alt="servicesImg"
        className="absolute top-0 right-0 z-0"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-secondary text-textColor px-4 py-[5px] mx-auto rounded-full text-[12px] font-semibold uppercase tracking-wider mb-8">
            OUR TESTIMONIALS
          </div>
          <h1 className="text-3xl md:text-[48px] lg:text-[56px] font-semibold text-white mb-8 leading-tight max-w-2xl mx-auto tracking-tight">
            What Our Clients Say About Working with Skyrocket Business
          </h1>
          <p className="md:text-[18px] text-white max-w-2xl mx-auto tracking-tight mb-8 font-medium">
            Real words from real businesses. Here's how Skyrocket Business helped them grow, connect, and succeed in the digital space.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white rounded-[24px] shadow-xl p-8 max-w-[83rem] mx-auto relative min-h-[350px] lg:min-h-[400px]">
          <div className={`flex flex-col lg:flex-row gap-6 h-full transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
            {/* Image Section */}
            <div className="w-full lg:w-[35%] flex-shrink-0">
              <div className="overflow-hidden rounded-2xl h-full max-w-md mx-auto">
                <img 
                  src={currentData.image}
                  alt="Testimonial Giver"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 flex flex-col">
              {/* Logo and Navigation at Top */}
              <div className="flex items-center justify-between mb-6">
                <img 
                  src={currentData.logo}
                  alt="Company Logo"
                  className="h-14 w-auto object-cover"
                  loading="lazy"
                />
                <div className="flex gap-4">
                 <button                      
  onClick={prevTestimonial}                     
  className="w-12 h-12 rounded-full border border-primary bg-white text-primary hover:text-white transition-all duration-200 flex items-center justify-center shadow-lg"                   
>                     
  <img 
    src={blueArrow} 
    alt="arrow" 
    className="w-5 h-5 transform rotate-180" 
  />                   
</button>
                  <button 
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full border border-primary bg-white text-primary  hover:text-white transition-all duration-200 flex items-center justify-center shadow-lg"
                  >
                    <img src={blueArrow} alt="arrow" className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Quote Section */}
              <div className="flex-1 flex flex-col justify-center">
                <p className="text-textColor text-[18px] lg:text-[20px] mb-6 italic leading-relaxed">
                  "{currentData.quote}"
                </p>
                <div className="text-secondaryTextColor text-base lg:text-lg font-bold italic">
                  {currentData.name} - {currentData.title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Left Decorative Image */}
      <img
        src={servicesPattern2}
        alt=""
        className="absolute bottom-0 left-0 z-0"
      />
    </div>
  );
};

export default Testimonials;
