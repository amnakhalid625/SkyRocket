import React from 'react';

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
    <div className="opacity-100">
      <a
        href={link}
        className="group block text-[#525866] no-underline h-full transition-all duration-300 hover:scale-[1.02]"
      >
        <div className="overflow-hidden rounded-[24px] mb-4 relative">
          <img
            src={imageUrl}
            loading="eager"
            alt={title}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            style={{
              transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              height: '300px'
            }}
          />
        </div>
        
        <div className="flex items-center gap-2 mb-3 text-sm text-[#525866]">
          <div className="font-medium">{category}</div>
          <img
            src="https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834ba6_Ellipse%201%20(2).svg"
            alt=""
            className="w-1 h-1"
          />
          <div className="flex items-center gap-1">
            <img
              src="https://cdn.prod.website-files.com/6807e00032c9ff6c11834a8f/6807e00132c9ff6c11834b7c_Calendar%20(4).svg"
              alt="Date"
              className="w-3.5 h-3.5"
            />
            <div>{date}</div>
          </div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-textColor text-xl md:text-4xl font-medium mb-3 leading-tight group-hover:text-[#240cf2] transition-colors duration-300">
            {title}
          </h2>
          
          {description && (
            <div>
              <p className="text-secondaryTextColor text-base leading-relaxed line-clamp-2">
                {description}
              </p>
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

const BlogCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
      {/* First column - Takes 3/5 width on large screens */}
      <div className="lg:col-span-3 opacity-100">
        <BlogCard
          imageUrl="https://cdn.prod.website-files.com/6807e00132c9ff6c11834b85/681f81d700aa5aab28194664_SEO.avif"
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
          imageUrl="https://cdn.prod.website-files.com/6807e00132c9ff6c11834b85/682379ed2476cb295f1d5da3_User%20Experience%20(UX).jpg"
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