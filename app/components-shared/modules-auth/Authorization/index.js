import React, { Component } from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'

import NotFound from 'components-shared/templates/NotFound'


const Authorization = (allowedRoles) => (WrappedComponent, user) => {
  class WithAuthorization extends Component { // eslint-disable-line react/prefer-stateless-function
    render() {
      if (!isEmpty(user)) {
        const { roles } = user
        const hasRole = allowedRoles.filter((element) => roles && roles.indexOf(element) > -1)

        if (hasRole.length > 0) {
          return <WrappedComponent {...this.props} />
        }
      }

      return (
        <NotFound
          size="h2"
          title="Not Allowed"
          small="Error 401"
          align="center"
          reversed
        />
      )
    }
  }

  WithAuthorization.propTypes = {
    user: PropTypes.object,
  }

  return WithAuthorization
}

export default Authorization
