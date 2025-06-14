import React from 'react';
import { Link } from 'react-router-dom'; 
import { motion } from 'framer-motion'; 
import Articles from '../components/Articles';
import dotIcon from '../assets/images/dot-icon.svg';
import calendarIcon from '../assets/images/calendar-icon.svg';
import mem6 from '../assets/images/member6.webp';
import featureImg from '../assets/images/seoFour.jpg';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import seoImg from '../assets/images/seoThree.jpg';
import seoImgTwo from '../assets/images/webTrend.jpg';
import seoImgThree from '../assets/images/blogCard1.avif';
import groupImg from '../assets/images/topSeoImg.jpeg';

const MobileFriendlyWebsiteBlog = ({
  // Header section props
  category = "Website Design",
  title = "Why Every Detroit Business Needs a Mobile-Friendly Website in 2025",
  subtitle = "Email marketing remains one of the most effective ways to engage with your audience. Know our strategy to reach millions of inboxes.",

  // Author and date props
  author = {
    name: "Nina Roberts",
    image: mem6
  },
  publishDate = "Apr 30, 2025",

  // Featured image
  featuredImage = featureImg,

  content = [
    {
      type: "section",
      paragraphs: [
        "<strong>Your website is often the first impression a customer will have of your Detroit business.</strong> In today's fast-paced, mobile-driven world, ensuring that your site is mobile-friendly is no longer optional — it's a necessity. In fact, as mobile usage continues to rise, businesses that fail to adapt to mobile devices risk losing customers and credibility. Whether you're a small local shop or a larger business in Detroit, having a mobile-friendly website is essential to staying competitive in 2025.",
        "In this post, we'll dive into the reasons why your <LINK to=\"/services/detroit-website-design-and-development\">Detroit business needs a mobile-friendly website</LINK>, and how this simple update can have a significant impact on your online success."
      ]
    },
    {
      type: "section",
      heading: "Why Mobile-Friendliness is a Must for Detroit Businesses in 2025",
      paragraphs: [
        "Mobile usage has grown exponentially over the past decade, and it's not slowing down. <strong>In fact, mobile devices are responsible for nearly 60% of all internet traffic worldwide.</strong> This shift in how people browse the internet means your website needs to work seamlessly on smartphones, tablets, and other mobile devices — or risk losing potential customers.",
        "Here's why having a mobile-friendly website in Detroit is more important than ever:"
      ],
      listItems: [
        "<strong>The Rise of Mobile Search:</strong> In Detroit and beyond, people increasingly use their smartphones to search for products and services. From finding local restaurants to searching for a trusted plumber, mobile searches are becoming the norm. If your website isn't optimized for mobile users, you're missing out on a massive chunk of potential customers who are actively searching for services you offer.",
        "<strong>Improved User Experience Equals Higher Conversions:</strong> Mobile-friendly websites aren't just easier to navigate; they also enhance the user experience. A responsive design ensures that your visitors can find what they need quickly, without frustrating zooming or scrolling. The smoother the experience, the more likely visitors will stay on your site, engage with your content, and ultimately take action — whether it's booking a service, making a purchase, or calling your business.",
        "<strong>Boost Your Google Rankings:</strong> Google's algorithms now prioritize mobile-friendly websites. If your site is optimized for mobile, it will rank higher in search results, making it easier for potential customers in Detroit to find you. Google's Mobile-First Index means that the mobile version of your website is considered the primary version when it comes to rankings. If your website is not mobile-friendly, it could hurt your SEO efforts.",
        "<strong>Capture Local Customers On-The-Go:</strong> Local businesses in Detroit benefit immensely from mobile-friendly websites. With a mobile-optimized site, you can capture local traffic more effectively — especially people who are searching for services while on the go. Having a mobile-friendly site means your business can appear in front of local customers when they need you most, increasing the chances of conversions.",
        "<strong>Mobile Users Expect Quick Loading Times:</strong> Did you know that 53% of mobile users abandon websites that take longer than three seconds to load? Speed matters, especially on mobile devices where internet connections can be less reliable. If your website is slow to load or doesn't display properly on mobile, you risk frustrating your users and driving them straight to your competitors.",
        "<strong>Building Trust with Your Audience:</strong> A mobile-friendly website shows your customers that you're up-to-date and care about their experience. When a visitor arrives on your site and finds it's easy to navigate, trustworthy, and professional, it enhances your credibility. This trust-building is vital for customer retention and ensuring that your Detroit-based business stands out in a crowded marketplace."
      ],
      showImage: true
    },
    {
      type: "section",
      heading: "How Skyrocket Business Can Help You Create a Mobile-Friendly Website",
      paragraphs: [
        "At <LINK to=\"/services/detroit-website-design-and-development\">Skyrocket Business</LINK>, we understand that your website is one of the most important tools for growing your Detroit business. Our expert team specializes in designing clean, fast, and mobile-friendly websites that not only look stunning but are built to convert. Whether you're a small local business or a larger company, we ensure your website is fully optimized for mobile devices to give you a competitive edge in the Detroit market.",
        "Here's how we help businesses like yours:"
      ],
      listItems: [
        "<strong>Mobile Optimization:</strong> We ensure your website is designed to look and perform flawlessly on any device.",
        "<strong>Improved User Experience:</strong> Our team focuses on user-friendly design elements to keep visitors engaged.",
        "<strong>Faster Load Times:</strong> We make sure your website loads quickly on all devices, preventing users from bouncing.",
        "<strong>Local SEO:</strong> Our SEO strategies ensure your website ranks well in local searches, bringing more customers to your business.",
      ]
    }
  ],

  // Footer/CTA section
  conclusion = {
    heading: "Don't Let Your Business Get Left Behind — Go Mobile-Friendly Today!",
    paragraphs: [
      "In 2025, a mobile-friendly website is a must for Detroit businesses who want to stay relevant and visible to their customers. If you want your website to work seamlessly across all devices, boost your local SEO, and ultimately drive more conversions, Skyrocket Business is here to help.",
      "<LINK to=\"/contact-us\">Ready to take your Detroit business to the next level?</LINK> Let's make sure your website is mobile-friendly and optimized for success. Contact Skyrocket Business today to get started with a mobile-friendly website that works for you!"
    ]
  },

  // Related articles section
  showRelatedArticles = true
}) => {

  const defaultBlogPosts = [
    {
      id: 1,
      title: "How a Stunning Website Design Can Boost Your Detroit Business",
      category: "Website Design",
      date: "Apr 29, 2025",
      excerpt: "Discover how a stunning website design can boost your Detroit business. Get a high-converting, user-friendly website that drives results with Skyrocket Business. ",
      image: seoImg,
      link: "/blog/seo-best-practices-optimizing-for-search-engines-in-2024"
    },
    {
      id: 2,
      title: "Top Web Design Trends in 2025: What Every Business Needs to Know",
      category: "Website Design",
      date: "Feb 5, 2025",
      excerpt: "Stay ahead in 2025 with the top web design trends. Discover AI integration, 3D elements, multilingual designs & more to boost engagement & business growth.",
      image: seoImgTwo,
      link: "/blog/top-web-design-trends-in-2025-what-every-business-needs-to-know"
    },
    {
      id: 3,
      title: "Understanding User Experience (UX) and Its Impact on Conversion Rates",
      category: "Digital Marketing",
      date: "May 14, 2025",
      excerpt: "Learn how user experience (UX) design influences conversion rates and why it's critical for your Detroit business website. Improve UX, boost trust, and increase sales. ",
      image: seoImgThree,
      link: "/blog/understanding-user-experience-ux-and-its-impact-on-conversion-rates"
    }
  ];

  // Helper function to replace LINK tags with actual Link components
  const processContent = (text) => {
    return text.replace(
      /<LINK to="([^"]*)">(.*?)<\/LINK>/g, 
      (match, to, content) => `<LINKCOMPONENT to="${to}">${content}</LINKCOMPONENT>`
    );
  };

  // Helper function to render processed content with Link components
  const renderProcessedContent = (text) => {
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

        {section.paragraphs && section.paragraphs.map((paragraph, pIndex) => (
          <p 
            key={`p-${pIndex}`} 
            className="mb-6 text-secondaryTextColor font-medium text-lg leading-relaxed"
          >
            {renderProcessedContent(processContent(paragraph))}
          </p>
        ))}

        {section.listItems && (
          <ul className="list-disc pl-6 mb-8 space-y-3 text-secondaryTextColor font-medium text-lg">
            {section.listItems.map((item, lIndex) => (
              <li key={`li-${lIndex}`} className="leading-relaxed">
                {renderProcessedContent(processContent(item))}
              </li>
            ))}
          </ul>
        )}

        {section.showImage && (
          <div className="my-8 rounded-xl overflow-hidden shadow-lg">
            <img
              src={groupImg}
              alt="Mobile-friendly website importance"
              className="w-full h-auto object-cover"
            />
          </div>
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

          {/* Conclusion Section */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl lg:text-[40px] font-light text-textColor mb-6 leading-snug tracking-tight">
              <strong>{conclusion.heading}</strong>
            </h3>
            {conclusion.paragraphs.map((paragraph, index) => (
              <p key={`conclusion-${index}`} className="mb-6 text-secondaryTextColor font-medium text-lg leading-relaxed">
                {renderProcessedContent(processContent(paragraph))}
              </p>
            ))}
          </motion.div>
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

export default MobileFriendlyWebsiteBlog;