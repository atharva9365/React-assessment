import React from 'react'
import "./featurescard.css"
import featureimg from "../../assets/featuresimg.png"

const FeaturesCard = (props) => {
 
  return (
    <>
      <div className='featurecard-section'>
         <div className='featurecard-img'>
            <img src={props.cardImg} alt="" />
         </div>
         <div className='featurecard-content'>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
         </div>
      </div>
    </>
  )
}

export default FeaturesCard