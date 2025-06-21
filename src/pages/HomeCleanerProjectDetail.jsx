import React from 'react';
import ProjectOverview from '../components/ProjectOverview';
import HomeCleanerImg from '../assets/images/homeCleaner.png';

import CaseStudyCards from '../components/CaseStudyCards';
import project1 from '../assets/images/project3.png';
import project2 from '../assets/images/webCard.png';
import Contact from '../components/Contact';

const ProjectDetail = ({
  heroImage,
  heroImageSrcSet,
  title,
  description,
  client,
  website,
  services,
  timeline,
  altText = "Project Image"
}) => {
  const caseStudies = [
    {
      id: 1,
      image: project1,
      alt: 'LeHost Hair & Wig Shop',
      tag: 'Web Design & Digital Marketing',
      title: 'Nutrivita Shop: Boosting E-commerce Sales with a Streamlined Online Store',
      description:
        "Skyrocket Business redesigned Nutrivita Shop's website, optimized for SEO and mobile, resulting in a 60% increase in traffic and a 40% rise in conversions.",
      link: '/case-study/nutrivita-shop-boosting-e-commerce-sales-with-a-streamlined-online-store',
    },
    {
      id: 2,
      image: project2,
      alt: 'Mop and Glow Cleaning Company',
      tag: 'Website Design & Marketing',
      title: 'Sequins and Slate Interior Design Company!',
      description:
        "Skyrocket Business redesigned Sequins and Slate's website and implemented SEO strategies, resulting in a 50% increase in traffic and a 30% rise in client inquiries.",
      link: '/case-study/sequins-and-slate-interior-design-company',
    },
  ];


  const overviewdefaultData = {
    resultsData: [
      { value: "75%", label: "increase in Website Traffic" },
      { value: "60%", label: "More Quote Requests" },
      { value: "45%", label: "Reduction in Unsubscribe Rates" },
      { value: "120%", label: "Increase in Social Media Engagement" }
    ],
    description: "Mop and Glow, a local cleaning company, needed a strong digital presence to build trust and attract new clients. Catalysty began by designing a fresh, mobile-friendly website, then launched targeted local marketing to generate leads and grow their business.",
    challenges: {
      title: "The Challenge",
      description: "LeHost Hair & Wig Shop faced several challenges that were holding them back:",
      items: [
        {
          title: "Outdated Website",
          description: "Their old site didn’t reflect their professionalism or reliability."
        },
        {
          title: "Low Inquiries",
          description: "They weren’t receiving enough quote requests or calls."
        },
        {
          title: "Poor Local Visibility",
          description: "They struggled to appear in local search results."
        }
      ]
    },
    solutions: {
      title: "The Solution",
      description: "Skyrocket Business took a step-by-step approach to solve these challenges:",
      items: [
        {
          title: "Website Design: ",
          description: "We built a clean, modern, and easy-to-navigate website that clearly explained their services and made it simple for users to request a quote."
        },
        {
          title: "Local SEO Optimization:",
          description: "Improved their Google visibility with on-page SEO tailored to local search intent."
        },
        {
          title: "Trust-Building Content:",
          description: " Created pages highlighting their services, team, and testimonials to boost credibility."
        },
        {
          title: "Lead Capture Tools: ",
          description: "Added forms and click-to-call buttons to drive conversions."
        }
      ]
    },
    results: {
      title: "Results",
      items: [
        { metric: "Website Traffic", growth: "75%", label: "Website Traffic grew by 50%, with more qualified local visitors." },
        { metric: "Social Media Engagement", growth: "60%", label: " helping them scale faster." },
        { metric: "Stronger brand presence", growth: "45%", label: "leading to increased client trust and repeat business." }
      ]
    }
  };


  return (
    <>
      <div className="w-full max-w-[83rem] mx-auto px-8 py-8 mt-4">
        {/* Hero Image */}
        <div className="mb-12">
          <img
            src={heroImage}
            loading="eager"
            alt={altText}
            sizes="100vw"
            srcSet={heroImageSrcSet}
            className="w-full h-[500px] object-cover rounded-3xl"
          />
        </div>

        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.40fr_1fr] gap-2 mb-12 items-end">
          <div>
            <h1 className="text-4xl lg:text-[56px] font-medium text-textColor leading-tight tracking-tight  mb-4">
              {title}
            </h1>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-secondaryTextColor font-medium">
              {description}
            </p>
          </div>
        </div>

        {/* Border */}
        <div className="h-px bg-[#eaeaea] my-12"></div>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-12">
          <div className="flex-auto min-w-[150px] ">
            <div className="font-medium text-base text-secondaryTextColor mb-2 ">Client</div>
            <p className="font-light text-textColor text-lg">{client}</p>
          </div>

          <div className="flex-1 min-w-[150px] ">
            <div className="font-medium text-base text-secondaryTextColor mb-2">Website</div>
            {website ? (
              <a
                href={website}
                className="font-light underline text-textColor text-base hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {website}
              </a>
            ) : (
              <p className="font-medium text-primary">N/A</p>
            )}
          </div>

          <div className="flex-1 min-w-[450px] ">
            <div className="font-medium text-base text-secondaryTextColor mb-2">Services</div>
            <p className="font-light text-textColor text-lg">{services}</p>
          </div>

          <div className="flex-1 min-w-[150px]">
            <div className="font-medium text-base text-secondaryTextColor mb-2">Project Timeline</div>
            <p className="font-light text-textColor text-lg">{timeline}</p>
          </div>
        </div>

        {/* Include ProjectOverview component */}
        <ProjectOverview data={overviewdefaultData} />

        {/* Pass case studies data to CaseStudyCards component */}
        <CaseStudyCards caseStudies={caseStudies} />

        {/* Responsive Styles */}
        <style jsx>{`
          @media (max-width: 768px) {
            .grid.grid-cols-\\[1\\.44fr_1fr\\] {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>

      {/* Contact component moved outside the main container */}
      <Contact headingText="Unleash Your Brand's Potential with Catalysty!" />

    </>
  );
};

const HomeCleanerProjectDetail = () => {
  const projectData = {
    heroImage: HomeCleanerImg,
    heroImageSrcSet: "500w, https://cdn.prod.website-files.com/6807e00132c9ff6c11834b85/6807e00132c9ff6c11834c4d_konstant%2520(1)-p-2000.png 800w, https://cdn.prod.website-files.com/6807e00132c9ff6c11834b85/6807e00132c9ff6c11834c4d_konstant%2520(1)-p-2000.png 2560w",
    title: "Mop and Glow Cleaning Company: Building Trust and Driving Local Leads",
    description: "We designed Mop and Glow’s website and launched a local SEO strategy—leading to a 75% traffic boost and 60% more leads in just two months.",
    client: "Mop and Glow Cleaning Company",
    website: " ",
    services: "Website Design & Digital Marketing",
    timeline: "2025",
    altText: "Mop and Glow Cleaning Company"
  };

  return <ProjectDetail {...projectData} />;
};

export default HomeCleanerProjectDetail;
export { ProjectDetail };