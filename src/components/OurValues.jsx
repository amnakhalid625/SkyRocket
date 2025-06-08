import React from 'react';
import { motion } from 'framer-motion';
import v1 from '../assets/images/value1.webp';
import v2 from '../assets/images/value2.webp';
import v3 from '../assets/images/value3.webp';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: 'easeOut',
    },
  }),
};

const OurValues = () => {
  const cards = [
    {
      title: 'Integrity',
      img: v1,
      desc: `We believe in honest communication, clear results, and doing what's right — always. Our clients trust us to deliver with transparency.`,
    },
    {
      title: 'Innovation',
      img: v2,
      desc: `At Skyrocket Business, we think ahead. From strategy to execution, we push boundaries to craft digital solutions that drive real growth.`,
    },
    {
      title: 'Collaboration',
      img: v3,
      desc: `We don't just work for you — we work with you. Together, we align on your goals and build strategies that truly move the needle.`,
    },
  ];

  return (
    <section className="py-20 bg-backgroundColor">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-secondary text-textColor px-4 py-[5px] mx-auto rounded-full text-[12px] font-semibold uppercase tracking-wider mb-1">
              OUR VALUES
            </div>
            <div className="max-w-4xl mx-auto mb-4">
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-textColor leading-tight tracking-tight mt-3">
                The Pillars of Our Success
              </h2>
            </div>
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-secondaryTextColor leading-tight font-medium">
                At Skyrocket Business, our core values define who we are and guide everything we do.
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 custom-md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-transparent group max-w-[400px] w-full mx-auto"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="mb-6 relative overflow-hidden rounded-2xl h-[300px] sm:h-[350px] custom-md:h-[400px]">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-textColor text-center mb-3">
                    {card.title}
                  </h3>
                  <p className="text-base text-secondaryTextColor leading-tight text-center font-medium">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
