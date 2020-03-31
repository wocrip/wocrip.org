import isEmpty from 'lodash/isEmpty'

import messages from './messages'


export default (tag, field, intl) => {
  const errors = {}
  const { formatMessage } = intl

  if (!isEmpty(tag) && tag.length < 3) {
    errors[field] = formatMessage(messages.validAtLeastChar, { number: 3 })
  }
  if (!isEmpty(tag) && tag.length > 50) {
    errors[field] = formatMessage(messages.validNoMoreChar, { number: 50 })
  }
  if (/[^a-zA-Z0-9-\s\u00C0-\u017F]/g.test(tag)) {
    errors[field] = formatMessage(messages.validOnlyCharTag)
  }
  if (/ {2,}/g.test(tag)) {
    errors[field] = formatMessage(messages.validMultipleSpacesNotAllowed)
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
