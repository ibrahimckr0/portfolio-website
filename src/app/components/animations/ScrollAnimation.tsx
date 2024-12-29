'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  animation?: 'fade' | 'slide-up' | 'slide-right' | 'slide-left' | 'scale' | 'rotate'
  duration?: number
  delay?: number
}

const animations = {
  'fade': {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
  },
  'slide-up': {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
  },
  'slide-right': {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
  },
  'slide-left': {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
  },
  'scale': {
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
  },
  'rotate': {
    initial: { opacity: 0, rotate: -180, scale: 0.5 },
    whileInView: { opacity: 1, rotate: 0, scale: 1 },
  },
}

export default function ScrollAnimation({ 
  children, 
  className = '', 
  animation = 'fade',
  duration = 0.8,
  delay = 0
}: ScrollAnimationProps) {
  return (
    <motion.div
      className={className}
      initial={animations[animation].initial}
      whileInView={animations[animation].whileInView}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  )
} 