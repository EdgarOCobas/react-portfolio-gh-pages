import React from 'react'
import { FiInstagram } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'
import './Footer.css'

export const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>Edgar O. C.</a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com/edgarostrowski"><FiInstagram /></a>
        <a href="https://github.com/edgarocobas"><AiOutlineGithub /></a>
        <a href="https://www.linkedin.com/in/edgar-ostrowski-cobas-8a775a256/"><AiFillLinkedin /></a>
      </div>
    </footer>
  )
}

export default Footer
