import React from 'react';
import { Link } from 'react-router-dom';
import navArrow from '../assets/images/NavArrow.svg';


const ServicesGrid = ({ 
  title = "Detroit Website Design & Development Services",
  subtitle = "At Skyrocket Business, we specialize in designing clean, fast, and mobile-friendly websites that are crafted with your business goals in mind. Whether you want to increase calls, sell more products, or establish your brand's authority — we build websites that convert.",
  services = [],
  buttonText = "Get a Quote",
  buttonLink = "/contact-us"
}) => {
  const defaultServices = [
    {
      id: 1,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c0b_ds-icon1.svg",
      title: "Convert Visitors into Customers",
      description: "Our websites are built to sell. With a strong focus on user experience and conversion optimization, we turn your website into a powerful lead-generating machine."
    },
    {
      id: 2,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c07_ds-icon2.svg",
      title: "Targeted Design That Speaks to Your Audience",
      description: "We design with your target market in mind, ensuring that your site not only looks great but also communicates your brand's value, driving more sales."
    },
    {
      id: 3,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c05_ds-icon3.svg",
      title: "SEO-Optimized for Increased Visibility",
      description: "Get found online! Our websites are designed with SEO best practices to ensure your business ranks higher, attracting organic traffic and boosting sales opportunities."
    },
    {
      id: 4,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834bdf_ds-icon4.svg",
      title: "Speed to Market with Quick Launch",
      description: "Time is money. We ensure that your website is built and launched quickly, so you can start seeing leads and sales right away without unnecessary delays."
    },
    {
      id: 5,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c08_ds-icon5.svg",
      title: "Continuous Performance Tracking for Growth",
      description: "We don't stop after launch. We track performance, analyze data, and continuously optimize your website to ensure it consistently brings in more leads and higher sales."
    },
    {
      id: 6,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c10_ds-icon6.svg",
      title: "Maximized ROI",
      description: "Every page is strategically designed to convert. We focus on creating high-converting landing pages that increase your sales and maximize the return on your investment."
    }
  ];

  const servicesToRender = services.length > 0 ? services : defaultServices;

  return (
    <div className="w-full bg-backgroundColor py-14 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary text-textColor px-3 py-[5px] mx-auto rounded-full text-[12px] font-semibold uppercase tracking-wider mb-3">
            services
          </div>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-textColor mb-6 leading-wide  tracking-tight">
              {title}
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-secondaryTextColor font-medium leading-wide text-center">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 mt-[-10px]">
          {servicesToRender.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-[24px] p-6 sm:p-6 md:p-7 lg:p-6 transition-all duration-300 transform  border border-gray-100 w-full max-w-sm sm:max-w-full mx-auto"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-6 flex items-center justify-center">
                <img 
                  src={service.icon} 
                  alt="service icon" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-textColor mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-secondaryTextColor  font-medium text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
      <div className="text-center">
  <Link
    to="/contact-us"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="group inline-flex items-center space-x-2 bg-secondary hover:bg-hoverColor text-textColor px-6 py-3 rounded-full transition-all duration-300 ease-in-out font-medium justify-center"
  >
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      Get a Quote
    </span>
    <img
      src={navArrow}
      alt="navigation arrow"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 font-bold"
    />
  </Link>
</div>

      </div>
    </div>
  );
};

export default ServicesGrid;
