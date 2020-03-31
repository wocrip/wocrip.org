import isEmail from 'validator/lib/isEmail'
import isEmpty from 'lodash/isEmpty'

import messages from './messages'


export default function validateFacebook(response, intl) {
  const errors = {}
  const { formatMessage } = intl

  if (isEmpty(response.accessToken)) {
    errors.facebook = formatMessage(messages.validProviderAuthFailed, { provider: 'Facebook' })
  }
  if (isEmpty(response.email)) {
    errors.facebook = formatMessage(messages.validProviderAuthFailed, { provider: 'Facebook' })
  }
  if (!isEmpty(response.email) && !isEmail(response.email)) {
    errors.facebook = formatMessage(messages.validProviderAuthFailed, { provider: 'Facebook' })
  }
  if (isEmpty(response.name)) {
    errors.facebook = formatMessage(messages.validProviderAuthFailed, { provider: 'Facebook' })
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
