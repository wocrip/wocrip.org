import { createSelector } from 'reselect'


const selectSearch = (state) => state.search

const querySelector = createSelector(
  selectSearch,
  (modalState) => modalState.query
)

export {
  selectSearch,
  querySelector,
}
