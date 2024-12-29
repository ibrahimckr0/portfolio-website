'use client'

import { motion } from 'framer-motion'
import ScrollAnimation from './animations/ScrollAnimation'
import { useLanguage } from '@/i18n'

const projects = [
  {
    title: 'E-Ticaret Projesi',
    description: 'Next.js ve TypeScript kullanılarak geliştirilmiş modern bir e-ticaret platformu.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
    image: '/ecommerce.jpg',
    link: '#'
  },
  {
    title: 'Task Yönetim Uygulaması',
    description: 'React ve Firebase ile geliştirilmiş gerçek zamanlı task yönetim uygulaması.',
    tech: ['React', 'Firebase', 'Material-UI'],
    image: '/task-app.jpg',
    link: '#'
  },
  {
    title: 'Blog Platformu',
    description: 'Next.js ve Markdown kullanılarak geliştirilmiş kişisel blog platformu.',
    tech: ['Next.js', 'MDX', 'Tailwind CSS'],
    image: '/blog.jpg',
    link: '#'
  }
]

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <ScrollAnimation
      animation={index % 2 === 0 ? 'slide-right' : 'slide-left'}
      delay={index * 0.2}
      className="relative group"
    >
      <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        <div className="h-48 bg-gray-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 group-hover:scale-110 transition-transform duration-500" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-400 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <motion.a
            href={project.link}
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Projeyi İncele
          </motion.a>
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projeler" className="min-h-screen py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
      
      <div className="relative z-10 container mx-auto px-4">
        <ScrollAnimation animation="fade" className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            {t('projects.title')}
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
} 