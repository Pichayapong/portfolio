import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

const handler = createMiddleware(routing)

export { handler as proxy }

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/'],
}
