import React from 'react'
import CV from '../../assets/cv.pdf'
import './Header.css'

export const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Reach out!</a>
    </div>
  )
}

export default CTA
