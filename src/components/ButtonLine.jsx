import React from 'react';
import { Link } from 'react-router-dom';

const BlogCategoryFilter = () => {
  const categories = [
    { title: "All", to: "/blog", current: true },
    { title: "Website Design", to: "/blog-category/website-design" },
    { title: "Digital Marketing", to: "/blog-category/digital-marketing" },
    { title: "Social Media", to: "/blog-category/social-media" },
    { title: "Content Marketing", to: "/blog-category/content-marketing" }
  ];

  return (
    <div className="blog-top-wrap flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-8 w-full">
       <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-textColor mb-4 sm:mb-6 leading-tight">
             Latest Articles
            </h2>
      
      <div className="blog-categories-mega-wrap flex flex-wrap ">
        {categories.map((category, index) => (
          <Link
            key={index}
            title={category.title}
            to={category.to}
            className={`blog-category-pill inline-block px-5 py-3 rounded-xl text-base font-medium transition-colors tracking-tight ${
              category.current 
                ? 'bg-primary text-white' 
                : ' text-textColor hover:text-secondaryTextColor'
            }`}
            aria-current={category.current ? "page" : undefined}
          >
            <div>{category.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCategoryFilter;