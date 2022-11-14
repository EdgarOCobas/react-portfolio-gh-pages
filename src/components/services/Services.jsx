import React, {useState} from 'react'
import {RiCustomerServiceLine} from 'react-icons/ri'
import {BsArrowRightShort} from 'react-icons/bs'
import {TiTimesOutline} from 'react-icons/ti'
import {BsCheckAll} from 'react-icons/bs'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {TfiServer} from 'react-icons/tfi'
import {CgWebsite} from 'react-icons/cg'
import {SiJirasoftware} from 'react-icons/si'
import './Services.css'

export const services = () => {
  const[toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section id='services'>
      <h5>What do I offer?</h5>
      <h2>Services</h2>
      <div className="services__container container grid">
        <div className="services__content">
          <div className="services__card">
            <CgWebsite className='services__icon'/>
            <h3>Web design</h3>
            <span className="services__btn btn" onClick={() => toggleTab(1)}>View more {"  "}<BsArrowRightShort className='arrow'/>
            </span>

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <TiTimesOutline className='close-icon' onClick={() => toggleTab(0)}/>

                <h3>Front-end Dev</h3>

                <ul className='services_modal-services grid'>
                  <li className="services__modal-service">
                    <BsCheckAll className='check-icon'/>
                    <p>I design and develop user interface</p>
                  </li>
                  <li className="services__modal-service">
                    <BsCheckAll className='check-icon'/>
                    <p>I create UX element interactions</p>
                  </li>
                  <li className="services__modal-service">
                    <BsCheckAll className='check-icon'/>
                    <p>I create single and multi page web applications</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div className="services__card">
            <TfiServer className='services__icon'/>
            <h3 className='back-end-title'>Back-end</h3>
            <span className="services__btn btn" onClick={() => toggleTab(2)}>View more {"  "}<BsArrowRightShort className='arrow'/></span>

            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <TiTimesOutline className='close-icon' onClick={() => toggleTab(0)}/>

                <h3>Back-end Dev</h3>

                <ul className='services_modal-services grid'>
                  <li className="services__modal-service">
                    <BsCheckAll className='check-icon'/>
                    <p>I build and maintain websites</p>
                  </li>
                  <li className="services__modal-service">
                    <BsCheckAll className='check-icon'/>
                    <p>I write high quality code</p>
                  </li>
                  <li className="services__modal-service">
                    <BsCheckAll className='check-icon'/>
                    <p>I debug and test applications</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div className="services__card">
            <SiJirasoftware className='services__icon'/>
            <h3>Software Engineering</h3>
            <span className="services__btn btn" onClick={() => toggleTab(3)}>View more {"  "} <BsArrowRightShort className='arrow'/></span>

            <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <TiTimesOutline className='close-icon' onClick={() => toggleTab(0)}/>

                <h3>Software Dev</h3>

                <ul className='services_modal-services grid'>
                  <li className="services__modal-service">
                    <BsCheckAll className='check-icon'/>
                    <p>I integrate applications</p>
                  </li>
                  <li className="services__modal-service">
                    <BsCheckAll className='check-icon'/>
                    <p>I analyze client requirements</p>
                  </li>
                  <li className="services__modal-service">
                    <BsCheckAll className='check-icon'/>
                    <p>I care for clean and easy-to-read documentations</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default services