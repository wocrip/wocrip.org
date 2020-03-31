import isEmpty from 'lodash/isEmpty'

import {
  SET_USER,
  SET_USER_DATA,
  REMOVE_USER,
} from './constants'


const initialState = {
  authenticated: false,
  data: {},
}

function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        data: action.data,
        authenticated: !isEmpty(action.data)
      }
    case SET_USER_DATA:
      return {
        ...state,
        data: action.data
      }
    case REMOVE_USER:
      return initialState
    default:
      return state
  }
}

export default userReducer
