import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import DigitalMastery from '../../components/digitalMastery/DigitalMastery'
import Services from '../../components/services/Services'
import ServiceCard from '../../components/servicecard/ServiceCard'
import Features from '../../components/features/Features'
import FeaturesCard from '../../components/featurescard/FeaturesCard'
import Enquries from '../../components/enquries/Enquries'
import EnquiriesCard from '../../components/enquirecard/EnquiriesCard'
import EnquiryCard2 from '../../components/enquirycard2/EnquiryCard2'
import PeaceofMind from '../../components/peaceofmind/PeaceofMind'
import Testimonial from '../../components/testimonial/Testimonial'
import Faq from '../../components/faq/Faq'
import ContactForm from '../../components/contactform/ContactForm'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <>
     <Navbar/>
     <Hero/>
     <DigitalMastery/>
     <Services/>
     {/* <ServiceCard/> */}
     <Features/>
     {/* <FeaturesCard/> */}
     <Enquries/>
     {/* <EnquiriesCard/> */}
     {/* <EnquiryCard2/> */}
     <PeaceofMind/>
     <Testimonial/>
     <Faq/>
     <ContactForm/>
     <Footer/>
    </>
  )
}

export default Home