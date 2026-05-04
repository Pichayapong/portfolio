export interface Experience {
  company: string
  role: string
  period: string
  description: string[]
}

export interface SkillCategory {
  category: string
  items: string[]
}

export type ProjectType = 'internal' | 'freelance' | 'competition'

export interface Project {
  title: string
  context: string
  period: string
  description: string
  tech: string[]
  projectType: ProjectType
  iconName: 'Database' | 'Server' | 'Cloud' | 'Globe' | 'MonitorSmartphone'
}
