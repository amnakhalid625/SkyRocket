import React from 'react';
import checkIcon from '../assets/images/checkIcon.svg';
import whtieCheckIcon from '../assets/images/whiteCheckIcon.svg';
import starsImg from '../assets/images/stars.svg';
import navArrow from '../assets/images/NavArrow.svg';
import msgIcon from '../assets/images/msgIcon.svg';
import WhyUs from '../components/WhyUs';
import Faqs from '../components/Faqs';


const PricingDetails = () => {
  return (
<>

    <div className="px-4 sm:px-6 md:px-8 py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Intro Text */}
        <div className="text-center mb-12 md:mb-16">
           <div className="inline-block bg-secondary text-textColor px-4 py-[5px] rounded-full text-[12px] font-semibold uppercase tracking-wider">
                Pricing
              </div>
        <div className="max-w-3xl mx-auto py-4">
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-textColor mb-4 leading-tight tracking-tight">
               Power Your Detroit Business with Custom Web Solutions
              </h2>
            </div>
           <div className="max-w-2xl mx-auto">
                    <p className="text-base md:text-lg text-secondaryTextColor leading-relaxed mb-8 font-medium ">
                      Grow your Detroit business with custom websites that attract more visitors, increase visibility, and turn them into loyal customers. Let’s build your digital success
                    </p>
                </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Starter Plan",
              price: "$500",
              description: "Perfect for small businesses looking to establish a strong online presence.",
              features: [
                "Custom Design (Up to 05 pages)",
                "Responsive Layout",
                "SEO Optimization (Basic)",
                "Blog Integration (10 Blog Posts)",
                "Social Media Integration",
                "Monthly Performance Report",
                "03-Months Support"
              ],
              bg: "bg-backgroundColor",
              text: "text-textColor"
            },
            {
              title: "Growth Plan",
              price: "$1000",
              description: "Ideal for growing businesses aiming to boost engagement and conversions.",
              features: [
                <><strong className="font-medium">Custom Design</strong> (Up to 10 pages)</>,
                "Responsive Layout",
                "SEO Optimization (Enhanced)",
                "Blog Integration (20 Blog Posts)",
                "Social Media Integration (01-Month Scheduled Postings)",
                "Paid Advertising",
                "Bi-Weekly Performance Reports",
                "03-Months Support"
              ],
              bg: "bg-primary",
              text: "text-white",
              popular: true
            },
            {
              title: "Premium Plan",
              price: "$1500",
              description: "Best for established businesses seeking comprehensive digital strategies.",
              features: [
                "Custom Design (Up to 15 pages)",
                "Responsive Layout",
                "SEO Optimization (Premium)",
                "Blog Integration (30 Blog Posts)",
                "Social Media Integration (03-Months Scheduled Postings)",
                "Paid Advertising Campaigns",
                "Email Marketing Campaign",
                "Weekly Performance Reports",
                "06-Months Enhanced Support"
              ],
              bg: "bg-backgroundColor",
              text: "text-textColor"
            }
          ].map((plan, i) => (
            <div key={i} className={`${plan.bg} rounded-2xl p-6 sm:p-8 flex flex-col relative`}>
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-secondary text-textColor px-3 py-1 rounded-full text-xs font-medium flex items-center">
                  <img
                    src={starsImg}
                    alt="Popular"
                    className="w-4 h-4 mr-1"
                  />
                  Popular
                </div>
              )}
              <div className="flex-grow">
                <h3 className={`text-2xl font-semibold mb-2 ${plan.text}`}>{plan.title}</h3>
                <div className={`text-4xl sm:text-5xl text-center font-bold mb-4 ${plan.text}`}>{plan.price}</div>
                <p className={`text-sm sm:text-base mb-6 ${plan.text === 'text-white' ? 'text-blue-100' : 'text-secondaryTextColor'}`}>
                  {plan.description}
                </p>
                <div className="border-t border-gray-300/40 my-6" />
                <ul className="space-y-4">
                  {plan.features.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <img
                        src={plan.text === 'text-white' ? whtieCheckIcon : checkIcon}
                        alt="Checkmark"
                        className="w-5 h-5 mt-1 mr-3 flex-shrink-0"
                      />
                      <span className={`${plan.text} text-sm sm:text-base leading-relaxed`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Plan CTA */}
        <div
          className="bg-white rounded-3xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-[4fr_1fr] gap-6 items-center mt-12"
          style={{
            boxShadow:
              'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
          }}
        >
          {/* Left Side */}
          <div className="flex items-start gap-4">
            <img
              src={msgIcon}
              alt="Messages Icon"
              className="w-14 h-14 sm:w-14 sm:h-14"
            />
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-textColor">Custom Plans</h2>
              <p className="text-sm sm:text-base text-secondaryTextColor mt-2">
                Need something more tailored? Contact us for a customized plan that fits your specific requirements and budget.
              </p>
            </div>
          </div>

          {/* Right Side - Button */}
          <div className="flex justify-start md:justify-end">
            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-secondary text-textColor px-5 py-3 rounded-full font-medium transition hover:bg-hoverColor"
            >
              Contact Sales
              <img
                src={navArrow}
                alt="Arrow"
                className="w-4 h-4"
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    <WhyUs />
    <Faqs />

    </>
  );
};

export default PricingDetails;
