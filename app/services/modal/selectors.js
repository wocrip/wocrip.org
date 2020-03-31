import { createSelector } from 'reselect'


const selectModal = (state) => state.modal

const modalWithRouteSelector = createSelector(
  selectModal,
  (modalState) => modalState.modalWithRoute
)

const modalIsDisplayedSelector = createSelector(
  selectModal,
  (modalState) => modalState.isDisplayed
)

const modalIsAlertSelector = createSelector(
  selectModal,
  (modalState) => modalState.isAlert
)

const modalPreventCloseSelector = createSelector(
  selectModal,
  (modalState) => modalState.preventClose
)

const modalChildrenSelector = createSelector(
  selectModal,
  (modalState) => modalState.children
)

const modalContentPropsSelector = createSelector(
  selectModal,
  (modalState) => modalState.contentProps
)

export {
  selectModal,
  modalWithRouteSelector,
  modalIsDisplayedSelector,
  modalIsAlertSelector,
  modalPreventCloseSelector,
  modalChildrenSelector,
  modalContentPropsSelector,
}
