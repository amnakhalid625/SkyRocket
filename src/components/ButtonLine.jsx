import React from 'react';

const BlogCategoryFilter = () => {
  const categories = [
    { title: "All", href: "/blog", current: true },
    { title: "Website Design", href: "/blog-category/website-design" },
    { title: "Digital Marketing", href: "/blog-category/digital-marketing" },
    { title: "Social Media", href: "/blog-category/social-media" },
    { title: "Content Marketing", href: "/blog-category/content-marketing" }
  ];

  return (
    <div className="blog-top-wrap flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-8 w-full">
       <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-textColor mb-4 sm:mb-6 leading-tight">
             Latest Articles
            </h2>
      
      <div className="blog-categories-mega-wrap flex flex-wrap ">
        {categories.map((category, index) => (
          <a
            key={index}
            title={category.title}
            href={category.href}
            className={`blog-category-pill inline-block px-5 py-3 rounded-xl text-lg font-medium transition-colors ${
              category.current 
                ? 'bg-primary text-white' 
                : ' text-textColor hover:text-secondaryTextColor'
            }`}
            aria-current={category.current ? "page" : undefined}
          >
            <div>{category.title}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogCategoryFilter;