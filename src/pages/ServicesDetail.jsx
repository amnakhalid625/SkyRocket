import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import SecondPageHeader from '../components/SecondPageHeader';
import ServicesCard from '../components/ServicesCard';
import Contact from '../components/Contact';

const ServicesDetail = () => {
  const { pathname } = useLocation(); 

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]); 
  return (
    <>
      <SecondPageHeader />
      <ServicesCard />
      <Contact secondButtonText="Case Studies" secondButtonHref="/case-studies" />
    </>
  );
};

export default ServicesDetail;
