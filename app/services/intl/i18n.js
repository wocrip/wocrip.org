/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */

const enTranslationMessages = require('../../translations/en.json')
const frTranslationMessages = require('../../translations/fr.json')
const DEFAULT_LOCALE = require('./LanguageProvider/constants').DEFAULT_LOCALE //eslint-disable-line

const appLocales = [
  'en',
  'fr',
]

const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
    : {}
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE
      ? defaultFormattedMessages[key]
      : messages[key]
    return Object.assign(formattedMessages, { [key]: formattedMessage })
  }, {})
}

const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  fr: formatTranslationMessages('fr', frTranslationMessages),
}

exports.appLocales = appLocales
exports.formatTranslationMessages = formatTranslationMessages
exports.translationMessages = translationMessages
exports.DEFAULT_LOCALE = DEFAULT_LOCALE

