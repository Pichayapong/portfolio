import { useTranslations } from 'next-intl'
import { Lock, Briefcase, Trophy, Database, Server, Cloud, Globe, MonitorSmartphone } from 'lucide-react'
import { projectsData } from '@/data/projects'
import { Reveal } from '@/components/ui/Reveal'
import type { Project } from '@/types'

const iconMap: Record<Project['iconName'], React.ReactNode> = {
  Database: <Database className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
  MonitorSmartphone: <MonitorSmartphone className="w-5 h-5" />,
}

export function Projects() {
  const t = useTranslations('projects')

  return (
    <section
      id="projects"
      className="py-24 px-6 relative bg-slate-100/50 dark:bg-[#0a0a0a]/50 border-y border-slate-200 dark:border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">{t('title')}</h2>
            <div className="h-[1px] flex-1 bg-slate-200 dark:bg-white/10"></div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <Reveal key={idx} delay={idx * 150}>
              <div className="group relative bg-white dark:bg-[#111] rounded-2xl border border-slate-200 dark:border-white/5 p-8 overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  {iconMap[project.iconName]}
                </div>
                <div className="text-sm font-bold text-blue-500 mb-2">
                  {project.context} • {project.period}
                </div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-white/5">
                  {project.projectType === 'internal' && (
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 dark:text-slate-500">
                      <Lock size={16} />
                      {t('internal')}
                    </div>
                  )}
                  {project.projectType === 'freelance' && (
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 dark:text-slate-500">
                      <Briefcase size={16} />
                      {t('freelance')}
                    </div>
                  )}
                  {project.projectType === 'competition' && (
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 dark:text-slate-500">
                      <Trophy size={16} />
                      {t('competition')}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
