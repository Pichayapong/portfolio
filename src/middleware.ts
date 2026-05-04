import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

const handler = createMiddleware(routing)

export default handler

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/'],
}
