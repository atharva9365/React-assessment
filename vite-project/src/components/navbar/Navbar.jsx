import React from 'react'
import logo from "../../assets/logo.jpg"
import "./navbar.css"

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
         <div className='section'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
         </div>
         <div className='cta-bttn'>
            <button>Contact Us</button>
         </div>
      </div>
    </>
  )
}

export default Navbar