import React from 'react'
import dotIcon from '../assets/images/dot-icon.svg';
import calendarIcon from '../assets/images/calendar-icon.svg';
import rightArrow from '../assets/images/arrow3.svg';

const Articles = ({ 
  blogPosts = [], 
  gridCols = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  showCategory = true,
  showDate = true,
  showExcerpt = true,
  showReadMore = true,
  imageHeight = "h-64 sm:h-72  lg:h-80 xl:h-96"
}) => {

  // Default blog posts if none provided
  const defaultBlogPosts = [
    {
      id: 1,
      title: "Understanding User Experience (UX) and Its Impact on Conversion Rates",
      category: "Website Design",
      date: "May 14, 2025",
      excerpt: "Learn how user experience (UX) design influences conversion rates and why it's critical for your Detroit business website. Improve UX, boost trust, and increase sales.",
      image: "https://cdn.prod.website-files.com/6807e00132c9ff6c11834b85/682379ed2476cb295f1d5da3_User%20Experience%20(UX).jpg",
      link: "/blog/understanding-user-experience-ux-and-its-impact-on-conversion-rates"
    },
    {
      id: 2,
      title: "The Importance of Mobile-First Design for Local Businesses in 2025",
      category: "Website Design",
      date: "May 13, 2025",
      excerpt: "Discover why mobile-first web design is crucial for local businesses in 2025. Learn how it boosts SEO, enhances user experience, and drives real-world results—especially for Detroit companies.",
      image: "https://cdn.prod.website-files.com/6807e00132c9ff6c11834b85/68235ebbadbdedbcd82a4d2a_Mobile-First%20Web%20Design.jpg", // You can replace with actual image
      link: "/blog/the-importance-of-mobile-first-design-for-local-businesses-in-2025"
    },
    {
      id: 3,
      title: "Why Choose a Nearby Web Design Business in Detroit?",
      category: "Website Design",
      date: "May 12, 2025",
      excerpt: "Discover 10 powerful reasons to choose a Detroit-based web design company. From local insight to faster support, learn how Skyrocket Business can help grow your online presence.",
      image: "https://cdn.prod.website-files.com/6807e00132c9ff6c11834b85/681f75ea7d041389f31db2ca_web-design-website-coding-concept.jpg", // You can replace with actual image
      link: "/blog/why-choose-a-nearby-web-design-business-in-detroit"
    }
  ];

  // Use provided blog posts or fall back to default
  const postsToRender = blogPosts.length > 0 ? blogPosts : defaultBlogPosts;

  return (
    <div className={`grid ${gridCols} gap-4`}>
      {postsToRender.map((post) => (
        <div
          key={post.id}
          className="bg-white flex flex-col h-full"
        >
          <a href={post.link} className="group text-decoration-none flex flex-col h-full">
            {/* Image Container */}
            <div className={`w-full overflow-hidden rounded-[24px] mb-3 ${imageHeight}`}>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-[24px]"
              />
            </div>

            {/* Category and Date */}
            {(showCategory || showDate) && (
              <div className="flex items-center text-sm text-gray-500 mb-2">
                {showCategory && (
                  <>
                    <span className="text-gray-600">{post.category}</span>
                    {showDate && <img src={dotIcon} alt="dot" className="mx-2 w-1 h-1" />}
                  </>
                )}
                {showDate && (
                  <div className="flex items-center">
                    <img src={calendarIcon} alt="Date" className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                )}
              </div>
            )}

            {/* Content */}
            <div className="flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                {post.title}
              </h3>
              {showExcerpt && (
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-3 flex-grow">
                  {post.excerpt}
                </p>
              )}
              {showReadMore && (
                <div className="mt-auto pt-2">
                  <span className="text-blue-600 text-sm font-medium flex items-center gap-2">
                    <span>Read more</span>
                    <img src={rightArrow} alt="arrow" className="w-4 h-4" />
                  </span>
                </div>
              )}
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}

export default Articles