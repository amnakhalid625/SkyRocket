import React from 'react';
import { Link } from 'react-router-dom'; 
import Articles from '../components/Articles';
import dotIcon from '../assets/images/dot-icon.svg';
import calendarIcon from '../assets/images/calendar-icon.svg';
import mem1 from '../assets/images/member1.webp';
import featureImg from '../assets/images/blog3.jpg';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import seoImg from '../assets/images/rightWebDesingImg.jpg';
import seoImgTwo from '../assets/images/blog1.jpg';
import seoImgThree from '../assets/images/seoTwo.jpg';

const WebDesignPost = ({
  // Header section props
  category = "Website Design",
  title = "Why Choose a Nearby Web Design Business in Detroit?",
  subtitle = "Discover 10 powerful reasons to choose a Detroit-based web design company. From local insight to faster support, learn how Skyrocket Business can help grow your online presence.",

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
        "Your website is often the first impression customers have of your Detroit business. In today’s fast-moving digital world, choosing the right web design partner is more than a technical decision — it’s a strategic one. While remote design agencies may promise sleek sites, working with a local  <LINK to=\"/services\">Detroit web design</LINK> business offers practical and long-term benefits that are hard to match.",
        "In this article, we’ll break down why choosing a nearby  <LINK to=\"/services\">web design company</LINK> in Detroit can be a smart move — and how it can directly impact your business growth.",
      ]
    },
    {
      type: "section",
      heading: "1. They Understand the Local Market",
      paragraphs: [
        "A local web design company in Detroit knows the community — its trends, values, and customer behaviors. They’re not guessing what appeals to local clients — they live it.",
        "Whether you run a café, retail store, or service business, local designers can tailor your site to include references and visuals that resonate with Detroit residents. Think: local events, recognizable landmarks, or community shout-outs. It makes your website feel more personal and trustworthy."
      ]
    },
    {
      type: "section",
      heading: "2. Clearer, Easier Communication",
      paragraphs: [
        "Working with someone in your time zone — or even your neighborhood — means faster response times and fewer misunderstandings. You can jump on a quick call or meet face-to-face, making communication simple and effective.",
        "This is especially helpful for revisions, urgent fixes, or brainstorming sessions. Local collaboration saves time and builds mutual understanding — which often results in better final outcomes."
      ],
    },

      {
      type: "section",
      heading: "3. Personalized Service, Not Cookie-Cutter Support",
      paragraphs: [
        "Local designers often take on fewer clients, allowing them to focus more deeply on your project. You’re not just another ticket in their system — your success directly reflects on their reputation in Detroit.",
        "They’re more invested in building something that works for you because they know word-of-mouth referrals are powerful in local communities. They care — and it shows in the quality of their work."
      ],
    },


      {
      type: "section",
      heading: "4. You Support the Local Economy",
      paragraphs: [
        "Hiring a Detroit-based business keeps your investment circulating locally. You’re not just paying for a website — you’re contributing to your local economy, helping freelancers, small shops, and service providers in your community.",
        "Plus, local businesses tend to pay it forward. Your designer might refer you to other local professionals or even bring in new clients through their own network."
      ],
    },


      {
      type: "section",
      heading: "5. Faster Turnaround & Better Ongoing Support",
      paragraphs: [
        "A local agency doesn’t deal with overseas time zones or overloaded client lists. That means quicker delivery, faster revisions, and real-time updates.",
        "Need a quick change to your homepage or an emergency fix? A local partner can often handle it the same day — no waiting around or opening support tickets."
      ],
    },


  {
      type: "section",
      heading: "6. SEO That Works Where You Work",
      paragraphs: [
        "Local web design businesses understand how to optimize your site for Detroit-specific searches. Whether it’s “best barbershop in Detroit” or “Detroit event planner,” they know the keywords and search habits that get you seen.",
        "This hyperlocal SEO approach can drive more foot traffic and online leads from people right in your area."
      ],
    },



      {
      type: "section",
      heading: "7. Face-to-Face Collaboration",
      paragraphs: [
        "Some things are just easier in person — like explaining your vision or reviewing design concepts. Sitting down with your web designer can lead to quicker decisions and more aligned results.",
        "It also makes the process feel more like a partnership — because it is. You’re not emailing a stranger; you’re working with a neighbor."
      ],
    },



      {
      type: "section",
      heading: "8. Local Businesses Are More Accountable",
      paragraphs: [
        "Local designers have more at stake. Their reputation is tied to the work they do for businesses like yours. If something goes wrong, you know where to find them — and that’s a good thing.",
        "They’re more likely to go the extra mile, deliver on promises, and build trust that lasts beyond the final invoice."
      ],
    },


      {
      type: "section",
      heading: "9. Designs That Reflect Local Culture",
      paragraphs: [
        "Detroit has its own charm, history, and culture — and your website should reflect that. Local designers can incorporate colors, language, imagery, and even community values that help your brand connect on a deeper level with local customers.",
        "This authenticity builds trust and helps your business stand out in a meaningful way."
      ],
    },



      {
      type: "section",
      heading: "10. Long-Term Partnership Potential",
      paragraphs: [
        "When you work with someone locally, it’s easier to build a long-term relationship. As your business grows, you’ll need updates, redesigns, or even a complete overhaul. Having a reliable partner who already knows your brand makes those transitions seamless.",
        "They’re not just building a website — they’re helping build your business for the long haul."
      ],
    },


  ],

  // Footer/CTA section
  conclusion = {
    heading: "Conclusion",
    paragraphs: [
      "Choosing a local web design team isn’t just about convenience — it’s about working with people who understand your perspective, care about your success, and are eager to help you build something meaningful.",
      "With clearer communication,  <LINK to=\"/services/search-engine-optimization\">local SEO</LINK> advantages, and a personalized touch, a <LINK to=\"/about-us\">Detroit business agency</LINK> can create a website that reflects your business, your values, and your community.",
      "Before reaching out to big-city firms or overseas developers, take a closer look at what’s right here in your own backyard. You might just find the perfect partner around the corner.",
      "💡 Need help getting started? <LINK to=\"/services/detroit-website-design-and-development\"> Skyrocket Business </LINK> specializes in clean, high-converting, mobile-friendly websites designed for Detroit businesses. Let’s build something great together — right here in the city we love."
    ],
  },

  // Related articles section
  showRelatedArticles = true
}) => {

  const defaultBlogPosts = [
    {
      id: 1,
      title: "How to Choose the Right Web Design Agency in Detroit",
      category: "Website Design",
      date: "May 2, 2025",
      excerpt: "Learn actionable tips to enhance your social media strategy. ",
      image: seoImg,
      link: "/blog/how-to-choose-the-right-web-design-agency-in-detroit"
    },
    {
      id: 2,
      title: "Understanding User Experience (UX) and Its Impact on Conversion Rates",
      category: "Website Design",
      date: "May 14, 2025",
      excerpt: "Learn how user experience (UX) design influences conversion rates and why it's critical for your Detroit business website. Improve UX, boost trust, and increase sales. ",
      image: seoImgTwo,
      link: "/blog/understanding-user-experience-ux-and-its-impact-on-conversion-rates"
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

export default WebDesignPost;