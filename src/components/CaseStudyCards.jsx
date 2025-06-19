import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const CaseStudyCards = ({ caseStudies = [] }) => {
  const defaultCaseStudies = [
    {
      id: 1,
      image: project1,
      alt: 'LeHost Hair & Wig Shop',
      tag: 'Web Design & Marketing',
      title: 'LeHost Hair & Wig Shop: Boosting Online<br /> Presence and Sales',
      description:
        "We redesigned LeHost Hair & Wig Shop's website and implemented targeted digital marketing strategies, resulting in a 50% traffic ...",
      link: '/case-study/lehost-hair-wig-shop-boosting-online-presence-and-sales',
    },
    {
      id: 2,
      image: project2,
      alt: 'Mop and Glow Cleaning Company',
      tag: 'Website Design & Digital Marketing',
      title:
        'Mop and Glow Cleaning Company: Building<br />Trust and Driving Local Leads',
      description:
        "We designed Mop and Glow's website and launched a local SEO strategy—leading to a 75% traffic boost and 60% more leads in jus...",
      link: '/case-study/mop-and-glow-cleaning-company-building-trust-and-driving-local-leads',
    },
  ];

  const studies = caseStudies.length > 0 ? caseStudies : defaultCaseStudies;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[83rem] mx-auto">
      {studies.map((study, index) => (
        <Link
          to={study.link}
          key={study.id}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <motion.div
            className="group bg-white border border-gray-200 rounded-3xl p-6 h-full flex flex-col  transition-all duration-500 ease-in-out transform hover:-translate-y-1 cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            custom={index}
          >
            <div className="relative mb-6 overflow-hidden rounded-2xl">
              <img
                src={study.image}
                alt={study.alt}
                className="w-full h-90 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white backdrop-blur-sm text-textColor px-2 py-1 rounded-full text-sm font-medium transition-all duration-300 ease-in-out group-hover:bg-hoverColor group-hover:text-textColor">
                {study.tag}
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <div>
                <h3
                  className="text-xl lg:text-2xl font-medium text-gray-900 mb-3 leading-tight tracking-tight transition-colors duration-300 group-hover:text-primary"
                  dangerouslySetInnerHTML={{ __html: study.title }}
                />
                <div className="flex justify-between items-start gap-4">
                  <p className="text-secondaryTextColor font-medium leading-relaxed flex-1 transition-colors duration-300 group-hover:text-gray-800">
                    {study.description}
                  </p>
                  <div className="bg-secondary group-hover:bg-hoverColor rounded-full p-3 transition-all duration-500 ease-in-out group-hover:rotate-45">
                    <ArrowUpRight className="w-6 h-6 text-textColor transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default CaseStudyCards;
