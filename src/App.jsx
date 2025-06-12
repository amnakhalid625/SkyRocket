import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUsDetails from "./pages/AboutUsDetails";
import ServicesDetail from "./pages/ServicesDetail";
import PricingDetails from "./pages/PricingDetails";
import CaseStudiesDetail from "./pages/CaseStudiesDetail";
import BlogsDetail from "./pages/BlogsDetail";
import ContactDetail from "./pages/ContactDetail";
import WebDevelopmentLearnMore from "./pages/WebDevelopmentLearnMore";
import SocialMediaLearnMore from "./pages/SocialMediaLearnMore";
import ContentCreationLearnMore from "./pages/ContentCreationLearnMore";
import SeachOptimizationLearnMore from "./pages/SearchOptimizationLearnMore";
import PayClickLearnMore from "./pages/PayClickLearnMore";
import EmailMarketingLearnMore from "./pages/EmailMarketingLearnMore";
import WigShopDetail from "./pages/WigShopDetail";
import HomeCleanerProjectDetail from "./pages/HomeCleanerProjectDetail";
import NutriShopDetail from "./pages/NutriShopDetail";
import SquineSlateDetail from "./pages/SquineSlateDetail";
import LisburnDetail from "./pages/LisburnDetail";
import UXPost from "./pages/UXPost";
import MobileDesignPost from "./pages/MobileDesignPost";
import WebDesignPost from "./pages/WebDesignPost";
import TeamMemberProfile from "./components/TeamMemberProfile";

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
        <Route path="/contact-us" element={<ContactDetail />} />
        <Route path="/services/detroit-website-design-and-development" element={<WebDevelopmentLearnMore />} />
        <Route path="/services/social-media-management" element={<SocialMediaLearnMore />} />
        <Route path="/services/content-creation-marketing" element={<ContentCreationLearnMore />} />
        <Route path="/services/search-engine-optimization" element={<SeachOptimizationLearnMore />} />
        <Route path="/services/pay-per-click-advertising" element={<PayClickLearnMore />} />
        <Route path="/services/email-marketing" element={<EmailMarketingLearnMore />} />
        <Route path="/case-study/lehost-hair-wig-shop-boosting-online-presence-and-sales" element={<WigShopDetail />} />
        <Route path="/case-study/mop-and-glow-cleaning-company-building-trust-and-driving-local-leads" element={<HomeCleanerProjectDetail />} />
        <Route path="/case-study/nutrivita-shop-boosting-e-commerce-sales-with-a-streamlined-online-store" element={<NutriShopDetail />} />
        <Route path="/case-study/sequins-and-slate-interior-design-company" element={<SquineSlateDetail />} />
        <Route path="/case-study/lisburn-web-design-crafting-a-strong-online-presence-for-local-businesses" element={<LisburnDetail />} />
        <Route path="/blog/understanding-user-experience-ux-and-its-impact-on-conversion-rates" element={<UXPost />} />
        <Route path="/blog/the-importance-of-mobile-first-design-for-local-businesses-in-2025" element={<MobileDesignPost />} />
        <Route path="/blog/why-choose-a-nearby-web-design-business-in-detroit" element={<WebDesignPost />} />
              <Route path="/team/:memberName" element={<TeamMemberProfile />} />







      </Routes>
    </Router>
  );
}

export default App;
