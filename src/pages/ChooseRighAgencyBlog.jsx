import React from 'react';
import { Link } from 'react-router-dom'; 
import { motion } from 'framer-motion'; 
import Articles from '../components/Articles';
import dotIcon from '../assets/images/dot-icon.svg';
import calendarIcon from '../assets/images/calendar-icon.svg';
import mem2 from '../assets/images/member3.webp';
import featureImg from '../assets/images/rightWebDesingImg.jpg';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import seoImg from '../assets/images/blogCard1.avif';
import seoImgTwo from '../assets/images/blog1.jpg';
import seoImgThree from '../assets/images/seo.png';
import reviewImg from '../assets/images/reviews.jpg';
import marketingImg from '../assets/images/marketing.jpg';
import communicationImg from '../assets/images/communication.jpg';
import goalImg from '../assets/images/goal.jpg';

const ChooseRightAgencyBlog = ({
  // Header section props
  category = "Digital Marketing",
  title = "How to Choose the Right Web Design Agency in Detroit",
  subtitle = "Learn actionable tips to enhance your social media strategy.",

  // Author and date props
  author = {
    name: "Sara Jessica",
    image: mem2
  },
  publishDate = "May 2, 2025",

  // Featured image
  featuredImage = featureImg,

  content = [
    {
      type: "section",
      paragraphs: [
        "Picking a <LINK to=\"/services/detroit-website-design-and-development\">web design agency</LINK> is a big step for any business. But when you're based in a place like Detroit, Northern Ireland, that decision matters even more. Why? Because local understanding, quick communication, and experience with nearby markets can make a huge difference.",
        "Whether you're just starting out, thinking about a rebrand, or taking your store online for the first time, the <LINK to=\"/services/detroit-website-design-and-development\">right web design partner in Detroit</LINK> can help make it happen.",
        "This guide breaks down what to look for, what to avoid, and why working with a local company could be your best move."
      ]
    },
    {
      type: "section",
      heading: "Why Choosing the Right Web Design Partner Matters",
      paragraphs: [
        "Your website is often the first thing customers see. It's your digital storefront. And in today's world, it's one of your most powerful marketing tools.",
        "A good agency won't just give you a nice-looking site—they'll help create a strong online presence that builds trust, drives traffic, and turns visitors into customers.",
        "If you're in Detroit, working with a local agency that understands your audience and culture can give you a major edge. They'll know the right tone, local SEO tips, and how to connect with the people around you."
      ]
    },
    {
      type: "section",
      heading: "1. Know Your Goals",
      image: goalImg,
      paragraphs: [
        "Start by getting clear on what you want from your website.",
        "Ask yourself:"
      ],
      listItems: [
        "Are you building something brand new?",
        "Redesigning an old site?",
        "Do you need a store, a booking system, or a blog?",
        "What's the main goal of the site?",
        "Who are you targeting?",
        "Do you want a custom design or a simple template?",
        "How important is SEO to your strategy?"
      ],
      subText: "Being specific about what you need will make it easier to spot the agency that's right for you."
    },
    {
      type: "section",
      heading: "2. Look for Local Knowledge",
      paragraphs: [
        "There are plenty of agencies across the UK. But a Detroit-based one knows the local market—your customers, what they like, and how they search online.",
        "A local team can also bring ideas that work well in your area, whether you're in retail, hospitality, services, or another sector. They'll be familiar with trends in your community and create designs that feel relatable.",
        "<strong>Tip:</strong> Check their website for local case studies and past clients in Detroit. It shows they've helped businesses like yours before"
      ]
    },
    {
      type: "section",
      heading: "3. Check Their Portfolio",
      image: reviewImg,
      paragraphs: [
        "A portfolio shows you what an agency can do. Don't just look at how the websites look—check how they work.",
        "What to look for:"
      ],
      listItems: [
        "Clean, modern design",
        "Works well on phones and tablets",
        "Fast loading times",
        "User-friendly navigation",
        "Testimonials or results from real businesses"
      ],
      subText: "If they've worked with local companies or in your industry, that's a big plus."
    },
    {
      type: "section",
      heading: "4. Read Reviews",
      paragraphs: [
        "Google, Facebook, and sites like Clutch have reviews that can give you the real story. Take some time to read them.",
        "<strong>Pay attention to:</strong>"
      ],
      listItems: [
        "Was the agency easy to work with?",
        "Did they finish the project on time?",
        "Were clients happy with the results?",
        "Would clients recommend them to others?"
      ],
      subText: "Good reviews from other Detroit businesses show that the agency is trusted locally."
    },
    {
      type: "section",
      heading: "5. Understand Their Process",
      paragraphs: [
        "Every agency works differently. A clear, step-by-step process means they know what they're doing and will keep your project on track.",
        "Look for a team that offers:"
      ],
      listItems: [
        "A discovery or planning session",
        "Sitemap and wireframe creation",
        "Design that fits your brand",
        "Full development (frontend + backend)",
        "Testing across devices",
        "Post-launch support and updates"
      ],
      subText: "Ask for a timeline so you know when things will happen and when your site will go live."
    },
    {
      type: "section",
      heading: "6. Ask About SEO and Marketing",
      image: marketingImg,
      paragraphs: [
        "Even the best website won't help if no one sees it.",
        "A strong agency should offer:"
      ],
      listItems: [
        "Local SEO to help you show up in Detroit searches",
        "Content creation and writing",
        "Social media or ad campaigns",
        "Tracking and reporting"
      ],
      subText: "This means your site won't just look good—it will perform too. Good SEO helps people find you online, especially those nearby."
    },
    {
      type: "section",
      heading: "7. Talk About Budget",
      paragraphs: [
        "Price matters—but don't just go with the cheapest option. Cheap sites often come with issues like bad design, slow updates, or hidden fees later.",
        "<strong>What to ask:</strong>"
      ],
      listItems: [
        "What's included in the price?",
        "Is hosting or support part of the package?",
        "How many changes or revisions are allowed?",
        "Are there extra charges for updates?"
      ],
      subText: "A good agency will give you a clear quote with no surprises. It's better to invest once in something solid than to fix problems later."
    },
    {
      type: "section",
      heading: "8. Make Sure They Communicate Well",
      image: communicationImg,
      paragraphs: [
        "You want a team that listens, answers quickly, and keeps you in the loop. Working with a Detroit-based team means you might be able to meet in person or catch up easily.",
        "Look for:"
      ],
      listItems: [
        "A dedicated contact person",
        "Quick replies by phone or email",
        "Support after your site goes live",
        "Clear updates and timelines"
      ],
      subText: "Strong communication makes everything smoother and more enjoyable."
    },
    {
      type: "section",
      heading: "9. Meet the People (If You Can)",
      paragraphs: [
        "One of the best parts of working with a local agency? You can meet the actual people designing your site.",
        "Getting to know your team builds trust, and they'll understand your goals better. You may even have mutual local connections—that always helps!",
        "It also gives you peace of mind knowing who's behind the scenes."
      ]
    },
    {
      type: "section",
      heading: "Final Thoughts",
      paragraphs: [
        "Choosing the right <LINK to=\"/services/detroit-website-design-and-development\">web design agency in Detroit</LINK> isn't just about flashy designs or cheap prices. It's about finding a team that understands your business, your goals, and your local market.",
        "With the right partner, your website becomes more than a brochure—it becomes a tool that drives growth, builds trust, and helps your business stand out.",
        "Focus on agencies with:"
      ],
      listItems: [
        "Local knowledge",
        "Great portfolios",
        "Clear communication",
        "A full range of digital services"
      ],
      subText: "Take your time, ask questions, and choose a partner who really gets your vision."
    },
    {
      type: "section",
      heading: "How Skyrocket Business Can Help",
      paragraphs: [
        "At <LINK to=\"/contact-us\">Skyrocket Business</LINK>, we don't just build websites—we craft digital experiences that help businesses grow. While based in Detroit, we proudly work with clients across the UK, including Detroit.",
        "We understand the power of local connections, clean design, and smart strategy. Whether you need a fresh website, better SEO, or ongoing support, we've got your back.",
        "Need help getting your Detroit business online or taking it to the next level? Reach out to Skyrocket Business today. Let's build something amazing together."
      ]
    }
  ],

  // Related articles section
  showRelatedArticles = true
}) => {

  const defaultBlogPosts = [
    {
      id: 1,
      title: "The Role of Search Engine Optimisation in Web Design: Why It Matters in 2025",
      category: "Digital Marketing",
      date: "May 10, 2025",
      excerpt: "In this blog post, we explore the role of search engine optimisation (SEO) in web design and why it matters in 2025.",
      image: seoImg,
      link: "/blog/the-role-of-search-engine-optimisation-in-web-design-why-it-matters-in-2025"
    },
    {
      id: 2,
      title: "Understanding User Experience (UX) and Its Impact on Conversion Rates",
      category: "Website Design",
      date: "May 14, 2025",
      excerpt: "Learn actionable tips to enhance your social media strategy.",
      image: seoImgTwo,
      link: "/blog/understanding-user-experience-ux-and-its-impact-on-conversion-rates"
    },
    {
      id: 3,
      title: "Top SEO Strategies for Detroit Businesses to Gain Local Visibility",
      category: "Digital Marketing",
      date: "April 29, 2025",
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

export default ChooseRightAgencyBlog;