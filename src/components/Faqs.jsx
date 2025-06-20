import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import navArrow from '../assets/images/NavArrow.svg';

const Faqs = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What web design services do you offer?",
      answer:
        "We offer custom website design and development, making sure your site is clean, fast, and mobile-friendly. Whether you're starting from scratch or need a redesign, we create websites that help you grow your business online.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline depends on the complexity of your site, but typically, we can have your new website up and running within 1-3 weeks. We work closely with you at every step to ensure it meets your needs.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Yes! We design all websites with a mobile-first approach. This ensures your site looks great and functions smoothly on any device, helping you reach more customers wherever they are.",
    },
    {
      question: "How do you approach digital marketing?",
      answer:
        "We develop a tailored strategy that includes SEO, social media marketing, and content creation to drive traffic and boost your online presence. We focus on strategies that convert visitors into loyal customers.",
    },
    {
      question: "Do you offer ongoing support after my website is live?",
      answer:
        "Absolutely! We offer website maintenance packages to keep your site updated, secure, and running smoothly. Plus, we can assist with marketing campaigns to keep your business growing.",
    },
  ];

  return (
    <>
      {/* Intro Text */}
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-block bg-secondary text-seconaryTextColor px-4 py-[5px] rounded-full text-[12px] font-semibold uppercase ">
          FAQs
        </div>
        <div className="max-w-3xl mx-auto py-4">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-textColor mb-4 leading-tight tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <p className="text-base md:text-lg text-secondaryTextColor leading-relaxed mb-8 font-medium">
            We've compiled a list of the most frequently asked questions to help you get the information you need and doubts cleared.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-6">
          {faqData.map((faq, index) => {
            const isOpen = expandedFaq === index;

            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 transform  border border-gray-200 overflow-hidden backdrop-blur-sm ${isOpen ? 'bg-primary' : 'bg-white'
                  }`}
              >
                <div
                  className="flex justify-between items-center p-6 md:p-8 cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <h3
                    className={`text-lg md:text-xl lg:text-2xl font-medium pr-4 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-textColor'
                      }`}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`rounded-full p-[1.3rem] transition-transform duration-300 ease-in-out flex-shrink-0 ${isOpen ? 'bg-white' : 'bg-secondary'
                      }`}
                    style={{
                      transform: `rotate(${isOpen ? 90 : 0}deg)`,
                    }}
                  >
                    <ChevronRight className="w-5 h-5 text-black" />
                  </div>
                </div>

                {/* Animated Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0, y: 20 }}
                      animate={{ height: "auto", opacity: 1, y: 0 }}
                      exit={{ height: 0, opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="px-6 md:px-8 overflow-hidden"
                    >
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white text-base md:text-lg leading-relaxed pb-6 md:pb-8"
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Section */}
        <div className="text-center mt-20">
          <h3 className="text-2xl  font-semibold text-textColor">Still have questions?</h3>
          <div className="my-4 max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-secondaryTextColor leading-relaxed font-medium">
              Can’t find the answer you’re looking for? Please chat with our friendly team.
            </p>
          </div>
          <div className="mt-6 mb-12">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center bg-secondary text-textColor font-medium px-6 py-3 rounded-full  hover:bg-hoverColor "
           
           onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
           >
              <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">Get in Touch</span>
              <img
                src={navArrow}
                alt="arrow"
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </div>

    </>
  );
};

export default Faqs;
