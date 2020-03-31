import { isDev } from 'utils/helpers'
import { app } from 'theme'


export const cookieOptions = () => {
  const secure = !isDev
  const { cookieAuthDomain } = app
  return {
    secure,
    path: '/',
    maxAge: 604800, // 7 days in seconds
    domain: isDev ? 'localhost' : cookieAuthDomain,
  }
}
