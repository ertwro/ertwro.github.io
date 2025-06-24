'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface NavbarProps {
  locale?: 'en' | 'es'
}

const translations = {
  nav: {
    home: { en: 'Home', es: 'Inicio' },
    about: { en: 'About', es: 'Acerca de' },
    cv: { en: 'CV', es: 'CV' },
    medicine: { en: 'Medicine', es: 'Medicina' },
    programming: { en: 'Programming', es: 'Programación' },
    exercising: { en: 'Exercising', es: 'Ejercicio' }
  }
}

export function Navbar({ locale = 'en' }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = translations.nav
  const basePath = locale === 'es' ? '/es' : ''

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('.nav-menu')
      const toggle = document.querySelector('.menu-toggle')
      
      if (nav && toggle && !nav.contains(event.target as Node) && !toggle.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 flex justify-between items-center px-8 py-4 nav-blur z-[1000] transition-all duration-300">
      <div className="logo">
        <h1 className="text-2xl font-bold text-white tracking-tight">JP Silva</h1>
      </div>

      {/* Mobile menu toggle */}
      <button
        className={`menu-toggle flex flex-col cursor-pointer p-2 bg-transparent border-none z-[1001] md:hidden ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
      </button>

      {/* Navigation menu */}
      <ul className={`nav-menu flex items-center gap-2 md:gap-2 ${
        isMenuOpen 
          ? 'fixed top-0 right-0 w-full h-screen bg-nav-gradient backdrop-blur-xl flex-col justify-center z-[999] transition-all duration-300'
          : 'max-md:fixed max-md:top-0 max-md:-right-full max-md:w-full max-md:h-screen max-md:bg-nav-gradient max-md:backdrop-blur-xl max-md:flex-col max-md:justify-center max-md:z-[999] max-md:transition-all max-md:duration-300'
      }`}>
        <li className={`${isMenuOpen ? 'opacity-0 translate-y-8 animate-slide-in-up' : ''}`} style={{ animationDelay: '0.1s' }}>
          <Link 
            href={basePath || '/'} 
            className="text-white no-underline text-sm font-medium px-4 py-3 rounded-lg transition-all duration-300 whitespace-nowrap tracking-wide hover:text-primary-500 hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-lg md:text-base md:px-8 md:py-4 md:bg-white/15 md:border md:border-white/30 md:font-semibold"
            onClick={closeMenu}
            aria-current="page"
          >
            {t.home[locale]}
          </Link>
        </li>
        <li className={`${isMenuOpen ? 'opacity-0 translate-y-8 animate-slide-in-up' : ''}`} style={{ animationDelay: '0.15s' }}>
          <Link 
            href={`${basePath}/about`} 
            className="text-white no-underline text-sm font-medium px-4 py-3 rounded-lg transition-all duration-300 whitespace-nowrap tracking-wide hover:text-primary-500 hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-lg md:text-base md:px-8 md:py-4 md:bg-white/15 md:border md:border-white/30 md:font-semibold"
            onClick={closeMenu}
          >
            {t.about[locale]}
          </Link>
        </li>
        <li className={`${isMenuOpen ? 'opacity-0 translate-y-8 animate-slide-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>
          <Link 
            href="/cvjpsa.pdf" 
            target="_blank" 
            rel="noopener"
            className="text-white no-underline text-sm font-medium px-4 py-3 rounded-lg transition-all duration-300 whitespace-nowrap tracking-wide hover:text-primary-500 hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-lg md:text-base md:px-8 md:py-4 md:bg-white/15 md:border md:border-white/30 md:font-semibold"
            onClick={closeMenu}
          >
            {t.cv[locale]}
          </Link>
        </li>
        <li className={`${isMenuOpen ? 'opacity-0 translate-y-8 animate-slide-in-up' : ''}`} style={{ animationDelay: '0.25s' }}>
          <Link 
            href="/conduct_medicine" 
            className="text-white no-underline text-sm font-medium px-4 py-3 rounded-lg transition-all duration-300 whitespace-nowrap tracking-wide hover:text-primary-500 hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-lg md:text-base md:px-8 md:py-4 md:bg-white/15 md:border md:border-white/30 md:font-semibold"
            onClick={closeMenu}
          >
            {t.medicine[locale]}
          </Link>
        </li>
        <li className={`${isMenuOpen ? 'opacity-0 translate-y-8 animate-slide-in-up' : ''}`} style={{ animationDelay: '0.3s' }}>
          <Link 
            href={`${basePath}/programming`} 
            className="text-white no-underline text-sm font-medium px-4 py-3 rounded-lg transition-all duration-300 whitespace-nowrap tracking-wide hover:text-primary-500 hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-lg md:text-base md:px-8 md:py-4 md:bg-white/15 md:border md:border-white/30 md:font-semibold"
            onClick={closeMenu}
          >
            {t.programming[locale]}
          </Link>
        </li>
        <li className={`${isMenuOpen ? 'opacity-0 translate-y-8 animate-slide-in-up' : ''}`} style={{ animationDelay: '0.35s' }}>
          <Link 
            href={`${basePath}/exercising`} 
            className="text-white no-underline text-sm font-medium px-4 py-3 rounded-lg transition-all duration-300 whitespace-nowrap tracking-wide hover:text-primary-500 hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-lg md:text-base md:px-8 md:py-4 md:bg-white/15 md:border md:border-white/30 md:font-semibold"
            onClick={closeMenu}
          >
            {t.exercising[locale]}
          </Link>
        </li>
        <li className={`${isMenuOpen ? 'opacity-0 translate-y-8 animate-slide-in-up' : ''}`} style={{ animationDelay: '0.4s' }}>
          <div className="flex gap-1">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-300 min-w-[45px] text-center ${
                locale === 'en'
                  ? 'bg-white/90 text-primary-600 border border-white/90'
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40'
              }`}
              aria-label="Switch to English"
            >
              EN
            </Link>
            <Link
              href="/es"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-300 min-w-[45px] text-center ${
                locale === 'es'
                  ? 'bg-white/90 text-primary-600 border border-white/90'
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40'
              }`}
              aria-label="Switch to Spanish"
            >
              ES
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  )
}