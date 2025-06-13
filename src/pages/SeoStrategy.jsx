import React from 'react';
import { Link } from 'react-router-dom'; 
import { motion } from 'framer-motion'; 
import Articles from '../components/Articles';
import dotIcon from '../assets/images/dot-icon.svg';
import calendarIcon from '../assets/images/calendar-icon.svg';
import mem2 from '../assets/images/member3.webp';
import featureImg from '../assets/images/seo.png';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import seoImg from '../assets/images/blogCard1.avif';
import seoImgTwo from '../assets/images/webTrend.jpg';
import seoImgThree from '../assets/images/seo.png';
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
        "SEO isn’t just about climbing the search rankings — it’s about putting your business in front of the right people at the right time. If you want your Detroit business to stand out, <strong>local SEO</strong> is the key. It’s about ensuring your website gets found by potential customers in your neighborhood, and <strong>Skyrocket Business</strong> is here to make that happen.",
        "In this post, we’ll walk you through the best local SEO strategies that can help you get noticed by your target audience in Detroit. From optimizing your Google My Business profile to crafting content that resonates with your community, these strategies are designed to get results."
      ]
    },
    {
      type: "section",
      heading: "What is Local SEO?",
      paragraphs: [
        "<LINK to=\"/services/search-engine-optimization\">Local SEO</LINK> is the secret to getting your business seen in local searches. When people in Detroit search for services or products that you offer, you want to make sure your business is the first one they find. Local SEO involves targeting your online presence to rank higher in searches that are geographically relevant.",


        "For example, when someone in Detroit searches for “best pizza in Detroit” or “top electricians near me,” local SEO ensures your business pops up in their results. It’s all about reaching the people who are actively looking for your services, right in your area.:",
      ],
 

    },
    {
      type: "section",
      heading: "Why Local SEO is Essential for Detroit Businesses",
      paragraphs: [
        "In Detroit, a bustling city full of competition, getting noticed can be tough. But with local SEO, you’re not just another business in the crowd — you’re the one your potential customers will find. Here’s why local SEO is a must for your Detroit business:",
       
      ],
      listItems: [
        "<strong>Be Where Your Customers Are: </strong> When your business shows up in local search results, you’re making sure you’re found by the people who matter the most — those in your neighborhood who are looking for services just like yours.",

        "<strong>Trust Is Built Locally:</strong>  Customers are more likely to trust a business that they can easily find online, especially when they see positive reviews and relevant, location-specific information. <strong>Local SEO helps build that trust.</strong>",


           "<strong>Targeted Traffic, Higher Conversions:</strong>  Local SEO brings <strong>highly qualified traffic</strong> to your site. These are potential customers who are ready to take action — whether it’s booking an appointment, calling your business, or making a purchase.",

              "<strong>Mobile Optimization Matters:</strong>  More people than ever are searching on mobile devices, especially for local businesses. With <strong>local SEO,</strong> you can ensure your website is optimized for mobile searches, driving even more customers to your business",


                 "<strong>Boost Your Google My Business Profile:</strong>   Google My Business is one of the most powerful tools for <LINK to=\"/services/search-engine-optimization\">Local SEO</LINK>. By optimizing your profile, you ensure your business appears in local search results and on Google Maps, making it easier for customers to find you.",
      ],
      subText: [
        "With a well-designed website, <strong>Detroit customers will feel confident</strong> doing business with you."
      ]
    },
    {
      type: "section",
      heading: "2. Mobile-Friendly Design: Meet Customers Where They Are",
      paragraphs: [
        "Did you know that over <strong>60% of searches</strong> now come from mobile devices? That means your website needs to be <strong>mobile-responsive</strong> to cater to today’s on-the-go consumer. When people in Detroit search for a product or service, they often do it from their phones — whether they’re in <strong>Midtown, Greektown</strong>, or anywhere in between.",
        "A mobile-friendly website means:"
      ],
      listItems: [
      "<strong>Responsive design</strong> that adapts to any screen size.",
        "<strong>Fast loading times,</strong>because mobile users won’t wait for a slow website.",
        "<strong>Click-to-call functionality</strong>for users on mobile devices who want to reach you easily.",
      ],
      subText: [
        "We ensure your website is <strong>fully optimized for mobile</strong> to capture more customers, no matter where they are."
      ],
      showImage: true
    },
    {
      type: "section",
      heading: "3. User Experience (UX) Design: Guide Visitors to Take Action",
      paragraphs: [
        "A beautiful website design means nothing if users can’t find what they’re looking for. <strong>UX design</strong> focuses on creating a seamless experience that guides visitors toward taking action. Whether it’s <strong>making a purchase, signing up for a newsletter, or contacting your team</strong>, a great UX design helps make the process easy and intuitive..",
        "Key UX elements we focus on:"
      ],
      listItems: [
        "<strong>Clear navigation:</strong> Make it easy for users to find the information they need.",
        "<strong>Call-to-action buttons:</strong>  Guide visitors toward the next step, whether it’s purchasing, booking, or reaching out.",
        "<strong>Fast loading speed:</strong>  No one has the patience for a slow website, especially on mobile.",
      ],
      subText: [
        "<strong>Your website should lead users naturally </strong> to the actions you want them to take, turning visitors into customers effortlessly."
      ]
    },
    {
      type: "section",
      heading: "4. Conversion Optimization: Turn Visitors Into Loyal Customers",
      paragraphs: [
        "A <strong>stunning design </strong> alone won’t increase your revenue — you need to focus on conversion optimization. This is the process of tweaking your website to encourage more visitors to take the desired actions, whether that’s purchasing a product, filling out a form, or contacting you.",
        "<strong>With conversion rate optimization (CRO)</strong> strategies like:"
      ],
      listItems: [
        "<strong>Clear and compelling CTAs (Call-To-Actions).</strong> ",
        "<strong>A/B testing </strong> to see what resonates most with your visitors.",
        "<strong>Social proof</strong>  (testimonials, reviews) to build trust.",
      ],
      subText: [
        "At Skyrocket Business, we know how to design websites that convert visitors into customers. With the right approach, we help you <strong>increase your sales </strong> and grow your business."
      ]
    },
    {
      type: "section",
      heading: "5. SEO-Friendly Design: Rank Higher and Reach More Customers",
      paragraphs: [
        "A stunning website is great, but if no one can find it, it’s not doing its job. <strong>Search Engine Optimization (SEO)</strong> ensures that your site ranks higher in search results, driving organic traffic to your site. <strong>The right website design</strong> lays the foundation for SEO success by:",
      ],
      listItems: [
        "<Strong>Optimizing your site structure </Strong> so search engines can crawl and index your pages easily.",
        "<Strong>Improving page speed </Strong>  for better SEO rankings.",
        "<Strong>Optimizing images</Strong> and content for relevant keywords.",
      ],
      subText: [
        "At Skyrocket Business, we integrate <strong>SEO best practices</strong> into the design of your website, making sure your business is found by the right people, including Detroit locals who are searching for your products or services."
      ]
    },
  ],

  // Footer/CTA section
  conclusion = {
    heading: "Skyrocket Your Business Today",
    paragraphs: [
      "Your website should be a powerful sales tool that works for you 24/7. Whether you’re looking to increase sales, book more calls, or build stronger relationships with your customers, a beautifully designed, high-converting website is essential.",


      "At <LINK to=\"/contact-us/\">Skyrocket Business</LINK> , we specialize in creating websites that not only look great but also deliver real results. Our team combines stunning design with SEO optimization and conversion strategies to ensure your website performs at its best.",

      "Let’s take your Detroit business to the next level. Contact <LINK to=\"/contact-us/\">Skyrocket Business today</LINK>  for a website that works as hard as you do — all for a low cost that makes sense for your budget."
    ],
  },

  // Related articles section
  showRelatedArticles = true
}) => {

  const defaultBlogPosts = [
    {
      id: 1,
      title: "The Role of Search Engine Optimisation in Web Design: Why It Matters in 2025",
      category: "Digital Marketing",
      date: "May 10, 2025",
      excerpt: "Discover 10 powerful reasons to choose a Detroit-based web design company. From local insight to faster support, learn how Skyrocket Business can help grow your online presence.",
      image: seoImg,
      link: "/blog/the-role-of-search-engine-optimisation-in-web-design-why-it-matters-in-2025"
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
      title: "Top SEO Strategies for Detroit Businesses to Gain Local Visibility",
      category: "Digital Marketing",
      date: "May 2, 2025",
      excerpt: "Boost your Detroit business with expert local SEO strategies. Increase visibility, drive traffic, and attract more customers with Skyrocket Business's affordable services. ",
      image: seoImgThree,
      link: "/blog/top-seo-strategies-for-detroit-businesses-to-gain-local-visibility-lf8a2"
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
          <div className="my-8 rounded-xl overflow-hidden shadow-lg">
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
              <p key={index} className="mb-6 text-secondaryTextColor font-medium text-lg leading-relaxed">
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

export default SeoStrategy;