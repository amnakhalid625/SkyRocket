import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUsDetails from "./pages/AboutUsDetails";
import ServicesDetail from "./pages/ServicesDetail";
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

        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
