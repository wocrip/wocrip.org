import {
  INIT_SEARCH,
  SET_SEARCH_QUERY,
} from './constants'


export function initSearch() {
  return {
    type: INIT_SEARCH,
  }
}

export function setSearchQuery(query) {
  return {
    type: SET_SEARCH_QUERY,
    payload: query,
  }
}
