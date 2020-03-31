import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { compose } from 'redux'



import { authenticatedSelector } from 'services/user/selectors'
import { lang } from 'services/intl/getLocale'
import { auth } from 'theme'


const PrivateRoute = ({
  authenticated,
  component: Component,
  intl: { locale },
  onRendering,
  redirectTo,
  subComponent,
  user,
  ...rest
}) => {
  const { inAppSignIn, signInBaseUrl } = auth
  let ToRender

  const signUrl = inAppSignIn ?
    `${lang(locale)}/signin?from=${location.href}` :
    `${signInBaseUrl}${lang(locale)}/signin?from=${location.href}`

  if (authenticated) {
    ToRender = (props) => (<Component
      component={subComponent && subComponent}
      user={user}
      {...props}
    />)
  } else if (!authenticated && inAppSignIn) {
    ToRender = (props) => <Redirect to={signUrl} {...props} />
  } else {
    window.location = signUrl
  }

  if (onRendering) onRendering()

  return (
    <Route
      {...rest}
      render={(props) => <ToRender {...props} />}
    />
  )
}

PrivateRoute.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  intl: PropTypes.object,
  location: PropTypes.object,
  onRendering: PropTypes.func,
  redirectTo: PropTypes.string,
  subComponent: PropTypes.func,
  user: PropTypes.object,
}

PrivateRoute.contextTypes = {
  // router: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  authenticated: authenticatedSelector(state),
})

export default compose(
  connect(mapStateToProps),
  injectIntl,
)(PrivateRoute)
