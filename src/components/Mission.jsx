import React from 'react';
import { motion } from 'framer-motion';
import navArrow from '../assets/images/NavArrow.svg';
import tickImg from '../assets/images/tick.svg';
import aboutImg from '../assets/images/aboutTeam.webp';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Mission = () => {
  return (
    <section className="py-12 md:py-[80px] bg-white max-w-[90rem] mx-auto">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Text Content */}
            <motion.div className="space-y-6" variants={fadeInUp}>
              <div className="inline-block bg-secondary text-textColor px-3 py-[5px] rounded-full text-[12px] font-semibold uppercase tracking-wider">
                Our Mission
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-textColor leading-tight tracking-tight">
                Skyrocket Your Business with Clarity, Creativity, and Results.
              </h2>

              <div className="text-base md:text-lg text-secondaryTextColor font-normal space-y-4 max-w-xl">
                <p>
                  At Skyrocket Business, we’re not just another digital agency — we’re your growth partner. 
                  We believe great marketing should be clear, impactful, and human-focused.
                </p>
                <p>
                  Whether it’s a stunning website, engaging content, or marketing strategies that drive real results — 
                  we deliver without the jargon. Just smart work that works.
                </p>
                <p className="font-semibold text-secondaryTextColor">What We Bring:</p>
              </div>

              <ul className="space-y-4">
                {[
                  {
                    title: "Personal Attention",
                    desc: "We listen, we care, we act.",
                  },
                  {
                    title: "Smart Strategies",
                    desc: "Rooted in data, driven by creativity.",
                  },
                  {
                    title: "Real Results",
                    desc: "From better branding to higher sales.",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 mt-1">
                      <img src={tickImg} alt="tick icon" />
                    </div>
                    <p className="text-base text-secondaryTextColor font-medium">
                      <strong>{item.title}</strong> – {item.desc}
                    </p>
                  </li>
                ))}
              </ul>

              <div>
                <Link
                  to="/contact-us"
                    onClick={() => {
               window.scrollTo({ top: 0, behavior: 'smooth' });
             }}
                  className="group inline-flex items-center gap-2 bg-secondary hover:bg-hoverColor text-textColor px-6 py-3 rounded-full transition-all duration-300 font-medium"
                >
                  <span className="transition-transform group-hover:translate-x-1">
                    Get In Touch
                  </span>
                  <img
                    src={navArrow}
                    alt="arrow icon"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div className="w-full" variants={fadeInUp}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={aboutImg}
                  alt="Team working together"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
