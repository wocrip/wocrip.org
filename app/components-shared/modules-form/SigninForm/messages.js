import { defineMessages } from 'react-intl'


const scope = 'components-shared.SigninForm'

export default defineMessages({
  signIn: {
    id: `${scope}.signIn`,
    defaultMessage: 'Sign in',
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
  password: {
    id: `${scope}.password`,
    defaultMessage: 'Password',
  },
  forgottenPassword: {
    id: `${scope}.forgottenPassword`,
    defaultMessage: 'Forgotten password',
  },
  terms: {
    id: `${scope}.terms`,
    defaultMessage: 'Terms',
  },
  privacy: {
    id: `${scope}.privacy`,
    defaultMessage: 'Privacy Policy',
  },
  ifYouClickText: {
    id: `${scope}.ifYouClickText`,
    defaultMessage: 'If you click "Facebook" or "Google" and are not a Ceacle user, you will be registered and you agree to our {terms} and {privacy}.',
  },
  dontHaveAccount: {
    id: `${scope}.dontHaveAccount`,
    defaultMessage: 'Don\'t have an account? {createAccount}',
  },
  createAccount: {
    id: `${scope}.createAccount`,
    defaultMessage: 'Create account',
  },
  validRequiredField: {
    id: `${scope}.validRequiredField`,
    defaultMessage: 'This field is required',
  },
  validAtLeastChar: {
    id: `${scope}.validAtLeastChar`,
    defaultMessage: 'Must be at least {number} characters',
  },
})
