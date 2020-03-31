import { defineMessages } from 'react-intl'


const scope = 'components-shared.ProviderLoginButton'

export default defineMessages({
  connectTo: {
    id: `${scope}.connectTo`,
    defaultMessage: 'Connect to {provider}',
  },
  disconnectFrom: {
    id: `${scope}.disconnectFrom`,
    defaultMessage: 'Disconnect from {provider}',
  },
})
