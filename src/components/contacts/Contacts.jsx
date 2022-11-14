import React, {useRef} from 'react'
import './Contacts.css'
import {AiOutlineMessage} from 'react-icons/ai'
import {BsArrowRightShort} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import {AiOutlineSend} from 'react-icons/ai'
import emailjs from '@emailjs/browser'

export const Contacts = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hzqrfu8', 'template_7j4uwdq', form.current, 'TmBO3mzayXJG192rJ')
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Let's get in touch</h5>
      <h2>Contact</h2>

      <div className="contact__container">
        <div className="contact__content">
          <h3 className='contact-title'>Reach out</h3>

          <div className="contact__info">
            <div className="contact__card">
              <FiMail className='contact-icon'/>

              <h3 className="contact__card-title">E-mail</h3>
              <span className='text-light contact__card-details'>edgar.os.cobas@gmail.com</span>

              <a href="mail.google.com" target='_blank' className='anchor'>Write to me{"  "} <BsArrowRightShort className='anim-icon'/> </a>
            </div>

            <div className="contact__card">
              <AiOutlineMessage className='contact-icon'/>

              <h3 className="contact__card-title">Messenger</h3>
              <span className='contact__card-details'>ig.me/m/edgarostrowski</span>

              <a href="https://www.instagram.com/edgarostrowski" target='_blank' className='anchor'>Write to me{"  "} <BsArrowRightShort className='anim-icon'/> </a>
            </div>

            <div className="contact__card">
              <FaWhatsapp className='contact-icon'/>

              <h3 className="contact__card-title">WhatsApp</h3>
              <span className='contact__card-details'>+48 573 257 258</span>

              <a href="https://www.whatsapp.com" target='_blank'  className='anchor'>Write to me{"  "} <BsArrowRightShort className='anim-icon'/> </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact-title">Shoot me an e-mail!</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input type="text" name='name'
              className='contact__form-input'
              placeHolder='Name'/>
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">E-mail</label>
              <input type="email" name='email'
              className='contact__form-input'
              placeHolder='E-mail'/>
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Message</label>
              <textarea name="message" cols="30" rows="10" className='contact__form-area' placeholder='Input your message'></textarea>
            </div>

            <button className='contact__button btn'>Send Message <AiOutlineSend /></button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contacts