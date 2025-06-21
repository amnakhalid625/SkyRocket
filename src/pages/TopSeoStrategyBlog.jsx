import React from 'react';
import { Link } from 'react-router-dom'; 
import { motion } from 'framer-motion'; 
import Articles from '../components/Articles';
import dotIcon from '../assets/images/dot-icon.svg';
import calendarIcon from '../assets/images/calendar-icon.svg';
import mem1 from '../assets/images/member1.webp';
import featureImg from '../assets/images/seoTwo.jpg';
import Contact from '../components/Contact';

import seoImg from '../assets/images/blog3.jpg';
import seoImgTwo from '../assets/images/blogCard1.avif';
import seoImgThree from '../assets/images/rightWebDesingImg.jpg';
import groupImg from '../assets/images/topSeoImg.jpeg';

const TopSeoStrategyBlog = ({
  // Header section props
  category = "Digital Marketing",
  title = "Top SEO Strategies for Detroit Businesses to Gain Local Visibility",
  subtitle = "Master local SEO in Detroit and drive more traffic to your business. Skyrocket your online visibility with expert SEO strategies tailored for Detroit companies.",

  // Author and date props
  author = {
    name: "Sara Jessica",
    image: mem1
  },
  publishDate = "Apr 28, 2025",

  // Featured image
  featuredImage = featureImg,

  content = [
    {
      type: "section",
      paragraphs: [
        "<strong>SEO is more than just rankings.</strong> It's about being found by the right people — the ones who are looking for exactly what you offer. In Detroit's bustling business environment, <LINK to=\"/services/\">local SEO</LINK> is the secret weapon for standing out and attracting real customers. With the right SEO strategy, your business will rise above the noise and show up exactly when your potential customers need you. It's time to make your business <strong>unforgettable. </strong>",
      ]
    },
    {
      type: "section",
      heading: "Why Local SEO is Essential for Detroit Businesses",
      paragraphs: [
        "In Detroit, competition is fierce. Whether you're in the heart of downtown or one of the surrounding neighborhoods, there's no shortage of businesses fighting for attention. <LINK to=\"/services/\">local SEO</LINK> that when people search for services like yours in Detroit, you're the one they find. It's about getting your business in front of the people who matter most: the ones who are already looking for you — your future customers.",
        "SEO isn't just about ranking higher; it's about creating real connections with your local audience and turning searches into sales. When you nail your <LINK to=\"/services/\">local SEO strategy</LINK>, your business will be more visible, more trusted, and more likely to convert visitors into loyal customers.",
      ]
    },
    {
      type: "section",
      heading: "1. Google My Business: Your Digital Foundation",
      paragraphs: [
        "Your <strong>Google My Business </strong> listing is your digital storefront. It's often the first impression potential customers will have of your business, and it's where they go to find critical information like your hours, location, and contact details. A <strong>well-optimized GMB profile </strong> builds trust and boosts your visibility in search results.",
        "We help you:"
      ],
      listItems: [
        "Optimize your profile with accurate, complete information.",
        "Upload high-quality photos of your business to make you stand out.",
        "Collect and manage customer reviews to build social proof.",
      ],
      subText: [
        "Your GMB profile is your first step to SEO success, and we'll make sure it works as hard as you do"
      ]
    },
    {
      type: "section",
      heading: "2. Target Detroit-Specific Keywords",
      paragraphs: [
        "<strong>Keywords are the heart of SEO</strong>, and when you're in Detroit, they need to be hyper-targeted to your local audience. It's not just about using broad terms like 'SEO services' — it's about using keywords like <strong>'SEO services in Detroit'</strong> or <strong>'Detroit web design experts' </strong> that resonate with the locals.",
        "We focus on:"
      ],
      listItems: [
        "Using <strong>Detroit-specific keywords</strong> in your website content, blogs, and meta tags.",
        "Crafting content that speaks directly to your audience's needs.",
        "Ensuring that your business ranks for the most relevant local searches.",
      ],
      subText: [
        "When your business is found by the right people, you can drive more targeted traffic that's likely to convert into customers."
      ],
      showImage: true
    },
    {
      type: "section",
      heading: "3. Local Directories and Listings: Boost Your Visibility",
      paragraphs: [
        "Getting listed on local directories and online listings is a smart way to enhance your local SEO. These platforms help Google verify your business and improve your rankings. Plus, they make it easy for Detroiters to find and connect with you.",
        "We'll ensure your business is listed on top Detroit directories like:"
      ],
      listItems: [
        "Yelp",
        "Google Business",
        "Detroit's Chamber of Commerce website",
      ],
      subText: [
        "Accurate and consistent listings across these platforms send a powerful signal to search engines and improve your SEO rankings."
      ]
    },
    {
      type: "section",
      heading: "4. Content That Speaks to Detroiters",
      paragraphs: [
        "Content is more than just words — it's <strong>your brand's story.</strong> And in Detroit, that story needs to resonate with local audiences. Whether it's blog posts, case studies, or social media updates, <strong>content helps build trust</strong> and <strong>connects with your audience</strong> on a deeper level.",
        "We create:"
      ],
      listItems: [
        "<strong>Blog posts and articles</strong> that reflect Detroit's unique culture and challenges.",
        "<strong>Customer stories </strong> that speak directly to your local audience.",
        "<strong>Engaging content</strong> that positions you as the expert in your field.",
      ],
      subText: [
        "By consistently publishing content that is relevant to Detroiters, you'll not only improve your SEO but also create lasting relationships with your customers."
      ]
    },
    {
      type: "section",
      heading: "5. Mobile Optimization: Meet Your Detroit Customers Where They Are",
      paragraphs: [
        "With over <strong>60% of searches</strong> coming from mobile devices, it's more important than ever to ensure your website is <strong>mobile-friendly.</strong> Whether your customers are searching from the city's bustling downtown or the surrounding suburbs, your website needs to look and perform flawlessly on any device",
        "We'll ensure your website is:"
      ],
      listItems: [
        "<Strong>Responsive:</Strong> Looks great on any screen, from phones to tablets.",
        "<Strong>Fast-loading:</Strong> No one wants to wait for a slow website.",
        "<Strong>Easy to navigate:</Strong> Make it simple for Detroiters to find what they need.",
      ],
      subText: [
        "A mobile-friendly website improves both your <LINK to=\"/services/\">local SEO ranking</LINK> and user experience, making it easier for customers to convert."
      ]
    },
    {
      type: "section",
      heading: "6. Building Local Backlinks: Establishing Authority",
      paragraphs: [
        "Backlinks are like votes of confidence from other websites. When authoritative local sites link to yours, it signals to Google that you're a trustworthy, credible business. For Detroit-based businesses, local backlinks from respected sites can have a huge impact on SEO performance.",
        "We help you:"
      ],
      listItems: [
        "<strong>Partner with local businesses</strong> for mutual backlinks.",
        "<strong>Sponsor Detroit events</strong> to gain backlinks from reputable local sources.",
        "<strong>Get featured in Detroit blogs and publications</strong> to boost your authority.",
      ],
      subText: [
        "These backlinks don't just boost your SEO — they build your reputation in Detroit and help you become a trusted resource in your industry."
      ]
    },
    {
      type: "section",
      heading: "7. Continuous Monitoring and Adjustments: Stay Ahead of the Game",
      paragraphs: [
        "SEO isn't a 'set it and forget it' strategy — it's an ongoing process. <LINK to=\"/about-us\">Skyrocket Business</LINK>, we constantly monitor your website's performance and make adjustments as needed to keep you ahead of the competition. From keyword tracking to conversion analysis, we keep a close eye on what's working and fine-tune what's not.",
        "We provide:"
      ],
      listItems: [
        "<strong>Monthly reports</strong> to track your SEO progress.",
        "<strong>Constant optimizations </strong> to keep your site in top form.",
        "<strong>Adjustments to your strategy</strong> as trends and algorithms evolve.",
      ],
      subText: [
        "With continuous monitoring and adjustments, we ensure that your business remains visible, competitive, and successful."
      ]
    },
  ],

  // Footer/CTA section
  conclusion = {
    heading: "Let's Skyrocket Your Detroit Business Together",
    paragraphs: [
      "At Skyrocket Business, we specialize in helping Detroit businesses grow through powerful, local SEO strategies that connect you with your ideal customers. From GMB optimization to local backlinks and content creation, we have the tools and expertise to make your business stand out in search results.",
      "And we do it all at a real, affordable price that's perfect for small businesses in Detroit. Let's work together to boost your local visibility and help your business thrive.",
    ],
  },

  // Related articles section
  showRelatedArticles = true
}) => {

  const defaultBlogPosts = [
    {
      id: 1,
      title: "Why Choose a Nearby Web Design Business in Detroit?",
      category: "Website Design",
      date: "Apr 29, 2025",
      excerpt: "Discover 10 powerful reasons to choose a Detroit-based web design company. From local insight to faster support, learn how Skyrocket Business can help grow your online presence.",
      image: seoImg,
      link: "/blog/why-choose-a-nearby-web-design-business-in-detroit"
    },
    {
      id: 2,
      title: "The Role of Search Engine Optimisation in Web Design: Why It Matters in 2025",
      category: "Digital Marketing",
      date: "May 10, 2025",
      excerpt: "Discover why mobile-first web design is crucial for local businesses in 2025. Learn how it boosts SEO, enhances user experience, and drives real-world results—especially for Detroit companies.",
      image: seoImgTwo,
      link: "/blog/the-role-of-search-engine-optimisation-in-web-design-why-it-matters-in-2025"
    },
    {
      id: 3,
      title: "How to Choose the Right Web Design Agency in Detroit",
      category: "Website Design",
      date: "May 2, 2025",
      excerpt: "Learn actionable tips to enhance your social media strategy.",
      image: seoImgThree,
      link: "/blog/why-every-detroit-business-needs-a-mobile-friendly-website-in-2025"
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
        // Extract href from attributes
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
            key={pIndex} 
            className="mb-6 text-secondaryTextColor font-medium text-lg leading-relaxed"
          >
            {renderProcessedContent(processContent(paragraph))}
          </p>
        ))}

        {section.listItems && (
          <ul className="list-disc pl-6 mb-8 space-y-3 text-secondaryTextColor font-medium text-lg">
            {section.listItems.map((item, lIndex) => (
              <li key={lIndex} className="leading-relaxed">
                {renderProcessedContent(processContent(item))}
              </li>
            ))}
          </ul>
        )}

        {/* Only show image after point 2 */}
        {section.showImage && (
          <div className="my-8 rounded-xl overflow-hidden g">
            <img
              src={groupImg}
              alt="Detroit SEO Keywords"
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {section.subText && section.subText.map((text, sIndex) => (
          <p key={sIndex} className="text-secondaryTextColor italic font-medium text-lg mb-6">
            {renderProcessedContent(processContent(text))}
          </p>
        ))}
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
            className="w-full h-auto sm:h-80 md:h-96 lg:h-[31.25rem] object-cover rounded-[24px] md:rounded-2xl"
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
              <p key={index} className="mb-6 text-secondaryTextColor font-medium text-lg leading-relaxed">
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

export default TopSeoStrategyBlog;