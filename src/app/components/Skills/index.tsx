'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '@/i18n'
import { useRef } from 'react'
import ScrollAnimation from '../animations/ScrollAnimation'
import SkillCard from './SkillCard'
import TechBadge from './TechBadge'
import { MAIN_SKILLS, OTHER_TECH } from './data'

export default function Skills() {
  const { t } = useLanguage()
  const sectionRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <div className="py-20 md:py-32 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute top-20 -left-32 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2, opacity }}
          className="absolute bottom-20 -right-32 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-l from-primary/30 to-secondary/30 rounded-full blur-3xl"
        />
        
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * 500,
                Math.random() * 500,
              ],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative">
        <ScrollAnimation>
          <motion.div 
            className="text-center mb-16"
            style={{ scale }}
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary text-sm mb-4 rounded-full backdrop-blur-sm">
              {t('skills.title')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {t('skills.title')}
            </h2>
          </motion.div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {MAIN_SKILLS.map((skill, index) => (
            <ScrollAnimation key={skill.name}>
              <SkillCard {...skill} />
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation>
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-text-secondary">
              {t('skills.otherTech')}
            </h3>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="flex flex-wrap justify-center gap-4">
            {OTHER_TECH.map((tech) => (
              <TechBadge key={tech.name} {...tech} />
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
} 