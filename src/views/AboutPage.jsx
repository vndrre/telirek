import React from 'react'
import NavBar from '../components/NavBar'
import AboutHeader from '../components/about-page-component/AboutHeader'
import AboutInfo from '../components/about-page-component/AboutInfo'

const AboutPage = () => {
  return (
    <div className='bg-[#fbfbfb] text-[#414141]'>
        <NavBar />
        <AboutHeader />
        <AboutInfo />
    </div>
  )
}

export default AboutPage
