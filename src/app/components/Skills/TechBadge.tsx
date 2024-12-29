'use client'

import { motion } from 'framer-motion'
import { IconType } from 'react-icons'

interface TechBadgeProps {
  name: string
  icon: IconType
  color: string
}

export default function TechBadge({ name, icon: Icon, color }: TechBadgeProps) {
  return (
    <motion.div
      className="relative group cursor-pointer"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Hover Background */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-30 rounded-xl transition-all duration-300"
        style={{ background: `linear-gradient(135deg, ${color}, transparent 60%)` }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center gap-2 p-4 rounded-xl bg-surface/30 backdrop-blur-sm border border-border group-hover:border-opacity-50 transition-all duration-300">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6, type: "spring" }}
          style={{ color }}
          className="p-2"
        >
          <Icon className="w-8 h-8" />
        </motion.div>
        <span className="text-sm font-medium group-hover:text-primary transition-colors duration-300">{name}</span>
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-50 blur-xl transition-all duration-300 rounded-full"
        style={{ background: color }}
      />
    </motion.div>
  )
} 