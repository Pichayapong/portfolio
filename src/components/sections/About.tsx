import { useTranslations } from 'next-intl'
import { Mail, Phone } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

export function About() {
  const t = useTranslations('about')

  const stats = [
    { label: t('yearsLabel'), value: t('yearsValue') },
    { label: t('techLabel'), value: t('techValue') },
    { label: t('projectsLabel'), value: t('projectsValue') },
  ]

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">{t('title')}</h2>
            <div className="h-[1px] flex-1 bg-slate-200 dark:bg-white/10"></div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <Reveal delay={100} className="md:col-span-3">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {t('content')}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>pichayapong.t@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>061-287-6360</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200} className="md:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-white dark:bg-[#111] border border-slate-200 dark:border-white/5 shadow-sm ${idx === 2 ? 'col-span-2' : ''}`}
              >
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
