import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUsDetails from "./pages/AboutUsDetails";
import ServicesDetail from "./pages/ServicesDetail";
import PricingDetails from "./pages/PricingDetails";
import CaseStudiesDetail from "./pages/CaseStudiesDetail";
import BlogsDetail from "./pages/BlogsDetail";
import Articles from "./components/Articles";
import ContactDetail from "./pages/ContactDetail";
import WebDevelopmentLearnMore from "./pages/WebDevelopmentLearnMore";
import SocialMediaLearnMore from "./pages/SocialMediaLearnMore";
import ContentCreationLearnMore from "./pages/ContentCreationLearnMore";
import SeachOptimizationLearnMore from "./pages/SearchOptimizationLearnMore";
import PayClickLearnMore from "./pages/PayClickLearnMore";
import EmailMarketingLearnMore from "./pages/EmailMarketingLearnMore";
import WigShopDetail from "./pages/WigShopDetail";
import HomeCleanerProjectDetail from "./pages/HomeCleanerProjectDetail";
// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here */}
        <Route path="/about-us" element={<AboutUsDetails />} />
        <Route path="/services" element={<ServicesDetail />} />
        <Route path="/pricing" element={<PricingDetails />} />
        <Route path="/case-studies" element={<CaseStudiesDetail />} />
        <Route path="/blogs" element={<BlogsDetail />} />
         <Route path="/contact-us" element={<ContactDetail/>} />
         <Route path="/services/detroit-website-design-and-development" element={<WebDevelopmentLearnMore />} />
         <Route path="/services/social-media-management" element={<SocialMediaLearnMore />} />
         <Route path="/services/content-creation-marketing" element={<ContentCreationLearnMore/>} />
         <Route path="/services/search-engine-optimization" element={<SeachOptimizationLearnMore/>} />
         <Route path="/services/pay-per-click-advertising" element={<PayClickLearnMore/>} />
         <Route path="/services/email-marketing" element={<EmailMarketingLearnMore/>} />
         <Route path="/case-study/lehost-hair-wig-shop-boosting-online-presence-and-sales" element={<WigShopDetail />} />
         <Route path="/case-study/mop-and-glow-cleaning-company-building-trust-and-driving-local-leads" element={<HomeCleanerProjectDetail />} />





      </Routes>
    </Router>
  );
}

export default App;
