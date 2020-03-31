// Needed for redux-saga es6 generator support
import '@babel/polyfill'

// Import all the third party stuff
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { ApolloProvider } from 'react-apollo'
import { createBrowserHistory } from 'history'
import 'sanitize.css/sanitize.css'
import ReactGA from 'react-ga'
import { ThemeProvider } from 'styled-components'

// Import root app
import App from 'containers/App'
import ScrollToTop from 'components-shared/modules/ScrollToTop'
// Import GraphQl client
import { getClient } from 'services/graphql/apollo'
// Initialize User Authentication
import initAuth from 'services/user/utils/initAuth'
// Import i18n messages
import { translationMessages } from 'services/intl/i18n'
// Import Language Provider
import LanguageProvider from 'services/intl/LanguageProvider'
import configureStore from './configureStore'
import appConfig from './appConfig'

// Import CSS reset and Global Styles
import GlobalStyle from './global-styles'
const theme = {}


// GraphQl
const apolloClient = getClient()

// Create redux store with history
const initialState = {}
const history = createBrowserHistory()
export const store = configureStore(initialState, history)
const MOUNT_NODE = document.getElementById('app')

// Initialize Google Analytics
ReactGA.initialize(appConfig.googleAnalyticsID)

// Initialize User Authentication
const handleVisibilityChange = () => !document.hidden && initAuth({ store })
document.addEventListener('visibilitychange', handleVisibilityChange, false)
initAuth({ store })

const render = (messages) => {
  ReactDOM.render(
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <LanguageProvider messages={messages}>
          <ConnectedRouter history={history}>
            <ThemeProvider theme={theme}>
              <ScrollToTop>
                <App />
                <GlobalStyle />
              </ScrollToTop>
            </ThemeProvider>
          </ConnectedRouter>
        </LanguageProvider>
      </ApolloProvider>
    </Provider>,
    MOUNT_NODE
  )
}

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['services/intl/i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE)
    render(translationMessages)
  })
}

render(translationMessages)

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  const offlinePluginRuntime = require('offline-plugin/runtime') // eslint-disable-line global-require

  offlinePluginRuntime.install({
    onUpdateReady: () => {
      offlinePluginRuntime.applyUpdate()
    },
  })
}
