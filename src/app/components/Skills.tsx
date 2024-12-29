'use client'

import { motion } from 'framer-motion'
import ScrollAnimation from './animations/ScrollAnimation'
import { useLanguage } from '@/i18n'
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaGitAlt, FaFigma } from 'react-icons/fa'
import { TbBrandNextjs, TbBrandVscode } from 'react-icons/tb'
import { BiLogoTypescript, BiLogoJavascript, BiLogoTailwindCss, BiLogoRedux } from 'react-icons/bi'

const skills = [
  { name: 'React', level: 85, icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', level: 80, icon: TbBrandNextjs, color: '#000000' },
  { name: 'TypeScript', level: 75, icon: BiLogoTypescript, color: '#3178C6' },
  { name: 'Tailwind CSS', level: 90, icon: BiLogoTailwindCss, color: '#06B6D4' },
  { name: 'JavaScript', level: 85, icon: BiLogoJavascript, color: '#F7DF1E' },
  { name: 'HTML/CSS', level: 95, icon: FaHtml5, color: '#E34F26' },
]

const otherTech = [
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'GitHub', icon: FaGithub, color: '#181717' },
  { name: 'VS Code', icon: TbBrandVscode, color: '#007ACC' },
  { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
  { name: 'Redux', icon: BiLogoRedux, color: '#764ABC' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
]

const SkillCard = ({ name, level, icon: Icon, color, index }: { 
  name: string
  level: number
  icon: any
  color: string
  index: number 
}) => {
  return (
    <ScrollAnimation
      animation="slide-up"
      delay={index * 0.1}
      className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
    >
      <motion.div 
        className="text-5xl mb-4"
        style={{ color }}
        animate={{ 
          rotateY: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
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
        }}
      >
        <Icon />
      </motion.div>
      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="h-2.5 rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
          viewport={{ once: true }}
        />
      </div>
      <span className="text-gray-400 mt-2">{level}%</span>
    </ScrollAnimation>
  )
}

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="yetenekler" className="min-h-screen py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
      
      <div className="relative z-10 container mx-auto px-4">
        <ScrollAnimation animation="fade" className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            {t('skills.title')}
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} {...skill} index={index} />
          ))}
        </div>

        <ScrollAnimation animation="slide-up" delay={0.5} className="mt-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-white mb-8">
            {t('skills.otherTech')}
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {otherTech.map((tech, index) => (
              <ScrollAnimation
                key={tech.name}
                animation="scale"
                delay={index * 0.1}
                className="px-6 py-3 bg-gray-800/50 backdrop-blur-lg rounded-full text-gray-300 hover:bg-blue-600/20 transition-colors duration-300 flex items-center gap-2"
              >
                <tech.icon style={{ color: tech.color }} className="text-xl" />
                {tech.name}
              </ScrollAnimation>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
} 