'use client'

import { useLanguage } from '@/i18n'
import { useRef } from 'react'
import ScrollAnimation from '../animations/ScrollAnimation'
import { FiMail, FiGithub, FiLinkedin, FiSend, FiUser } from 'react-icons/fi'

export default function Contact() {
  const { t } = useLanguage()
  const sectionRef = useRef(null)

  return (
    <div className="py-20 md:py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 relative">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {t('contact.title')}
            </h2>
          </div>
        </ScrollAnimation>

        <div className="max-w-3xl mx-auto">
          <ScrollAnimation>
            <div className="bg-surface/30 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-border">
              <form action="https://formspree.io/f/xqaabojl" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                      {t('contact.name')}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder={t('contact.name')}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-surface/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
                    </div>
                  </div>
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                      {t('contact.email')}
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder={t('contact.email')}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-surface/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                      <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder={t('contact.message')}
                    required
                    className="w-full px-4 py-3 bg-surface/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                >
                  <span>{t('contact.send')}</span>
                  <FiSend className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </ScrollAnimation>

          {/* Social Links */}
          <ScrollAnimation>
            <div className="mt-16">
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                <a
                  href="mailto:ibrahim.cakar2003@gmail.com"
                  className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiMail className="w-6 h-6" />
                  <span>ibrahim.cakar2003@gmail.com</span>
                </a>
                <a
                  href="https://github.com/ibrahimckr0"
                  className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub className="w-6 h-6" />
                  <span>github.com/ibrahimckr0</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ibrahim-cakar-090543194/"
                  className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiLinkedin className="w-6 h-6" />
                  <span>linkedin.com/in/ibrahim-cakar</span>
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
} 