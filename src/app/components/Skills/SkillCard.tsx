'use client'

import { motion } from 'framer-motion'
import { IconType } from 'react-icons'

interface SkillCardProps {
  name: string
  level: number
  icon: IconType
  color: string
}

export default function SkillCard({ name, level, icon: Icon, color }: SkillCardProps) {
  return (
    <motion.div
      className="relative p-6 rounded-2xl bg-surface/30 backdrop-blur-sm border border-border shadow-lg overflow-hidden group cursor-pointer"
      whileHover={{ 
        scale: 1.02, 
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        borderColor: color 
      }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
    >
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-all duration-500"
        style={{ background: `linear-gradient(135deg, ${color}40, transparent 60%)` }}
      />

      <div className="relative z-10">
        <motion.div
          className="flex items-center gap-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.6, type: "spring" }}
            style={{ color }}
            className="p-2"
          >
            <Icon className="w-8 h-8" />
          </motion.div>
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">{name}</h3>
        </motion.div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">Yeterlilik</span>
            <span className="font-medium group-hover:text-primary transition-colors duration-300">{level}%</span>
          </div>
          <div className="h-2 bg-surface/50 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${color}, ${color}90)` }}
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500"
        style={{ background: color }}
      />
    </motion.div>
  )
} 