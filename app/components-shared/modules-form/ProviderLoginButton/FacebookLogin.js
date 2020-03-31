// From
// https://www.npmjs.com/package/react-facebook-login
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'

import { getIsMobile } from 'utils/helpers'
import ButtonLoader from 'components-shared/modules-form/ButtonLoader'
import SwitchLoader from 'components-shared/modules-form/SwitchLoader'
import objectToParams from './objectToParams'
import messages from './messages'


// https://www.w3.org/TR/html5/disabled-elements.html#disabled-elements
const shouldAddDisabledProp = (tag) => [
  'button',
  'input',
  'select',
  'textarea',
  'optgroup',
  'option',
  'fieldset',
].indexOf((`${tag}`).toLowerCase()) >= 0

class FacebookLogin extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    callback: PropTypes.func.isRequired,
    appId: PropTypes.string.isRequired,
    xfbml: PropTypes.bool,
    cookie: PropTypes.bool,
    intl: PropTypes.object,
    reAuthenticate: PropTypes.bool,
    scope: PropTypes.string,
    redirectUri: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.string,
    buttonType: PropTypes.string,
    disableMobileRedirect: PropTypes.bool,
    isMobile: PropTypes.bool,
    reversed: PropTypes.bool,
    size: PropTypes.string,
    fields: PropTypes.string,
    cssClass: PropTypes.string,
    version: PropTypes.string,
    onClick: PropTypes.func,
    startLoading: PropTypes.func,
    tag: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    onFailure: PropTypes.func,
    language: PropTypes.string,
    mustConsent: PropTypes.bool,
    consentToTerms: PropTypes.bool,
    updateErrors: PropTypes.func,
  }

  static defaultProps = {
    text: 'Facebook',
    type: 'button',
    redirectUri: typeof window !== 'undefined' ? window.location.href : '/',
    scope: 'public_profile,email',
    xfbml: false,
    cookie: false,
    reAuthenticate: false,
    size: 'metro',
    fields: 'name',
    cssClass: 'kep-login-facebook',
    version: 'v5.0',
    language: 'en_US',
    disableMobileRedirect: false,
    isMobile: getIsMobile(),
    tag: 'button',
    onFailure: null,
  }

  state = {
    isSdkLoaded: false,
    loading: true,
  }

  componentDidMount() {
    this.mounted = true
    if (document.getElementById('facebook-jssdk')) {
      this.sdkLoaded()
      return
    }
    this.setFbAsyncInit()
    this.loadSdkAsynchronously()
    let fbRoot = document.getElementById('fb-root')
    if (!fbRoot) {
      fbRoot = document.createElement('div')
      fbRoot.id = 'fb-root'
      document.body.appendChild(fbRoot)
    }
  }

  componentWillUnmount() {
    this.mounted = false
  }

  setStateIfMounted(state) {
    if (this.mounted) {
      this.setState(state)
    }
  }

  setFbAsyncInit() {
    const { appId, xfbml, cookie, version } = this.props
    window.fbAsyncInit = () => {
      window.FB.init({
        version,
        appId,
        xfbml,
        cookie,
      })
      this.setStateIfMounted({ isSdkLoaded: true, loading: false })
    }
  }

  sdkLoaded() {
    this.setState({ isSdkLoaded: true, loading: false })
  }

  loadSdkAsynchronously() {
    const { language } = this.props; // eslint-disable-line

    ((d, s, id) => {
      const element = d.getElementsByTagName(s)[0]
      const fjs = element
      let js = element
      if (d.getElementById(id)) { return }
      js = d.createElement(s)
      js.id = id
      js.src = `https://connect.facebook.net/${language}/sdk.js`
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')
  }

  responseApi = (authResponse) => {
    window.FB.api('/me',
      { locale: this.props.language, fields: this.props.fields },
      (me) => {
        Object.assign(me, authResponse)
        this.props.callback(me)
      }
    )
  }

  checkLoginState = (response) => {
    this.setStateIfMounted({ disabled: false })
    if (response.authResponse) {
      this.responseApi(response.authResponse)
    } else if (this.props.onFailure) {
      this.props.onFailure({ status: response.status })
    } else {
      this.props.callback({ status: response.status })
    }
  }

  signIn = (event) => {
    if (event) {
      event.preventDefault() // to prevent submit if used within form
    }

    const didConsent = this.checkConsent()
    if (didConsent) {
      const {
        scope,
        appId,
        reAuthenticate,
        redirectUri,
        disableMobileRedirect,
        disabled,
        isMobile,
        startLoading,
      } = this.props
      const { isSdkLoaded } = this.state

      if (!isSdkLoaded || disabled) {
        return
      }
      this.setState({ disabled: true })
      startLoading('facebook')

      const params = {
        client_id: appId,
        redirect_uri: redirectUri,
        state: 'facebookdirect',
        scope,
      }

      if (reAuthenticate) {
        params.auth_type = 'reauthenticate'
      }

      if (isMobile && !disableMobileRedirect) {
        window.location.href = `//www.facebook.com/dialog/oauth?${objectToParams(params)}`
      } else {
        window.FB.login(this.checkLoginState, { scope, auth_type: params.auth_type })
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

  render() {
    const { disabled } = this.state
    const {
      text,
      type,
      tag,
      buttonType,
      checked,
      reversed,
      intl,
    } = this.props
    const optionalProps = {}
    const {
      loading,
    } = this.state

    if (disabled && shouldAddDisabledProp(tag)) {
      optionalProps.disabled = true
    }

    const LoginButton = (
      <ButtonLoader
        type={type}
        onClick={this.signIn}
        isLoading={disabled || loading}
        // Button style component
        color="deepblue"
        size={1.2}
        padding={1.3}
        display="block"
        margin="10px 0"
        width="47%"
        handleRoute
        reversed={reversed}
        // Button style component
        {...optionalProps}
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
        color="deepblue"
        label={intl.formatMessage(messages.connectTo, { provider: 'Facebook' })}
        labelOn={intl.formatMessage(messages.disconnectFrom, { provider: 'Facebook' })}
      />
    )

    return buttonType === 'switch' ? LoginSwitch : LoginButton
  }
}

export default injectIntl(FacebookLogin)
