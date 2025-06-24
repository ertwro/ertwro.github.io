export const dynamic = 'force-static'

export default function NotFound() {
  return (
    <div className="py-16 px-8 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-white mb-8">404 - Page Not Found</h1>
      <p className="text-lg text-white/90 mb-8">
        The page you are looking for could not be found.
      </p>
      <a 
        href="/" 
        className="inline-block px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white no-underline rounded-full text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        Return Home
      </a>
    </div>
  )
}