import React from 'react'
import NavBar from '../components/NavBar'
import LandingPage from '../components/home-page-components/LandingPage'
import Statistics from '../components/home-page-components/Statistics'
import AboutSection from '../components/home-page-components/AboutSection'

const HomePage = () => {
  return (
    <div className='bg-[#fbfbfb] text-[#414141]'>
      <NavBar />
      <LandingPage />
      <Statistics />
      <AboutSection />

    </div>
  )
}

export default HomePage