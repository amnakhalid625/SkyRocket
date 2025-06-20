import ProjectOverview from '../components/ProjectOverview';
import project1 from '../assets/images/project1.png';
import CaseStudyCards from '../components/CaseStudyCards';
import project3 from '../assets/images/project3.png';
import project5 from '../assets/images/project2.png';
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
      image: project3,
      alt: 'LeHost Hair & Wig Shop',
      tag: 'Web Design & Digital Marketing',
      title: 'Nutrivita Shop: Boosting E-commerce Sales with a Streamlined Online Store',
      description: "Skyrocket Business redesigned Nutrivita Shop's website, optimized for SEO and mobile, resulting in a 60% increase in traffic and a 40% rise in conversions.",
      link: '/case-study/nutrivita-shop-boosting-e-commerce-sales-with-a-streamlined-online-store',
    },
    {
      id: 2,
      image: project5,
      alt: 'Mop and Glow Cleaning Company',
      tag: 'Website Design & Digital Marketing',
      title: 'Mop and Glow Cleaning Company: Building Trust and Driving Local Leads',
      description: "We designed Mop and Glow's website and launched a local SEO strategy—leading to a 75% traffic boost and 60% more leads in just two months.",
      link: '/case-study/mop-and-glow-cleaning-company-building-trust-and-driving-local-leads',
    },
  ];

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
        <div className="grid grid-cols-1 lg:grid-cols-[1.50fr_1fr] gap-8 mb-12 items-end">
          <div>
            <h1 className="text-4xl lg:text-[56px] font-medium text-textColor leading-tight tracking-tight mb-4">
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
        <div className="h-px bg-[#eaeaea] w-full my-12"></div>

        {/* Meta Info - Perfectly spaced with Timeline at end */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Client */}
          <div>
            <div className="font-medium text-base text-secondaryTextColor mb-2">Client</div>
            <p className="font-light text-textColor text-lg">{client}</p>
          </div>
          
          {/* Website */}
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
          
          {/* Services */}
          <div>
            <div className="font-medium text-base text-secondaryTextColor mb-2">Services</div>
            <p className="font-light text-textColor text-lg">{services}</p>
          </div>
          
          {/* Project Timeline - Right aligned */}
          <div className="sm:text-right">
            <div className="font-medium text-base text-secondaryTextColor mb-2">Project Timeline</div>
            <p className="font-light text-textColor text-lg">{timeline}</p>
          </div>
        </div>

        {/* Include ProjectOverview component */}
        <ProjectOverview />
        
        {/* Pass case studies data to CaseStudyCards component */}
        <CaseStudyCards caseStudies={caseStudies} />
      </div>

      {/* Contact component */}
      <Contact headingText="Unleash Your Brand's Potential with Catalysty!" />

    </>
  );
};

const WigShopDetail = () => {
  const projectData = {
    heroImage: project1,
    heroImageSrcSet: "500w, https://cdn.prod.website-files.com/6807e00132c9ff6c11834b85/6808aed9ea10004b5c661fbd_Le%20Host-p-800.jpg 800w, https://cdn.prod.website-files.com/6807e00132c9ff6c11834b85/6808aed9ea10004b5c661fbd_Le%20Host-p-1080.jpg 1080w, https://cdn.prod.website-files.com/6807e00132c9ff6c11834b85/6808aed9ea10004b5c661fbd_Le%20Host-p-1600.jpg 1600w, https://cdn.prod.website-files.com/6807e00132c9ff6c11834b85/6808aed9ea10004b5c661fbd_Le%20Host-p-2000.jpg 2000w, https://cdn.prod.website-files.com/6807e00132c9ff6c11834b85/6808aed9ea10004b5c661fbd_Le%20Host.jpg 2560w",
    title: "LeHost Hair & Wig Shop: Boosting Online Presence and Sales",
    description: "We redesigned LeHost Hair & Wig Shop's website and implemented targeted digital marketing strategies, resulting in a 50% traffic increase, 120% boost in social media engagement, and a 30% rise in online sales",
    client: "LeHost",
    website: "https://lehosthairandwigs.com/",
    services: "Web Design & Marketing",
    timeline: "2024",
    altText: "LeHost Hair & Wig Shop: Boosting Online Presence and Sales"
  };

  return <ProjectDetail {...projectData} />;
};

export default WigShopDetail;
export { ProjectDetail };