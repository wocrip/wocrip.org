import {
  INIT_MODAL,
  SET_MODAL_WITH_ROUTE,
  SET_MODAL_IS_DISPLAYED,
  SET_MODAL_CHILDREN,
  SET_MODAL_CONTENT_PROPS,
  SET_MODAL_IS_ALERT,
  SET_MODAL_PREVENT_CLOSE,
} from './constants'


const initialState = {
  children: null,
  contentProps: null,
  isAlert: false,
  isDisplayed: false,
  modalWithRoute: false,
  preventClose: false,
}

function modalReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_MODAL_WITH_ROUTE:
      return {
        ...state,
        modalWithRoute: action.payload
      }
    case SET_MODAL_IS_DISPLAYED: {
      const { payload: isDisplayed } = action
      if (!isDisplayed) return { ...initialState }
      return { ...state, isDisplayed }
    }
    case SET_MODAL_CHILDREN:
      return {
        ...state,
        children: action.payload
      }
    case SET_MODAL_CONTENT_PROPS:
      return {
        ...state,
        contentProps: action.payload
      }
    case SET_MODAL_PREVENT_CLOSE:
      return {
        ...state,
        preventClose: action.payload
      }
    case SET_MODAL_IS_ALERT:
      return {
        ...state,
        isAlert: action.payload
      }
    case INIT_MODAL:
      return initialState
    default:
      return state
  }
}

export default modalReducer
