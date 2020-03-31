import isEmail from 'validator/lib/isEmail'
import isEmpty from 'lodash/isEmpty'

import messages from './messages'


export default function validateInput(data, intl) {
  const errors = {}
  const { formatMessage } = intl

  if (!isEmpty(data)) {
    if (isEmpty(data.email)) {
      errors.email = formatMessage(messages.requiredEmailAddress)
    }
    if (!isEmpty(data.email) && !isEmail(data.email)) {
      errors.email = formatMessage(messages.emailIsInvalid)
    }
    if (!isEmpty(data.email) && !isEmail(data.email) && /\s+/g.test(data.email)) {
      errors.email = formatMessage(messages.spaceIsNotAllowed)
    }
    if (isEmpty(data.consents)) {
      errors.consents = formatMessage(messages.requiredConsent)
    }
    if (!isEmpty(data.consents)) {
      const didConsent = data.consents.reduce((accumulator, currentValue) =>
        accumulator && currentValue
      )
      if (!didConsent) errors.consents = formatMessage(messages.requiredConsent)
    }
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
