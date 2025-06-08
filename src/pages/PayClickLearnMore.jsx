import React from 'react';
import batchImg from "../assets/images/batch.svg";
import puzzleImg from "../assets/images/puzzle.svg";
import graphLineImg from "../assets/images/graphLine.svg";
import girlImg from "../assets/images/girl.webp";
import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import CaseStudiesSection from "../components/CaseStudySection";
import Form from '../components/Form';
import Footer from '../components/Footer';


const PayClickLearnMore = () => {

  const customHeroData = {
    badge: "Digital Strategy Development", 
    title: "SEO Services That Bring Customers to You",
    subtitle: "",
    description: "SEO isn’t just about ranking higher — it’s about getting the right eyes on your business.We create SEO strategies that drive organic traffic, improve your search rankings, and boost your visibility. From on-page optimization to strategic link building, we make sure your brand is found by the people who matter most — your future customers.",
    primaryButton: "Get a Quote",
    secondaryButton: "See all Services",
    primaryButtonLink: "/contact",
    features: [
      { icon: batchImg, title: "Award-Winning Team" },
      { icon: puzzleImg, title: "Tailored Solutions" },
      { icon: graphLineImg, title: "Proven Results" }
    ],
    heroImage: girlImg
  };

  const title = "Pay-Per-Click Advertising Services";
  const subtitle = "Our PPC advertising strategies focus on attracting the right audience, boosting conversions, and maximizing your return on investment — helping your business grow faster, smarter, and stronger.";
  const services = [];
  const buttonText = "Get a Quote";
  const buttonLink = "/contact-us";

  const defaultServices = [
    {
      id: 1,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c0b_ds-icon1.svg",
      title: "Precision Targeting",
      description: "We craft ads that reach the right audience at the right time, maximizing your visibility and ROI with smart targeting and bidding strategies."
    },
    {
      id: 2,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c07_ds-icon2.svg",
      title: "Conversion-Driven Campaigns",
      description: "Every ad we create is built with a single focus: converting clicks into leads and sales, not just driving empty traffic."
    },
    {
      id: 3,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c05_ds-icon3.svg",
      title: "Compelling Ad Copy and Creative",
      description: "We design scroll-stopping ads that capture attention, spark interest, and motivate action across search and social platforms."
    },
    {
      id: 4,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834bdf_ds-icon4.svg",
      title: "Data-Backed Optimization",
      description: "Our team constantly tests, analyzes, and refines your campaigns to squeeze every bit of value out of your ad spend and improve performance over time."
    },
    {
      id: 5,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c08_ds-icon5.svg",
      title: "Multi-Platform Expertise",
      description: "From Google Ads to Facebook, Instagram, and LinkedIn, we manage and optimize campaigns across the platforms where your customers are most active."
    },
    {
      id: 6,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c10_ds-icon6.svg",
      title: "Transparent Reporting & Insights",
      description: "We keep you in the loop with clear, easy-to-understand reports that show exactly how your campaigns are performing and where opportunities lie."
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
 
 
      <CaseStudiesSection/>
<Form 
  headerTitle="Ready to turn ad spend into serious growth?"
  headerDescription="Let’s build PPC campaigns that don’t just make noise — they drive action and results."
  showContactInfo={false}
  submitButtonText="Submit"
  servicesPlaceholder="PPC Campaigns" 
/>

<Footer />
 
    </div>
  );
};

export default PayClickLearnMore;
