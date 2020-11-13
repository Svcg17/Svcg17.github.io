import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Avatar from '../assets/Avatar.svg'
import useWindowSize from '../hooks/useWindowSize'
import HomePage from '../components/Homepage'
import Projects from '../components/Projects'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'
import SocialIcons from '../components/SocialIcons'
import '../styles/_index.scss'

// Uses React Helmet component to change document head
const Meta = () => (
  <Helmet>
    <meta charSet='utf-8' />
    <meta name='title' content='Sofia Cheung' />
    <meta name='description' content="Sofia Cheung, software developer personal website" />
    <title>Sofia Cheung</title>
  </Helmet>
)

const Index = () => {
  const [open, setOpen] = useState(false)
  const windowSize = useWindowSize()

  // Require and set smooth scrool for all anchors
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <>
      <main>
        <Meta />
        <section className='sidebar'>
          <div>
            <button className='button' onClick={() => setOpen(!open)}>
              <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
            <div className='innerLinks'>
              <Link to='/'><img className='avatar' src={Avatar} alt='avatar icon' /></Link>
                <div className={`nav ${ windowSize > 991 || open ? 'open' : 'close'}`}>
                  <Link className='button' to='#homepage'>Home</Link>
                  <Link className='button' to='#projects'>Projects</Link>
                  <Link className='button' to='#aboutme'>About me</Link>
                  <Link className='button' to='#contactme'>Contact me</Link>
                  <SocialIcons />
                </div>
            </div>
          </div>
        </section>
        <section className='content'>
          <HomePage />
          <Projects />
          <AboutMe />
          <ContactMe />
        </section>
      </main>
      <footer>Copyright © 2020 Sofía Cheung</footer>
    </>
  )
}

export default Index;
