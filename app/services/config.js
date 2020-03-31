import { isDev } from 'utils/helpers'


export const stripeApiKey = isDev ?
  'pk_test_qsbLtXC9M7qTxakBGJiyDtWs' :
  'pk_live_LiGL2Yjacav8swHVV1LOk9iQ'

export const authEndpoint = isDev ?
  'http://localhost:3062/graphql' :
  'https://modo-server-ceacle.herokuapp.com/graphql'

export const authProvider = isDev ?
  {
    facebookID: '253769455149970',
    googleID: '673873932201-jv91kctam4fpu3mep3ieh4iu677itm7l.apps.googleusercontent.com',
  }
  :
  {
    facebookID: '885950401561988',
    googleID: '673873932201-7i6v056t3ib0f0h8bl6840g46ghbf8cu.apps.googleusercontent.com',
  }
