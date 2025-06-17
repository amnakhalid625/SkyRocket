import batchImg from "../assets/images/batch.svg";
import puzzleImg from "../assets/images/puzzle.svg";
import graphLineImg from "../assets/images/graphLine.svg";
import girlImg from "../assets/images/girl.webp";
import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import CaseStudiesSection from "../components/CaseStudySection";
import Form from '../components/Form';


const SeachOptimizationLearnMore = () => {

  const customHeroData = {
    badge: "DIGITAL STRATEGY DEVELOPMENT",
    title: "SEO Services That Bring Customers to You",
    subtitle: "",
    description: (
      <>
        SEO isn’t just about ranking higher — it’s about getting the right eyes on your business.<br />
        We create SEO strategies that drive organic traffic, improve your search rankings, and boost your visibility. From on-page optimization to strategic link building, we make sure your brand is found by the people who matter most — your future customers.
      </>
    ), primaryButton: "Get a Quote",
    secondaryButton: "See all Services",
    primaryButtonLink: "/contact-us",
    features: [
      { icon: batchImg, title: "Award-Winning Team" },
      { icon: puzzleImg, title: "Tailored Solutions" },
      { icon: graphLineImg, title: "Proven Results" }
    ],
    heroImage: girlImg
  };

  const title = "Search Engine Optimization Services";
  const subtitle = "Our SEO services are designed to do more than just move you up the rankings — they’re built to drive real traffic, real engagement, and real growth. We focus on strategies that connect your brand with the right audience, building long-term visibility and lasting success.";
  const services = [];
  const buttonText = "Get a Quote";
  const buttonLink = "/contact-us";

  const defaultServices = [
    {
      id: 1,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c0b_ds-icon1.svg",
      title: "Audience-First Keyword Strategy",
      description: "We don’t just chase keywords — we find what your audience is actually searching for. Our keyword strategies focus on intent, helping you attract people ready to engage, buy, or learn more."
    },
    {
      id: 2,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c07_ds-icon2.svg",
      title: "High-Impact On-Page SEO",
      description: "From meta titles to internal linking, we fine-tune every detail of your site’s content and structure to improve rankings, enhance user experience, and drive conversions."
    },
    {
      id: 3,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c05_ds-icon3.svg",
      title: "Link Building That Builds Authority",
      description: "We create powerful backlink strategies that grow your website’s authority and credibility, helping you climb search results and stay ahead of your competition."
    },
    {
      id: 4,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834bdf_ds-icon4.svg",
      title: "Technical SEO That Powers Growth",
      description: "Fast-loading pages, mobile optimization, site architecture — we handle the behind-the-scenes tech that makes search engines (and customers) love your site."
    },
    {
      id: 5,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c08_ds-icon5.svg",
      title: "Local SEO for Local Domination",
      description: "If you’re targeting a specific area, we’ll make sure you’re showing up where it counts — with Google My Business optimization, local citations, and geo-targeted strategies."
    },
    {
      id: 6,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c10_ds-icon6.svg",
      title: "Performance Tracking and Reporting",
      description: "SEO without tracking is just guessing. We deliver clear, actionable reports so you can see what’s working, track growth, and fine-tune your strategy for maximum results."
    }
  ];

  const servicesToRender = services.length > 0 ? services : defaultServices;

  return (
    <div>
      <Hero
        heroData={customHeroData}
        customStyles={{ titleWidth: 'lg:max-w-xl' }}
        showHeroImage={true}
        showFeatures={true}
        showBadge={true}
        showBadgeIcon={false}
      />

      <ServicesGrid services={servicesToRender} title={title} subtitle={subtitle} buttonText={buttonText} buttonLink={buttonLink} />


      <CaseStudiesSection />
      <Form
        headerTitle="Ready to Get Found by More Customers?"
        headerDescription="Let’s build an SEO strategy that doesn’t just get clicks — it gets results. Reach out today and let’s start growing your visibility and your business."
        showContactInfo={false}
        submitButtonText="Submit"
        servicesPlaceholder="Search Engine Optimization"
      />


    </div>
  );
};

export default SeachOptimizationLearnMore;
