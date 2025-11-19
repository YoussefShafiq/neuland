import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AOSProvider({ children }) {
  const location = useLocation()

  useEffect(() => {
    // Robust, production-ready defaults
    AOS.init({
      startEvent: 'DOMContentLoaded',
      // Global defaults
      delay: 0,
      duration: 700,
      easing: 'ease-out-cubic',
      offset: 80,
      once: false,          // replay on scroll
      mirror: true,         // animate out on scroll up
      anchorPlacement: 'top-bottom',
      // Performance
      debounceDelay: 50,
      throttleDelay: 99,
      // Disable on very small/old devices if needed
      // disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    })

    // Initial refresh in case content is already rendered
    AOS.refreshHard()
  }, [])

  useEffect(() => {
    // Refresh on route change so newly rendered elements get AOS bindings
    AOS.refreshHard()
    // Slight deferred refresh helps when heavy pages mount content with images
    const t = setTimeout(() => AOS.refresh(), 150)
    return () => clearTimeout(t)
  }, [location.pathname])

  return <>{children}</>
}
