'use client'

import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react'
import en from './locales/en'
import tr from './locales/tr'

type Language = 'en' | 'tr'
type Translations = typeof en

const translations = { en, tr }

interface LanguageContextType {
  language: Language
  t: (key: string) => string
  changeLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [mounted, setMounted] = useState(false)
  const [language, setLanguage] = useState<Language>('tr')

  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'tr')) {
      setLanguage(savedLanguage)
    } else {
      const browserLang = navigator.language.toLowerCase()
      const newLang = browserLang.startsWith('tr') ? 'tr' : 'en'
      setLanguage(newLang)
      localStorage.setItem('language', newLang)
    }
  }, [])

  const t = useCallback((key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      if (value === undefined) return key
      value = value[k]
    }
    
    return value || key
  }, [language])

  const changeLanguage = useCallback((lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
    window.location.reload()
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 