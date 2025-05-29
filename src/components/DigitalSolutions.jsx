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
                "Your website is your 24/7 salesperson — let’s make it unforgettable. We craft clean, fast, and mobile-friendly websites that not only look stunning but are built to convert. Whether you're booking more calls, selling products, or building trust — we design with your goals in mind.",
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
                "Your social media is your brand’s voice — let’s make it unforgettable. We create engaging, shareable content that not only stands out but builds real connections with your audience. Whether you’re growing your community, driving traffic, or increasing sales, we develop strategies that turn followers into loyal customers.",
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
                "Content is more than just words — it’s the story of your brand. We create compelling, share-worthy content that resonates with your audience and drives action. Whether it's blog posts, videos, or social media updates, our marketing strategies ensure your content reaches the right people, builds trust, and generates real results.",
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
                "SEO isn’t just about ranking higher — it’s about getting the right eyes on your business. We focus on creating SEO strategies that drive organic traffic, improve your search rankings, and boost your visibility. From on-page optimization to link building, we ensure your website is found by the people who matter most — your potential customers.",
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
                "PPC is your shortcut to immediate traffic and leads. We craft high-converting ad campaigns that target the right audience at the right time. Whether you’re looking to drive sales, generate leads, or build brand awareness, our strategies ensure every click counts, delivering measurable results that grow your business.",
            features: [
                "Results Driven Ads",
                "Maximize Ad Spend",
                "Targeted Traffic",
            ],
            link: "/services/pay-per-click-advertising",
        },
    ];

    return (
        <div className="min-h-screen bg-primary px-4 py-16 relative overflow-hidden">
            {/* Top Right Decorative Image */}
            <img
                src={servicesPattern}
                alt="servicesImg"
                className="absolute top-0 right-0 z-0"
            />

            {/* Content Wrapper */}
            <div className="relative z-10 max-w-[83rem] mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-block bg-secondary text-black px-4 py-[5px] mx-auto rounded-full text-[12px] font-semibold uppercase tracking-wider mb-8">
                        OUR SERVICES
                    </div>
                    <h1 className="text-4xl md:text-[56px] lg:text-5xl font-semibold text-white mb-8 leading-tight">
                        Skyrocket Your Business with All-in-One Digital Solutions
                    </h1>
                    <p className="md:text-[18px] text-white max-w-2xl mx-auto tracking-tightest mb-8">
                        We help businesses grow online with custom detroit web design, smart SEO,
                        engaging social media, and eye-catching branding. Whether you're starting
                        fresh or scaling up, we'll tailor everything to fit your goals — with a clear
                        focus on results and real growth.
                    </p>
                </div>

                {/* Services Cards */}
                <div className="services-mega-wrap space-y-4 px-12">
                    {services.map((service, index) => {
                        const isOpen = expandedService === index;
                        return (
                            <div
                                key={service.id}
                                className={`services-wrap rounded-3xl transition-all duration-300 transform hover:scale-[1.01] shadow-lg hover:shadow-xl overflow-hidden ${isOpen ? 'bg-secondary' : 'bg-white'
                                    }`}
                            >
                                <div
                                    className="services-heading-wrap flex justify-between items-center p-6 md:p-10 cursor-pointer"
                                    onClick={() => toggleService(index)}
                                >
                                    <div className="services-heading-left flex items-center">
                                        <div className="services-number text-2xl md:text-sm font-medium text-secondaryTextColor w-8">
                                            {String(service.id).padStart(2, '0')}
                                        </div>
                                        <h3 className="heading-style-h3 text-xl md:text-3xl font-semibold text-textColor">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <div
                                        className="services-arrow-wrap bg-secondary rounded-full p-4 transition-transform duration-300"
                                        style={{
                                            transform: isOpen ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
                                            transformStyle: 'preserve-3d',
                                        }}
                                    >
                                        <ChevronRight className="services-arrow w-6 h-6 text-black" />
                                    </div>
                                </div>

                                {/* Expanded Content */}
                                <div
                                    className="transition-all duration-500"
                                    style={{
                                        maxHeight: isOpen ? '800px' : '0px',
                                        opacity: isOpen ? 1 : 0,
                                        transform: isOpen ? 'translateY(0)' : 'translateY(1rem)',
                                    }}
                                >
                                    {isOpen && (
                                        <div className="px-6 md:px-8 pb-6 md:pb-6 pt-6 bg-secondary text-left">
                                            <p className="text-black text-lg md:text-xl leading-relaxed mb-6 max-w-5xl">
                                                {service.description}
                                            </p>
                                            <div className="flex flex-row gap-4 mb-6">
                                                {service.features.map((feature, i) => (
                                                    <div key={i} className="flex items-center">
                                                        <svg
                                                            className="w-5 h-5 md:w-6 md:h-6 mr-2 text-indigo-600"
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
                                                        <span className="text-black font-medium text-base md:text-lg">
                                                            {feature}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                            <a
                                                href={service.link}
                                                className="inline-flex items-center px-6 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300"
                                            >
                                                <span>Learn More</span>
                                                <svg
                                                    className="w-4 h-4 ml-2"
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

            {/* Bottom Left Decorative Image */}
            <img
                src={servicesPattern2}
                alt=""
                className="absolute bottom-0 left-0 z-0"
            />
        </div>
    );
};

export default ServicesSection;