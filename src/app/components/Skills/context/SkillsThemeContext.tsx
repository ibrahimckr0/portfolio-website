'use client'

import { createContext, useContext, ReactNode } from 'react'

interface ThemeColors {
  primary: string
  secondary: string
  background: string
  text: string
  accent: string
}

const defaultTheme: ThemeColors = {
  primary: '#4B0082',
  secondary: '#6B238E',
  background: '#1a1a1a',
  text: '#ffffff',
  accent: '#764ABC'
}

const SkillsThemeContext = createContext<ThemeColors>(defaultTheme)

export function SkillsThemeProvider({ children, theme = defaultTheme }: { 
  children: ReactNode
  theme?: Partial<ThemeColors>
}) {
  const mergedTheme = { ...defaultTheme, ...theme }
  
  return (
    <SkillsThemeContext.Provider value={mergedTheme}>
      {children}
    </SkillsThemeContext.Provider>
  )
}

export function useSkillsTheme() {
  const context = useContext(SkillsThemeContext)
  if (!context) {
    throw new Error('useSkillsTheme must be used within a SkillsThemeProvider')
  }
  return context
} 