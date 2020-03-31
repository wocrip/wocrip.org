import { defineMessages } from 'react-intl'


const scope = 'components-shared.EmailSubscriptionForm'

export default defineMessages({
  subscribe: {
    id: `${scope}.subscribe`,
    defaultMessage: 'Subscribe',
  },
  placeholder: {
    id: `${scope}.placeholder`,
    defaultMessage: 'Your email address',
  },
  successMessage: {
    id: `${scope}.successMessage`,
    defaultMessage: 'Email subscribed to',
  },
  requiredEmailAddress: {
    id: `${scope}.requiredEmailAddress`,
    defaultMessage: 'Email address is required',
  },
  requiredConsent: {
    id: `${scope}.requiredConsent`,
    defaultMessage: 'Consent is required',
  },
  emailIsInvalid: {
    id: `${scope}.emailIsInvalid`,
    defaultMessage: 'Email is invalid',
  },
  spaceIsNotAllowed: {
    id: `${scope}.spaceIsNotAllowed`,
    defaultMessage: 'Space is not allowed',
  },
})
