import React from 'react';
import { Link } from 'react-router-dom'; 
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { motion } from 'framer-motion'; 
import Articles from '../components/Articles';
import dotIcon from '../assets/images/dot-icon.svg';
import calendarIcon from '../assets/images/calendar-icon.svg';
import mem2 from '../assets/images/member3.webp';
import featureImg from '../assets/images/blogCard1.avif';

import seoImg from '../assets/images/blog3.jpg';
import seoImgTwo from '../assets/images/blog2.jpg';
import seoImgThree from '../assets/images/seoTwo.jpg';
import SeofeatureImg from '../assets/images/seoFeature.avif';
import optimizationImg from '../assets/images/optimization.jpg';

const SEOWebDesignBlog = ({
  // Header section props
  category = "Digital Marketing",
  title = "The Role of Search Engine Optimization in Web Design: Why It Matters in 2025",
  subtitle = "Learn how integrating SEO with web design can boost your online visibility and business growth.",

  // Author and date props
  author = {
    name: "Sara Jessica",
    image: mem2
  },
  publishDate = "May 10, 2025",

  // Featured image
  featuredImage = featureImg,

  content = [
    {
      type: "section",
      paragraphs: [
        "In today's digital world, a great-looking website isn't enough. If your website doesn't show up on Google, you're missing out on customers—plain and simple. That's where <strong>Search Engine Optimization (SEO)</strong> comes in. When SEO is baked into the web design process from the start, your site becomes more than just eye candy—it becomes a powerful marketing tool that attracts traffic, keeps users engaged, and drives conversions.",
        "In this post, we'll break down <strong>why SEO should be part of your web design strategy</strong>, what key SEO elements to include, and how this combination helps your business grow online.",
      ]
    },
    {
      type: "section",
      heading: "What Is SEO in Web Design?",
      image: optimizationImg,
      paragraphs: [
        "SEO in web design means building your site so that <strong>search engines like Google can find, understand, and rank it easily.</strong> This includes everything from the site structure and page speed to mobile responsiveness and keyword-rich content.",
        "Too often, SEO is treated as an afterthought—tacked on once a website is already live. But this approach can lead to <strong>costly rework and poor performance.</strong> The smarter move? Design with SEO from day one."
      ]
    },
    {
      type: "section",
      heading: "Why SEO Matters in Web Design",
      subSections: [
        {
          title: "1. Boosts Organic Traffic",
          content: "Most people start their online journey with a Google search. If your site is optimized, it will appear higher in search results, which means more people clicking through to your business without you having to pay for ads."
        },
        {
          title: "2. Improves User Experience (UX)",
          content: "Search engines love websites that load fast, look great on mobile, and are easy to navigate. SEO and UX go hand in hand—by improving one, you naturally improve the other"
        },
        {
          title: "3. Saves on Marketing Costs",
          content: "Organic traffic is free traffic. Investing in SEO during the design phase means you'll <strong>spend less on paid ads</strong> later—and your website will still bring in leads."
        },
        {
          title: "4. Helps Google Understand Your Site",
          content: "A clean, SEO-friendly structure makes it easier for search engine bots to crawl and index your site. That means your pages get ranked faster and more accurately."
        },
        {
          title: "5. Delivers Long-Term Results",
          content: "Unlike ads that stop when the budget runs out, SEO keeps working in the background. A well-optimized website can <strong>generate traffic for months or years</strong> to come."
        }
      ]
    },
    {
      type: "section",
      heading: "Key SEO Features Every Web Design Should Include",
      image: SeofeatureImg,
      subSections: [
        {
          title: "1. Mobile-Responsive Design",
          content: [
            "Google now ranks mobile-friendly websites first. Your site should look and work great on any device—phone, tablet, or desktop.",
            "<strong>Tip:</strong> Use flexible layouts, scalable images, and responsive breakpoints to adapt to all screen sizes."
          ]
        },
        {
          title: "2. Fast Loading Speeds",
          content: [
            "A slow site can kill your rankings. To speed things up:",
            {
              listItems: [
                "Compress images using WebP or SVG",
                "Minify CSS and JavaScript",
                "Enable lazy loading",
                "Use a CDN (Content Delivery Network)"
              ]
            }
          ]
        },
        {
          title: "3. Clean URL Structure",
          content: [
            "URLs should be simple, keyword-rich, and human-friendly.",
            "<strong>Bad:</strong> www.example.com/page?id=123",
            "<strong>Good:</strong> www.example.com/seo-web-design"
          ]
        },
        {
          title: "4. Easy-to-Navigate Site Structure",
          content: [
            "Logical menus, internal linking, and a clear content hierarchy help users—and search engines—move through your site easily.",
            "<strong>Pro Tip:</strong> Use a 'silo structure' to group related content for better relevance and rankings."
          ]
        },
        {
          title: "5. On-Page SEO Essentials",
          content: [
            "Each page should be built with these in mind:",
            {
              listItems: [
                "Title tags with relevant keywords (under 60 characters)",
                "Compelling meta descriptions",
                "Proper header tags (H1, H2, etc.)",
                "Image alt text",
                "Naturally placed keywords (no stuffing)"
              ]
            }
          ]
        },
        {
          title: "6. Schema Markup (Structured Data)",
          content: [
            "Using schema helps your content stand out in search results with rich snippets like reviews, FAQs, and ratings.",
            "<strong>Tool to use:</strong> Google's Rich Results Test"
          ]
        },
        {
          title: "7. HTTPS & Accessibility",
          content: [
            "A secure (HTTPS) and accessible site is not just good practice—it's expected. Following WCAG guidelines also improves your site's usability and can give you a ranking boost."
          ]
        }
      ]
    },
    {
      type: "section",
      heading: "Why SEO + Web Design Teams Should Work Together",
      paragraphs: [
        "When designers, developers, and SEO specialists collaborate from the beginning, the results are far better. Here's why:"
      ],
      listItems: [
        "<strong>Designers</strong> create layouts that boost engagement",
        "<strong>Developers</strong> ensure the code is clean and fast",
        "<strong>SEO experts</strong> guide keyword strategies and content architecture"
      ],
      subText: "It's a team effort—and it's how high-performing websites are built."
    },
    {
      type: "section",
      heading: "Final Thoughts: Build Websites That Perform, Not Just Look Good",
      paragraphs: [
        "In 2025, it's no longer enough to have a beautiful website. You need a site that's built to <strong>rank, convert, and grow your business.</strong>",
        "When SEO is built into your web design from the ground up, your site becomes a real business asset—not just a digital brochure"
      ]
    },
    {
      type: "section",
      heading: "Let's Build Your SEO-Optimized Website",
      paragraphs: [
        "At <strong>Skyrocket Business</strong>, we don't just design beautiful websites—we build <strong>high-converting, search engine-friendly platforms</strong> that help your business stand out in Detroit and beyond.",
        "Want a site that looks great and brings in leads? Let's talk about your next web project."
      ]
    }
  ],

  // Related articles section
  showRelatedArticles = true
}) => {

  const defaultBlogPosts = [
    {
      id: 1,
      title: "Why Choose a Nearby Web Design Business in Detroit?",
      category: "Website Design",
      date: "May 10, 2025",
      excerpt: "Discover 10 powerful reasons to choose a Detroit-based web design company. From local insight to faster support, learn how Skyrocket Business can help grow your online presence.",
      image: seoImg,
      link: "/blog/why-choose-a-nearby-web-design-business-in-detroit"
    },
    {
      id: 2,
      title: "The Importance of Mobile-First Design for Local Businesses in 2025",
      category: "Website Design",
      date: "May 13, 2025",
      excerpt: "Discover why mobile-first web design is crucial for local businesses in 2025. Learn how it boosts SEO, enhances user experience, and drives real-world results—especially for Detroit companies.",
      image: seoImgTwo,
      link: "/blog/the-importance-of-mobile-first-design-for-local-businesses-in-2025"
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

  const renderSubSections = (subSections) => {
    return subSections.map((subsection, index) => (
      <div key={index} className="mb-8">
        <h4 className="text-xl md:text-2xl font-medium text-textColor mb-3">
          {subsection.title}
        </h4>
        {Array.isArray(subsection.content) ? (
          subsection.content.map((content, i) => {
            if (typeof content === 'string') {
              return (
                <p key={i} className="mb-4 text-secondaryTextColor font-medium text-lg leading-relaxed">
                  {renderProcessedContent(processContent(content))}
                </p>
              );
            } else if (content.listItems) {
              return (
                <ul key={i} className="list-disc pl-6 mb-4 space-y-2 text-secondaryTextColor font-medium text-lg">
                  {content.listItems.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {renderProcessedContent(processContent(item))}
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          })
        ) : (
          <p className="mb-4 text-secondaryTextColor font-medium text-lg leading-relaxed">
            {renderProcessedContent(processContent(subsection.content))}
          </p>
        )}
      </div>
    ));
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
          <div className="my-6 rounded-xl overflow-hidden shadow-lg">
            <img
              src={section.image}
              alt={section.heading}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {section.paragraphs && section.paragraphs.map((paragraph, pIndex) => (
          <p 
            key={`p-${pIndex}`} 
            className="mb-6 text-secondaryTextColor font-medium text-lg leading-relaxed"
          >
            {renderProcessedContent(processContent(paragraph))}
          </p>
        ))}

        {section.subSections && renderSubSections(section.subSections)}

        {section.listItems && (
          <ul className="list-disc pl-6 mb-8 space-y-3 text-secondaryTextColor font-medium text-lg">
            {section.listItems.map((item, lIndex) => (
              <li key={`li-${lIndex}`} className="leading-relaxed">
                {renderProcessedContent(processContent(item))}
              </li>
            ))}
          </ul>
        )}

        {section.subText && (
          <p className="text-secondaryTextColor font-medium text-lg mb-6">
            {renderProcessedContent(processContent(section.subText))}
          </p>
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
              />
              <span className="text-secondaryTextColor font-medium">{author.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={dotIcon} alt="dot" className="hidden sm:block" />
              <img src={calendarIcon} alt="calendar" className="h-6 w-6" />
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
            className="w-full h-auto sm:h-80 md:h-96 lg:h-[31.25rem] object-cover rounded-[24px] md:rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Blog Content */}
        <div className="max-w-3xl mx-auto px-2 sm:px-0">
          {renderContent()}
        </div>

        {/* Related Articles Section */}
        {showRelatedArticles && (
          <motion.div 
            className="mt-16 max-w-[90rem] px-4 sm:px-4 lg:px-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='text-3xl p-4 sm:text-4xl md:text-[56px] font-medium text-textColor mb-8 sm:mb-10 leading-tight tracking-tight'>
              Related Articles
            </h2>
            <div className="">
              <Articles blogPosts={defaultBlogPosts} />
            </div>
          </motion.div>
        )}
      </div>

      <Contact headingText="Unleash Your Brand's Potential with Catalysty!" />
      <Footer />
    </>
  );
};

export default SEOWebDesignBlog;