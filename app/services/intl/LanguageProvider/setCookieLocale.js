import Cookies from 'universal-cookie'

import { app } from 'theme'
import { isDev } from 'utils/helpers'


export default (locale) => {
  const cookies = new Cookies()
  const { cookieMainDomain } = app
  const domain = isDev ? 'localhost' : cookieMainDomain
  const isSecure = !isDev

  cookies.set('_locale', locale, {
    path: '/',
    maxAge: 31536000,
    Secure: isSecure,
    SameSite: 'lax',
    domain,
  })
}
