'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Mail, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons'
import { Reveal } from '@/components/ui/Reveal'

export function Contact() {
  const t = useTranslations('contact')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    })

    if (res.ok) {
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } else {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="py-24 px-6 relative bg-slate-900 dark:bg-black text-white border-t border-slate-800"
    >
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('title')}</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">{t('subtitle')}</p>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid md:grid-cols-2 gap-12 items-start text-left">
            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('namePlaceholder')}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-500"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('emailPlaceholder')}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-500"
                  required
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t('messagePlaceholder')}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none placeholder:text-slate-500"
                  required
                />
              </div>
              {status === 'success' && (
                <p className="text-green-400 text-sm">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
              )}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-xl transition-colors"
              >
                {status === 'loading' ? 'Sending...' : t('send')}
              </button>
            </form>

            {/* Contact info */}
            <div className="space-y-8 lg:pl-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <a
                    href="mailto:pichayapong.t@gmail.com"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    pichayapong.t@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="text-green-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone</h4>
                  <a
                    href="tel:0612876360"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    061-287-6360
                  </a>
                </div>
              </div>
              <div className="flex gap-4 pt-4 border-t border-white/10">
                <a
                  href="https://github.com/Pichayapong"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <LinkedinIcon size={20} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
