import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'

export default function SpanishHomePage() {
  return (
    <>
      <Navbar locale="es" />
      <main id="main-content">
        <HeroSection locale="es" />
      </main>
      <Footer locale="es" />
    </>
  )
}