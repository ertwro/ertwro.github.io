import Link from 'next/link'

interface HeroSectionProps {
  locale?: 'en' | 'es'
}

const translations = {
  hero: {
    title: { en: 'Meet JP Silva', es: 'Conoce a JP Silva' },
    subtitle: { 
      en: 'A dedicated General Practitioner Physician with a passion for programming and fitness.',
      es: 'Un médico general dedicado con pasión por la programación y el fitness.'
    },
    cta_button: { en: 'View My CV', es: 'Ver Mi CV' }
  }
}

export function HeroSection({ locale = 'en' }: HeroSectionProps) {
  const t = translations.hero

  return (
    <section className="text-center py-16 px-8 max-w-4xl mx-auto" aria-labelledby="hero-title">
      <h1 
        id="hero-title" 
        className="text-4xl md:text-5xl lg:text-6xl mb-6 font-extrabold text-white text-shadow tracking-tight leading-tight"
      >
        {t.title[locale]}
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto text-white/90 font-normal leading-relaxed">
        {t.subtitle[locale]}
      </p>
      <Link 
        href="/cvjpsa.pdf" 
        target="_blank" 
        rel="noopener"
        className="inline-block px-10 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white no-underline rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-xl border-2 border-white/10 hover:border-white/20 tracking-wide"
      >
        {t.cta_button[locale]}
      </Link>
    </section>
  )
}