import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function SpanishAboutPage() {
  return (
    <>
      <Navbar locale="es" />
      <main id="main-content">
        <div className="py-16 px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Acerca de JP Silva</h1>
          <div className="text-lg text-white/90 leading-relaxed space-y-6">
            <p>
              Bienvenido a mi sitio web personal. Soy JP Silva, un médico general dedicado 
              con pasión por la programación y el fitness.
            </p>
            <p>
              Como profesional de la salud, estoy comprometido a brindar atención médica integral 
              mientras me mantengo actualizado con los últimos avances y tecnologías médicas.
            </p>
            <p>
              Más allá de la medicina, disfruto explorando el mundo de la programación y manteniendo 
              un estilo de vida activo a través del ejercicio regular y actividades de fitness.
            </p>
          </div>
        </div>
      </main>
      <Footer locale="es" />
    </>
  )
}