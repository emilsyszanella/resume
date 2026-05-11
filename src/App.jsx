import { useState } from 'react'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import FeaturedProjects from './components/FeaturedProjects'
import ContactSection from './components/ContactSection'
import BackgroundEffects from './components/BackgroundEffects'
import CorePhilosophy from './components/CorePhilosophy'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="app">
        <BackgroundEffects />
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <CorePhilosophy />
          <FeaturedProjects />
          <Testimonials />
          <ContactSection />
        </main>
      </div>
    </MotionConfig>
  )
}

export default App
