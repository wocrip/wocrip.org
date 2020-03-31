import {
  INIT_MODAL,
  SET_MODAL_WITH_ROUTE,
  SET_MODAL_IS_ALERT,
  SET_MODAL_PREVENT_CLOSE,
  SET_MODAL_IS_DISPLAYED,
  SET_MODAL_CHILDREN,
  SET_MODAL_CONTENT_PROPS,
} from './constants'


export function initModal() {
  return {
    type: INIT_MODAL,
  }
}

export function setModalWithRoute(modalWithRoute) {
  return {
    type: SET_MODAL_WITH_ROUTE,
    payload: modalWithRoute,
  }
}

export function setModalIsDisplayed(isDisplayed) {
  return {
    type: SET_MODAL_IS_DISPLAYED,
    payload: isDisplayed,
  }
}

export function setModalChildren(children) {
  return {
    type: SET_MODAL_CHILDREN,
    payload: children,
  }
}

export function setModalContentProps(props) {
  return {
    type: SET_MODAL_CONTENT_PROPS,
    payload: props,
  }
}

export function setModalisAlert(isAlert) {
  return {
    type: SET_MODAL_IS_ALERT,
    payload: isAlert,
  }
}

export function setModalPreventClose(preventClose) {
  return {
    type: SET_MODAL_PREVENT_CLOSE,
    payload: preventClose,
  }
}
