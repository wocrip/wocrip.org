import { defineMessages } from 'react-intl'


const scope = 'components.GuestForm'

export default defineMessages({
  signUp: {
    id: `${scope}.signUp`,
    defaultMessage: 'Sign up',
  },
  with: {
    id: `${scope}.with`,
    defaultMessage: 'With',
  },
  orWithEmail: {
    id: `${scope}.orWithEmail`,
    defaultMessage: 'Or with email',
  },
  identifier: {
    id: `${scope}.identifier`,
    defaultMessage: 'Username or Email',
  },
  username: {
    id: `${scope}.username`,
    defaultMessage: 'Username',
  },
  firstName: {
    id: `${scope}.firstName`,
    defaultMessage: 'First name',
  },
  lastName: {
    id: `${scope}.lastName`,
    defaultMessage: 'Last name',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email',
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: 'Password',
  },
  consentToNews: {
    id: `${scope}.consentToNews`,
    defaultMessage: 'I would like to receive from time to time news and updates from Ceacle services and products. (Optional)',
  },
  terms: {
    id: `${scope}.terms`,
    defaultMessage: 'Terms',
  },
  privacy: {
    id: `${scope}.privacy`,
    defaultMessage: 'Privacy Policy',
  },
  bySignUp: {
    id: `${scope}.bySignUp`,
    defaultMessage: 'I agree to the {terms} and {privacy}.',
  },
  notification: {
    id: `${scope}.notification`,
    defaultMessage: 'You may receive SMS or email notifications from {appName} and can opt out at any time.',
  },
  hasAccount: {
    id: `${scope}.hasAccount`,
    defaultMessage: 'Already have an account? {signin}',
  },
  signIn: {
    id: `${scope}.signIn`,
    defaultMessage: 'Sign in',
  },
  validRequiredField: {
    id: `${scope}.validRequiredField`,
    defaultMessage: 'This field is required',
  },
  validRequiredConsent: {
    id: `${scope}.validRequiredConsent`,
    defaultMessage: 'Consent is required',
  },
  validAtLeastChar: {
    id: `${scope}.validAtLeastChar`,
    defaultMessage: 'Must be at least {number} characters',
  },
  validNoMoreChar: {
    id: `${scope}.validNoMoreChar`,
    defaultMessage: 'Must be no more than {number} characters',
  },
  validOnlyCharUsername: {
    id: `${scope}.validOnlyCharUsername`,
    defaultMessage: 'Only characters a-z, 0-9 and _',
  },
  validUppercaseNotAllowed: {
    id: `${scope}.validUppercaseNotAllowed`,
    defaultMessage: 'Uppercase is not allowed',
  },
  validSpaceNotAllowed: {
    id: `${scope}.validSpaceNotAllowed`,
    defaultMessage: 'Space is not allowed',
  },
  validOnlyCharDisplayName: {
    id: `${scope}.validOnlyCharDisplayName`,
    defaultMessage: 'Only characters a-z, 0-9 and ._\'+-',
  },
  validOnlyCharName: {
    id: `${scope}.validOnlyCharName`,
    defaultMessage: 'Only characters from a to z and -',
  },
  validAtLeastNumber: {
    id: `${scope}.validAtLeastNumber`,
    defaultMessage: 'Must contain at least one number',
  },
  validEmailIsInvalid: {
    id: `${scope}.validEmailIsInvalid`,
    defaultMessage: 'Email is invalid',
  },
  validMultipleSpacesNotAllowed: {
    id: `${scope}.validMultipleSpacesNotAllowed`,
    defaultMessage: 'Multiple spaces are not allowed',
  },
  isUnavailable: {
    id: `${scope}.isUnavailable`,
    defaultMessage: 'is unavailable',
  },
})
