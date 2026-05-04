import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="bg-slate-950 text-slate-500 py-8 text-center text-sm border-t border-slate-800">
      <p>© {new Date().getFullYear()} Pichayapong Toonkaew. {t('rights')}</p>
      <p className="mt-2">{t('built')}</p>
    </footer>
  )
}
