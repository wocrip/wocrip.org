import isEmail from 'validator/lib/isEmail'
import isEmpty from 'lodash/isEmpty'

import messages from './messages'


export default function validateGoogle(response, intl) {
  const errors = {}
  const { profileObj } = response
  const { formatMessage } = intl

  if (isEmpty(response.accessToken)) {
    errors.google = formatMessage(messages.validProviderAuthFailed, { provider: 'Google' })
  }
  if (isEmpty(profileObj.email)) {
    errors.google = formatMessage(messages.validProviderAuthFailed, { provider: 'Google' })
  }
  if (!isEmail(profileObj.email)) {
    errors.google = formatMessage(messages.validProviderAuthFailed, { provider: 'Google' })
  }
  if (isEmpty(profileObj.name)) {
    errors.google = formatMessage(messages.validProviderAuthFailed, { provider: 'Google' })
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
