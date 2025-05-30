import React from 'react'
import Hero from '../components/Hero'
import ServicesSection from '../components/DigitalSolutions'
import Process from '../components/Process'
import About from '../components/About'
import CaseStudies from '../components/CaseStudy'
import Testimonials from '../components/Testimonials'
import Blogs from '../components/Blogs'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Hero />
    <ServicesSection />
    <Process />
    <About />
    <CaseStudies />
    <Testimonials />
    <Blogs />
    <Contact />
    <Footer />
    </>
  )
}

export default Home