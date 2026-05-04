import { useTranslations } from 'next-intl'
import { Reveal } from '@/components/ui/Reveal'

export function Education() {
  const t = useTranslations('education')

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">{t('title')}</h2>
            <div className="h-[1px] flex-1 bg-slate-200 dark:bg-white/10"></div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 dark:border-blue-500/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Bachelor of Computer Engineering</h3>
              <div className="text-lg text-slate-600 dark:text-slate-300">Chiang Mai University</div>
            </div>
            <div className="px-4 py-2 rounded-lg bg-white dark:bg-white/10 text-slate-900 dark:text-white font-bold text-lg shadow-sm border border-slate-200 dark:border-white/5">
              2013 - 2017
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
