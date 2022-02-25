import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/subhankar_das.png'
import Socials from './Socials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Subhankar Das</h1>
        <h5 className='text-light'>Computer Science Engineer</h5>
        <CTA />
        <Socials />

        <div className="me">
          <img src={ME} alt="Subhankar Das" />
        </div>
        
        <a href="#footer" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
