import React from 'react'
import PropTypes from 'prop-types'

import { authProvider } from 'services/config'
import FacebookLogin from './FacebookLogin'
import GoogleLogin from './GoogleLogin'


const ProviderLoginButton = ({ ...props }) => {
  const { facebookID, googleID } = authProvider

  switch (props.provider) {
    case 'facebook':
      return (
        <FacebookLogin
          appId={facebookID}
          {...props}
        />
      )
    case 'google':
      return (
        <GoogleLogin
          clientId={googleID}
          {...props}
        />
      )
    default:
      return null
  }
}

ProviderLoginButton.propTypes = {
  provider: PropTypes.string.isRequired,
}

export default ProviderLoginButton
