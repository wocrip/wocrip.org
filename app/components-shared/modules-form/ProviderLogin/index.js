import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { compose } from 'redux'

import { injectIntl } from 'react-intl'

import { auth_fromProviderToGetToken, auth_connectProvider } from 'services/user/mutations'
import { auth_getUserAccount } from 'services/user/queries'
import getLocale from 'services/intl/getLocale'
import { GetGPUName } from 'services/user/utils/deviceInfo'

import Text from 'components-shared/basics/Text'
import FormGroup from 'components-shared/modules-form/FormGroup'
import ProviderLoginButton from 'components-shared/modules-form/ProviderLoginButton'

import validateFacebook from './validateFacebook'
import validateGoogle from './validateGoogle'


class ProviderLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {},
      locale: getLocale(),
      isLoading: false,
    }
    this.responseFacebook = this.responseFacebook.bind(this)
    this.responseGoogle = this.responseGoogle.bind(this)
    this.startLoading = this.startLoading.bind(this)
  }

  responseFacebook(response) {
    const {
      consentToNewsletter,
      intl,
      mode,
    } = this.props
    const { errors, isValid } = validateFacebook(response, intl)

    if (!isValid) {
      this.setState({ errors })
      return
    }

    const { data } = response.picture
    const image = data.is_silhouette ? '' : data.url
    const variables = {
      provider: 'facebook',
      accessToken: response.accessToken,
      email: response.email,
      display_name: response.name,
      first_name: '',
      last_name: '',
      mode,
      locale: this.state.locale,
      profile_picture: image,
      user_id: response.userID,
      gpu: GetGPUName(),
    }

    if (consentToNewsletter) variables.consentToNewsletter = consentToNewsletter

    this.requestToken({ variables })
  }

  responseGoogle(response) {
    const {
      consentToNewsletter,
      intl,
      mode,
    } = this.props
    const { errors, isValid } = validateGoogle(response, intl)

    if (!isValid) {
      this.setState({ errors })
      return
    }

    const { profileObj } = response
    const variables = {
      provider: 'google',
      accessToken: response.accessToken,
      email: profileObj.email,
      display_name: profileObj.name,
      first_name: profileObj.givenName,
      last_name: profileObj.familyName,
      mode,
      locale: this.state.locale,
      profile_picture: profileObj.imageUrl,
      user_id: response.googleId,
      gpu: GetGPUName(),
    }

    if (consentToNewsletter) variables.consentToNewsletter = consentToNewsletter

    this.requestToken({ variables })
  }

  requestToken({ variables }) {
    const {
      mode,
      setTokenAndUser,
      userId,
    } = this.props

    if (mode === 'connect') {
      this.props.auth_connectProvider({
        variables: {
          ...variables,
          _id: userId,
        },
        refetchQueries: [{
          query: auth_getUserAccount,
          variables: { _id: userId, account: true },
        }],
      }).then(({ data }) => {
        const { errors } = data.auth_connectProvider

        if (errors) {
          this.setState({ errors, isLoading: false })
        } else {
          this.setState({ errors: {}, isLoading: false })
        }
      },
      (err) => this.setState({ errors: err, isLoading: false })
      )
    } else {
      this.props.auth_fromProviderToGetToken({ variables }).then(({ data }) => {
        const { token } = data.auth_fromProviderToGetToken
        const error = data.auth_fromProviderToGetToken.errors

        if (token) {
          setTokenAndUser(token)
        } else {
          this.setState({ errors: error, isLoading: false })
        }
      },
      (err) => this.setState({ errors: err, isLoading: false })
      )
    }
  }

  startLoading(from) {
    this.setState({ isLoading: true, from })
  }

  render() {
    const {
      errors,
      isLoading,
      from,
      locale,
    } = this.state
    const {
      reversed,
      buttonType,
      checkedFacebook,
      checkedGoogle,
      flexDirection,
      margin,
      ...props
    } = this.props

    return (
      <FormGroup
        margin={margin}
      >
        {errors && (errors.facebook || errors.google || errors.provider) &&
          <FormGroup>
            <Text
              color="red"
              align="center"
              marginBottom="10px"
            >
              { errors.facebook || errors.google || errors.provider }
            </Text>
          </FormGroup>
        }
        <FormGroup
          flex
          flexDirection={flexDirection}
        >
          <ProviderLoginButton
            provider="facebook"
            fields="name,email,picture"
            callback={this.responseFacebook}
            disabled={isLoading && from === 'facebook'}
            reversed={reversed}
            buttonType={buttonType}
            checked={checkedFacebook}
            startLoading={this.startLoading}
            language={locale}
            {...props}
          />

          <ProviderLoginButton
            provider="google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            disabled={isLoading && from === 'google'}
            reversed={reversed}
            buttonType={buttonType}
            checked={checkedGoogle}
            startLoading={this.startLoading}
            language={locale}
            {...props}
          />
        </FormGroup>
      </FormGroup>
    )
  }
}

ProviderLogin.propTypes = {
  auth_fromProviderToGetToken: PropTypes.func.isRequired,
  auth_connectProvider: PropTypes.func.isRequired,
  buttonType: PropTypes.string,
  checkedFacebook: PropTypes.bool,
  checkedGoogle: PropTypes.bool,
  consentToTerms: PropTypes.bool,
  consentToNewsletter: PropTypes.bool,
  flexDirection: PropTypes.string,
  intl: PropTypes.object,
  margin: PropTypes.string,
  mode: PropTypes.string.isRequired,
  mustConsent: PropTypes.bool,
  reversed: PropTypes.bool,
  setTokenAndUser: PropTypes.func,
  updateErrors: PropTypes.func,
  userId: PropTypes.string,
}

ProviderLogin.contextTypes = {
  // router: PropTypes.object.isRequired,
}

export default compose(
  graphql(auth_fromProviderToGetToken, {
    name: 'auth_fromProviderToGetToken',
  }),
  graphql(auth_connectProvider, {
    name: 'auth_connectProvider',
  }),
  injectIntl,
)(ProviderLogin)
