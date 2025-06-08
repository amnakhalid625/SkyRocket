import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import CaseStudiesSection from "../components/CaseStudySection";
import Form from "../components/Form";
import Footer from "../components/Footer";

import batchImg from "../assets/images/batch.svg";
import puzzleImg from "../assets/images/puzzle.svg";
import graphLineImg from "../assets/images/graphLine.svg";
import girlImg from "../assets/images/girl.webp";

const ContentCreationLearnMore = () => {
  const customHeroData = {
    badge: "Digital Strategy Development",
    title: "Skyrocket Your Brand with Content That Converts",
    subtitle: "",
    description:
      "Content is more than just words — it’s your brand’s story brought to life. At Skyrocket Business, we craft content that doesn’t just look good — it builds relationships, earns trust, and drives real results. From blogs to videos to social media posts, we ensure your message connects with the right people and inspires action.",
    primaryButton: "Get a Quote",
    secondaryButton: "See all Services",
    primaryButtonLink: "/contact",
    features: [
      { icon: batchImg, title: "Award-Winning Team" },
      { icon: puzzleImg, title: "Tailored Solutions" },
      { icon: graphLineImg, title: "Proven Results" },
    ],
    heroImage: girlImg,
  };

  const defaultServices = [
    {
      id: 1,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c0b_ds-icon1.svg",
      title: "Audience-First Content Strategy",
      description:
        "We build content strategies centered around your target audience — ensuring every piece resonates, engages, and drives action.",
    },
    {
      id: 2,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c07_ds-icon2.svg",
      title: "High-Impact Storytelling",
      description:
        "Through captivating stories, we humanize your brand and spark emotional connections that turn browsers into believers.",
    },
    {
      id: 3,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c05_ds-icon3.svg",
      title: "Multi-Platform Content Creation",
      description:
        "From blogs and emails to social media and videos — we craft versatile content that amplifies your message across all major platforms.",
    },
    {
      id: 4,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834bdf_ds-icon4.svg",
      title: "SEO-Driven Growth",
      description:
        "Our content isn’t just beautiful — it’s optimized for search engines, helping you increase visibility, drive traffic, and generate more qualified leads.",
    },
    {
      id: 5,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c08_ds-icon5.svg",
      title: "Consistent Brand Voice",
      description:
        "We ensure your brand’s voice stays clear, strong, and consistent across every channel, building trust and authority over time.",
    },
    {
      id: 6,
      icon: "https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834c10_ds-icon6.svg",
      title: "Performance Analytics for Optimization",
      description:
        "We measure what matters. Our data-driven insights help you refine your content strategy for even greater engagement, conversions, and ROI.",
    },
  ];

  const servicesToRender = defaultServices;

  return (
    <div>
      <Hero
        heroData={customHeroData}
        customStyles={{ titleWidth: "lg:max-w-xl" }}
        showHeroImage={true}
        showFeatures={true}
        showBadge={true}
        showBadgeIcon={false}
      />

      <ServicesGrid
        services={servicesToRender}
        title="Our Content Services"
        subtitle="We go beyond words — we build results-driven content experiences."
        buttonText="Get Started"
        buttonLink="/contact"
      />

      <CaseStudiesSection />

      <Form
        headerTitle="Let's Connect and Skyrocket Your Growth"
        headerDescription="We’re excited to hear from you! Let’s team up to create powerful strategies that fuel your brand, amplify your reach, and deliver real results."
        showContactInfo={false}
        submitButtonText="Submit"
        servicesPlaceholder="Content Marketing"
      />

      <Footer />
    </div>
  );
};

export default ContentCreationLearnMore;
