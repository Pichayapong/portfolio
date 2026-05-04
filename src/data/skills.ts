import type { SkillCategory } from '@/types'

export const skillsData: SkillCategory[] = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Java', 'Python', 'SQL', 'HTML', 'CSS/SASS'],
  },
  {
    category: 'Frameworks',
    items: ['React', 'Next.js', 'Vue', 'Nuxt.js', 'Nest.js', 'Node.js', 'Spring Boot'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'SQL Server', 'Firebase', 'MongoDB'],
  },
  {
    category: 'Tools & Cloud',
    items: ['Git', 'Docker', 'GCP', 'Azure'],
  },
  {
    category: 'Testing',
    items: ['Unit Testing', 'Integration Testing'],
  },
  {
    category: 'AI & Automation',
    items: ['n8n', 'Claude / Cowork', 'Langflow'],
  },
  {
    category: 'Specialties',
    items: ['Data Visualization', 'API Design', 'Cloud Deployment', 'System Architecture'],
  },
]
