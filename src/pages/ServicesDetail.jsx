import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // ← yeh add karo
import SecondPageHeader from '../components/SecondPageHeader';
import ServicesCard from '../components/ServicesCard';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ServicesDetail = () => {
  const { pathname } = useLocation(); // ← yeh add karo

  useEffect(() => {
    window.scrollTo(0, 0); // ← yeh scroll-to-top ka kaam karega
  }, [pathname]); // ← jab route change ho ya component open ho

  return (
    <>
      <SecondPageHeader />
      <ServicesCard />
      <Contact secondButtonText="Case Studies" secondButtonHref="/case-studies" />
      <Footer />
    </>
  );
};

export default ServicesDetail;
