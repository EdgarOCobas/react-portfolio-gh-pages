import React from 'react'
import './Experience.css'
import "react-multi-carousel/lib/styles.css";
import { BsPatchCheckFill } from 'react-icons/bs';

export const experience = () => {
  return (
    <section id='experience'>
      <h5>What do I know?</h5>
      <h2>Skills</h2>

      <div className="container experience__container">
        <div className="experience_web">
          <h3>Web</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>ASP.NET MVC</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_soft">
          <h3>Software</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>C#</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience
