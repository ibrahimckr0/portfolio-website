'use client'

import { LanguageProvider } from '@/i18n'
import { ThemeProvider } from './contexts/ThemeContext'

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  )
} 