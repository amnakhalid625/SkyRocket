import { motion } from "framer-motion";
import HomeImage from "../assets/images/man.webp";
import rockImage from "../assets/images/rocket.png";
import batchImg from "../assets/images/batch.svg";
import puzzleImg from "../assets/images/puzzle.svg";
import graphLineImg from "../assets/images/graphLine.svg";
import navArrow from "../assets/images/NavArrow.svg";
import { Link } from "react-router-dom";

const Hero = ({
  heroData = {
    badge: "ALL-IN-ONE WEB DESIGN & MARKETING AGENCY",
    title: "Skyrocket your Detroit Business with Proven Strategies",
    subtitle: "Custom Websites. Smart Marketing. Real Results.",
    description: "We design, build, and grow your online presence—so you can focus on what you do best.",
    primaryButton: "Get in Touch",
    secondaryButton: "See all Services",
    primaryButtonLink: "/contact-us",
    secondaryButtonLink: "/services", 
    stats: [
      { number: "350", label: "Web Design Projects" },
      { number: "170", label: "Marketing Projects" },
      { number: "90", label: "Social Media Projects" }
    ],
    features: [
      { icon: batchImg, title: "Award-Winning Team" },
      { icon: puzzleImg, title: "Tailored Solutions" },
      { icon: graphLineImg, title: "Proven Results" }
    ],
    heroImage: HomeImage
  },
  customStyles = {},
  showHeroImage = true,
  showFeatures = true,
  showBadge = true,
  showBadgeIcon = true
}) => {
  return (
    <div className="mt-10 flex flex-col md:flex-wrap lg:flex-nowrap lg:flex-row lg:gap-6 items-start justify-between px-4 sm:px-6 md:px-8 pb-8 lg:pt-10 bg-white w-full max-w-[85rem] mx-auto container">
      
      {/* Left Section with motion */}
      <motion.div
        className="w-full mb-8"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Badge */}
        {showBadge && (
          <div className="flex items-center w-fit bg-secondary text-textColor py-2 px-4 md:py-1.5 md:px-2 rounded-full mb-2 tracking-wide">
            {showBadgeIcon && (
              <div className="rounded-sm mr-1 flex items-start px-1">
                <img src={rockImage} alt="rocket" className="w-4 h-4 object-cover" />
              </div>
            )}
            <span className="text-xs font-semibold break-words">{heroData.badge}</span>
          </div>
        )}

        {/* Title */}
        <h1 className={`mt-5 text-[2.7rem] sm:text-4xl md:text-5xl font-medium text-textColor mb-6 tracking-tight ${customStyles.titleWidth || 'lg:max-w-lg'} leading-normal md:leading-wide`}>
          {heroData.title}
        </h1>

        {/* Subtitle and Description */}
        <p className="text-base sm:text-lg text-secondaryTextColor mb-8 max-w-[450px] tracking-tight">
          <span className="font-bold">{heroData.subtitle}</span> {heroData.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center flex-row sm:flex-row gap-4 mb-12">
          <Link
            to={heroData.primaryButtonLink || "/contact-us"}
            className="group flex items-center space-x-2 bg-secondary hover:bg-hoverColor text-textColor px-5 py-3 rounded-full transition-all duration-300 ease-in-out"
          >
            <span className="transition-transform duration-300 group-hover:translate-x-1 font-medium">
              {heroData.primaryButton}
            </span>
            <img
              src={navArrow}
              alt="navigation arrow"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <Link
            to={heroData.secondaryButtonLink || "/services"}
            className="border border-primary hover:border-bluehover text-primary hover:text-bluehover font-medium py-3 px-5 rounded-full transition duration-200"
          >
            {heroData.secondaryButton}
          </Link>
        </div>

        {/* Stats */}
        {heroData.stats?.length > 0 && (
          <div className="flex flex-wrap gap-6 sm:gap-10">
            {heroData.stats.map((stat, index) => (
              <div key={index} className="min-w-[100px] text-center sm:text-left">
                <p className="text-2xl sm:text-3xl font-medium text-textColor">
                  {stat.number}
                  <span className="text-primary">+</span>
                </p>
                <p className="text-secondaryTextColor">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Right Image Section with motion */}
      {showHeroImage && (
        <motion.div
          className="w-full md:w-[70%] pb-20 lg:max-w-base md:mx-0 relative md:left-20 lg:left-0 mt-6 md:mt-0 lg:mt-[-20px]"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={heroData.heroImage}
            alt="Business man"
            className="w-full sm:w-[80%] sm:mx-auto md:w-[32rem] h-auto sm:max-h-[27rem] md:max-h-[30rem] lg:max-h-[34rem] object-cover"
            style={{ objectPosition: "top" }}
          />

          {/* Features */}
          {showFeatures && heroData.features?.length > 0 && (
            <div
              className="font-medium absolute bottom-12 left-0 sm:bottom-1 md:bottom-16 md:-left-20 xl:-left-28 bg-white p-4 rounded-[20px] shadow-lg border border-gray-100"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
              }}
            >
              {heroData.features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index < heroData.features.length - 1 ? "sm:mb-3" : ""}`}
                >
                  <div className="p-2 rounded-full w-12 h-10 flex items-center justify-center">
                    <img src={feature.icon} alt={feature.title} className="w-7 h-7" />
                  </div>
                  <h3 className="font-medium text-[.875rem] sm:text-lg text-textColor">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Hero;