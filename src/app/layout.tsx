import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/i18n'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'İbrahim Çakar | Front-End Developer',
  description: 'Front-End Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="!scroll-smooth">
      <body 
        className={`${inter.className} min-h-screen bg-background text-text antialiased`}
        suppressHydrationWarning={true}
      >
        <LanguageProvider>
          <main className="flex flex-col min-h-screen">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  )
}
