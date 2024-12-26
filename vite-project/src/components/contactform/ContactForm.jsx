import React from 'react'
import "./contactform.css"


const ContactForm = () => {
  return (
    <>
     
      <div className='contact-heading'>
         <h1>Connect with Our Digital Marketing Experts</h1>
         <p>Reach Out for Tailored Strategies and Results-Driven Solutions. Let's Elevate Your Online Presence Together</p>
      </div> 
      
      <form className='form-container'>
         <div className='form-section'>
           <label htmlFor="name">Name</label>
           <input type="text" id='name' placeholder='Enter your name' />

           <label htmlFor="phone">Phone</label>
           <input type="text" id='Phone' placeholder='Enter your Email'/>

           <label htmlFor="email">E-mail</label>
           <input type="text" id='email' placeholder='Enter your Email'/>
         </div>
         <div className='form-message'>
           <label htmlFor="message">Message</label>
           <textarea  id="message" rows={8} placeholder='Enter your message'></textarea>
         <div className='cta-formbtn'>
           <button>Get Started</button>
         </div>
         </div>
        </form> 
      
     
     
    </>
  )
}

export default ContactForm