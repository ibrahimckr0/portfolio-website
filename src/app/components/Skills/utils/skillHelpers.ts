import { Skill } from '../types'

export function calculateSkillLevel(level: number): string {
  if (level >= 90) return 'Expert'
  if (level >= 80) return 'Advanced'
  if (level >= 70) return 'Intermediate'
  return 'Beginner'
}

export function sortSkillsByLevel(skills: Skill[]): Skill[] {
  return [...skills].sort((a, b) => b.level - a.level)
}

export function groupSkillsByLevel(skills: Skill[]): Record<string, Skill[]> {
  return skills.reduce((acc, skill) => {
    const level = calculateSkillLevel(skill.level)
    if (!acc[level]) acc[level] = []
    acc[level].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)
}

export function getSkillColor(level: number): string {
  if (level >= 90) return '#22c55e' // green
  if (level >= 80) return '#3b82f6' // blue
  if (level >= 70) return '#f59e0b' // yellow
  return '#ef4444' // red
} 