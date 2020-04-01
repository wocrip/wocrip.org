import { defineMessages } from 'react-intl'


const scope = 'components.NavAccount'

export default defineMessages({
  navProfile: {
    id: `${scope}.navProfile`,
    defaultMessage: 'Profile',
  },
  navAccount: {
    id: `${scope}.navAccount`,
    defaultMessage: 'Account',
  },
  navSignOut: {
    id: `${scope}.navSignOut`,
    defaultMessage: 'Sign out',
  },
})
