import {
  INIT_SEARCH,
  SET_SEARCH_QUERY,
} from './constants'


const initialState = {
  query: '',
}

function searchReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        query: action.payload
      }
    case INIT_SEARCH:
      return initialState
    default:
      return state
  }
}

export default searchReducer
