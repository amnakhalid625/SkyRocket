import React from 'react';
import batchImg from "../assets/images/batch.svg";
import puzzleImg from "../assets/images/puzzle.svg";
import graphLineImg from "../assets/images/graphLine.svg";
import girlImg from "../assets/images/girl.webp";
import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import CaseStudiesSection from "../components/CaseStudySection";
import Form from '../components/Form';


const EmailMarketingLearnMore = () => {

  const customHeroData = {
    badge: "Email Marketing", 
    title: "Skyrocket Your Business with Powerful Email Marketing",
    subtitle: "",
    description: "Email is one of the most powerful ways to connect directly with your audience. We design tailored email campaigns that not only get opened but drive action. Whether you’re nurturing leads, promoting offers, or building long-term relationships, we create emails that convert and keep your brand top of mind.",
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

  const title = "Email Marketing Services";
  const subtitle = "Your audience’s inbox is valuable real estate. We help you own it with strategic, engaging emails that nurture relationships, promote your offers, and boost your business growth. Whether you're nurturing leads or driving direct sales, our email marketing turns messages into money.";
  const services = [];
  const buttonText = "Get a Quote";
  const buttonLink = "/contact-us";

  const defaultServices = [
    {
      id: 1,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c0b_ds-icon1.svg",
      title: "Tailored Email Strategies",
      description: "No one-size-fits-all here. We craft campaigns based on your brand, goals, and audience behavior."
    },
    {
      id: 2,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c07_ds-icon2.svg",
      title: "High-Impact Copy and Design",
      description: "We write, design, and build emails that not only look stunning but also inspire clicks and conversions."
    },
    {
      id: 3,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c05_ds-icon3.svg",
      title: "Automation",
      description: "Set up powerful email workflows — from welcome sequences to re-engagement campaigns — that run on autopilot and keep your sales pipeline full."
    },
    {
      id: 4,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834bdf_ds-icon4.svg",
      title: "Data-Backed Audience Segmentation and Personalization",
      description: "Send the right message to the right people at the right time. Our segmentation strategies maximize open rates and engagement."
    },
    {
      id: 5,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c08_ds-icon5.svg",
      title: "Metrics That Matter",
      description: "We track every open, click, and sale — giving you clear insights into what’s working and how to improve."
    },
    {
      id: 6,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c10_ds-icon6.svg",
      title: "Campaign Optimization",
      description: "We don't just send emails; we optimize continuously to ensure your campaigns deliver maximum ROI."
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
  headerTitle="Ready to Turn Emails Into Revenue?"
  headerDescription="Let's build email campaigns that not only connect — but convert."
  showContactInfo={false}
  submitButtonText="Submit"
  servicesPlaceholder="Email Marketing" 
/>

 
    </div>
  );
};

export default EmailMarketingLearnMore;
