import Cookies from 'universal-cookie'

import { cookieOptions } from './cookieOptions'
import { setUser, signout, deauthenticateUser } from '../actions'
import { authenticatedSelector } from '../selectors'

const initAuth = ({ store, token, dispatch: dispatchFunc }) => {
  const cookies = new Cookies()
  const isStore = !!store
  const dispatch = dispatchFunc || store.dispatch
  const state = isStore ? store.getState() : null
  let isAuthenticated
  if (store) {
    isAuthenticated = authenticatedSelector(state)
  }

  if (token) {
    cookies.set('authToken', token, cookieOptions())
    if (!isAuthenticated) dispatch(setUser({ token }))
  } else {
    const cookieToken = cookies.get('authToken')

    if (cookieToken && !isAuthenticated) {
      dispatch(setUser({ token: cookieToken }))
    } else if (!cookieToken && isAuthenticated) {
      dispatch(signout())
      dispatch(deauthenticateUser())
      window.location.reload()
    }
  }
}

export default initAuth
