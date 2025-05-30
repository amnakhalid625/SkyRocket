import React from 'react';
import footerImg from '../assets/images/footerBackImg.svg';
import footerLogo from '../assets/images/footerLogo.png';
import facebookIcon from '../assets/images/facebookicon.svg';
import instagramIcon from '../assets/images/instagramIcon.svg';
import twitterIcon from '../assets/images/twitterIcon.svg';
import linkedinIcon from '../assets/images/linkedinIcon.svg';

const Footer = () => {
  return (
    <div className="relative bg-primary text-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 sm:w-64 sm:h-20 md:w-60 md:h-60 lg:w-96 lg:h-28 xl:w-[30rem] xl:h-24 2xl:w-[35rem] 2xl:h-28 z-0">
        <img
          src={footerImg}
          alt="servicesImg"
          className="absolute top-0 right-0 z-0"
        />
      </div>

      {/* Footer Content with responsive vertical padding */}
      <div className="relative z-10 max-w-[83rem] mx-auto px-6 pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-28 md:pb-24 lg:pt-12 lg:pb-10 xl:pt-10 xl:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <img src={footerLogo} alt="logo" className="w-40 mb-4" />
            <p className="font-semibold text-white mb-4 text-lg">
              Custom Websites. Smart Marketing. Real Results.
            </p>
            <p className="text-white/80 leading-relaxed text-base">
              We design, build, and grow your online presence—so you can focus on what you do best.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-xl font-bold text-white mb-5">Pages</h3>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="space-y-3">
                <a href="/" className="block text-white hover:text-white/90 font-medium">Home</a>
                <a href="/about" className="block text-white/80 hover:text-white">About</a>
                <a href="/services" className="block text-white/80 hover:text-white">Services</a>
                <a href="/case-studies" className="block text-white/80 hover:text-white">Case Studies</a>
                <a href="/blog" className="block text-white/80 hover:text-white">Blog</a>
                <a href="/contact" className="block text-white/80 hover:text-white">Contact</a>
              </div>
              <div className="space-y-3">
                <a href="/web-design" className="block text-white/80 hover:text-white">Web Design</a>
                <a href="/social-media" className="block text-white/80 hover:text-white">Social Media</a>
                <a href="/content-marketing" className="block text-white/80 hover:text-white">Content Marketing</a>
                <a href="/seo" className="block text-white/80 hover:text-white">SEO</a>
                <a href="/ppc" className="block text-white/80 hover:text-white">PPC</a>
                <a href="/email-marketing" className="block text-white/80 hover:text-white">Email Marketing</a>
              </div>
            </div>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-bold text-white mb-5">Recent Posts</h3>
            <div className="space-y-3">
              <a href="#" className="block text-white/80 hover:text-white">Skyrocket Your Business</a>
              <a href="#" className="block text-white/80 hover:text-white">Stunning Website Design</a>
              <a href="#" className="block text-white/80 hover:text-white">Mobile-Friendly Website</a>
              <a href="#" className="block text-white/80 hover:text-white">Top SEO Strategies</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-5">Contact</h3>
            <div className="space-y-3">
              <a href="tel:+16162743853" className="block text-white/80 hover:text-white">+1 (616) 274-3853</a>
              <a href="mailto:Sales@skyrocketbusiness.io" className="block text-white/80 hover:text-white">Sales@skyrocketbusiness.io</a>
              <p className="text-white/80">607 Shelby St Suite 700<br />Detroit, MI 48226, USA</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 mb-6 md:mb-0">All Rights Reserved. © Skyrocket Business - 2025</p>

          {/* Social Icons */}
          <div className="flex space-x-4 sm:justify-start sm:w-full md:justify-start md:w-auto lg:justify-end">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src={facebookIcon} alt="facebook" className="w-8 h-8 lg:w-10 lg:h-10" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src={instagramIcon} alt="instagram" className="w-8 h-8 lg:w-10 lg:h-10" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src={twitterIcon} alt="twitter" className="w-8 h-8 lg:w-10 lg:h-10" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src={linkedinIcon} alt="Linkedin" className="w-8 h-8 lg:w-10 lg:h-10" />
            </a>
          </div>
        </div>

        {/* Windows Notice */}
        <div className="mt-8 text-right">
          <p className="text-white/50">Activate Windows</p>
          <p className="text-white/40 text-sm">Go to Settings to activate Windows.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
