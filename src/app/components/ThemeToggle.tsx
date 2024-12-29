'use client'

import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={false}
      animate={{
        rotate: theme === 'dark' ? 180 : 0,
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-6 h-6 flex items-center justify-center text-primary-light dark:text-primary-dark"
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 180 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? <FiMoon /> : <FiSun />}
      </motion.div>
    </motion.button>
  )
} 