import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function SpanishProgrammingPage() {
  return (
    <>
      <Navbar locale="es" />
      <main id="main-content">
        <div className="py-16 px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Programación</h1>
          <div className="text-lg text-white/90 leading-relaxed space-y-6">
            <p>
              La programación es una de mis pasiones junto con la medicina. Disfruto trabajando con varias 
              tecnologías y creando soluciones que pueden mejorar los flujos de trabajo sanitarios y la atención al paciente.
            </p>
            <p>
              Mis intereses en programación incluyen desarrollo web, informática sanitaria y construcción 
              de herramientas que conectan la tecnología y la medicina.
            </p>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Tecnologías con las que trabajo:</h2>
              <ul className="list-disc list-inside space-y-2 text-white/80">
                <li>JavaScript/TypeScript</li>
                <li>React & Next.js</li>
                <li>Python</li>
                <li>APIs de salud y FHIR</li>
                <li>Diseño y gestión de bases de datos</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer locale="es" />
    </>
  )
}