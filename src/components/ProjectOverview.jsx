import React from 'react';
import pattern1 from '../assets/images/smallPattern.svg';      // green arrow (bottom-left)
import pattern2 from '../assets/images/smallPattern2.svg';   // purple arrow (top-right)

const defaultData = {
  resultsData: [
    { value: "50%", label: "Website Traffic" },
    { value: "120%", label: "Social Media Engagement Improvement" },
    { value: "30%", label: "Online Sales" },
    { value: "40%", label: "Increase in Brand Awareness" }
  ],
  description: "LeHost Hair & Wig Shop, a leading retailer of hair and wig products, struggled with attracting visitors to their website and increasing sales. Skyrocket Business provided a complete solution, starting with a new website design, followed by targeted digital marketing strategies to enhance their online presence and drive more conversions.",
  challenges: {
    title: "The Challenge",
    description: "LeHost Hair & Wig Shop faced several challenges that were holding them back:",
    items: [
      {
        title: "Low Website Traffic",
        description: "Their website wasn't drawing enough visitors to generate significant sales."
      },
      {
        title: "Weak Social Media Engagement",
        description: "They weren't seeing much interaction on their social media channels."
      },
      {
        title: "Limited Brand Visibility",
        description: "They needed a more effective way to increase brand awareness."
      }
    ]
  },
  solutions: {
    title: "The Solution",
    description: "Skyrocket Business took a step-by-step approach to solve these challenges:",
    items: [
      {
        title: "Website Design & Optimization",
        description: "The first step was to completely redesign their website, making it modern, mobile-friendly, and easy to navigate. This helped improve the user experience and made the website more visually appealing to potential customers."
      },
      {
        title: "Social Media Strategy",
        description: " Once the website was in place, we developed a comprehensive social media strategy with high-quality posts, engaging videos, and campaigns that resonated with their target audience."
      },
      {
        title: "Advertising Campaigns",
        description: " We launched paid ad campaigns on Google, Facebook, and Instagram to drive targeted traffic to the newly designed website."
      },
      {
        title: "Conversion Optimization",
        description: "Finally, we optimized the website to increase conversions, focusing on clear calls to action, easy checkout processes, and better user navigation."
      }
    ]
  },
  results: {
    title: "Results",
    items: [
      { metric: "Website Traffic", growth: "50%", label: "Website Traffic grew by 50%, driving more visitors to the site." },
      { metric: "Social Media Engagement", growth: "120%", label: "Social Media Engagement soared by 120%, with higher interaction and an expanding audience." },
      { metric: "Online Sales", growth: "30%", label: "Online Sales increased by 30%, thanks to the combination of an improved website and targeted marketing efforts." },
      { metric: "Brand Visibility", growth: "improved significantly", label: "Brand Visibility improved significantly, reaching a broader audience and establishing stronger brand recognition." }
    ]
  }
};

const ProjectOverview = ({ data = defaultData }) => {
  const { resultsData, description, challenges, solutions, results } = data;

  return (

    <>
    <div className="px-10 py-8">
      {/* Results Section */}
      <div className="max-w-3xl mx-auto relative">
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-primary text-white text-center rounded-3xl p-12 overflow-hidden">
          {/* Top-right image */}
          <img
            src={pattern1}
            alt="pattern2"
            className="absolute top-0 right-0 z-0 pointer-events-none"
          />
          {/* Bottom-left image */}
          <img
            src={pattern2}
            alt="pattern1"
            className="absolute bottom-0 left-0 z-0 pointer-events-none"
          />
          
          {/* Result stats */}
          {resultsData.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center z-10 p-5">
              <div className="text-4xl font-medium mb-2 tracking-tight leading-tight">{item.value}</div>
              <div className="text-lg">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Description + Details Section */}
      <div className="max-w-3xl mx-auto mt-10 text-lg tracking-tight leading-wider">
        <div className="prose prose-lg text-secondaryTextColor">
          <p>{description}</p>

          <h2 className="text-2xl lg:text-4xl font-semibold mt-8 mb-4 text-textColor">{challenges.title}</h2>
          <p className="mb-4">{challenges.description}</p>
          <ul className="list-disc pl-6 mb-6">
            {challenges.items.map((item, index) => (
              <li key={index} className="mb-2">
                <strong>{item.title}</strong>: {item.description}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl lg:text-4xl font-semibold mt-8 mb-4 text-textColor">{solutions.title}</h2>
          <p className="mb-4 font-medium">{solutions.description}</p>
          <ul className="list-disc pl-6 mb-6">
            {solutions.items.map((item, index) => (
              <li key={index} className="mb-2 font-normal">
                <strong>{item.title}</strong>: {item.description}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 lg:text-4xl text-textColor">{results.title}</h2>
          <ul className="list-disc pl-6">
            {results.items.map((item, index) => (
              <li key={index} className="mb-2">{item.label}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProjectOverview;
