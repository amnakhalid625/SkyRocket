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


const SocialMediaLearnMore = () => {

  const customHeroData = {
    badge: "Digital Strategy Development", 
    title: "Skyrocket Your Brand's Presence!",
    subtitle: "",
    description: "At Skyrocket Business, we craft social media strategies that do more than just fill your feed — we create meaningful, engaging content that sparks conversations and builds real connections. Whether you're growing your community, driving traffic, or boosting sales, we focus on turning followers into loyal customers.",
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

  const title = "Detroit Social Media Management Services";
  const subtitle = "At Skyrocket Business, we elevate your social media with tailored strategies that boost visibility and deliver real results. Whether increasing brand awareness, growing your community, or converting followers into loyal customers, we create authentic and engaging social media experiences.";
  const services = [];
  const buttonText = "Get a Quote";
  const buttonLink = "/contact-us";

  const defaultServices = [
    {
      id: 1,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c0b_ds-icon1.svg",
      title: "Transform Your Social Media",
      description: ".Your social media isn’t just about likes — it’s about driving results. We create powerful, shareable content that not only engages but converts your followers into loyal customers."
    },
    {
      id: 2,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c07_ds-icon2.svg",
      title: "Craft Compelling Stories That Drive Action",
      description: "We help your brand stand out by creating stories that resonate with your audience, building a genuine connection that encourages more engagement and, most importantly, more sales."
    },
    {
      id: 3,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c05_ds-icon3.svg",
      title: "Maximize Your Reach to Grow Your Brand",
      description: "We design targeted campaigns that put your brand in front of the right people. By reaching and engaging your ideal audience, we expand your reach and grow your customer base."
    },
    {
      id: 4,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834bdf_ds-icon4.svg",
      title: "Turn Followers Into Customers",
      description: "Social media is a goldmine for leads, but only if you know how to mine it. Our strategies focus on using data-driven insights to turn your followers into paying customers, maximizing your ROI."
    },
    {
      id: 5,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c08_ds-icon5.svg",
      title: "Engage. Convert. Repeat.",
      description: "Consistency is key, and we’re here to ensure your social media doesn’t just stay active — it stays effective. With continuous engagement and performance tracking, we turn every post into a potential conversion."
    },
    {
      id: 6,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c10_ds-icon6.svg",
      title: "Elevate Your Brand Authority",
      description: "We don’t just create content; we create content that builds trust and authority in your industry. By positioning your brand as an expert, we attract the right audience and turn them into lifelong customers."
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
  headerTitle="Let’s transform your social media into a business-driving machine."
  headerDescription="At Skyrocket Business, we don’t just manage your social media—we make it a powerful tool that helps your business thrive in the digital age."
  showContactInfo={false}
  submitButtonText="Submit"
  servicesPlaceholder="Social Media Management" 
/>

<Footer />
 
    </div>
  );
};

export default SocialMediaLearnMore;
