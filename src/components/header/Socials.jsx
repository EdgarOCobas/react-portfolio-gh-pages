import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import './Header.css'

export const Socials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/edgar-ostrowski-cobas-8a775a256/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/EdgarOCobas" target="_blank"><BsGithub/></a>
        <a href="https://instagram.com/edgarostrowski" target="_blank"><FaInstagram/></a>
    </div>
  )
}

export default Socials