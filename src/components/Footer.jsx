import React from 'react';
import { motion } from 'framer-motion';
import footerImg from '../assets/images/footerBackImg.svg';
import footerLogo from '../assets/images/footerlogo.png';
import facebookIcon from '../assets/images/facebookicon.svg';
import instagramIcon from '../assets/images/instagramIcon.svg';
import twitterIcon from '../assets/images/twitterIcon.svg';
import linkedinIcon from '../assets/images/linkedInIcon.svg';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const socialIconVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <div className="relative bg-primary text-white overflow-hidden py-4">
      {/* Decorative Background */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 sm:w-64 sm:h-20 md:w-60 md:h-60 lg:w-96 lg:h-28 xl:w-[30rem] xl:h-24 2xl:w-[35rem] 2xl:h-28 z-0"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src={footerImg}
          alt="servicesImg"
          className="absolute top-0 right-0 z-0"
        />
      </motion.div>

      {/* Footer Content with responsive vertical padding */}
      <motion.div 
        className="relative z-10 max-w-[83rem] mx-auto px-6 pt-20 sm:pt-24 xl:pt-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-x-6 xl:gap-x-8 justify-items-start">
          
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <motion.img 
              src={footerLogo} 
              alt="logo" 
              className="w-40 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.p 
              className="font-medium text-white text-lg"
              variants={itemVariants}
            >
              Custom Websites. Smart Marketing. Real Results.
            </motion.p>
            <motion.p 
              className="text-white leading-relaxed text-lg font-medium"
              variants={itemVariants}
            >
              We design, build, and grow your online presence—so you can focus on what you do best.
            </motion.p>
          </motion.div>

          {/* Pages */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-white mb-5">Pages</h3>
            <div className="grid grid-cols-2 gap-x-4">
              <motion.div 
                className="space-y-3 text-lg"
                variants={containerVariants}
              >
                <MotionLink
                  to="/" 
                  className="block text-white hover:text-whitehover font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Home
                </MotionLink>
                <MotionLink 
                  to="/about-us" 
                 
                  className="block text-whitehover hover:text-white"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                   onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
                >
                  About
                </MotionLink>
                <MotionLink 
                  to="/services" 
                  className="block text-white/80 hover:text-white"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                 onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
                  
                >
                  Services
                </MotionLink>
                <MotionLink
                  to="/case-studies" 
                  className="block text-white/80 hover:text-white"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
                >
                  Case Studies
                </MotionLink>
                <MotionLink 
                  to="/blogs" 
                  className="block text-white/80 hover:text-white"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
                >
                  Blog
                </MotionLink>
                <MotionLink
                  to="/contact-us" 
                  className="block text-white/80 hover:text-white"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
                >
                  Contact
                </MotionLink>
              </motion.div>
              <motion.div 
                className="space-y-3 text-lg"
                variants={containerVariants}
              >
                <MotionLink
                  to="/services/detroit-website-design-and-development" 
                  className="block text-white/80 hover:text-white"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                   onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
                >
                  Web Design
                </MotionLink>
                <MotionLink
                  to="/services/social-media-management" 
                  className="block text-white/80 hover:text-white"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                   onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
                >
                  Social Media
                </MotionLink>
                <MotionLink
                  to="/services/content-creation-marketing" 
                  className="block text-white/80 hover:text-white"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                    onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
                  
                >
                  ContentMarketing
                </MotionLink>
                <MotionLink
                  to="/services/search-engine-optimization" 
                  className="block text-white/80 hover:text-white"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                            onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
                >
                  SEO
                </MotionLink>
                <MotionLink
                  to="/services/pay-per-click-advertising" 
                  className="block text-white/80 hover:text-white"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                   onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}

                >
                  PPC
                </MotionLink>
                <MotionLink
                  to="/services/email-marketing" 
                  className="block text-white/80 hover:text-white"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                   onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
                >
                  Email Marketing
                </MotionLink>
              </motion.div>
            </div>
          </motion.div>

          {/* Recent Posts */}
          <motion.div variants={itemVariants} className="w-full max-w-[200px] lg:ml-8 xl:ml-12">
            <h3 className="text-xl font-semibold text-white mb-5">Recent Posts</h3>
            <div className="space-y-3 text-lg">
              <MotionLink
                to="/blog/how-website-design-can-skyrocket-your-business-in-detroit" 
                className="block text-white/80 hover:text-white"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                 onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              >
                Skyrocket Your<br/> Business
              </MotionLink>
              <MotionLink
                to="/blog/seo-best-practices-optimizing-for-search-engines-in-2024" 
                className="block text-white/80 hover:text-white"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                 onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              >
                Stunning Website<br/> Design
              </MotionLink>
              <MotionLink
                to="/blog/why-every-detroit-business-needs-a-mobile-friendly-website-in-2025" 
                className="block text-white/80 hover:text-white"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                   onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              >
                Mobile-Friendly<br/> Website
              </MotionLink>
              <MotionLink
                to="/blog/top-seo-strategies-for-detroit-businesses-to-gain-local-visibility-lf8a2" 
                className="block text-white/80 hover:text-white"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                 onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              >
                Top SEO Strategies
              </MotionLink>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="w-full max-w-[200px]">
            <h3 className="text-xl font-semibold text-white mb-5">Contact</h3>
            <div className="space-y-3 text-lg">
              <MotionLink
                to="tel:+16162743853" 
                className="block text-white/80 hover:text-white"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                +1 (616) 274-3853
              </MotionLink>
              <MotionLink
                to="mailto:Sales@skyrocketbusiness.io" 
                className="block text-white/80 hover:text-white"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Sales@skyrocketbusiness.io
              </MotionLink>
              <motion.p 
                className="text-white/80"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                607 Shelby St Suite 700<br />Detroit, MI 48226, USA
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="mt-16 pt-8 pb-8 border-t border-accent flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <motion.p 
            className="text-white text-sm mb-6 md:mb-0"
            variants={itemVariants}
          >
            All Rights Reserved. © Skyrocket Business - 2025
          </motion.p>

          {/* Social Icons */}
          <motion.div 
            className="flex space-x-4 sm:justify-start sm:w-full md:justify-start md:w-auto lg:justify-end"
            variants={containerVariants}
          >
            <MotionLink
              to="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <img src={facebookIcon} alt="facebook" className="w-5 h-5 lg:w-8 lg:h-8" />
            </MotionLink>
            <MotionLink
              to="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <img src={instagramIcon} alt="instagram" className="w-5 h-5 lg:w-8 lg:h-8" />
            </MotionLink>
            <MotionLink
              to="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <img src={twitterIcon} alt="twitter" className="w-5 h-5 lg:w-8 lg:h-8" />
            </MotionLink>
            <MotionLink
              to="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <img src={linkedinIcon} alt="Linkedin" className="w-5 h-5 lg:w-8 lg:h-8" />
            </MotionLink>
          </motion.div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Footer;