import React from 'react'
import './About.css'
import {SlGraduation} from 'react-icons/sl'
import {AiOutlineFolderOpen} from 'react-icons/ai'
import {FiAward} from 'react-icons/fi'
import me from '../../assets/me.jpg'

export const About = () => {
  return (
    <section id='about'>
      <h5>Who exactly am I?</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-img'>
            <img src={me} className='profile__img' alt="Profile"/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <SlGraduation className='about__icon'/>
              <h5>Education</h5>
              <small>2019-2023</small>
            </article>
            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Courses</h5>
              <small>10+ completed</small>
            </article>
            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Personal Work</h5>
              <small>10+ projects</small>
            </article>
          </div>

          <p>I'm Edgar, a programming enthusiast based in Warsaw, Poland. My passion for computer science began at an early age, first coding basic scripts in Lua for amateur game projects. Later on, I've introduced myself to other more complex technologies that have allowed me to expand my knowledge and develop unique projects of all categories.</p>

          <a href="#contact" className='btn'>Send a message</a>
        </div>
      </div>
    </section>
  )
}

export default About