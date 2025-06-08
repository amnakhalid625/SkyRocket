import React, { useState } from 'react';
import linkedin from '../assets/images/contactLinkedIn.svg';
import Fb from '../assets/images/contactfb.svg';
import insta from '../assets/images/contactInsta.svg';
import twitter from '../assets/images/contactTwitter.svg';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2'


const Form = ({
  headerTag = "Contact Us",
  headerTitle = "Let's Connect and Ignite Your Success",
  headerDescription = "Let's connect and ignite your business success in Detroit! Reach out to Skyrocket Business and learn how our expert web design, marketing, and growth solutions can take your business to the next level.",
  email = "Sales@skyrocketbusiness.io",
  phone = "+1 (616) 274-3853",
  showContactInfo = true,
  nameLabel = "Full Name",
  emailLabel = "Email Address",
  companyLabel = "Company Name",
  servicesLabel = "Services",
  servicesPlaceholder = "Choose One",
  budgetLabel = "Budget",
  messageLabel = "Your Message",
  submitButtonText = "Submit",
  serviceOptions = [
    "Website Design & Development",
    "Social Media Marketing",
    "Content Marketing",
    "SEO (Search Engine Optimization)",
    "Pay Per Click"
  ]
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    services: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const formPayload = new FormData();
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("companyName", formData.companyName);
      formPayload.append("services", formData.services);
      formPayload.append("budget", formData.budget);
      formPayload.append("message", formData.message);
      formPayload.append("access_key", "2a15e9f1-8e16-4ec5-9f2e-3ed3974d05f5");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(Object.fromEntries(formPayload))
      });

      const result = await response.json();

      if (result.success) {
      Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});
        // Reset form
        setFormData({
          name: '',
          email: '',
          companyName: '',
          services: '',
          budget: '',
          message: ''
        });
      } else {
        setIsError(true);
      }
    } catch (error) {
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
      setIsError(true);
    }
  };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          
          {/* Left Column */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="inline-block bg-secondary text-textColor px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                {headerTag}
              </div>
              <h2 className="text-4xl lg:text-[48px] font-medium text-textColor mb-4 leading-tight">
                {headerTitle}
              </h2>
              <p className="text-secondaryTextColor text-lg leading-relaxed ">
                {headerDescription}
              </p>
            </div>

            {showContactInfo && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-textColor mb-1">Email</h3>
                  <a href={`mailto:${email}`} className="text-secondaryTextColor hover:text-primary transition-colors">
                    {email}
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-textColor mb-1">Phone</h3>
                  <a href={`tel:${phone.replace(/\D/g, '')}`} className="text-secondaryTextColor hover:text-hoverColor transition-colors">
                    {phone}
                  </a>
                </div>

                <div className="md:col-span-2">
                  <h3 className="font-semibold text-textColor mb-3">Follow us!</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
                    </a>
                    <a href="https://www.x.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <img src={twitter} alt="X" className="w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <img src={insta} alt="Instagram" className="w-5 h-5" />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <img src={Fb} alt="Facebook" className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Column (Form) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {isSubmitted && (
              <motion.div
                className="bg-green-50 border border-green-200 rounded-lg p-6 text-center mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="text-green-700 text-lg font-medium">
                  Thanks for contacting us! We'll get back to you shortly.
                </div>
              </motion.div>
            )}

            {isError && (
              <motion.div
                className="bg-red-50 border border-red-200 rounded-lg p-6 text-center mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="text-red-600 text-lg font-medium">
                  Oops! Something went wrong. Please try again.
                </div>
              </motion.div>
            )}

            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-base font-medium text-secondaryTextColor mb-2">
                  {nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-base font-medium text-secondaryTextColor mb-2">
                    {emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="abc@company.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="companyName" className="block text-base font-medium text-secondaryTextColor mb-2">
                    {companyLabel}
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="ABC Corp."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="services" className="block text-base font-medium text-secondaryTextColor mb-2">
                    {servicesLabel}
                  </label>
                  <select
                    id="services"
                    name="services"
                    value={formData.services}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white"
                  >
                    <option value="">{servicesPlaceholder}</option>
                    {serviceOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-base font-medium text-secondaryTextColor mb-2">
                    {budgetLabel}
                  </label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="$500-$5,000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-base font-medium text-secondaryTextColor mb-2">
                  {messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write Your Message..."
                  rows={5}
                  maxLength={5000}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-vertical"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-secondary hover:bg-hoverColor text-textColor text-lg font-medium py-3 px-6 rounded-full transition-colors duration-200"
              >
                {submitButtonText}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Form;