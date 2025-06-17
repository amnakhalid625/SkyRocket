import HomeImage from "../assets/images/man.webp";
import rockImage from "../assets/images/rocket.png";
import batchImg from "../assets/images/batch.svg";
import puzzleImg from "../assets/images/puzzle.svg";
import graphLineImg from "../assets/images/graphLine.svg";
import navArrow from "../assets/images/NavArrow.svg";
import girlImg from "../assets/images/girl.webp";
import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import CaseStudiesSection from "../components/CaseStudySection";
import Form from "../components/Form";
import Footer from "../components/Footer";

const WebDevelopmentLearnMore = () => {
  const customHeroData = {
    badge: "Digital Strategy Development",
    title: "Skyrocket Your Business with Powerful Website!",
    subtitle: "",
    description: "Your website is the hardest working member of your team, tirelessly engaging potential customers and driving sales — 24/7. Let's create a website that doesn't just look good, but works hard for you.",
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

  return (
    <div>
      <Hero
        heroData={customHeroData}
        customStyles={{
          titleWidth: 'lg:max-w-xl'
        }}
        showHeroImage={true}
        showFeatures={true}
        showBadge={true}
        showBadgeIcon={false}
      />



      <ServicesGrid />
      <CaseStudiesSection />
      <Form
        headerTitle="Let's Make Your Website Work for You"
        headerDescription="Your website is your best salesperson—let’s make it one that never sleeps. Ready to increase conversions and drive more sales? Let’s partner up and create a site that works as hard as you do."
        showContactInfo={false}
        submitButtonText="Submit"
        servicesPlaceholder="Web Design"
      />
    </div>
  )
}

export default WebDevelopmentLearnMore;