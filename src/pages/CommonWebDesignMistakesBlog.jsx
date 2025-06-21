import React from 'react';
import { Link } from 'react-router-dom'; 
import { motion } from 'framer-motion'; 
import Articles from '../components/Articles';
import dotIcon from '../assets/images/dot-icon.svg';
import calendarIcon from '../assets/images/calendar-icon.svg';
import mem2 from '../assets/images/member3.webp';
import featureImg from '../assets/images/blog5.jpg';
import Contact from '../components/Contact';

import seoImg from '../assets/images/seo.png';
import seoImgTwo from '../assets/images/seoThree.jpg';
import seoImgThree from '../assets/images/seoTwo.jpg';
import goalImg from '../assets/images/personClean.jpg';
import personClean from '../assets/images/personClean2.jpg';
import addToCart from '../assets/images/addToCard.jpg';
import clutteredImg from '../assets/images/clutteredImg.jpg';
import CTAImg from '../assets/images/CTA.jpg';

const CommonWebDesignMistakesBlog = ({
  // Header section props
  category = "Website Design",
  title = "5 Common Web Design Mistakes and How to Avoid Them in 2025",
  subtitle = "Discover the most frequent web design pitfalls and learn how to create a high-performing website that converts visitors into customers.",

  // Author and date props
  author = {
    name: "Sara Jessica",
    image: mem2
  },
  publishDate = "May 3, 2025",

  // Featured image
  featuredImage = featureImg,

  content = [
    {
      type: "section",
      paragraphs: [
        "In today's digital-first world, your business's website often serves as the first point of contact for potential customers. A well-designed website can grab attention, engage visitors, and turn them into loyal customers. On the flip side, a poorly designed website can drive visitors away in just a few seconds. This is especially true for businesses based in Detroit, where local competition and online presence play a significant role in attracting new clients.",
        "Whether you're a new business owner or rebranding your existing website, avoiding these common web design mistakes is essential for your success. Let's dive into the top 5 web design mistakes and how you can avoid them to ensure your site is both functional and user-friendly. At <LINK to='/about-us'>Skyrocket Business</LINK>, we specialize in helping businesses create sleek, effective websites that avoid these common pitfalls and deliver outstanding results."
      ]
    },
    {
      type: "section",
      heading: "1. Slow Loading Times",
      image: goalImg,
      paragraphs: [
        "<strong>The Problem:</strong> In today's fast-paced digital world, users expect websites to load instantly. According to research, 53% of mobile users abandon a site if it takes longer than 3 seconds to load. Slow load times can frustrate visitors and negatively impact your SEO rankings, making it even harder for people to find you.",
        "Common Culprits for Slow Load Times:"
      ],
      listItems: [
        "Large images",
        "Unoptimized code",
        "Excessive scripts",
        "Slow server response times"
      ],
      subText: "<strong>The Solution:</strong>",
      solutionList: [
        "<strong>Optimize Images:</strong> Use tools like Tiny PNG or Image Optim to compress images without compromising quality. Choose formats like WebP for better compression.",
        "<strong>Lazy Loading:</strong> This allows images and other media to load as users scroll, rather than all at once, improving page speed.",
        "<strong>Minify Your Code:</strong> Clean up your HTML, CSS, and JavaScript using tools like Uglify JS to reduce file sizes and improve performance.",
        "<strong>Reliable Hosting Provider:</strong> Choose a hosting provider with fast server response times and support for CDN (Content Delivery Networks) to speed up delivery across regions."
      ]
    },
    {
      type: "section",
      heading: "2. Poor Navigation",
      image: personClean,
      paragraphs: [
        "<strong>The Problem:</strong> Confusing navigation is one of the top reasons visitors leave a website. If users can't find what they're looking for within a few clicks, they'll likely abandon your site for a competitor's.",
        "Signs of Poor Navigation:"
      ],
      listItems: [
        "Hidden or unclear menu items",
        "Too many navigation options",
        "Inconsistent placement of navigation elements",
        "Lack of breadcrumbs or search functionality"
      ],
      subText: "<strong>The Solution:</strong>",
      solutionList: [
        "<strong>Simplify Your Menu:</strong> Limit primary navigation to 5-7 key items. Use dropdowns sparingly.",
        "<strong>Follow Standard Conventions:</strong> Keep navigation in expected locations (top of page or hamburger menu on mobile).",
        "<strong>Breadcrumb Navigation:</strong> Help users understand their location within your site hierarchy.",
        "<strong>Search Functionality:</strong> Include a visible search bar for users who know exactly what they want."
      ]
    },
    {
      type: "section",
      heading: "3. Lack of Mobile Responsiveness",
      image: addToCart,
      paragraphs: [
        "<strong>The Problem:</strong> With mobile traffic accounting for over 60% of internet users, having a website that doesn't perform well on mobile is a serious issue. Text that's hard to read, buttons too small to tap, and layouts that don't adapt to smaller screens can frustrate mobile users.",
      ],
    
      subText: "<strong>The Solution:</strong>",
      solutionList: [
        "<strong>Responsive Design:</strong> Use frameworks like Bootstrap or CSS Grid to ensure your website adapts to different screen sizes automatically.",
        "<strong>Test Across Devices:</strong> Don't just rely on desktop versions of your site; test on actual mobile devices using browser developer tools or services like BrowserStack.",
        "<strong>Mobile-First Design:</strong> Start designing with mobile users in mind, and then scale up to tablet and desktop versions.",
        "<strong>Optimize Touch Interactions:</strong> Replace hover actions with tap-friendly buttons and ensure all interactive elements are properly sized."
      ]
    },
    {
      type: "section",
      heading: "4. Overloaded or Cluttered Design",
      image: clutteredImg,
      paragraphs: [
        "<strong>The Problem:</strong> When your website is cluttered with too much visual content—such as excessive fonts, animations, and graphics—it can overwhelm your visitors. Instead of guiding the user's eye, a cluttered layout detracts from the core message and distracts from your call to action.",
        "Signs of a Cluttered Design:"
      ],
      listItems: [
        "Too many colors and fonts",
        "Insufficient white space",
        "Overuse of animations and pop-ups",
        "Unclear visual hierarchy"
      ],
      subText: "<strong>The Solution:</strong>",
      solutionList: [
        "<strong>Simplify Your Design:</strong> Use no more than 2-3 primary colors and 1-2 fonts. Stick to a minimalistic design that enhances readability.",
        "<strong>White Space:</strong> Allow your content to breathe by incorporating empty spaces that guide the user's focus to key areas.",
        "<strong>Visual Hierarchy:</strong> Create a clear visual structure using size, contrast, and spacing to help users navigate your site naturally.",
        "<strong>Grid System:</strong> A grid-based layout provides a clean, professional, and organized structure that enhances readability."
      ]
    },
    {
      type: "section",
      heading: "5. Unclear Calls-to-Action (CTAs)",
      image: CTAImg,
      paragraphs: [
        "<strong>The Problem:</strong> A website without clear CTAs can confuse visitors about what action to take next. Whether it's subscribing to your newsletter, making a purchase, or getting in touch, without a clear direction, visitors are less likely to convert.",
        "Common CTA Mistakes:"
      ],
      listItems: [
        "Vague or weak language (e.g., 'Click Here')",
        "Poor visibility or placement",
        "Too many competing CTAs",
        "Lack of contrast with surrounding elements"
      ],
      subText: "<strong>The Solution:</strong>",
      solutionList: [
        "<strong>Clear, Actionable Language:</strong> Use direct and compelling CTA text like 'Get Your Free Quote' or 'Start Your Free Trial'.",
        "<strong>Visually Prominent CTAs:</strong> Make sure your CTAs stand out by using bold fonts and contrasting colors.",
        "<strong>Strategic Placement:</strong> Position CTAs where users naturally look (above the fold, at the end of sections, etc.).",
        "<strong>A/B Testing:</strong> Regularly test different CTA variations to determine which wording, color, and placement yields the highest conversion rate."
      ]
    },
    {
      type: "section",
      heading: "Conclusion",
      paragraphs: [
        "In today's competitive online environment, your website is often the first point of contact with potential customers. Avoiding common web design mistakes like slow load times, poor navigation, lack of mobile responsiveness, cluttered designs, and unclear CTAs can significantly improve user experience and drive better results for your business.",
        "By focusing on simplicity, speed, and ease of navigation, while continuously testing and optimizing your site, you create a user-friendly platform that not only attracts visitors but also encourages them to take action. Whether you're a local Detroit business or a global player, ensuring a smooth, streamlined website experience can make all the difference in keeping visitors engaged and converting them into customers.",
        "At <LINK to='/contact-us'>Skyrocket Business</LINK>, we specialize in creating websites that avoid these common pitfalls, ensuring your online presence is not only visually appealing but also functional, fast, and user-friendly. If you're ready to elevate your website and avoid these mistakes, contact us today!"
      ]
    }
  ],

  // Related articles section
  showRelatedArticles = true
}) => {

  const defaultBlogPosts = [
    {
      id: 1,
      title: "Top SEO Strategies for Detroit Businesses to Gain Local Visibility",
      category: "Digital Marketing",
      date: "April 29, 2025",
      excerpt: "Boost your Detroit business with expert local SEO strategies. Increase visibility, drive traffic, and attract more customers with Skyrocket Business's affordable services.",
      image: seoImg,
      link: "/blog/top-seo-strategies-for-detroit-businesses-to-gain-local-visibility-lf8a2"
    },
    {
      id: 2,
      title: "How a Stunning Website Design Can Boost Your Detroit Business",
      category: "Website Design",
      date: "April 29 2025",
      excerpt: "Discover how a stunning website design can boost your Detroit business. Get a high-converting, user-friendly website that drives results with Skyrocket Business.",
      image: seoImgTwo,
      link: "/blog/seo-best-practices-optimizing-for-search-engines-in-2024"
    },
    {
      id: 3,
      title: "Top SEO Strategies for Detroit Businesses to Gain Local Visibility",
      category: "Digital Marketing",
      date: "April 28, 2025",
      excerpt: "Master local SEO in Detroit and drive more traffic to your business. Skyrocket your online visibility with expert SEO strategies tailored for Detroit companies.",
      image: seoImgThree,
      link: "/blog/top-seo-strategies-for-detroit-businesses-to-gain-local-visibility"
    }
  ];

  // Helper function to replace LINK tags with actual Link components
  const processContent = (text) => {
    if (!text) return '';
    return text.replace(
      /<LINK to="([^"]*)">(.*?)<\/LINK>/g, 
      (match, to, content) => `<LINKCOMPONENT to="${to}">${content}</LINKCOMPONENT>`
    );
  };

  // Helper function to render processed content with Link components
  const renderProcessedContent = (text) => {
    if (!text) return null;
    const parts = text.split(/(<LINKCOMPONENT to="[^"]*">.*?<\/LINKCOMPONENT>|<a [^>]*>.*?<\/a>)/g);
    
    return parts.map((part, index) => {
      const linkMatch = part.match(/<LINKCOMPONENT to="([^"]*)">(.*?)<\/LINKCOMPONENT>/);
      const anchorMatch = part.match(/<a ([^>]*)>(.*?)<\/a>/);
      
      if (linkMatch) {
        const [, to, content] = linkMatch;
        return (
          <Link 
            key={index} 
            to={to} 
            className="text-primary underline hover:underline font-medium"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        );
      } else if (anchorMatch) {
        const [, attrs, content] = anchorMatch;
        const hrefMatch = attrs.match(/href="([^"]*)"/);
        const targetMatch = attrs.match(/target="([^"]*)"/);
        const href = hrefMatch ? hrefMatch[1] : '#';
        const target = targetMatch ? targetMatch[1] : '_self';
        
        return (
          <a
            key={index}
            href={href}
            target={target}
            className="text-primary underline hover:underline font-medium"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        );
      }
      return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />;
    });
  };

  const renderContent = () => {
    return content.map((section, index) => (
      <motion.div 
        key={index} 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {section.heading && (
          <h3 className="text-2xl md:text-3xl lg:text-[40px] font-light text-textColor mb-6 tracking-tight leading-tight">
            <strong>{section.heading}</strong>
          </h3>
        )}

        {/* Show image right after heading if it exists */}
        {section.image && (
          <div className="my-6 rounded-xl overflow-hidden ">
            <img
              src={section.image}
              alt={section.heading}
              className="w-full h-auto max-h-[350px] md:max-h-[400px] object-cover"
              loading="lazy"
            />
          </div>
        )}

        {section.paragraphs && section.paragraphs.map((paragraph, pIndex) => (
          <p 
            key={`p-${pIndex}`} 
            className="mb-6 text-secondaryTextColor font-medium text-base md:text-lg leading-relaxed"
          >
            {renderProcessedContent(processContent(paragraph))}
          </p>
        ))}

        {section.listItems && (
          <ul className="list-disc pl-6 mb-4 space-y-3 text-secondaryTextColor font-medium text-base md:text-lg">
            {section.listItems.map((item, lIndex) => (
              <li key={`li-${lIndex}`} className="leading-relaxed">
                {renderProcessedContent(processContent(item))}
              </li>
            ))}
          </ul>
        )}

        {section.subText && (
          <p className="text-secondaryTextColor font-medium text-base md:text-lg mb-4">
            {renderProcessedContent(processContent(section.subText))}
          </p>
        )}

        {section.solutionList && (
          <ul className="list-disc pl-6 mb-8 space-y-3 text-secondaryTextColor font-medium text-base md:text-lg">
            {section.solutionList.map((item, lIndex) => (
              <li key={`solution-${lIndex}`} className="leading-relaxed">
                {renderProcessedContent(processContent(item))}
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    ));
  };

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="inline-block px-4 py-1 bg-secondary rounded-full text-sm font-medium text-textColor mb-4"
            whileHover={{ scale: 1.05 }}
          >
            {category}
          </motion.div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-textColor mb-6 max-w-5xl mx-auto mt-5 leading-wider tracking-tight">
            {title}
          </h1>
          <p className="text-lg text-secondaryTextColor font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Author & Date */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-6 mb-12">
            <div className="flex items-center space-x-3 mb-4 sm:mb-0">
              <img
                src={author.image}
                alt={author.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                loading="lazy"
              />
              <span className="text-secondaryTextColor font-medium">{author.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={dotIcon} alt="dot" className="hidden sm:block" loading="lazy" />
              <img src={calendarIcon} alt="calendar" className="h-6 w-6" loading="lazy" />
              <span className="font-medium text-secondaryTextColor text-sm sm:text-base">
                {publishDate}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div 
          className="mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={featuredImage}
            alt={title}
            className="w-full h-auto sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] object-cover rounded-xl md:rounded-2xl"
            loading="lazy"
          />
        </motion.div>

        {/* Blog Content */}
        <div className="max-w-3xl mx-auto px-2 sm:px-0">
          {renderContent()}
        </div>

        {/* Related Articles Section */}
        {showRelatedArticles && (
          <motion.div 
            className="mt-12 md:mt-16 max-w-[90rem] px-4 sm:px-4 lg:px-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='text-3xl md:text-[56px] font-medium text-textColor mb-6 sm:mb-8 md:mb-10 leading-tight tracking-tight px-2'>
              Related Articles
            </h2>
            <div className="px-2 sm:px-0">
              <Articles blogPosts={defaultBlogPosts} />
            </div>
          </motion.div>
        )}
      </div>

      <Contact headingText="Unleash Your Brand's Potential with Catalysty!" />
    </>
  );
};

export default CommonWebDesignMistakesBlog;