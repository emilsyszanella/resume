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
        {/* Skip navigation link — A11Y WCAG 2.1 AA */}
        <a
          href="#main-content"
          style={{
            position: 'absolute',
            top: '-100px',
            left: '16px',
            zIndex: 9999,
            background: 'var(--accent-color)',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '14px',
            transition: 'top 0.2s',
          }}
          onFocus={e => e.target.style.top = '16px'}
          onBlur={e => e.target.style.top = '-100px'}
        >
          Skip to main content
        </a>
        <BackgroundEffects />
        <Navbar />
        <main id="main-content" aria-label="Portfolio content">
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
