import React from 'react'
import "./enquirycard2.css";

const EnquiryCard2 = (props) => {
  return (
    <>
      <div className='enquirycard2-section'>
        <div className='enquirycard2-img'>
           <img src={props.section1} alt="" />
        </div>
        <div className='enquirycard2-content'>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
      </div>
    </>
  )
}

export default EnquiryCard2