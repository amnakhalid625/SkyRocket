import React from 'react';
import navArrow from '../assets/images/NavArrow.svg';
import BlogCards from '../components/BlogCard';
import Articles from '../components/Articles';
import BlogCategoryFilter from '../components/ButtonLine';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const BlogsDetail = () => {
  const customArticlesData = [
    {
      id: 1,
      title: "Top 10 Digital Marketing Trends for Detroit Businesses in 2025",
      category: "Digital Marketing",
      date: "June 3, 2025",
      excerpt: "Stay ahead of the competition with these cutting-edge digital marketing strategies specifically designed for Detroit businesses. Learn what's working now.",
      image: "https://cdn.prod.website-files.com/6807e00132c9ff6c11834b85/680fccd0b2b581e2890f7dbd_Skyrocket%20Business%20(1234%20x%201280%20px).jpg",
      link: "/blog/digital-marketing-trends-detroit-2025"
    },
    {
      id: 2,
      title: "How to Optimize Your Website for Local SEO in Detroit",
      category: "SEO",
      date: "June 1, 2025",
      excerpt: "Master local SEO techniques to dominate Detroit search results. Practical tips to get your business found by local customers searching online.",
      image: "https://cdn.prod.website-files.com/6807e00132c9ff6c11834b85/680fde25e7020eeba9df73d0_Skyrocket%20Business%20%20(990%20x%20900%20px).jpg",
      link: "/blog/local-seo-optimization-detroit"
    },
    {
      id: 3,
      title: "E-commerce Website Development: Complete Guide for Detroit Retailers",
      category: "E-commerce",
      date: "May 30, 2025",
      excerpt: "Transform your Detroit retail business with a powerful e-commerce website. Learn the essential features and strategies for online success.",
      image: "https://cdn.prod.website-files.com/6807e00132c9ff6c11834b85/6810e79c8309d2dc3b8b419a_Skyrocket%20Business%20%20(990%20x%20900%20px).png",
      link: "/blog/ecommerce-development-guide-detroit"
    },
    {
      id: 4,
      title: "Social Media Marketing Strategies That Work for Detroit Businesses",
      category: "Social Media",
      date: "May 28, 2025",
      excerpt: "Boost your Detroit business with proven social media marketing strategies. Connect with your local community and grow your brand online.",
      image: "https://cdn.prod.website-files.com/6807e00132c9ff6c11834b85/6810fbb665d1ed7e1c501249_Skyrocket%20Business%20%20(990%20x%20900%20px)%20(1).png",
      link: "/blog/social-media-marketing-detroit-businesses"
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="px-6 sm:px-10 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center opacity-100 mb-16">
              <div className="inline-block bg-secondary text-textColor px-4 py-[5px] rounded-full text-[12px] font-semibold uppercase tracking-wider mb-4 transform transition-all duration-300 hover:scale-105">
                skyrocket business blog
              </div>

              <div className="max-w-5xl mx-auto mb-4">
                <h1 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-[#0a0d14] leading-tight tracking-tight transition-all duration-300 hover:text-opacity-90">
                  Stay Ahead with Expert Web Design, Marketing Insights & Strategies for Detroit Businesses
                </h1>
              </div>

              <div className="max-w-4xl mx-auto mb-8">
                <p className="text-base md:text-lg text-[#525866] leading-relaxed font-normal transition-all duration-300 hover:text-opacity-90">
                  Welcome to the Skyrocket Business Blog, where we share the latest web design, marketing trends, tips, and strategies tailored for businesses in Detroit. From SEO and social media management to content creation and web development, our blog provides valuable insights to help your business grow and succeed online.
                </p>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-4">
                <a
                  href="/contact-us"
                  className="group flex items-center space-x-2 bg-secondary hover:bg-hoverColor text-tetxtColor px-6 py-3 rounded-full transition-all duration-300 ease-in-out font-medium min-w-[160px] justify-center"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    Get in Touch
                  </span>
                  <img
                    src={navArrow}
                    alt="navigation arrow"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 filter brightness-0 invert"
                  />
                </a>
                <a
                  href="/services"
                  className="border border-primary hover:border-[#1a0bcd] text-primary hover:text-[#1a0bcd] hover:bg-[#f4f7fb] font-medium py-3 px-6 rounded-full transition-all duration-300 min-w-[160px] text-center"
                >
                  View Services
                </a>
              </div>
            </div>

            {/* Blog Content Section */}
            <div className="space-y-12">
              <div className="mb-12">
                <BlogCards />
              </div>
              <div className="mb-12">
                <BlogCategoryFilter />
              </div>
              <div>
                <Articles blogPosts={customArticlesData} />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section className="px-4 sm:px-6 md:padding-global pb-12 sm:pb-16 md:pb-20 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <Contact
              headingText="Unleash Your Brand's Potential with Skyrocket!"
              secondButtonText="View Services"
            />
          </div>
        </section>

        <Footer />
      </section>
    </>
  );
};

export default BlogsDetail;
