import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import dotIcon from '../assets/images/dot-icon.svg';
import calendarIcon from '../assets/images/calendar-icon.svg';
import rightArrow from '../assets/images/arrow3.svg';
import blogImgOne from '../assets/images/blog1.jpg';
import blogImgTwo from '../assets/images/blog2.jpg';
import blogImgThree from '../assets/images/blog3.jpg';

const Articles = ({
  blogPosts = [],
  gridCols = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  showCategory = true,
  showDate = true,
  showExcerpt = true,
  showReadMore = true,
  imageHeight = "h-64 sm:h-72  lg:h-80 xl:h-96"
}) => {

  const defaultBlogPosts = [
    {
      id: 1,
      title: "Understanding User Experience (UX) and Its Impact on Conversion Rates",
      category: "Website Design",
      date: "May 14, 2025",
      excerpt: "Learn how user experience (UX) design influences conversion rates and why it's critical for your Detroit business website. Improve UX, boost trust, and increase sales.",
      image: blogImgOne,
      link: "/blog/understanding-user-experience-ux-and-its-impact-on-conversion-rates"
    },
    {
      id: 2,
      title: "The Importance of Mobile-First Design for Local Businesses in 2025",
      category: "Website Design",
      date: "May 13, 2025",
      excerpt: "Discover why mobile-first web design is crucial for local businesses in 2025. Learn how it boosts SEO, enhances user experience, and drives real-world results—especially for Detroit companies.",
      image: blogImgTwo,
      link: "/blog/the-importance-of-mobile-first-design-for-local-businesses-in-2025"
    },
    {
      id: 3,
      title: "Why Choose a Nearby Web Design Business in Detroit?",
      category: "Website Design",
      date: "May 12, 2025",
      excerpt: "Discover 10 powerful reasons to choose a Detroit-based web design company. From local insight to faster support, learn how Skyrocket Business can help grow your online presence.",
      image: blogImgThree,
      link: "/blog/why-choose-a-nearby-web-design-business-in-detroit"
    }
  ];

  const postsToRender = blogPosts.length > 0 ? blogPosts : defaultBlogPosts;

  return (
    <div className={`grid ${gridCols} gap-4`}>
      {postsToRender.map((post, index) => (
        <motion.div
          key={post.id}
          className="bg-white flex flex-col h-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Link to={post.link}
            className="group text-decoration-none flex flex-col h-full"

            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >

            <div className={`w-full overflow-hidden rounded-[24px] mb-3 ${imageHeight}`}>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-[24px]"
              />
            </div>

            {(showCategory || showDate) && (
              <div className="flex items-center text-sm text-textsecondaryTextColor mb-2 font-medium">
                {showCategory && (
                  <>
                    <span className="text-secondaryTextColor">{post.category}</span>
                    {showDate && <img src={dotIcon} alt="dot" className="mx-2 w-1 h-1" />}
                  </>
                )}
                {showDate && (
                  <div className="flex items-center">
                    <img src={calendarIcon} alt="Date" className="w-6 h-6 mr-2" />
                    <span>{post.date}</span>
                  </div>
                )}
              </div>
            )}

            <div className="flex-grow flex flex-col">
              <h3 className="text-2xl font-medium text-textColor mb-2 leading-tight">
                {post.title}
              </h3>
              {showExcerpt && (
                <p className="text-base text-secondaryTextColor leading-relaxed tracking-tight line-clamp-2 mb-3 flex-grow font-medium">
                  {post.excerpt}
                </p>
              )}
              {showReadMore && (
                <div className="mt-auto pt-2">
                  <span className="text-primary text-base font-medium flex items-center gap-2">
                    <span>Read more</span>
                    <img src={rightArrow} alt="arrow" className="w-4 h-4" />
                  </span>
                </div>
              )}
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Articles;
