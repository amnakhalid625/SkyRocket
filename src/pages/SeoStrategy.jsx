import React from 'react';
import { Link } from 'react-router-dom'; 
import { motion } from 'framer-motion'; 
import Articles from '../components/Articles';
import dotIcon from '../assets/images/dot-icon.svg';
import calendarIcon from '../assets/images/calendar-icon.svg';
import mem2 from '../assets/images/member3.webp';
import featureImg from '../assets/images/seo.png';
import Contact from '../components/Contact';

import seoImg from '../assets/images/blog2.jpg';
import seoImgTwo from '../assets/images/rightWebDesingImg.jpg';
import seoImgThree from '../assets/images/blogCard1.avif';
import groupImg from '../assets/images/topSeoImg.jpeg';

const SeoStrategy = ({
  // Header section props
  category = "Digital Marketing",
  title = "Top SEO Strategies for Detroit Businesses to Gain Local Visibility",
  subtitle = "Boost your Detroit business with expert local SEO strategies. Increase visibility, drive traffic, and attract more customers with Skyrocket Business's affordable services.",

  // Author and date props
  author = {
    name: "Sarah Davis",
    image: mem2
  },
  publishDate = "Apr 29, 2025",

  // Featured image
  featuredImage = featureImg,

  content = [
    {
      type: "section",
      paragraphs: [
        "SEO isn't just about climbing the search rankings — it's about putting your business in front of the right people at the right time. If you want your Detroit business to stand out, <strong>local SEO</strong> is the key. It's about ensuring your website gets found by potential customers in your neighborhood, and <strong>Skyrocket Business</strong> is here to make that happen.",
        "In this post, we'll walk you through the best local SEO strategies that can help you get noticed by your target audience in Detroit. From optimizing your Google My Business profile to crafting content that resonates with your community, these strategies are designed to get results."
      ]
    },
    {
      type: "section",
      heading: "What is Local SEO?",
      paragraphs: [
        "<LINK to=\"/services/search-engine-optimization\">Local SEO</LINK> is the secret to getting your business seen in local searches. When people in Detroit search for services or products that you offer, you want to make sure your business is the first one they find. Local SEO involves targeting your online presence to rank higher in searches that are geographically relevant.",
        "For example, when someone in Detroit searches for 'best pizza in Detroit' or 'top electricians near me,' local SEO ensures your business pops up in their results. It's all about reaching the people who are actively looking for your services, right in your area."
      ]
    },
    {
      type: "section",
      heading: "Why Local SEO is Essential for Detroit Businesses",
      paragraphs: [
        "In Detroit, a bustling city full of competition, getting noticed can be tough. But with local SEO, you're not just another business in the crowd — you're the one your potential customers will find. Here's why local SEO is a must for your Detroit business:",
      ],
      listItems: [
        "<strong>Be Where Your Customers Are: </strong> When your business shows up in local search results, you're making sure you're found by the people who matter the most — those in your neighborhood who are looking for services just like yours.",
        "<strong>Trust Is Built Locally:</strong> Customers are more likely to trust a business that they can easily find online, especially when they see positive reviews and relevant, location-specific information. <strong>Local SEO helps build that trust.</strong>",
        "<strong>Targeted Traffic, Higher Conversions:</strong> Local SEO brings <strong>highly qualified traffic</strong> to your site. These are potential customers who are ready to take action — whether it's booking an appointment, calling your business, or making a purchase.",
        "<strong>Mobile Optimization Matters:</strong> More people than ever are searching on mobile devices, especially for local businesses. With <strong>local SEO,</strong> you can ensure your website is optimized for mobile searches, driving even more customers to your business",
        "<strong>Boost Your Google My Business Profile:</strong> Google My Business is one of the most powerful tools for <LINK to=\"/services/search-engine-optimization\">Local SEO</LINK>. By optimizing your profile, you ensure your business appears in local search results and on Google Maps, making it easier for customers to find you.",
      ],
      showImage: true
    },
    {
      type: "section",
      heading: "Powerful Local SEO Strategies for Detroit Businesses",
      subheadingOne: "1. Optimize Your Google My Business Profile",
      paragraphsOne: [
        "Google My Business is your digital storefront. It's what shows up when someone searches for your business on Google or Google Maps. To get the most out of it:"
      ],
      listItemsOne: [
        "Claim your business if you haven't already.",
        "Fill out your business details completely — name, address, phone number, website, hours, and services.",
        "Upload high-quality photos and videos that showcase your business.",
        "Encourage satisfied customers to leave reviews — these act as social proof, boosting your credibility and rankings."
      ],
      subheadingTwo: "2. Use Local Keywords to Optimize Your Content",
      paragraphsTwo: [
        "Your website should be optimized for local keywords that help you rank higher in Detroit-specific searches. Think about what potential customers might search for when looking for businesses like yours. Some examples might include:"
      ],
      listItemsTwo: [
        "Best pizza in Detroit",
        "Top HVAC service Detroit",
        "[Your business type] in Detroit"
      ],
      subTextTwo: "Incorporating these local keywords into your content, including title tags, meta descriptions, and headings, signals to Google that you're relevant to Detroit customers.",
      
      subheadingThree: "3. Maintain NAP Consistency (Name, Address, Phone Number)",
      paragraphsThree: [
        "Google and other search engines rely on NAP consistency across the web to verify the legitimacy of your business. Make sure your business name, address, and phone number are consistent across all online platforms, including your website, Google My Business, Yelp, and other local directories."
      ],

      subheadingFour: "4. Create Local Content That Connects",
      paragraphsFour: [
        "Building local content is essential to showing search engines (and your audience) that you are active in your community. Create blog posts, videos, and guides that highlight local events, collaborations, or even Detroit-specific topics. This not only boosts your SEO but also establishes you as a trusted local business."
      ],

      subheadingFive: "5. Build Local Citations and Backlinks",
      paragraphsFive: [
        "Local citations are mentions of your business name, address, and phone number on other websites. These help search engines verify your business's legitimacy and can boost your local rankings. Additionally, backlinks from local blogs, businesses, or media outlets further strengthen your online presence and authority."
      ],

      subheadingSix: "6. Make Your Website Mobile-Friendly",
      paragraphsSix: [
        "The majority of local searches are done on mobile devices. Google prioritizes mobile-friendly websites, so if your site isn't optimized for smartphones, it's time to make a change. A mobile-optimized website ensures that users have a seamless experience when searching for your business, whether they're browsing from their phones or tablets."
      ]
    },
    {
      type: "section",
      heading: "How Skyrocket Business Can Help You Improve Your Local SEO",
      paragraphs: [
        "At <strong>Skyrocket Business</strong>, we know that local SEO is key to growing your Detroit business. Our team of SEO experts can help you optimize your website, Google My Business profile, and other online assets to make sure your business is found by the right customers. From keyword optimization to local content creation and backlink building, we offer <strong>affordable SEO services</strong> that deliver real, measurable results.",
        "Our tailored local SEO strategies are designed to boost your visibility in Detroit, ensuring that when people in your area search for services you offer, they find you. Whether you're a small business or a larger company, <strong>Skyrocket Business</strong> has the expertise to help you succeed."
      ]
    }
  ],

  // Footer/CTA section
  conclusion = {
    heading: "Ready to Dominate Local SEO in Detroit?",
    paragraphs: [
      "If you're ready to take your Detroit business to new heights, <LINK to=\"/about-us\">Skyrocket Business</LINK> is here to help you get started with expert local SEO strategies. <LINK to=\"/contact-us\">Contact us today</LINK> to learn how we can help you boost your local rankings and attract more customers in Detroit!"
    ]
  },

  // Related articles section
  showRelatedArticles = true
}) => {

  const defaultBlogPosts = [
    {
      id: 1,
      title: "The Importance of Mobile-First Design for Local Businesses in 2025",
      category: "Website Design",
      date: "May 13, 2025",
      excerpt: "Discover why mobile-first web design is crucial for local businesses in 2025. Learn how it boosts SEO, enhances user experience, and drives real-world results—especially for Detroit companies.",
      image: seoImg,
      link: "/blog/the-importance-of-mobile-first-design-for-local-businesses-in-2025"
    },
    {
      id: 2,
      title: "How to Choose the Right Web Design Agency in Detroit",
      category: "Website Design",
      date: "May 2, 2025",
      excerpt: "Learn actionable tips to enhance your social media strategy.",
      image: seoImgTwo,
      link: "/blog/how-to-choose-the-right-web-design-agency-in-detroit"
    },
    {
      id: 3,
      title: "The Role of Search Engine Optimisation in Web Design: Why It Matters in 2025",
      category: "Digital Marketing",
      date: "May 10, 2025",
      excerpt: "Boost your Detroit business with expert local SEO strategies. Increase visibility, drive traffic, and attract more customers with Skyrocket Business's affordable services.",
      image: seoImgThree,
      link: "/blog/the-role-of-search-engine-optimisation-in-web-design-why-it-matters-in-2025"
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

        {/* Section One */}
        {section.subheadingOne && (
          <h4 className="text-xl md:text-2xl font-medium text-textColor mb-4 mt-8">
            {section.subheadingOne}
          </h4>
        )}
        {section.paragraphsOne && section.paragraphsOne.map((paragraph, pIndex) => (
          <p key={`one-p-${pIndex}`} className="mb-6 text-secondaryTextColor font-medium text-lg leading-relaxed">
            {renderProcessedContent(processContent(paragraph))}
          </p>
        ))}
        {section.listItemsOne && (
          <ul className="list-disc pl-6 mb-8 space-y-3 text-secondaryTextColor font-medium text-lg">
            {section.listItemsOne.map((item, lIndex) => (
              <li key={`one-li-${lIndex}`} className="leading-relaxed">
                {renderProcessedContent(processContent(item))}
              </li>
            ))}
          </ul>
        )}

        {/* Section Two */}
        {section.subheadingTwo && (
          <h4 className="text-xl md:text-2xl font-medium text-textColor mb-4 mt-8">
            {section.subheadingTwo}
          </h4>
        )}
        {section.paragraphsTwo && section.paragraphsTwo.map((paragraph, pIndex) => (
          <p key={`two-p-${pIndex}`} className="mb-6 text-secondaryTextColor font-medium text-lg leading-relaxed">
            {renderProcessedContent(processContent(paragraph))}
          </p>
        ))}
        {section.listItemsTwo && (
          <ul className="list-disc pl-6 mb-8 space-y-3 text-secondaryTextColor font-medium text-lg">
            {section.listItemsTwo.map((item, lIndex) => (
              <li key={`two-li-${lIndex}`} className="leading-relaxed">
                {renderProcessedContent(processContent(item))}
              </li>
            ))}
          </ul>
        )}
        {section.subTextTwo && (
          <p className="text-secondaryTextColor font-medium text-lg mb-6">
            {renderProcessedContent(processContent(section.subTextTwo))}
          </p>
        )}

        {/* Section Three */}
        {section.subheadingThree && (
          <h4 className="text-xl md:text-2xl font-medium text-textColor mb-4 mt-8">
            {section.subheadingThree}
          </h4>
        )}
        {section.paragraphsThree && section.paragraphsThree.map((paragraph, pIndex) => (
          <p key={`three-p-${pIndex}`} className="mb-6 text-secondaryTextColor font-medium text-lg leading-relaxed">
            {renderProcessedContent(processContent(paragraph))}
          </p>
        ))}

        {/* Section Four */}
        {section.subheadingFour && (
          <h4 className="text-xl md:text-2xl font-medium text-textColor mb-4 mt-8">
            {section.subheadingFour}
          </h4>
        )}
        {section.paragraphsFour && section.paragraphsFour.map((paragraph, pIndex) => (
          <p key={`four-p-${pIndex}`} className="mb-6 text-secondaryTextColor font-medium text-lg leading-relaxed">
            {renderProcessedContent(processContent(paragraph))}
          </p>
        ))}

        {/* Section Five */}
        {section.subheadingFive && (
          <h4 className="text-xl md:text-2xl font-medium text-textColor mb-4 mt-8">
            {section.subheadingFive}
          </h4>
        )}
        {section.paragraphsFive && section.paragraphsFive.map((paragraph, pIndex) => (
          <p key={`five-p-${pIndex}`} className="mb-6 text-secondaryTextColor font-medium text-lg leading-relaxed">
            {renderProcessedContent(processContent(paragraph))}
          </p>
        ))}

        {/* Section Six */}
        {section.subheadingSix && (
          <h4 className="text-xl md:text-2xl font-medium text-textColor mb-4 mt-8">
            {section.subheadingSix}
          </h4>
        )}
        {section.paragraphsSix && section.paragraphsSix.map((paragraph, pIndex) => (
          <p key={`six-p-${pIndex}`} className="mb-6 text-secondaryTextColor font-medium text-lg leading-relaxed">
            {renderProcessedContent(processContent(paragraph))}
          </p>
        ))}

        {/* Regular paragraphs */}
        {section.paragraphs && section.paragraphs.map((paragraph, pIndex) => (
          <p 
            key={`p-${pIndex}`} 
            className="mb-6 text-secondaryTextColor font-medium text-lg leading-relaxed"
          >
            {renderProcessedContent(processContent(paragraph))}
          </p>
        ))}

        {/* Regular list items */}
        {section.listItems && (
          <ul className="list-disc pl-6 mb-8 space-y-3 text-secondaryTextColor font-medium text-lg">
            {section.listItems.map((item, lIndex) => (
              <li key={`li-${lIndex}`} className="leading-relaxed">
                {renderProcessedContent(processContent(item))}
              </li>
            ))}
          </ul>
        )}

        {/* Only show image after point 2 */}
        {section.showImage && (
          <div className="my-8 rounded-xl overflow-hidden ">
            <img
              src={groupImg}
              alt="Detroit SEO Keywords"
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
            className="w-full h-auto sm:h-80 md:h-96 lg:h-[31.25rem] object-cover rounded-[24px] md:rounded-2xl "
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
    className="mt-12 md:mt-16 max-w-[90rem] px-4 sm:px-4 lg:px-2"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h2 className='text-4xl md:text-[56px] font-medium text-textColor mb-6 sm:mb-8 md:mb-10 leading-tight tracking-tight px-2'>
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

export default SeoStrategy;