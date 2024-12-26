import "./enquries.css"
import React from 'react'
import image1 from "../../assets/cuate.jpg"
import enquiryimg from "../../assets/enquiryimg.png"
import enquirycard1 from "../../assets/enquirycard1.png"
import EnquiriesCard from "../enquirecard/EnquiriesCard"
import enquirycard2 from "../../assets/enquirycard2.png"
import enquirycard3 from "../../assets/enquirycard3.png"
import enquirycard4 from "../../assets/enquirycard4.png"
import enquirysectionn1 from "../../assets/enquirysection1.png"
import EnquiryCard2 from "../enquirycard2/EnquiryCard2"
import enquirysectionn2 from "../../assets/enquirysection2.png"
import enquirysectionn3 from "../../assets/enquirysection3.png"
import enquirysectionn4 from "../../assets/enquirysection4.png"

const Enquries = () => {
  const enquirycardData = [
    {
      id:1,
       card1:enquirycard1,
       title:"Call-to-Action Optimization",
       description:"Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates."
    },
    {
      id:2,
       card1:enquirycard2,
       title:"Landing Page Efficiency",
       description:"Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission."
    },
    {
      id:3,
       card1:enquirycard3,
       title:"Social Proof Utilization",
       description:"Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action."
    },
    {
      id:4,
       card1:enquirycard4,
       title:"Call-to-Action Optimization",
       description:"With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers."
    },

  ]

  const enquirycard2Data = [
     {
      id:1,
      section1:enquirysectionn1,
      title:"Effective CTAs",
      description:" See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency."
     },
     {
      id:2,
      section1:enquirysectionn2,
      title:"Conversion-Optimized Landing Pages",
      description:"See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agencyExplore a case study where our landing page optimization increased property lead conversion rates by 30%."
     }, 
     {
      id:3,
      section1:enquirysectionn3,
      title:"Trust Building with Social Proof",
      description:"Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project"
     },
     {
      id:4,
      section1:enquirysectionn4,
      title:"Mobile-First Success:",
      description:"Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency."
     },
  ]
  return (
    <>
      <div className='enquriy-section'>
        <div className='enquriy-heading'>
            <h1>Driving Property Inquiries to Conversions</h1>
        </div>
        <div className='enquriy-para'>
          <p>Streamlined Strategies for Real Estate Success</p>
        </div>
      </div>

    <div className='enquiry-bio'>
      <div className='enquiry-image'>
        <img src={enquiryimg} alt="" />
      </div>
      <div className='enquiry-heading-section'>
        <h1>Optimized Path to Property Purchase</h1>
          <p>In the dynamic realm of real estate, the journey from a <br /> property inquiry to a successful 
             conversion demands a well- <br />crafted approach. At Osumare, we specialize in guiding <br />potential
             buyers through this journey seamlessly,<br />maximizing inquiries-turned-conversions with expert <br />
             strategies.</p>
             <button className='btn-enquiry'>Get started</button>
       </div>
    </div>

    <div className="enquiry-heading2">
      <h2>Driving Property Inquiries to Conversions</h2>
    </div>


    <div className="enquirycard-session">
        {
          enquirycardData.map((enquirecard,index)=>(
           <EnquiriesCard key={index} card1 = {enquirecard.card1}
            title={enquirecard.title} description={enquirecard.description} />
          ))
        }
    </div>

    <div className="enquiry-heading3">
      <h2>Our Expertise in Action</h2>
    </div>

    <div className="enquirycard2-session">
       {
        enquirycard2Data.map((enquiryscard2,index)=>(
          <EnquiryCard2 key={index} section1={enquiryscard2.section1}
            title={enquiryscard2.title} 
            description={enquiryscard2.description}/>
        ))
       }
    </div>
    </>
  )
}

export default Enquries
