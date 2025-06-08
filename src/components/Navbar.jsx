import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import navArrow from '../assets/images/NavArrow.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'About', to: '/about-us' },
    { name: 'Services', to: '/services' },
    { name: 'Pricing', to: '/pricing' },
    { name: 'Case Studies', to: '/case-studies' },
    { name: 'Blog', to: '/blogs' },
    { name: 'Contact', to: '/contact-us' },
  ];

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 max-w-[83rem] mx-auto font-medium">
        {/* Logo and Hamburger Button (Mobile) */}
        <div className="flex lg:hidden items-center justify-between w-full">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={logo}
              alt="SkyRocket Logo" 
              className="h-10 transition-opacity hover:opacity-80 duration-200"  
            />
          </Link>

          <button 
            className="focus:outline-none z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={logo}
              alt="SkyRocket Logo" 
              className="h-12 transition-opacity hover:opacity-80 duration-200"  
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-6 text-textColor font-medium">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.to} 
                className="hover:text-accent transition-colors duration-200 ease-in-out"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="flex">
            <Link 
              to="/contact-us" 
              className="group flex items-center space-x-2 bg-secondary hover:bg-hoverColor text-textColor px-5 py-3 rounded-full transition-all duration-300 ease-in-out"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                Contact Us
              </span>
              <img 
                src={navArrow}
                alt="navigation arrow" 
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"  
              />
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div 
          className="absolute inset-0 bg-textColor bg-opacity-50"
          onClick={toggleMenu}
        />
        
        <div className={`absolute top-0 left-0 w-full h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <img src={logo} alt="SkyRocket Logo" className="h-10" />
            </Link>
            <button 
              className="focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.to} 
                onClick={() => setIsMenuOpen(false)}
                className="block py-4 text-2xl text-textColor hover:text-accent transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
