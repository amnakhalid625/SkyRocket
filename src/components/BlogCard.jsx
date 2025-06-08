import React from 'react';
import { motion } from 'framer-motion';
import dotImage from '../assets/images/dot-icon.svg';
import calendarImage from '../assets/images/calendar-icon.svg';
import blogCardImg from '../assets/images/blogCard1.avif';
import blogCardImg2 from '../assets/images/blog1.jpg';
import { Link } from 'react-router-dom';

const BlogCard = ({
  imageUrl,
  category,
  date,
  title,
  description,
  link,
  isLarge = false
}) => {
  return (
    <motion.div
      className="opacity-100 h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <Link
        to={link}
        className="group block text-secondaryTextColor no-underline hover:no-underline h-full transition-all duration-300 hover:scale-[1.02]"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <div className="overflow-hidden rounded-[24px] mb-4 relative h-[350px]">
          <motion.img
            src={imageUrl}
            loading="eager"
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="flex items-center gap-2 mb-3 text-base text-secondaryTextColor ">
          <div className="font-medium">{category}</div>
          <img src={dotImage} alt="dotImage" className="w-1 h-1" />
          <div className="flex items-center gap-1">
            <img src={calendarImage} alt="Date" className="w-6 h-6 font-bold" />
            <div className="font-medium">{date}</div>
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-textColor text-xl md:text-[40px] font-medium mb-3 leading-tight group-hover:text-[#240cf2] transition-colors duration-300">
            {title}
          </h2>

          {description && (
            <p className="text-secondaryTextColor font-medium text-lg leading-relaxed line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

const BlogCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
      {/* First column - Takes 3/5 width on large screens */}
      <div className="lg:col-span-3 opacity-100">
        <BlogCard
          imageUrl={blogCardImg}
          category="Digital Marketing"
          date="May 10, 2025"
          title="The Role of Search Engine Optimisation in Web Design: Why It Matters in 2025"
          description=""
          link="/blog/the-role-of-search-engine-optimisation-in-web-design-why-it-matters-in-2025"
          isLarge={true}
        />
      </div>

      {/* Second column - Takes 2/5 width on large screens */}
      <div className="lg:col-span-2 opacity-100">
        <BlogCard
          imageUrl={blogCardImg2}
          category="Website Design"
          date="May 14, 2025"
          title="Understanding User Experience (UX) and Its Impact on Conversion Rates"
          description="Learn how user experience (UX) design influences conversion rates and why it's critical for your Detroit business website. Improve UX, boost trust, and increase sales."
          link="/blog/understanding-user-experience-ux-and-its-impact-on-conversion-rates"
        />
      </div>
    </div>
  );
};

export default BlogCards;
