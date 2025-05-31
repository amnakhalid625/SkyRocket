import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import navArrow from '../assets/images/NavArrow.svg';
import Footer from './Footer'

const Faqs = () => {
    const [expandedFaq, setExpandedFaq] = useState(null);

    const toggleFaq = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    const faqData = [
        {
            question: "What web design services do you offer?",
            answer: "We offer custom website design and development, making sure your site is clean, fast, and mobile-friendly. Whether you're starting from scratch or need a redesign, we create websites that help you grow your business online."
        },
        {
            question: "How long does it take to build a website?",
            answer: "The timeline depends on the complexity of your site, but typically, we can have your new website up and running within 1-3 weeks. We work closely with you at every step to ensure it meets your needs."
        },
        {
            question: "Will my website be mobile-friendly?",
            answer: "Yes! We design all websites with a mobile-first approach. This ensures your site looks great and functions smoothly on any device, helping you reach more customers wherever they are."
        },
        {
            question: "How do you approach digital marketing?",
            answer: "We develop a tailored strategy that includes SEO, social media marketing, and content creation to drive traffic and boost your online presence. We focus on strategies that convert visitors into loyal customers."
        },
        {
            question: "Do you offer ongoing support after my website is live?",
            answer: "Absolutely! We offer website maintenance packages to keep your site updated, secure, and running smoothly. Plus, we can assist with marketing campaigns to keep your business growing."
        }
    ];

    return (
        <>
            {/* Intro Text */}
            <div className="text-center mb-12 md:mb-16">
                <div className="inline-block bg-lime-300 text-black px-4 py-[5px] rounded-full text-[12px] font-semibold uppercase tracking-wider">
                    FAQs
                </div>
                <div className="max-w-3xl mx-auto py-4">
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-gray-900 mb-4 leading-tight tracking-tight">
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
                                className={`rounded-2xl transition-all duration-300 transform hover:scale-[1.01] hover:shadow-xl shadow-md overflow-hidden backdrop-blur-sm ${isOpen ? 'bg-primary' : 'bg-white'
                                    }`}
                            >
                                <div
                                    className="flex justify-between items-center p-6 md:p-8 cursor-pointer"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <h3 className={`text-lg md:text-xl lg:text-2xl font-medium pr-4 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-textColor'
                                        }`}>
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

                                {/* Expanded Content */}
                                <div
                                    className={`px-6 md:px-8 transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'pb-6 md:pb-8 max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'
                                        }`}
                                >
                                    <p className="text-white text-base md:text-lg leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>



                {/* Still Have Questions Section */}
                <div className="text-center mt-20">
                    <h3 className="text-2xl md:text-3xl font-semibold text-textColor">Still have questions?</h3>
                    <div className="my-4 max-w-xl mx-auto">
                        <p className="text-base md:text-lg text-secondaryTextColor leading-relaxed font-medium">
                            Can’t find the answer you’re looking for? Please chat with our friendly team.
                        </p>
                    </div>
                    <div className="mt-6 mb-12">
                        <a
                            href="/contact-us"
                            className="inline-flex items-center justify-center bg-secondary text-textColor font-medium px-6 py-3 rounded-full shadow-md hover:bg-hoverColor"
                        >
                            <span className="mr-2">Get in Touch</span>
                            <img
                                src={navArrow}
                                alt="arrow"
                                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                            />
                        </a>
                    </div>
                </div>


            </div>


<Footer />



        </>
    );
};

export default Faqs;
