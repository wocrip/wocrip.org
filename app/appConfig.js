import { isDev } from 'utils/helpers'

// @TODO: Merge the two export
export const stripeApiKey = isDev ?
  '' :
  ''

export const authEndpoint = isDev ?
  'http://localhost:3071/graphql' :
  'https://wocrip.herokuapp.com/graphql'

export const authProvider = isDev ?
  {
    facebookID: '',
    googleID: '',
  }
  :
  {
    facebookID: '',
    googleID: '',
  }

export default {
  googleAnalyticsID: 'UA-162504335-1',
}
