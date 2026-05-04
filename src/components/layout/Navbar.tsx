'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Terminal, Sun, Moon, Menu, X } from 'lucide-react'
import { useScrolled } from '@/hooks/useScrolled'
import { useTheme } from '@/hooks/useTheme'

export function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const isScrolled = useScrolled()
  const { isDark, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { id: 'about', label: t('about') },
    { id: 'experience', label: t('experience') },
    { id: 'skills', label: t('skills') },
    { id: 'projects', label: t('projects') },
    { id: 'contact', label: t('contact') },
  ]

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false)
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
  }

  const switchLocale = () => {
    const next = locale === 'en' ? 'th' : 'en'
    router.push(pathname.replace(`/${locale}`, `/${next}`))
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-md border-b border-slate-200 dark:border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div
          className="font-bold text-xl tracking-tight flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-sm">
            <Terminal size={18} />
          </div>
          <span>
            Pichayapong<span className="text-blue-500">.</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 pl-6 border-l border-slate-200 dark:border-white/10">
            <button
              onClick={switchLocale}
              className="text-xs font-bold uppercase tracking-wider hover:text-blue-500 transition-colors w-8"
            >
              {locale === 'en' ? 'TH' : 'EN'}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-[#0a0a0a] border-b border-slate-200 dark:border-white/10 flex flex-col p-6 gap-4 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left text-lg font-medium py-2"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 border-t border-slate-200 dark:border-white/10">
            <button onClick={switchLocale} className="text-sm font-bold uppercase py-2">
              Switch Language ({locale === 'en' ? 'TH' : 'EN'})
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
