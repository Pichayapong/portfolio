import { useTranslations } from 'next-intl'
import { skillsData } from '@/data/skills'
import { Reveal } from '@/components/ui/Reveal'

export function Skills() {
  const t = useTranslations('skills')

  return (
    <section
      id="skills"
      className="py-24 px-6 relative bg-slate-100/50 dark:bg-[#0a0a0a]/50 border-y border-slate-200 dark:border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">{t('title')}</h2>
            <div className="h-[1px] flex-1 bg-slate-200 dark:bg-white/10"></div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="p-6 rounded-xl bg-white dark:bg-[#111] border border-slate-200 dark:border-white/5 h-full transition-all">
                <h3 className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest mb-6">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 text-sm rounded-md border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
