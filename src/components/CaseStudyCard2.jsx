import React from 'react'
import { ArrowUpRight } from 'lucide-react';
import arrow from '../assets/images/staright-arrow.svg';

const CaseStudyCard2 = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[83rem] mx-auto">
            {/* LeHost Hair & Wig Shop Card */}
            <div className="group bg-white border border-gray-200 rounded-3xl p-6 h-full flex flex-col hover:shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-1 cursor-pointer">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <img
                        src="https://cdn.prod.website-files.com/6807e00132c9ff6c11834b85/6808aadc64351d7745abc4ca_Le%20Host.png"
                        alt="LeHost Hair & Wig Shop"
                        className="w-full h-90 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white backdrop-blur-sm text-textColor px-2 py-1 rounded-full text-sm font-medium transition-all duration-300 ease-in-out group-hover:bg-lime-400 group-hover:text-gray-900">
                        Web Design & Marketing
                    </div>
                </div>

                <div className="flex-1 flex flex-col">
                    <div>
                        <h3 className="text-xl lg:text-2xl font-medium text-gray-900 mb-3 leading-tight transition-colors duration-300 group-hover:text-primary">
                            LeHost Hair & Wig Shop: Boosting Online<br /> Presence and Sales
                        </h3>
                        <div className="flex justify-between items-start gap-4">
                            <p className="text-secondaryTextColor  leading-relaxed flex-1 transition-colors duration-300 group-hover:text-gray-800">
                                We redesigned LeHost Hair & Wig Shop's website and implemented targeted digital marketing strategies, resulting in a 50% traffic increase, 120% boost in social media engagement, and a 30% rise in online sales
                            </p>
                            <div className="bg-secondary group-hover:bg-lime-400 rounded-full p-3 transition-all duration-500 ease-in-out group-hover:rotate-45">
                                <ArrowUpRight className="w-6 h-6 text-textColor transition-transform duration-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mop and Glow Cleaning Company Card */}
            <div className="group bg-white border border-gray-200 rounded-3xl p-6 h-full flex flex-col hover:shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-1 cursor-pointer">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <img
                        src="https://cdn.prod.website-files.com/6807e00132c9ff6c11834b85/68091316c78417aafba5604b_Untitled.png"
                        alt="Mop and Glow Cleaning Company"
                        className="w-full h-90 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ease-in-out group-hover:bg-lime-400 group-hover:text-gray-900">
                        Website Design & Digital Marketing
                    </div>
                </div>

                <div className="flex-1 flex flex-col">
                    <div>
                        <h3 className="text-xl lg:text-2xl font-medium text-gray-900 mb-3 leading-tight transition-colors duration-300 group-hover:text-primary">
                            Mop and Glow Cleaning Company: Building<br />Trust and Driving Local Leads
                        </h3>
                        <div className="flex justify-between items-start gap-4">
                            <p className="text-gray-600 leading-relaxed flex-1 transition-colors duration-300 group-hover:text-gray-800">
                                We designed Mop and Glow's website and launched a local SEO strategy—leading to a 75% traffic boost and 60% more leads in just two months.
                            </p>
                            <div className="bg-secondary group-hover:bg-lime-400 rounded-full p-3 transition-all duration-500 ease-in-out group-hover:rotate-45">
                                <ArrowUpRight className="w-6 h-6 text-gray-900 transition-transform duration-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CaseStudyCard2