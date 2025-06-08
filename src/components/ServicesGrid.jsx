import React from 'react';

const ServicesGrid = ({ 
  title = "Detroit Website Design & Development Services",
  subtitle = "At Skyrocket Business, we specialize in designing clean, fast, and mobile-friendly websites that are crafted with your business goals in mind. Whether you want to increase calls, sell more products, or establish your brand's authority — we build websites that convert.",
  services = [],
  buttonText = "Get a Quote",
  buttonLink = "/contact-us"
}) => {
  // Default services data if none provided
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
    <div className="w-full bg-white py-16 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            services
          </div>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {servicesToRender.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 mb-6 flex items-center justify-center">
                <img 
                  src={service.icon} 
                  alt="" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href={buttonLink}
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>{buttonText}</span>
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;