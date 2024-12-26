import React from 'react'
import "./testimonial.css"
import testimg1 from "../../assets/test.png"
import testimg2 from "../../assets/testicon.png"
import symbol1 from "../../assets/Symbol.png"
import arrow from "../../assets/arrowicon.png"

const Testimonial = () => {
  return (
    <>
      <div className='testimonial-heading'>
        <h1>What Our Pharma Partners Say</h1>
        <p>Driving Transformations, One Brand at a Time</p>
      </div>

      <div className='testimonial-section'>
         <div className='testimonial-img'>
           <img src={testimg1} alt="" />
         </div>
         <div className='testimonial-icon'>
          <img src={testimg2} alt="" />
         </div>
        <div className='test-main'>
        <div className='icon-para'>
         <p>Tabish khan</p>
         <img src={symbol1} alt="" />
         </div>
         <div className='test-para'>
          <p>Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regulations while driving remarkable growth.</p>
         </div>
        </div>
      </div>

      <div className='arrow-section'>
        <img src={arrow} alt="" />
      </div>
     
    </>
  )
}

export default Testimonial