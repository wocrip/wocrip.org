// From
// https://github.com/anthonyjgrove/react-google-login
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'

import ButtonLoader from 'components-shared/modules-form/ButtonLoader'
import SwitchLoader from 'components-shared/modules-form/SwitchLoader'
import messages from './messages'


class GoogleLogin extends Component {
  static propTypes = {
    onSuccess: PropTypes.func.isRequired,
    onFailure: PropTypes.func.isRequired,
    clientId: PropTypes.string.isRequired,
    scope: PropTypes.string,
    className: PropTypes.string,
    redirectUri: PropTypes.string,
    cookiePolicy: PropTypes.string,
    loginHint: PropTypes.string,
    hostedDomain: PropTypes.string,
    fetchBasicProfile: PropTypes.bool,
    prompt: PropTypes.string,
    text: PropTypes.string,
    autoLoad: PropTypes.bool,
    disabled: PropTypes.bool,
    reversed: PropTypes.bool,
    checked: PropTypes.bool,
    // language: PropTypes.string,
    discoveryDocs: PropTypes.array,
    uxMode: PropTypes.string,
    isSignedIn: PropTypes.bool,
    responseType: PropTypes.string,
    type: PropTypes.string,
    buttonType: PropTypes.string,
    startLoading: PropTypes.func,
    intl: PropTypes.object,
    mustConsent: PropTypes.bool,
    consentToTerms: PropTypes.bool,
    updateErrors: PropTypes.func,
  }

  static defaultProps = {
    type: 'button',
    text: 'Google',
    scope: 'profile email',
    prompt: '',
    cookiePolicy: 'single_host_origin',
    fetchBasicProfile: true,
    isSignedIn: false,
    uxMode: 'popup',
  }

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }

    this.signIn = this.signIn.bind(this)
  }

  componentDidMount() {
    const {
      clientId,
      cookiePolicy,
      loginHint,
      hostedDomain,
      autoLoad,
      isSignedIn,
      fetchBasicProfile,
      redirectUri,
      discoveryDocs,
      onFailure,
      uxMode,
      scope,
    } = this.props; // eslint-disable-line

    ((d, s, id, cb) => {
      const element = d.getElementsByTagName(s)[0]
      const fjs = element
      let js = element
      js = d.createElement(s)
      js.id = id
      js.src = '//apis.google.com/js/client:platform.js'
      fjs.parentNode.insertBefore(js, fjs)
      js.onload = cb
    })(document, 'script', 'google-login', () => {
      const params = {
        client_id: clientId,
        cookie_policy: cookiePolicy,
        login_hint: loginHint,
        hosted_domain: hostedDomain,
        fetch_basic_profile: fetchBasicProfile,
        discoveryDocs,
        ux_mode: uxMode,
        redirect_uri: redirectUri,
        scope,
      }

      window.gapi.load('auth2', () => {
        if (!window.gapi.auth2.getAuthInstance()) {
          window.gapi.auth2.init(params).then(
            (res) => {
              if (isSignedIn && res.isSignedIn.get()) {
                this.handleSigninSuccess(res.currentUser.get())
              }
              this.isLoading(false)
            },
            (err) => {
              this.isLoading(false)
              onFailure(err)
            }
          )
        } else {
          this.isLoading(false)
        }
        if (autoLoad) {
          this.signIn()
        }
      })
    })
  }

  isLoading(value) {
    this.setState({ loading: value })
  }

  signIn(e) {
    if (e) {
      e.preventDefault() // to prevent submit if used within form
    }

    const didConsent = this.checkConsent()
    if (!this.props.disabled && didConsent) {
      const auth2 = window.gapi.auth2.getAuthInstance()
      const {
        onSuccess,
        onFailure,
        prompt,
        responseType,
        startLoading,
      } = this.props
      const options = { prompt }

      startLoading('google')

      if (responseType === 'code') {
        auth2.grantOfflineAccess(options).then(
          (res) => onSuccess(res),
          (err) => onFailure(err)
        )
      } else {
        auth2.signIn(options).then(
          (res) => this.handleSigninSuccess(res),
          (err) => onFailure(err)
        )
      }
    }
  }

  checkConsent = () => {
    const {
      mustConsent,
      consentToTerms,
      updateErrors,
    } = this.props

    if (mustConsent && !consentToTerms && updateErrors) {
      updateErrors()
      return false
    }

    return true
  }

  handleSigninSuccess(res) {
    /*
      offer renamed response keys to names that match use
    */
    const basicProfile = res.getBasicProfile()
    const authResponse = res.getAuthResponse()
    res.googleId = basicProfile.getId()
    res.tokenObj = authResponse
    res.tokenId = authResponse.id_token
    res.accessToken = authResponse.access_token
    res.profileObj = {
      googleId: basicProfile.getId(),
      imageUrl: basicProfile.getImageUrl(),
      email: basicProfile.getEmail(),
      name: basicProfile.getName(),
      givenName: basicProfile.getGivenName(),
      familyName: basicProfile.getFamilyName(),
    }
    this.props.onSuccess(res)
  }

  render() {
    const {
      text,
      type,
      className,
      reversed,
      disabled,
      buttonType,
      checked,
      intl: { formatMessage },
    } = this.props
    const {
      loading,
    } = this.state

    const LoginButton = (
      <ButtonLoader
        onClick={this.signIn}
        type={type}
        disabled={disabled || loading}
        isLoading={disabled || loading}
        className={className}
        // Button style component
        color="red"
        size={1.2}
        padding={1.3}
        display="block"
        margin="10px 0"
        width="47%"
        handleRoute
        reversed={reversed}
        // Button style component
      >
        {text}
      </ButtonLoader>
    )

    const LoginSwitch = (
      <SwitchLoader
        onClick={this.signIn}
        disabled={disabled || loading}
        isLoading={disabled || loading}
        checked={!!checked}
        color="red"
        label={formatMessage(messages.connectTo, { provider: 'Google' })}
        labelOn={formatMessage(messages.disconnectFrom, { provider: 'Google' })}
      />
    )

    return buttonType === 'switch' ? LoginSwitch : LoginButton
  }
}

export default injectIntl(GoogleLogin)
