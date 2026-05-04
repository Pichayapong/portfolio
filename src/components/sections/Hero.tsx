'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { ChevronRight, Download, Code2, Database } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons'

export function Hero() {
  const t = useTranslations('hero')

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <Reveal delay={100}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            {t('available')}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            {t('greeting')} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Pichayapong.
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-6">
            {t('role')}
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-lg mb-8 leading-relaxed">
            {t('description')}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors flex items-center gap-2"
            >
              {t('ctaPrimary')}
              <ChevronRight size={18} />
            </button>
            <a
              href="/CV_Pichayapong_Toonkaew.pdf"
              download
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/5 font-medium transition-colors flex items-center gap-2"
            >
              <Download size={18} />
              {t('ctaSecondary')}
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-slate-500 dark:text-slate-400">
            <a
              href="https://github.com/Pichayapong"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <LinkedinIcon size={24} />
            </a>
          </div>
        </Reveal>

        {/* Avatar */}
        <Reveal delay={300} className="flex justify-center relative mt-12 md:mt-0">
          <div className="w-[300px] h-[300px] md:w-[420px] md:h-[420px] relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative w-full h-full p-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-[#0a0a0a]/50 backdrop-blur-xl shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-200 dark:bg-slate-800 relative">
                <Image
                  src="/avatar.png"
                  alt="Pichayapong Avatar"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute top-10 -left-4 md:-left-8 w-14 h-14 bg-white dark:bg-[#111] rounded-2xl shadow-xl border border-slate-200 dark:border-white/10 flex items-center justify-center animate-[bounce_3s_infinite]">
              <Code2 className="w-6 h-6 text-blue-500" />
            </div>
            <div className="absolute bottom-10 -right-2 md:-right-6 w-14 h-14 bg-white dark:bg-[#111] rounded-2xl shadow-xl border border-slate-200 dark:border-white/10 flex items-center justify-center animate-[bounce_4s_infinite_1s]">
              <Database className="w-6 h-6 text-purple-500" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
