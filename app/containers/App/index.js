import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Switch, Route, withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo'
import { injectIntl } from 'react-intl'
import { compose } from 'redux'

import { signout, deauthenticateUser } from 'services/user/actions'
import { authenticatedSelector, userIdSelector } from 'services/user/selectors'
import { auth_getUser } from 'services/user/queries'

import HomePage from 'containers/HomePage/Loadable'
import NotFoundPage from 'containers/NotFoundPage/Loadable'
import Navbar from 'components-ceacle/modules/nav/Navbar'
// import PrivateRoute from 'components-shared/modules-auth/PrivateRoute'
// import Authorization from 'components-shared/modules-auth/Authorization'
import WithTracker from 'components-shared/modules/WithTracker'
import Wrapper from './Wrapper'


// const Developer = Authorization(['developer', 'manager', 'admin'])
// const Manager = Authorization(['manager', 'admin'])
// const Admin = Authorization(['admin'])
const navItems = []

const App = ({
  intl: { locale },
  signoutDispatch,
  user,
}) => (
  <Wrapper>
    <Helmet
      titleTemplate="%s - Modo Application Starter"
      defaultTitle="Modo Application Starter"
    >
      <html lang={locale} />
      <meta name="author" content="Ceacle" />
      <meta name="description" content="Modo Application Starter documentation." />
    </Helmet>

    <Navbar
      items={navItems}
      navAccount
      user={user}
      signout={signoutDispatch}
    />

    <Switch>
      <Route exact path="/:lang([a-z]{2})?" component={WithTracker(HomePage)} />
      <Route path="" component={WithTracker(NotFoundPage)} />
    </Switch>
  </Wrapper>
)

App.propTypes = {
  user: PropTypes.object,
  signoutDispatch: PropTypes.func,
}

const mapStateToProps = (state) => ({
  userId: userIdSelector(state),
  authenticated: authenticatedSelector(state),
})

const mapDispatchToProps = (dispatch) => ({
  signoutDispatch: () => {
    dispatch(deauthenticateUser())
    signout()
  },
})

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  graphql(auth_getUser, {
    skip: (ownProps) => !ownProps.authenticated,
    options: ({ userId }) => ({
      variables: { _id: userId },
    }),
    props: ({ data }) => ({
      user: data.auth_getUser,
    }),
  }),
  injectIntl,
)(App)
