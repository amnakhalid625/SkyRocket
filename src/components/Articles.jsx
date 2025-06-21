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
  imageHeight = "h-80 sm:h-80 md:h-96 lg:h-[25rem] xl:h-[28rem]" 
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
    <div className={`grid ${gridCols} gap-6`}>
      {postsToRender.map((post, index) => (
        <motion.div
          key={post.id}
          className="bg-white flex flex-col h-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Link
            to={post.link}
            className="group text-decoration-none flex flex-col h-full"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className={`w-full overflow-hidden rounded-[24px] mb-4 ${imageHeight}`}>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-[24px]"
              />
            </div>

            {(showCategory || showDate) && (
              <div className="flex items-center text-base text-secondaryTextColor mb-2 font-medium">
                {showCategory && (
                  <>
                    <span className="text-secondaryTextColor text-sm font-medium">{post.category}</span>
                    {showDate && <img src={dotIcon} alt="dot" className="mx-2 w-[6px] h-[6px]" />}
                  </>
                )}
                {showDate && (
                  <div className="flex items-center text-sm">
                    <img src={calendarIcon} alt="Date" className="w-5 h-5 mr-1" />
                    <span>{post.date}</span>
                  </div>
                )}
              </div>
            )}

            <div className="flex-grow flex flex-col">
              <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-textColor mb-2 leading-snug tracking-tight group-hover:text-primary transition-colors duration-300">
                {post.title}
              </h3>

              {showExcerpt && (
                <p className="text-sm sm:text-base text-secondaryTextColor leading-relaxed tracking-tight line-clamp-3 mb-4 font-medium flex-grow">
                  {post.excerpt}
                </p>
              )}

              {showReadMore && (
                <div className="mt-auto pt-1">
                  <span className="text-primary text-sm sm:text-base font-medium flex items-center gap-2">
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
