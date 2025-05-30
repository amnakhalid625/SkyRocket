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
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 sm:w-64 sm:h-20 md:w-60 md:h-60 lg:w-96 lg:h-90 xl:w-[30rem] xl:h-28 2xl:w-[35rem] 2xl:h-32 z-0">
        <img
          src={footerImg}
          alt="servicesImg"
          className="absolute top-0 right-0 z-0"
        />
      </div>

      <div className="relative z-10 max-w-[83rem] mx-auto px-6 py-16 sm:pt-6 sm:pb-8 md:pt-8 md:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1 sm:mt-6 md:mt-8">
            <img src={footerLogo} alt="logo" className="w-40 mb-4" />
            <p className="font-semibold text-white mb-4 text-lg">
              Custom Websites. Smart Marketing. Real Results.
            </p>
            <p className="text-white/80 leading-relaxed text-base">
              We design, build, and grow your online presence—so you can focus on what you do best.
            </p>
          </div>

          {/* Pages */}
          <div className="sm:mt-6 md:mt-8">
            <h3 className="text-xl font-bold text-white mb-5">Pages</h3>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="space-y-3">
                <a href="/" className="block text-white hover:text-white/90 transition-colors font-medium text-base">Home</a>
                <a href="/about" className="block text-white/80 hover:text-white transition-colors text-base">About</a>
                <a href="/services" className="block text-white/80 hover:text-white transition-colors text-base">Services</a>
                <a href="/case-studies" className="block text-white/80 hover:text-white transition-colors text-base">Case Studies</a>
                <a href="/blog" className="block text-white/80 hover:text-white transition-colors text-base">Blog</a>
                <a href="/contact" className="block text-white/80 hover:text-white transition-colors text-base">Contact</a>
              </div>
              <div className="space-y-3">
                <a href="/web-design" className="block text-white/80 hover:text-white transition-colors text-base">Web Design</a>
                <a href="/social-media" className="block text-white/80 hover:text-white transition-colors text-base">Social Media</a>
                <a href="/content-marketing" className="block text-white/80 hover:text-white transition-colors text-base">Content Marketing</a>
                <a href="/seo" className="block text-white/80 hover:text-white transition-colors text-base">SEO</a>
                <a href="/ppc" className="block text-white/80 hover:text-white transition-colors text-base">PPC</a>
                <a href="/email-marketing" className="block text-white/80 hover:text-white transition-colors text-base">Email Marketing</a>
              </div>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="sm:mt-6 md:mt-8">
            <h3 className="text-xl font-bold text-white mb-5">Recent Posts</h3>
            <div className="space-y-3">
              <a href="#" className="block text-white/80 hover:text-white transition-colors text-base">Skyrocket Your Business</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors text-base">Stunning Website Design</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors text-base">Mobile-Friendly Website</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors text-base">Top SEO Strategies</a>
            </div>
          </div>

          {/* Contact */}
          <div className="sm:mt-6 md:mt-8">
            <h3 className="text-xl font-bold text-white mb-5">Contact</h3>
            <div className="space-y-3">
              <a href="tel:+16162743853" className="block text-white/80 hover:text-white transition-colors text-base">+1 (616) 274-3853</a>
              <a href="mailto:Sales@skyrocketbusiness.io" className="block text-white/80 hover:text-white transition-colors text-base">Sales@skyrocketbusiness.io</a>
              <p className="text-white/80 leading-relaxed text-base">607 Shelby St Suite 700<br />Detroit, MI 48226, USA</p>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 mb-6 md:mb-0 text-base">All Rights Reserved. © Skyrocket Business - 2025</p>
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={facebookIcon} alt="facebook" className="w-10 h-10" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={instagramIcon} alt="instagram" className="w-10 h-10" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={twitterIcon} alt="twitter" className="w-10 h-10" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={linkedinIcon} alt="Linkedin" className="w-10 h-10" />
            </a>
          </div>
        </div>

        {/* Windows Activation Notice */}
        <div className="mt-8 text-right">
          <p className="text-white/50 text-base">Activate Windows</p>
          <p className="text-white/40 text-sm">Go to Settings to activate Windows.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;