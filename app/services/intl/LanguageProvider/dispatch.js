import { changeLocale } from './actions'


export const dispatchLocale = (dispatch) => ({
  onLocaleToggle: (value) => dispatch(changeLocale(value)),
  dispatch,
})
