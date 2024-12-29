'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '@/i18n'
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Contact from './components/Contact'
import LoadingScreen from './components/LoadingScreen'
import Head from 'next/head'
import { useRef } from 'react'

export default function Home() {
  const { t, language } = useLanguage()
  const containerRef = useRef(null)
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1])

  // Parallax efektleri
  const heroY = useTransform(heroScrollProgress, [0, 1], [0, 300])
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.5], [1, 0])
  const titleY = useTransform(heroScrollProgress, [0, 1], [0, 100])
  const subtitleY = useTransform(heroScrollProgress, [0, 1], [0, 150])
  const textY = useTransform(heroScrollProgress, [0, 1], [0, 200])
  const buttonY = useTransform(heroScrollProgress, [0, 1], [0, 250])

  return (
    <div className="flex flex-col w-full">
      <LoadingScreen />
      <Head>
        <title>{t('hero.title')} | Front-End Developer</title>
        <meta name="description" content={t('hero.description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Front-End Developer, React, Next.js, TypeScript, Web Development" />
        <meta property="og:title" content={`${t('hero.title')} | Front-End Developer`} />
        <meta property="og:description" content={t('hero.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language === 'tr' ? 'tr_TR' : 'en_US'} />
      </Head>

      <main className="bg-background text-text relative overflow-hidden" ref={containerRef}>
        {/* Background Decorations */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Gradient Orbs */}
          <motion.div
            style={{ y: y1, rotate: rotate1 }}
            className="absolute top-0 -left-20 w-[500px] h-[500px] bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl"
          />
          <motion.div
            style={{ y: y2, rotate: rotate2 }}
            className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-gradient-to-l from-primary/30 to-secondary/30 rounded-full blur-3xl"
          />
          
          {/* Grid Pattern */}
          <motion.div 
            style={{ y: heroY }}
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" 
          />
        </div>

        <Navbar />
        
        {/* Hero Section */}
        <section id="home" className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8" ref={heroRef}>
          <motion.div 
            className="container mx-auto"
            style={{ y: heroY, opacity: heroOpacity }}
          >
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                style={{ y: titleY }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block px-4 py-2 bg-primary/20 text-primary text-sm mb-4 rounded-full backdrop-blur-sm"
              >
                {t('hero.subtitle')}
              </motion.span>

              <motion.h1
                style={{ y: subtitleY }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  {t('hero.title')}
                </span>
              </motion.h1>

              <motion.p
                style={{ y: textY }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-8"
              >
                {t('hero.text')}
              </motion.p>

              {/* Download CV Button */}
              <motion.div
                style={{ y: buttonY }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <motion.a
                  href="/ibrahim-cakar-cv.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition-all group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{t('hero.downloadCV')}</span>
                  <FiDownload className="w-5 h-5 transform group-hover:translate-y-0.5 transition-transform" />
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                style={{ y: buttonY }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex justify-center items-center gap-6 mt-8"
              >
                <motion.a
                  href="https://github.com/ibrahimckr0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiGithub className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/ibrahim-cakar-090543194/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiLinkedin className="w-6 h-6" />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  )
}
