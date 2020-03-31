import jwtDecode from 'jwt-decode'
import Cookies from 'universal-cookie'

import { getClient } from 'services/graphql/apollo'
import { cookieOptions } from './utils/cookieOptions'

import {
  SIGN_OUT,
  SET_USER,
  SET_USER_DATA,
  REMOVE_USER,
} from './constants'


export function setUser({ token, user }) {
  let data = user
  if (token) data = jwtDecode(token)
  return {
    type: SET_USER,
    data,
  }
}

export function setUserData(data) {
  return {
    type: SET_USER_DATA,
    data,
  }
}

export function deauthenticateUser() {
  return {
    type: REMOVE_USER,
  }
}

export function signout() {
  const cookies = new Cookies()
  cookies.remove('authToken', cookieOptions())
  getClient().resetStore()
  setTimeout(() => window.location.reload(), 300)
  return {
    type: SIGN_OUT,
  }
}
