import React from 'react'
import "./hero.css"
import headerimg from "../../assets/Header image.png"
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css"; // Specify weight and style

const Hero = () => {
  return (
    <>
    <div className='hero-container'>
       <div className='hero-section'>
         <h1>Elevate <span>Real Estate Success With</span> <br /> Osumare's Digital Expertise</h1>
         <p >Tailored Solutions for Thriving in the Digital Real Estate Landscape</p>
       </div>
       <div className='btnnn'>
       <button>Get started</button>
       </div>
      <div className='hero-img'>
        <img src={headerimg} alt="" />
      </div> 
     </div>
    </>
  )
}

export default Hero