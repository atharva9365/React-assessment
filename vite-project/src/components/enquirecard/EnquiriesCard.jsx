import React from 'react'
import "./enquiriescard.css"


const EnquiriesCard = (props) => {
  return (
    <>
     <div className='enquirycard-section'>
           <div className='enquirycard-img'>
              <img src={props.card1} alt="" />
           </div>
        <div className='enquirycard-content'>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
     </div>
    </>
  )
}

export default EnquiriesCard