import React from 'react';
import arrow from '../assets/images/staright-arrow.svg';
import blogImage1 from '../assets/images/blog1.jpg';
import blogImage2 from '../assets/images/blog2.jpg';
import blogImage3 from '../assets/images/blog3.jpg';
import calendarIcon from '../assets/images/calendar-icon.svg';
import dotIcon from '../assets/images/dot-icon.svg';
import rightArrow from '../assets/images/blueArrow.svg';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding User Experience (UX) and Its Impact on Conversion Rates",
      category: "Website Design",
      date: "May 14, 2025",
      excerpt: "Learn how user experience (UX) design influences conversion rates and why it's critical for your Detroit business website. Improve UX, boost trust, and increase sales.",
      image: blogImage1,
      link: "/blog/understanding-user-experience-ux-and-its-impact-on-conversion-rates"
    },
    {
      id: 2,
      title: "The Importance of Mobile-First Design for Local Businesses in 2025",
      category: "Website Design",
      date: "May 13, 2025",
      excerpt: "Discover why mobile-first web design is crucial for local businesses in 2025. Learn how it boosts SEO, enhances user experience, and drives real-world results—especially for Detroit companies.",
      image: blogImage2,
      link: "/blog/the-importance-of-mobile-first-design-for-local-businesses-in-2025"
    },
    {
      id: 3,
      title: "Why Choose a Nearby Web Design Business in Detroit?",
      category: "Website Design",
      date: "May 12, 2025",
      excerpt: "Discover 10 powerful reasons to choose a Detroit-based web design company. From local insight to faster support, learn how Skyrocket Business can help grow your online presence.",
      image: blogImage3,
      link: "/blog/why-choose-a-nearby-web-design-business-in-detroit"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="px-4 sm:px-6">
        <div className="max-w-[83rem] mx-auto">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start mb-8 md:mb-16">
            <div className="flex-1">
              <div className="inline-block bg-secondary text-textColor px-4 py-1 rounded-[24px] text-xs sm:text-[12px] font-semibold uppercase tracking-wider mb-4 sm:mb-6">
                skyrocket business blog
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-textColor mb-4 sm:mb-6 leading-tight tracking-tight">
                The Skyrocket Business<br /> Blog: Insights for your<br /> Digital Growth
              </h2>
              <div className="flex flex-col lg:flex-row items-start justify-between lg:items-end gap-4 sm:gap-6">
                {/* Buttons - hidden on mobile, sm, and md - only visible from lg up */}
                <div className="hidden lg:flex gap-4 flex-wrap ml-auto mt-[-60px]">
                  <button className="bg-secondary text-textColor px-6 py-3 rounded-[24px] font-semibold hover:bg-hoverColor transition-colors duration-200 flex items-center gap-2 whitespace-nowrap">
                    Get in Touch
                    <span className="text-lg">
                      <img src={arrow} alt="arrow" className="w-4 h-4" />
                    </span>
                  </button>
                  <button className="border border-primary hover:border-bluehover text-primary hover:text-bluehover font-medium py-3 px-6 rounded-full transition duration-200">
                    View All Blogs
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="h-4"></div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white"
              >
                <a href={post.link} className="block group text-decoration-none">
                  {/* Image Container - Updated height for md and below */}
                  <div className="w-full overflow-hidden rounded-[24px] mb-3 h-60 sm:h-64 md:h-72 lg:h-auto">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-[24px] lg:h-auto"
                    />
                  </div>

                  {/* Category and Date */}
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="text-secodaryTextColor font-medium">{post.category}</span>
                    <img src={dotIcon} alt="dot" className="mx-2 w-[5px] h-[5px]" />
                    <div className="flex items-center">
                      <img src={calendarIcon} alt="Date" className="w-6 h-6 mr-2" />
                      <span className='text-secondaryTextColor font-medium'>{post.date}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl lg:text-[23px] text-textColor font-medium mb-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-sm lg:text-base font-medium text-secondaryTextColor leading-relaxed line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-2">
                      <span className="text-primary text-sm lg:text-base font-medium flex items-center gap-2">
                        <span>Read more</span>
                        <img src={rightArrow} alt="arrow" className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
