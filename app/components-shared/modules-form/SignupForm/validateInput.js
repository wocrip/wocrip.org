// Regex see
// https://stackoverflow.com/questions/20690499/concrete-javascript-regex-for-accented-characters-diacritics
import isEmail from 'validator/lib/isEmail'
import isEmpty from 'lodash/isEmpty'

import messages from './messages'


export default function validateInput(data, intl) {
  const errors = {}
  const { formatMessage } = intl

  if (!isEmpty(data)) {
    // Usernname
    if (isEmpty(data.username)) {
      errors.username = formatMessage(messages.validRequiredField)
    }
    if (!isEmpty(data.username) && data.username.length < 4) {
      errors.username = formatMessage(messages.validAtLeastChar, { number: 4 })
    }
    if (!isEmpty(data.username) && data.username.length > 15) {
      errors.username = formatMessage(messages.validNoMoreChar, { number: 15 })
    }
    if (/[^a-z0-9_]/g.test(data.username)) {
      errors.username = formatMessage(messages.validOnlyCharUsername)
    }
    if (/[A-Z]/g.test(data.username)) {
      errors.username = formatMessage(messages.validUppercaseNotAllowed)
    }
    if (/\s+/g.test(data.username)) {
      errors.username = formatMessage(messages.validSpaceNotAllowed)
    }

    // Display name
    if (!isEmpty(data.display_name) && data.display_name.length < 3) {
      errors.display_name = formatMessage(messages.validAtLeastChar, { number: 3 })
    }
    if (!isEmpty(data.display_name) && data.display_name.length > 30) {
      errors.display_name = formatMessage(messages.validNoMoreChar, { number: 30 })
    }
    if (/[^a-zA-Z0-9._'+-\s\u00C0-\u017F]/g.test(data.display_name)) {
      errors.display_name = formatMessage(messages.validOnlyCharDisplayName)
    }
    if (/ {2,}/g.test(data.display_name)) {
      errors.display_name = formatMessage(messages.validMultipleSpacesNotAllowed)
    }

    // First name
    if (!isEmpty(data.first_name) && data.first_name.length < 2) {
      errors.first_name = formatMessage(messages.validAtLeastChar, { number: 2 })
    }
    if (!isEmpty(data.first_name) && data.first_name.length > 30) {
      errors.first_name = formatMessage(messages.validNoMoreChar, { number: 30 })
    }
    if (/[^a-zA-Z-\s\u00C0-\u017F]/g.test(data.first_name)) {
      errors.first_name = formatMessage(messages.validOnlyCharName)
    }
    if (/ {2,}/g.test(data.first_name)) {
      errors.first_name = formatMessage(messages.validMultipleSpacesNotAllowed)
    }

    // Last name
    if (!isEmpty(data.last_name) && data.last_name.length < 2) {
      errors.last_name = formatMessage(messages.validAtLeastChar, { number: 2 })
    }
    if (!isEmpty(data.last_name) && data.last_name.length > 30) {
      errors.last_name = formatMessage(messages.validNoMoreChar, { number: 30 })
    }
    if (/[^a-zA-Z-\s\u00C0-\u017F]/g.test(data.last_name)) {
      errors.last_name = formatMessage(messages.validOnlyCharName)
    }
    if (/ {2,}/g.test(data.last_name)) {
      errors.last_name = formatMessage(messages.validMultipleSpacesNotAllowed)
    }

    // Email
    if (isEmpty(data.email)) {
      errors.email = formatMessage(messages.validRequiredField)
    }
    if (!isEmpty(data.email) && !isEmail(data.email)) {
      errors.email = formatMessage(messages.validEmailIsInvalid)
    }
    if (!isEmpty(data.email) && !isEmail(data.email) && /\s+/g.test(data.email)) {
      errors.email = formatMessage(messages.validSpaceNotAllowed)
    }

    // Password
    if (isEmpty(data.password)) {
      errors.password = formatMessage(messages.validRequiredField)
    }
    if (!isEmpty(data.password) && data.password.length < 8) {
      errors.password = formatMessage(messages.validAtLeastChar, { number: 8 })
    }
    if (!isEmpty(data.password) && !/[0-9]/g.test(data.password)) {
      errors.password = formatMessage(messages.validAtLeastNumber)
    }

    // Consent
    if (!data.consentToTerms) {
      errors.consentToTerms = formatMessage(messages.validRequiredConsent)
    }
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
