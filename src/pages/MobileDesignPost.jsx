import React from 'react';
import { Link } from 'react-router-dom'; 
import { motion } from 'framer-motion'; 
import Articles from '../components/Articles';
import dotIcon from '../assets/images/dot-icon.svg';
import calendarIcon from '../assets/images/calendar-icon.svg';
import mem1 from '../assets/images/member1.webp';
import featureImg from '../assets/images/blog2.jpg';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import rightArrow from '../assets/images/arrow3.svg';
import seoImg from '../assets/images/seo.png';
import seoImgTwo from '../assets/images/blogCard1.avif';
import seoImgThree from '../assets/images/businessStrategy.png';

const MobileDesignPost = ({
  // Header section props
  category = "Website Design",
  title = "The Importance of Mobile-First Design for Local Businesses in 2025",
  subtitle = "Discover why mobile-first web design is crucial for local businesses in 2025. Learn how it boosts SEO, enhances user experience, and drives real-world results—especially for Detroit companies.",

  // Author and date props
  author = {
    name: "Sara Jessica",
    image: mem1
  },
  publishDate = "May 13, 2025",

  // Featured image
  featuredImage = featureImg,

  content = [
    {
      type: "section",
      paragraphs: [
        "If your website isn't built with mobile users in mind, your local business could be losing customers by the minute.",
        "In 2025, the mobile experience isn't a 'nice-to-have'—it's the frontline of digital engagement. Over half of global web traffic now comes from smartphones, and for small, community-based businesses, that number is often even higher. Whether someone's searching for the best tacos near them or a reliable contractor in the neighborhood, they're doing it on their phone.",
        "That's where mobile-first design steps in.",
        "In this article, we'll break down what mobile-first design means, why it's a game-changer for local SEO and user experience, and how your business can make the shift—starting today."
      ]
    },
    {
      type: "section",
      heading: "What Is Mobile-First Design?",
      paragraphs: [
        "Mobile-first design is a <LINK to=\"/services/detroit-website-design-and-development\">web development</LINK> approach where websites are designed for the smallest screens first (typically smartphones), then scaled up for tablets and desktops. It flips the traditional 'desktop-first' model on its head.",
        "Why? Because mobile is where your customers are. Especially local ones."
      ]
    },
    {
      type: "section",
      heading: "1. Your Local Customers Are Already Mobile",
      paragraphs: [
        "Picture this: someone in your city searches 'best coffee shop near me' from their phone while walking down the street. If your website isn't mobile-optimized—slow to load, hard to tap, or difficult to navigate—they're likely to bounce and head to your competitor.",
        "Google says that 70% of users who perform a local search on mobile visit a business within a day, and nearly 30% of those visits lead to a purchase. That's real revenue walking out the door if your site isn't ready"
      ],
    },
    {
      type: "section",
      heading: "2. Better User Experience = More Conversions",
      paragraphs: [
        "A mobile-friendly website doesn't just look good—it performs well where it matters.",
        "Key mobile-first features that drive engagement:"
      ],
      listItems: [
        "<strong>Fast load times</strong> on any network",
        "<strong>Responsive design </strong> that fits all screen sizes",
        "<strong>Touch-friendly buttons</strong>and clean navigation",
        "<strong>Click-to-call </strong> functionality and map integration",
        "<strong>Clear CTAs</strong> and concise, scannable content",
      ],
    },
    {
      type: "section",
      heading: "3. Google Ranks Mobile-Optimized Sites Higher",
      paragraphs: [
        "Since Google's move to mobile-first indexing, your site's mobile version is now the primary version used for search rankings. If your mobile site is slow, broken, or hard to navigate, your SEO will suffer—even on desktop.",
        "Mobile-first SEO advantages include:"
      ],
      listItems: [
        "<strong>Fast load speaks,</strong> a key ranking factor",
        "<strong>Lower bounce rates,</strong> indicating quality to search engines",
        "<strong>Improved usability,</strong> which feeds into Google's ranking signals",
        "<strong>Better local visibility,</strong> especially for 'near me' searches",
      ],
    },
    {
      type: "section",
      heading: "4. Core Web Vitals: Performance Metrics That Matter",
      paragraphs: [
        "Google's Core Web Vitals focus on real-world user experience—especially on mobile devices.",
        "Here's what they measure:"
      ],
      listItems: [
        "<strong>LCP (Largest Contentful Paint):</strong> Page loading speed",
        "<strong>FID (First Input Delay):</strong> Interactivity",
        "<strong>Improved usability,</strong> which feeds into Google's ranking signals",
        "<strong>CLS (Cumulative Layout Shift): </strong> Visual stability",
      ],
    },
    {
      type: "section",
      heading: "5. Location-Based Features Drive Real-World Engagement",
      paragraphs: [
        "Mobile-first sites can take full advantage of built-in smartphone features to enhance user experience and drive conversions.",
        "Examples include:"
      ],
      listItems: [
        "<strong>Click-to-call buttons</strong>",
        "<strong>Integrated maps and directions</strong>",
        "<strong>Local business schema for SEO</strong>",
        "<strong>Real-time GPS promotions</strong>",
        "<strong>Mobile-friendly booking and payment tools</strong>",
      ],
    },
    {
      type: "section",
      heading: "6. Social Media Lives on Mobile",
      paragraphs: [
        "If your business markets on platforms like Instagram, <a target=\"_blank\" href=\"https://www.facebook.com/SkyrocketBusiness.io/\">Facebook</a>, or TikTok, you're already reaching customers on mobile. But what happens when they click your link?",
        "A mobile-first website ensures:"
      ],
      listItems: [
        "<p>Faster loading from social apps</p>",
        "<p>Integrated maps and directions</p>",
        "<p>Local business schema for SEO</p>",
        "<p>Seamless visual branding across channels</p>",
        "<p>Smooth browsing that encourages actions (follow, book, call)</p>",
      ],
    },
    {
      type: "section",
      heading: "7. Stand Out Locally with a Better Mobile Experience",
      paragraphs: [
        "Most small businesses still have clunky, outdated, desktop-only sites. If yours is fast, clean, and mobile-optimized, you instantly look more modern and professional.",
        "You'll:"
      ],
      listItems: [
        "<strong>Rank better</strong> in local searches",
        "<strong>Convert more</strong> users on the spot",
        "<strong>Local business schema for SEO</strong>",
        "<strong>Build trust </strong> with digital-first customers",
      ],
    },
    {
      type: "section",
      heading: "8. How to Shift to a Mobile-First Website",
      paragraphs: [
        "Here's how to get started:",
      ],
      listItems: [
        "<strong>Design for mobile first.</strong> Start small and scale up.",
        "<strong>Use responsive frameworks</strong> like Bootstrap or CSS Grid.",
        "<strong>Simplify navigation</strong> with mobile menus and large buttons.",
        "<strong>Optimize performance</strong> with compressed assets and minimal code.",
        "<strong>Test on real devices</strong> (not just emulators).",
        "<strong>Monitor and improve</strong> with tools like <a target=\"_blank\" href=\"https://pagespeed.web.dev/\">Page Insights</a> and Google Search Console.",
      ],
    },
  ],

  // Footer/CTA section
  conclusion = {
    heading: "Final Thoughts",
    paragraphs: [
      "A mobile-first website isn't just a trend—it's the standard. It's how customers discover, interact with, and choose local businesses in 2025. If your site isn't ready for them, you're not just missing traffic—you're missing trust, revenue, and growth.",
      "At Skyrocket Business, we specialize in building responsive, lightning-fast websites that help Detroit businesses thrive online. Whether you're launching a new business or upgrading an old site, we're here to help you put mobile first—and results first.",
      "Explore our <LINK to=\"/services/detroit-website-design-and-development\">web desing services</LINK> or contact us today to start your mobile-first journey."
    ],
  },

  // Related articles section
  showRelatedArticles = true
}) => {

  const defaultBlogPosts = [
    {
      id: 1,
      title: "Top SEO Strategies for Detroit Businesses to Gain Local Visibility",
      category: "Digital Marketing",
      date: "Apr 29, 2025",
      excerpt: "Boost your Detroit business with expert local SEO strategies. Increase visibility, drive traffic, and attract more customers with Skyrocket Business's affordable services. ",
      image: seoImg,
      link: "/blog/top-seo-strategies-for-detroit-businesses-to-gain-local-visibility-lf8a2"
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
      title: "Why Every Detroit Business Needs a Mobile-Friendly Website in 2025",
      category: "Website Design",
      date: "April 30, 2025",
      excerpt: "Email marketing remains one of the most effective ways to engage with your audience. Know our strategy to reach millions of inboxes.",
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
    const parts = text.split(/(<LINKCOMPONENT to="[^"]*">.*?<\/LINKCOMPONENT>)/g);
    
    return parts.map((part, index) => {
      const linkMatch = part.match(/<LINKCOMPONENT to="([^"]*)">(.*?)<\/LINKCOMPONENT>/);
      if (linkMatch) {
        const [, to, content] = linkMatch;
        return (
          <Link 
            key={index} 
            to={to} 
            className="text-primary hover:underline font-medium"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        );
      }
      return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />;
    });
  };

  const renderContent = () => {
    return content.map((section, index) => (
      <div key={index} className="mb-12">
        {section.heading && (
          <h3 className="text-2xl md:text-3xl font-medium text-textColor mb-6 tracking-tight">
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
              <li key={lIndex}>
                {renderProcessedContent(processContent(item))}
              </li>
            ))}
          </ul>
        )}
      </div>
    ));
  };

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <div className="inline-block px-4 py-1 bg-secondary rounded-full text-sm font-medium text-textColor mb-4">
            {category}
          </div>
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
        </div>

        {/* Featured Image */}
        <div className="mb-12 md:mb-16">
          <img
            src={featuredImage}
            alt={title}
            className="w-full h-auto sm:h-80 md:h-96 lg:h-[31.25rem] object-cover rounded-[24px] md:rounded-2xl shadow-md"
          />
        </div>

        {/* Blog Content */}
        <div className="max-w-3xl mx-auto px-2 sm:px-0">
          {renderContent()}

          {/* Conclusion Section */}
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-medium text-textColor mb-6">
              <strong>{conclusion.heading}</strong>
            </h3>
            {conclusion.paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-6 text-secondaryTextColor font-medium text-lg leading-relaxed">
                {renderProcessedContent(processContent(paragraph))}
              </p>
            ))}
          </div>
        </div>

        {/* Related Articles Section */}
        {showRelatedArticles && (
          <div className="mt-16 max-w-[90rem] px-4 sm:px-4 lg:px-2">
            <h2 className='text-3xl p-4 sm:text-4xl md:text-[56px] font-medium text-textColor mb-8 sm:mb-10 leading-tight tracking-tight'>
              Related Articles
            </h2>
            <div className="">
              <Articles blogPosts={defaultBlogPosts} />
            </div>
          </div>
        )}
      </div>

      <Contact headingText="Unleash Your Brand's Potential with Catalysty!" />
      <Footer />
    </>
  );
};

export default MobileDesignPost;