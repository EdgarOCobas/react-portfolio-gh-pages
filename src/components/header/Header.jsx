import React from 'react'
import CTA from './CTA'
import Socials from './Socials'
import './Header.css'
import '../../index.css'

export const Header = () => {
  return (
    <header>
        <div className="container header__container">
          <div className='title-container'>
            <h5>Hello, I'm</h5>
            <h1>Edgar Ostrowski</h1>
            <h5>Fullstack Developer</h5>
            <br></br>
            <h4 className='text-light'>Website designer and aspiring software engineer,<br></br>looking to make use of my talents for bigger projects.</h4>
          </div>
          <CTA />
          <Socials/>
          <a href="#footer" className='scroll__down'>Scroll</a>
        </div>
    </header>
  )
}

export default Header
