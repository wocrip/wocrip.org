import isEmpty from 'lodash/isEmpty'

import messages from './messages'


export default function validateInput(data, intl) {
  const errors = {}
  const { formatMessage } = intl

  if (isEmpty(data.identifier)) {
    errors.identifier = formatMessage(messages.validRequiredField)
  }
  if (!isEmpty(data.identifier) && data.identifier.length < 4) {
    errors.identifier = formatMessage(messages.validAtLeastChar, { number: 4 })
  }
  if (isEmpty(data.password)) {
    errors.password = formatMessage(messages.validRequiredField)
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
