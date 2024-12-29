import { Variants } from 'framer-motion'

export const ANIMATIONS = {
  skillCard: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  } as Variants,
  
  techBadge: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  } as Variants
} as const 