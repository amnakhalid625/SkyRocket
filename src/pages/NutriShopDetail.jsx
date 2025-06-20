import React from 'react';
import ProjectOverview from '../components/ProjectOverview';
import nutriImg from '../assets/images/project3.png';
import CaseStudyCards from '../components/CaseStudyCards';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project4.png';
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
  altText = "Project Image",
}) => {
  const caseStudies = [
    {
      id: 1,
      image: project1,
      alt: 'LeHost Hair & Wig Shop',
      tag: 'Web Design & Digital Marketing',
      title: 'LeHost Hair & Wig Shop: Boosting Online Presence and Sales',
      description:
        "We redesigned LeHost Hair & Wig Shop's website and implemented targeted digital marketing strategies, resulting in a 50% traffic increase, 120% boost in social media engagement, and a 30% rise in online sales.",
      link: '/case-study/lehost-hair-wig-shop-boosting-online-presence-and-sales',
    },
    {
      id: 2,
      image: project2,
      alt: 'Mop and Glow Cleaning Company',
      tag: 'Website Design & Marketing',
      title: 'Lisburn Web Design: Crafting a Strong Online Presence for Local Businesses',
      description:
        "Skyrocket Business built Lisburn Web Design's website from scratch, optimized for local SEO and lead generation, resulting in a 60% increase in traffic and a 40% boost in client inquiries.",
      link: '/case-study/lisburn-web-design-crafting-a-strong-online-presence-for-local-businesses',
    },
  ];

  const overviewdefaultData = {
    resultsData: [
      { value: "90%", label: "Increase in Organic Search Traffic" },
      { value: "50%", label: "Improvement in Conversion Rates" },
      { value: "40%", label: "Growth in Leads Capturing" },
      { value: "35%", label: "Social Media Engagement" }
    ],
    title: "Overview",
    description: "Nutrivita Shop, an e-commerce business selling health supplements, wanted to improve its online store for a better shopping experience and increased conversions. Skyrocket Business redesigned their website to enhance user experience, optimize for mobile, and implement marketing strategies that would drive more sales.",
    challenges: {
      title: "The Challenge",
      items: [
        {
          title: "Clunky Website Design",
          description: "Their old website was difficult to navigate and not mobile-friendly, which led to a poor user experience."
        },
        {
          title: "Low Conversion Rates",
          description: "Despite having quality products, they weren't converting visitors into customers effectively."
        },
        {
          title: "Lack of Product Visibility",
          description: "Their product pages were not optimized for search engines, leading to low organic traffic."
        }
      ]
    },
    solutions: {
      title: "The Solution",
      items: [
        {
          title: "E-commerce Website Redesign",
          description: "We redesigned their site to provide an intuitive, clean, and mobile-friendly shopping experience."
        },
        {
          title: "Search Engine Optimization (SEO)",
          description: "We optimized product pages with the right keywords, boosting organic traffic and visibility."
        },
        {
          title: "Improved Checkout Process",
          description: "Streamlined the checkout process, making it easier for customers to complete their purchases."
        },
        {
          title: "Conversion Rate Optimization",
          description: "Integrated trust signals like customer reviews, product ratings, and secure payment options to enhance credibility."
        }
      ]
    },
    results: {
      title: "Results",
      items: [
        { metric: "Website Traffic", growth: "90%", label: "Website Traffic grew by 50%, with more qualified local visitors." },
        { metric: "Social Media Engagement", growth: "50%", label: "Increase in conversion rates." },
        { label: "Improved user engagement and reduced bounce rates, making the website more effective in capturing leads." }
      ]
    }
  };

  return (
    <>
      <div className="w-full max-w-[83rem] mx-auto px-4 sm:px-8 py-8 mt-4">
        {/* Hero Image */}
        <div className="mb-12">
          <img
            src={heroImage}
            alt={altText}
            loading="eager"
            sizes="100vw"
            srcSet={heroImageSrcSet}
            className="w-full h-auto md:h-[500px] object-cover rounded-3xl"
          />
        </div>

        {/* Title & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 mb-12 items-end">
          <div>
            <h1 className="text-4xl lg:text-[56px] font-medium text-textColor leading-[1.3] tracking-tight mb-4">
              {title}
            </h1>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-secondaryTextColor font-medium">
              {description}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#eaeaea] my-12"></div>

        {/* Meta Info Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div>
            <div className="font-medium text-base text-secondaryTextColor mb-2">Client</div>
            <p className="font-light text-textColor text-lg">{client}</p>
          </div>

          <div>
            <div className="font-medium text-base text-secondaryTextColor mb-2">Website</div>
            {website ? (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-light underline text-textColor text-lg hover:text-primary transition-colors"
              >
                {website.replace(/^https?:\/\//, '')}
              </a>
            ) : (
              <p className="font-light text-textColor text-lg">N/A</p>
            )}
          </div>

          <div>
            <div className="font-medium text-base text-secondaryTextColor mb-2">Services</div>
            <p className="font-light text-textColor text-lg">{services}</p>
          </div>

          <div className="sm:text-right">
            <div className="font-medium text-base text-secondaryTextColor mb-2">Project Timeline</div>
            <p className="font-light text-textColor text-lg">{timeline}</p>
          </div>
        </div>

        {/* Overview Section */}
        <ProjectOverview data={overviewdefaultData} />

        {/* Case Studies */}
        <CaseStudyCards caseStudies={caseStudies} />
      </div>

      {/* Contact Section */}
      <Contact headingText="Unleash Your Brand's Potential with Catalysty!" />
    </>
  );
};

const NutriShopDetail = () => {
  const projectData = {
    heroImage: nutriImg,
    heroImageSrcSet: "500w, https://cdn.prod.website-files.com/6807e00132c9ff6c11834b85/680b9a43a812f097ad32e387_sqa_LE_upscale_balanced_x4-p-1600.jpg 800w, https://cdn.prod.website-files.com/6807e00132c9ff6c11834b85/680b9a43a812f097ad32e387_sqa_LE_upscale_balanced_x4-p-1600.jpg 2560w",
    title: "Nutrivita Shop: Boosting E-commerce Sales with a Streamlined Online Store",
    description: "Skyrocket Business redesigned Nutrivita Shop's website, optimized for SEO and mobile, resulting in a 60% increase in traffic and a 40% rise in conversions.",
    client: "Nutrivita",
    website: "https://www.nutrivitashop.com/",
    services: "Web Design & Digital Marketing",
    timeline: "2024",
    altText: "Nutrivita Shop: Boosting E-commerce Sales with a Streamlined Online Store"
  };

  return <ProjectDetail {...projectData} />;
};

export default NutriShopDetail;
export { ProjectDetail };
