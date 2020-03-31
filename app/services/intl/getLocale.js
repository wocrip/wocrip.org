import Cookies from 'universal-cookie'

import { app } from 'theme'


const { languages, lang: defaultLang, intl: isIntl } = app

const browserLocale = () => {
  const isBrowser = typeof window !== 'undefined'
  const language = isBrowser
    ? navigator.userLanguage || navigator.language || defaultLang
    : defaultLang
  return language.toLowerCase().split(/[_-]+/)[0]
}

const getLocale = () => {
  const cookie = new Cookies()
  let cookieLocale = cookie.get('_locale')
  cookieLocale = cookieLocale === 'undefined' ? undefined : cookieLocale
  let pathLocale

  if (!cookieLocale) {
    const { pathname } = window.location

    if (pathname.length === 3) {
      const match = pathname.match(/\/(.*)/)
      pathLocale = match && match[1]
    } else if (pathname.length > 3) {
      const match = pathname.match(/\/(.*)\//)
      pathLocale = match && match[1]
    }
  }

  const browserLang = browserLocale()
  const language = cookieLocale || pathLocale || browserLang
  const locale = languages.includes(language) ? language : defaultLang

  return isIntl ? locale : defaultLang
}

/*
 * lang for router
 */
export const lang =
  (locale) => locale && (locale === defaultLang ? '' : `/${locale}`)

export default getLocale
