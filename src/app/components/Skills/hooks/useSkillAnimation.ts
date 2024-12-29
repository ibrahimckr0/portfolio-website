import { useMemo } from 'react'

export function useSkillAnimation(index: number) {
  return useMemo(() => ({
    icon: {
      animate: { 
        rotateY: [0, 360],
        scale: [1, 1.1, 1]
      },
      transition: { 
        rotateY: {
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        },
        scale: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }
      }
    },
    progressBar: {
      initial: { width: 0 },
      whileInView: { width: '100%' },
      transition: { duration: 1, delay: 0.5 + index * 0.1 },
      viewport: { once: true }
    }
  }), [index])
} 