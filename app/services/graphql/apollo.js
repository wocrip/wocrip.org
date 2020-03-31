import Cookies from 'universal-cookie'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink, from } from 'apollo-link'

import getLocale from 'services/intl/getLocale'

import { authEndpoint } from '../config'


const createBrowserClient = () => {
  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => {
      const cookie = new Cookies()
      const token = cookie.get('authToken')
      const language = getLocale()

      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : null,
          language,
        },
      }
    })

    return forward(operation)
  })

  const httpLink = createHttpLink({ uri: authEndpoint })

  return new ApolloClient({
    link: from([
      authMiddleware,
      httpLink,
    ]),
    cache: new InMemoryCache(),
  })
}

let clientInstance = null

export function getClient() {
  if (!clientInstance) clientInstance = createBrowserClient()
  return clientInstance
}
