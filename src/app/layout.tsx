import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JP Silva - General Practitioner & Developer',
  description: 'A dedicated General Practitioner Physician with a passion for programming and fitness',
  keywords: 'JP Silva, General Practitioner, Physician, Programming, Fitness, Healthcare',
  authors: [{ name: 'JP Silva' }],
  openGraph: {
    title: 'JP Silva - General Practitioner & Developer',
    description: 'A dedicated General Practitioner Physician with a passion for programming and fitness',
    type: 'website',
    url: 'https://ertwro.github.io/',
  },
  twitter: {
    card: 'summary',
    title: 'JP Silva - General Practitioner & Developer',
    description: 'A dedicated General Practitioner Physician with a passion for programming and fitness',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1a2a6c',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/cvjpsa.pdf" as="document" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}