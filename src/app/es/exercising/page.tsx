import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function SpanishExercisingPage() {
  return (
    <>
      <Navbar locale="es" />
      <main id="main-content">
        <div className="py-16 px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Ejercicio y Fitness</h1>
          <div className="text-lg text-white/90 leading-relaxed space-y-6">
            <p>
              El fitness físico es una parte esencial de mi vida, tanto personal como profesionalmente. 
              Como médico, entiendo la importancia crítica de mantener una buena salud a través 
              del ejercicio regular y la nutrición adecuada.
            </p>
            <p>
              Creo en practicar lo que predico a mis pacientes sobre los beneficios de un estilo de vida activo. 
              El ejercicio regular no solo me mantiene físicamente en forma, sino que también me ayuda a mantener 
              la claridad mental necesaria para mi práctica médica y trabajo de programación.
            </p>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Mis intereses de fitness incluyen:</h2>
              <ul className="list-disc list-inside space-y-2 text-white/80">
                <li>Entrenamiento cardiovascular</li>
                <li>Entrenamiento de fuerza</li>
                <li>Fitness funcional</li>
                <li>Actividades al aire libre</li>
                <li>Nutrición y bienestar</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer locale="es" />
    </>
  )
}