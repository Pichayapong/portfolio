import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale
  if (!locale || !routing.locales.includes(locale as 'en' | 'th')) {
    locale = routing.defaultLocale
  }

  const messages =
    locale === 'th'
      ? (await import('../messages/th.json')).default
      : (await import('../messages/en.json')).default

  return { locale, messages }
})
