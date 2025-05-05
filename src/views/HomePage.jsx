import React from 'react'
import NavBar from '../components/NavBar'
import LandingPage from '../components/home-page-components/LandingPage'
import Statistics from '../components/home-page-components/Statistics'
import AboutSection from '../components/home-page-components/AboutSection'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className='bg-[#fbfbfb] text-[#414141]'>
      <NavBar />
      <LandingPage />
      <Statistics />
      <AboutSection />
      <Footer />
    </div>
  )
}

export default HomePage