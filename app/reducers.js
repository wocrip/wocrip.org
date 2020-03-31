/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from 'redux'
import { connectRouter, LOCATION_CHANGE } from 'connected-react-router'

import history from 'utils/history'

import userReducer from 'services/user/reducer'
import languageProviderReducer from 'services/intl/LanguageProvider/reducer'

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to connected-react-router@5
 *
 */

// Initial routing state
const routeInitialState = {
  location: null,
}

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return { location: action.payload }
    default:
      return state
  }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    language: languageProviderReducer,
    router: connectRouter(history),
    route: routeReducer,
    user: userReducer,
    ...injectedReducers,
  })
}
