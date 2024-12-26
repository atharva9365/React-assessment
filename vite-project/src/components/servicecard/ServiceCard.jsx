import React from 'react'
import "./servicecard.css"

const ServiceCard = (props) => {
  return (
    <>
    <div className='servicecard-section'>
        <div className='servicecard-image-main'>
           <img src={props.cardImg} alt="" />
        </div>
        <div className='servicecard-content'>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    </div>
    </>
  )
}

export default ServiceCard