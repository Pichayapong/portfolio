import { useTranslations } from 'next-intl'
import { experienceData } from '@/data/experience'
import { Reveal } from '@/components/ui/Reveal'

export function Experience() {
  const t = useTranslations('experience')

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-bold">{t('title')}</h2>
            <div className="h-[1px] flex-1 bg-slate-200 dark:bg-white/10"></div>
          </div>
        </Reveal>

        <div className="space-y-12">
          {experienceData.map((exp, idx) => (
            <Reveal key={idx} delay={idx * 150}>
              <div className="relative pl-8 md:pl-0">
                <div className="hidden md:block absolute left-[159px] top-2 bottom-[-48px] w-[1px] bg-slate-200 dark:bg-white/10 last:hidden"></div>
                <div className="md:hidden absolute left-[11px] top-2 bottom-[-48px] w-[1px] bg-slate-200 dark:bg-white/10 last:hidden"></div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                  <div className="md:w-36 flex-shrink-0 pt-1 relative">
                    <div className="absolute left-[-33px] md:left-[155px] top-2 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-slate-50 dark:ring-[#050505]"></div>
                    <span className="text-sm font-bold text-slate-400 dark:text-slate-500 block mb-1">
                      {exp.period.replace('Present', t('present'))}
                    </span>
                  </div>

                  <div className="flex-1 bg-white dark:bg-[#111] p-6 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-blue-500/50 transition-colors">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {exp.role}
                    </h3>
                    <div className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                      {exp.company}
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-slate-600 dark:text-slate-300"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600 flex-shrink-0"></span>
                          <span className="leading-relaxed text-sm md:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
