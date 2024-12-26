import React from 'react'
import "./digitalMastery.css"
import image1 from "../../assets/cuate.jpg"
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css"; // Specify weight and style

const DigitalMastery = () => {
  return (
    <>
    <div>
      <div className='digital-heading'>
        <h1>Real Estate-Focused Digital Mastery</h1>
      </div>
    </div>

    <div className='digital-section'>
      <div className='digital-image'>
        <img src={image1} alt="" />
      </div>
      <div className='digital-heading-section'>
        <h1>Unlock the Potential of Digital Real <br />Estate Excellence</h1>
        <p>At Osumare, we understand that the real estate landscape <br /> demands a digital presence 
          that aligns with the intricacies of <br /> property marketing. Our range of
           specialized services is <br /> meticulously designed to catapult your brand's success in the <br /> ever-evolving digital property market.
           Get started</p>
           <button className='btn-digital'>Get started</button>
      </div> 
    </div>


    </>
  )
}

export default DigitalMastery