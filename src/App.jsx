import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Contacts from './components/contacts/Contacts'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'
import Nav from './components/nav/Nav'

export const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Contacts />
        <Footer />

    </>
  )
}

export default App