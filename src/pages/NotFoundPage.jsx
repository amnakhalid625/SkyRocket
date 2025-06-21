import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  // Automatically scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-md w-full text-center">
        {/* Error Code */}
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        
        {/* Error Message */}
        <h2 className="text-3xl font-medium text-textColor mb-4">Page Not Found</h2>
        
        {/* Description */}
        <p className="text-lg text-secondaryTextColor mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        {/* Home Button */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-block bg-secondary hover:bg-hoverColor text-textColor text-lg font-medium py-3 px-6 rounded-full transition-colors duration-200"
        >
          Return to Homepage
        </Link>
        
        {/* Optional: Contact Support */}
        <div className="mt-8">
          <p className="text-secondaryTextColor mb-2">
            Need help? <Link 
              to="/contact-us" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-primary underline"
            >
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;