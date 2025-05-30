import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import servicesPattern from '../assets/images/bg.svg';
import servicesPattern2 from '../assets/images/backImg.svg';

const ServicesSection = () => {
    const [expandedService, setExpandedService] = useState(null);

    const toggleService = (index) => {
        setExpandedService(expandedService === index ? null : index);
    };

    const services = [
        {
            id: 1,
            title: "Web Design & Development",
            description:
                "Your website is your 24/7 salesperson — let's make it unforgettable. We craft clean, fast, and mobile-friendly websites that not only look stunning but are built to convert. Whether you're booking more calls, selling products, or building trust — we design with your goals in mind.",
            features: [
                "Custom-Built for Your Brand",
                "Conversion-Focused Design",
                "Mobile-Optimized Website",
            ],
            link: "/services/detroit-website-design-and-development",
        },
        {
            id: 2,
            title: "Social Media Management",
            description:
                "Your social media is your brand's voice — let's make it unforgettable. We create engaging, shareable content that not only stands out but builds real connections with your audience. Whether you're growing your community, driving traffic, or increasing sales, we develop strategies that turn followers into loyal customers.",
            features: [
                "Increased brand awareness",
                "Higher engagement rates",
                "Data-driven campaign optimization",
            ],
            link: "/services/social-media-management",
        },
        {
            id: 3,
            title: "Content Creation & Marketing",
            description:
                "Content is more than just words — it's the story of your brand. We create compelling, share-worthy content that resonates with your audience and drives action. Whether it's blog posts, videos, or social media updates, our marketing strategies ensure your content reaches the right people, builds trust, and generates real results.",
            features: [
                "Compelling Content",
                "Story telling for Growth",
                "Content That Converts",
            ],
            link: "/services/content-creation-marketing",
        },
        {
            id: 4,
            title: "Search Engine Optimization",
            description:
                "SEO isn't just about ranking higher — it's about getting the right eyes on your business. We focus on creating SEO strategies that drive organic traffic, improve your search rankings, and boost your visibility. From on-page optimization to link building, we ensure your website is found by the people who matter most — your potential customers.",
            features: [
                "Boost Your Rankings",
                "Drive Organic Traffic",
                "Visibility That Converts",
            ],
            link: "/services/search-engine-optimization",
        },
        {
            id: 5,
            title: "Pay-Per-Click Advertising",
            description:
                "PPC is your shortcut to immediate traffic and leads. We craft high-converting ad campaigns that target the right audience at the right time. Whether you're looking to drive sales, generate leads, or build brand awareness, our strategies ensure every click counts, delivering measurable results that grow your business.",
            features: [
                "Results Driven Ads",
                "Maximize Ad Spend",
                "Targeted Traffic",
            ],
            link: "/services/pay-per-click-advertising",
        },
    ];

    return (
        <div className="bg-primary px-4 sm:px-8 py-6 sm:py-8 md:py-12 lg:py-16 relative overflow-hidden">
            {/* Top Right Decorative Image - Show on all devices */}
            <img
                src={servicesPattern}
                alt="servicesImg"
                className="absolute top-0 right-0 z-0 block"
            />

            {/* Content Wrapper - Responsive max-widths with more width */}
            <div className="relative z-10 max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[83rem] mx-auto">
                <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    <div className="inline-block bg-secondary text-black px-3 sm:px-4 py-1 sm:py-[5px] mx-auto rounded-full text-[10px] sm:text-[12px] font-semibold uppercase tracking-wider mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                        OUR SERVICES
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-semibold text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-tight px-2 break-words">
                        Skyrocket Your Business with All-in-One Digital Solutions
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[18px] text-white max-w-xs sm:max-w-lg md:max-w-2xl mx-auto tracking-tightest mb-6 sm:mb-8 px-2 break-words">
                        We help businesses grow online with custom detroit web design, smart SEO,
                        engaging social media, and eye-catching branding. Whether you're starting
                        fresh or scaling up, we'll tailor everything to fit your goals — with a clear
                        focus on results and real growth.
                    </p>
                </div>

                {/* Services Cards - Responsive spacing with proper width */}
                <div className="services-mega-wrap space-y-3 sm:space-y-6 px-0">
                    {services.map((service, index) => {
                        const isOpen = expandedService === index;
                        return (
                            <div
                                key={service.id}
                                className={`services-wrap rounded-2xl sm:rounded-3xl transition-all duration-300 transform hover:scale-[1.01] shadow-lg hover:shadow-xl overflow-hidden ${isOpen ? 'bg-secondary' : 'bg-white'
                                    }`}
                            >
                                <div
                                    className="services-heading-wrap flex justify-between items-center p-3 sm:p-8 md:p-6 lg:p-8 xl:p-10 cursor-pointer"
                                    onClick={() => toggleService(index)}
                                >
                                    <div className="services-heading-left flex items-center flex-1 min-w-0">
                                        {/* Service Number - Hidden on mobile and sm */}
                                        <div className="services-number hidden md:block text-sm lg:text-lg font-medium text-accent w-6 lg:w-8 mr-3 lg:mr-4 flex-shrink-0">
                                            {String(service.id).padStart(2, '0')}
                                        </div>
                                        <h3 className="heading-style-h3 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-textColor pr-2 break-words min-w-0 flex-1">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <div
                                        className="services-arrow-wrap bg-secondary rounded-full p-2 sm:p-3 md:p-4 transition-transform duration-300 flex-shrink-0"
                                        style={{
                                            transform: isOpen ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
                                            transformStyle: 'preserve-3d',
                                        }}
                                    >
                                        <ChevronRight className="services-arrow w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" />
                                    </div>
                                </div>

                                {/* Expanded Content */}
                                <div
                                    className="transition-all duration-500"
                                    style={{
                                        maxHeight: isOpen ? '1000px' : '0px',
                                        opacity: isOpen ? 1 : 0,
                                        transform: isOpen ? 'translateY(0)' : 'translateY(1rem)',
                                    }}
                                >
                                    {isOpen && (
                                        <div className="px-3 sm:px-4 md:px-6 lg:px-8 pb-3 sm:pb-4 md:pb-6 pt-1 sm:pt-2 md:pt-4 lg:pt-6 bg-secondary text-left">
                                            <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-3 sm:mb-4 md:mb-6 max-w-5xl break-words">
                                                {service.description}
                                            </p>

                                            {/* Features - Stack on mobile, row on larger screens */}
                                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-3 sm:mb-4 md:mb-6">
                                                {service.features.map((feature, i) => (
                                                    <div key={i} className="flex items-center min-w-0">
                                                        <svg
                                                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 text-primary flex-shrink-0"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                        <span className="text-black font-medium text-sm sm:text-base md:text-lg break-words min-w-0">
                                                            {feature}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Learn More Button - Responsive sizing */}
                                            <a
                                                href={service.link}
                                                className="inline-flex items-center px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-white text-black text-sm sm:text-base font-semibold hover:bg-gray-100 transition-all duration-300"
                                            >
                                                <span>Learn More</span>
                                                <svg
                                                    className="w-3 h-3 sm:w-4 sm:h-4 ml-2 flex-shrink-0"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M9 5l7 7-7 7"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Left Decorative Image - Show on all devices */}
            <img
                src={servicesPattern2}
                alt=""
                className="absolute bottom-0 left-0 z-0 block"
            />
        </div>
    );
};

export default ServicesSection;