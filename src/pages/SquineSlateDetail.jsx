import React from 'react';
import ProjectOverview from '../components/ProjectOverview';
import HomeCleanerImg from '../assets/images/homeCleaner.png';
import CaseStudyCards from '../components/CaseStudyCards';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
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
      tag: 'Web Design & Marketing',
      title: 'Nutrivita Shop: Boosting E-commerce Sales with a Streamlined Online Store',
      description:
        "Skyrocket Business redesigned Nutrivita Shop's website, optimized for SEO and mobile, resulting in a 60% increase in traffic and a 40% rise in conversions.",
      link: '/case-study/lehost-hair-wig-shop-boosting-online-presence-and-sales',
    },
    {
      id: 2,
      image: project2,
      alt: 'Mop and Glow Cleaning Company',
      tag: 'Website Design & Digital Marketing',
      title: 'Mop and Glow Cleaning Company: Building Trust and Driving Local Leads',
      description:
        "We designed Mop and Glow’s website and launched a local SEO strategy—leading to a 75% traffic boost and 60% more leads in just two months.",
      link: '/case-study/mop-and-glow-cleaning-company-building-trust-and-driving-local-leads',
    },
  ];

  const overviewdefaultData = {
    resultsData: [
      { value: "150%", label: "Website traffic increase" },
      { value: "30%", label: "More inquries" },
      { value: "45%", label: "Enhanced Reputation" },
      { value: "65%", label: "Increase in Sales Conversion" }
    ],
    description: "‍Sequins and Slate, an interior design company, wanted a website that reflected their design expertise and attracted high-value clients. Skyrocket Business redesigned their site, improved its functionality, and launched targeted marketing to increase client inquiries and grow their business.",
    challenges: {
      title: "The Challenge",
      items: [
        {
          title: "Outdated Website",
          description: "Their previous website didn’t showcase their design skills or convey professionalism."
        },
        {
          title: "Low Inquiries",
          description: "They were struggling to convert site visitors into potential clients."
        },
        {
          title: "Poor Local Visibility",
          description: "Their brand was not visible in online searches or social media."
        }
      ]
    },
    solutions: {
      title: "The Solution",
      items: [
        {
          title: "Website Design",
          description: " We created a visually stunning, easy-to-navigate website that highlighted their portfolio and services."
        },
        {
          title: "Local SEO",
          description: "We optimized the site to improve their local search rankings and attract high-value clients."
        },
        {
          title: "Lead Capture Features",
          description: "Integrated lead forms and call-to-action buttons to encourage visitors to inquire about their services."
        },
        {
          title: "Social Media Integration",
          description: "Linked their website with social media accounts for enhanced brand visibility."
        }
      ]
    },
    results: {
      title: "Results",
      items: [
        { label: "50% increase in website traffic, bringing more qualified leads." },
        { label: "30% more client inquiries, resulting in new business opportunities." },
        { label: "Enhanced brand reputation with a more professional, appealing website." }
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
            loading="eager" 
            alt={altText}
            sizes="100vw"
            srcSet={heroImageSrcSet}
            className="w-full h-auto md:h-[500px] object-cover rounded-3xl"
          />
        </div>

        {/* Hero Content */}
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

        {/* Meta Info */}
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
                className="font-light underline text-textColor text-lg hover:text-primary transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
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

        {/* Project Overview Section */}
        <ProjectOverview data={overviewdefaultData} />
        
        {/* Case Study Suggestions */}
        <CaseStudyCards caseStudies={caseStudies} />

      </div>

      {/* Contact component */}
      <Contact headingText="Unleash Your Brand's Potential with Catalysty!" />

    </>
  );
};

const SquineSlateDetail = () => {
  const projectData = {
    heroImage: HomeCleanerImg,
    heroImageSrcSet: "500w, https://cdn.prod.website-files.com/6807e00132c9ff6c11834b85/680b8a666f2b41eaf7323597_sqa_LE_upscale_balanced_x4-p-1600.jpg 2560w",
    title: "Sequins and Slate Interior Design Company!",
    description: "Skyrocket Business redesigned Sequins and Slate's website and implemented SEO strategies, resulting in a 50% increase in traffic and a 30% rise in client inquiries.",
    client: "Sequins and Slate",
    website: "http://sequinsandslate.com",
    services: "Web Development",
    timeline: "2025",
    altText: "Sequins and Slate Interior Design Company"
  };

  return <ProjectDetail {...projectData} />;
};

export default SquineSlateDetail;
export { ProjectDetail };