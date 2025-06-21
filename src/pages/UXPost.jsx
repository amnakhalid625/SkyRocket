import React from 'react';
import { Link } from 'react-router-dom'; 
import { motion } from 'framer-motion'; 
import Articles from '../components/Articles';
import dotIcon from '../assets/images/dot-icon.svg';
import calendarIcon from '../assets/images/calendar-icon.svg';
import mem1 from '../assets/images/member1.webp';
import featureImg from '../assets/images/blog1.jpg';
import Contact from '../components/Contact';
import seoImg from '../assets/images/seo.png';
import seoImgTwo from '../assets/images/seoThree.jpg';
import seoImgThree from '../assets/images/blog5.jpg';

const UXPost = ({
// Header section props
  category = "Website Design",
  title = "Understanding User Experience (UX) and Its Impact on Conversion Rates",
  subtitle = "Learn how user experience (UX) design influences conversion rates and why it's critical for your Detroit business website. Improve UX, boost trust, and increase sales.",

  // Author and date props
  author = {
    name: "Sara Jessica",
    image: mem1
  },
  publishDate = "May 14, 2025",

  // Featured image
  featuredImage = featureImg,

  content = [
    {
      type: "section",
      heading: "Introduction: Why UX Can Make or Break Your Website",
      paragraphs: [
        "When someone lands on your website, what makes them stay—or leave?",
        "It's not just about beautiful design or catchy headlines. It's how quickly your site loads, how easy it is to find information, and how seamless the journey feels from start to action. That's user experience (UX), and it directly impacts your conversion rate.",
        "In this article, we'll break down what UX really is, why it matters so much, and how optimizing it can turn visitors into paying customers."
      ]
    },
    {
      type: "section",
      heading: "What Is UX (User Experience)?",
      paragraphs: [
        "User Experience (UX) refers to the overall experience a user has when interacting with your website or app. A good UX helps people get what they want—fast and frustration-free. A poor UX? It drives them away.",
        "Think of UX as the bridge between your business goals and your customer's needs. A strong UX doesn't just \"look good\"—it works, guides, and converts."
      ]
    },
    {
      type: "section",
      heading: "Why UX Design Matters for Your Website",
      paragraphs: [
        "Even if you're driving traffic through ads, social media, or '<LINK to=\"/services/search-engine-optimization\">SEO</LINK>', poor UX can cancel out your efforts. Here's why investing in UX is a smart move:"
      ],
      subsections: [
        {
          heading: "1. First Impressions Happen in Seconds",
          content: "Users form opinions about your website in under <strong>2 seconds</strong>. If your site looks outdated or takes too long to load, most visitors will bounce. A clean, modern, and fast-loading site builds instant trust."
        },
        {
          heading: "2. Happy Visitors = Higher Conversions",
          content: "Good UX removes friction. Whether your goal is product sales, bookings, or form submissions—if the experience is smooth, users are more likely to take action."
        },
        {
          heading: "3. Poor UX Costs You Money",
          content: "If your site is confusing or frustrating, you're not just losing sales—you're wasting ad spend, content efforts, and SEO investments. UX ensures you're converting the traffic you're already paying for."
        }
      ]
    },
    {
      type: "section",
      heading: "How UX Directly Impacts Conversion Rates",
      paragraphs: [
        "Let's look at the specific UX elements that influence whether a visitor clicks, stays, or buys:"
      ],
      subsections: [
        {
          heading: "1. Navigation & Site Structure",
          content: "Confusing menus, hidden pages, or broken links are deal-breakers.",
          quickFixes: [
            "Use simple, descriptive menu labels like \"Services,\" \"About,\" or \"Contact.\"",
            "Keep navigation consistent across all pages.",
            "Make important pages accessible in 1–2 clicks."
          ]
        },
        {
          heading: "2. Page Speed",
          content: "A 1-second delay in load time can drop conversions by <strong>up to 7%</strong>. In e-commerce, that could mean thousands in lost revenue.",
          quickFixes: [
            "Compress and optimize images.",
            "Choose reliable hosting with CDN support.",
            "Limit heavy scripts and animations."
          ]
        },
        {
          heading: "3. Mobile Responsiveness",
          content: "Over <strong>60% of web traffic</strong> now comes from mobile devices. If your site doesn't adapt to smaller screens, users won't stick around.",
          quickFixes: [
            "Use a responsive framework like Bootstrap or CSS Grid.",
            "Test across devices using BrowserStack or Chrome DevTools.",
            "Prioritize tap-friendly buttons and readable fonts."
          ]
        },
        {
          heading: "4. Clear Calls to Action (CTAs)",
          content: "Vague buttons like \"Click Here\" don't cut it. Users should always know what to do next.",
          quickFixes: [
            "Use specific phrases like \"Get a Free Quote\" or \"Schedule Your Consultation.\"",
            "Place CTAs above the fold and repeat them throughout the page.",
            "Use bold colors and large buttons to draw attention."
          ]
        },
        {
          heading: "5. Trust and Security",
          content: "Would <em>you</em> hand over your credit card to a site that looks sketchy?",
          quickFixes: [
            "Display trust badges, reviews, and security certificates (HTTPS).",
            "Add visible contact info and social proof to increase credibility.",
          ]
        },
        {
          heading: "6. Simplified Forms",
          content: "Forms with too many fields cause abandonment. Keep it short and sweet.",
          quickFixes: [
            "Only ask for necessary info.",
            "Use autofill, progress bars, and inline error validation to guide users.",
          ]
        }
      ]
    },
    {
      type: "section",
      heading: "Real Brands Using UX to Boost Conversions",
      paragraphs: [],
      listItems: [
        "<strong>Amazon</strong>: Streamlined checkout, personalized product suggestions, and intuitive design keep conversions high.",
        "<strong>Airbnb</strong>: Big visuals, easy filters, and a seamless booking experience create trust and ease.",
        "<strong>Dropbox</strong>: A simple homepage with one strong CTA drives millions of signups."
      ]
    },
    {
      type: "section",
      heading: "How to Improve UX on Your Website Today",
      paragraphs: [
        "Start improving your website experience with these quick wins:"
      ],
      listItems: [
        "<strong>Test Your Site</strong> as a first-time visitor. What's confusing or slow?",
        "<strong>Use Heatmaps</strong> like Hotjar or Crazy Egg to see where users click, scroll, and drop off.",
        "<strong>Ask for Feedback</strong> with short surveys or email follow-ups.",
        "<strong>Make One Change at a Time</strong> and track results. Even small tweaks can make a big impact."
      ]
    }
  ],

  // Footer/CTA section
  conclusion = {
    heading: "Final Thoughts: Better UX = Better Business",
    paragraphs: [
      "User experience is more than just a buzzword—it's the backbone of your website's ability to perform. A well-designed UX builds trust, boosts engagement, and increases conversions.",
      "At <LINK to=\"/about-us\">Skyrocket Business</LINK>, we specialize in creating high-converting websites for Detroit-based businesses that not only look great but <em>work great</em>. Want to turn your website into your most powerful sales tool?"
    ],
    cta: {
      text: "Let's Talk",
      url: "/contact-us" 
    }
  },

  // Related articles section
  showRelatedArticles = true}) => {


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
      title: "How a Stunning Website Design Can Boost Your Detroit Business",
      category: "Website Design",
      date: "May 10, 2025",
      excerpt: "Discover how a stunning website design can boost your Detroit business. Get a high-converting, user-friendly website that drives results with Skyrocket Business. ",
      image: seoImgTwo,
      link: "/blog/seo-best-practices-optimizing-for-search-engines-in-2024"
    },
    {
      id: 3,
      title: "5 Common Web Design Mistakes and How to Avoid Them in 2025",
      category: "Website Design",
      date: "April 30, 2025",
      excerpt: "Discover the secrets to crafting original content that converts your audience into loyal customers and supporters.",
      image: seoImgThree,
      link: "/blog/5-common-web-design-mistakes-and-how-to-avoid-them-in-2025"
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
            className="text-primary underline hover:underline font-medium"
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
        <h3 className="text-2xl md:text-3xl font-medium  text-textColor mb-6 tracking-tight">
          <strong>{section.heading}</strong>
        </h3>

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

        {section.subsections && section.subsections.map((subsection, sIndex) => (
          <div key={sIndex} className="mt-8">
            <h4 className="text-xl font-medium text-textColor  mb-4">
              <strong>{subsection.heading}</strong>
            </h4>
            <p className="mb-6 text-secondaryTextColor text-lg font-medium leading-relaxed">
              {renderProcessedContent(processContent(subsection.content))}
            </p>

            {subsection.quickFixes && (
              <>
                <p className="font-medium text-lg mb-4 text-secondaryTextColor">Quick Fixes:</p>
                <ul className="list-disc pl-6 mb-8 space-y-3 text-secondaryTextColor font-medium text-lg">
                  {subsection.quickFixes.map((fix, fIndex) => (
                    <li key={fIndex}>{fix}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
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
          className="w-full h-auto sm:h-80 md:h-96 lg:h-[31.25rem] object-cover rounded-[24px] md:rounded-2xl "
        />
      </div>

      {/* Blog Content */}
      <div className="max-w-3xl mx-auto px-2 sm:px-0">
        {renderContent()}

        {/* Conclusion Section */}
        <div className="mt-12">
          <h3 className="text-2xl md:text-3xl font-medium  text-textColor mb-6">
            <strong>{conclusion.heading}</strong>
          </h3>
          {conclusion.paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-6 text-secondaryTextColor font-medium text-lg leading-relaxed">
              {renderProcessedContent(processContent(paragraph))}
            </p>
          ))}
          {conclusion.cta && (
            <p className="mb-6 text-lg">
              <strong>👉 </strong>
              <Link 
                to={conclusion.cta.url} 
                
                className="text-primary underline hover:underline font-bold"
onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {conclusion.cta.text}
              </Link> — we'll show you how.
            </p>
          )}
        </div>
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

    <Contact   headingText = "Unleash Your Brand's Potential with Catalysty!" />

    </>
  );
};

export default UXPost;