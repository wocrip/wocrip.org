import { createSelector } from 'reselect'

import { userLocaleSelector } from 'services/user/selectors'
import { app } from 'theme'


/**
 * Direct selector to the languageToggle state domain
 */
const selectLanguage = (state) => state.language

/**
 * Select the language locale
 */
const makeSelectLocale = () => createSelector(
  selectLanguage,
  userLocaleSelector,
  (languageState, userLocale) => {
    const { languages } = app
    const baseLocale = languageState.locale
    let locale = userLocale || baseLocale
    locale = languages.includes(locale) ? locale : 'en'
    return locale
  }
)

const getLocaleSelector = createSelector(
  makeSelectLocale(),
  (locale) => ({ locale })
)

export {
  selectLanguage,
  getLocaleSelector,
}
