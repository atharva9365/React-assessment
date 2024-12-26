  import React from 'react'
  import "./services.css"
  import "@fontsource/montserrat"; // Defaults to weight 400
  import "@fontsource/montserrat/400.css"; // Specify weight
  import "@fontsource/montserrat/400-italic.css";
  import icon from "../../assets/icon.png"
  import icon2 from "../../assets/icon2.png"
  import icon3 from "../../assets/icon3.png"
  import icon4 from "../../assets/icon4.png"
  import icon5 from "../../assets/icon5.png"
  import icon6 from "../../assets/icon6.png"
  import icon7 from "../../assets/icon7.png"
  import icon8 from "../../assets/icon8.png"
  import ServiceCard from '../servicecard/ServiceCard';

  const Services = () => {
    const serviceCardData = [
      {
        id:1,
        cardImg:icon,
        title:"Automative SEO",
        description:"Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today"
      },
      {
        id:2,
        cardImg:icon2,
        title:"PPC Precision",
        description:"Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today"
      },
      {
        id:3,
        cardImg:icon3,
        title:"Social Acceleration",
        description:" Engage and influence your audience across social media platforms, amplifying your brand's presence and connection."
      },
      {
        id:4,
        cardImg:icon4,
        title:"Content Excellence",
        description:"Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement."
      },
      {
        id:5,
        cardImg:icon5,
        title:"Web Design",
        description:"Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions."
      },
      {
        id:6,
        cardImg:icon6,
        title:"Data-Driven Insights",
        description:"Leverage data to refine your strategies, making informed decisions that drive revenue growth."
      },
      {
        id:7,
        cardImg:icon7,
        title:"End-to-End Solutions",
        description:"From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey."
      },
      {
        id:8,
        cardImg:icon8,
        title:"Video marketing",
        description:"Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories."
      },
    ]
    return (
      <>
      <div className='service-section'>
        <div className='service-heading'>
            <h1>Our Service Offerings</h1>
        </div>
        <div className='service-para'>
          <p>Strategies that Drive Property Market Excellence</p>
        </div>
      </div>

      <div className='services-session'>
        {
          serviceCardData.map((servicecard,index)=>(
          <ServiceCard key={index} cardImg={servicecard.cardImg}
            title={servicecard.title} 
            description={servicecard.description} />
          ))
        }
        <button className='cta-btnmm'>Get Started</button>
      </div>
      </>
    )
  }

  export default Services