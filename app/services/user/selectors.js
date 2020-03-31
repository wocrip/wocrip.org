import { createSelector } from 'reselect'


const selectUser = (state) => state.user

const authenticatedSelector = createSelector(
  selectUser,
  (user) => user.authenticated
)

const userDataSelector = createSelector(
  selectUser,
  (user) => user.data
)

const usernameSelector = createSelector(
  userDataSelector,
  (user) => user.username
)

const displaynameSelector = createSelector(
  userDataSelector,
  (user) => user.display_name
)

const userIdSelector = createSelector(
  userDataSelector,
  (user) => user._id
)

const userLocaleSelector = createSelector(
  userDataSelector,
  (user) => user.locale
)

const rolesSelector = createSelector(
  userDataSelector,
  (user) => user.roles
)

const userEmailSelector = createSelector(
  userDataSelector,
  (user) => user.emails
)

export {
  selectUser,
  userDataSelector,
  authenticatedSelector,
  displaynameSelector,
  usernameSelector,
  userIdSelector,
  userLocaleSelector,
  rolesSelector,
  userEmailSelector,
}
