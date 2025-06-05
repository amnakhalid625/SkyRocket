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
      </Routes>
    </Router>
  );
}

export default App;
