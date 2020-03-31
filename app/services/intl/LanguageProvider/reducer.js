/*
 *
 * LanguageProvider reducer
 *
 */
import {
  DEFAULT_LOCALE,
  CHANGE_LOCALE,
} from './constants'

const initialState = {
  locale: DEFAULT_LOCALE,
}

function languageProviderReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      state.locale = action.locale
      return state
    default:
      return state
  }
}

export default languageProviderReducer
