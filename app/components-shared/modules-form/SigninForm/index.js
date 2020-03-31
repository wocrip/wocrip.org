import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { compose } from 'redux'

import { injectIntl, FormattedMessage } from 'react-intl'

import { auth_getToken } from 'services/user/mutations'
import { GetGPUName } from 'services/user/utils/deviceInfo'
import { lang } from 'services/intl/getLocale'

import A from 'components-shared/basics/A'
import ButtonLoader from 'components-shared/modules-form/ButtonLoader'
import Title from 'components-shared/basics/Title'
import Text from 'components-shared/basics/Text'
import TextFieldGroup from 'components-shared/modules-form/TextFieldGroup'
import FormGroup from 'components-shared/modules-form/FormGroup'
import ProviderLogin from 'components-shared/modules-form/ProviderLogin'

import validateInput from './validateInput'
import messages from './messages'


class SigninForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false,
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit(event) {
    event.preventDefault()

    if (this.isValid()) {
      const { identifier, password } = this.state
      this.setState({ errors: {}, isLoading: true })
      const gpu = GetGPUName()

      this.props.auth_getToken({
        variables: { identifier, password, gpu },
      }).then(({ data }) => {
        const { token, errors, user } = data.auth_getToken

        if (token) {
          const { setTokenAndUser } = this.props
          setTokenAndUser(token, user)
        } else {
          this.setState({ errors: errors.errors, isLoading: false })
        }
      },
      (err) => this.setState({ errors: err, isLoading: false })
      )
    }
  }

  onChange(event) {
    let { value } = event.target
    const inputs = [
      'identifier',
    ]
    if (inputs.includes(event.target.name)) {
      value = value.trim()
    }
    this.setState({ [event.target.name]: value })
  }

  isValid() {
    const { intl } = this.props
    const { errors, isValid } = validateInput(this.state, intl)

    if (!isValid) this.setState({ errors })
    return isValid
  }

  render() {
    const { errors, identifier, password, isLoading, invalid } = this.state
    const {
      align,
      intl: { formatMessage, locale },
      hideTitle,
      reversed,
      setTokenAndUser,
    } = this.props
    let { from } = this.props
    if (
      from
      && (from.includes('forgotten-password')
      || from.includes('reset-password'))
    ) {
      from = null
    }
    const signupUrl = from
      ? `${lang(locale)}/signup?from=${from}` : `${lang(locale)}/signup`

    return (
      <form onSubmit={this.onSubmit}>
        {!hideTitle &&
          <Title
            align={align}
            size="h5"
          >
            {formatMessage(messages.signIn)}
          </Title>
        }

        <Text
          reversed={reversed}
          align={align}
          margin="0px 0 -25px"
          fontWeight="600"
        >
          {formatMessage(messages.with)}
        </Text>

        <ProviderLogin
          mode="signin"
          setTokenAndUser={setTokenAndUser}
          reversed={reversed}
          margin="30px 0 0"
        />

        <Text
          margin="30px 0 10px"
          align={align}
          fontWeight="600"
        >
          {formatMessage(messages.orWithEmail)}
        </Text>

        <TextFieldGroup
          field="identifier"
          placeholder={formatMessage(messages.identifier)}
          value={identifier}
          error={errors.identifier}
          onChange={this.onChange}
          reversed={reversed}
          autoFocus
        />

        <TextFieldGroup
          field="password"
          placeholder={formatMessage(messages.password)}
          value={password}
          error={errors.password}
          onChange={this.onChange}
          inputType="password"
          reversed={reversed}
        />

        <FormGroup
          flex
          margin="-10px 0"
        >
          <Text
            size={0.8}
          >
            <A to={`${lang(locale)}/forgotten-password`} noVisited>
              {formatMessage(messages.forgottenPassword)}
            </A>
          </Text>
        </FormGroup>

        <FormGroup
          margin="30px 0 0"
        >
          {errors && errors.form &&
            <Text
              color="red"
              align={align}
            >
              { errors.form }
            </Text>
          }
        </FormGroup>

        <FormGroup
          margin="30px 0 0"
          flex
        >
          <ButtonLoader
            size={1.2}
            color="blue"
            padding={1.3}
            width="100%"
            handleRoute
            isLoading={isLoading}
            disabled={isLoading || invalid}
            reversed={reversed}
          >
            {formatMessage(messages.signIn)}
          </ButtonLoader>
        </FormGroup>

        <FormGroup
          margin="30px 0 0"
          flex
          justifyContent="start"
        >
          <FormattedMessage
            id="components-shared.SigninForm.dontHaveAccount"
            textComponent={Text}
            values={{
              createAccount: (
                <A margin="0 0 0 5px" noVisited to={signupUrl}>
                  {formatMessage(messages.createAccount)}
                </A>
              ),
            }}
          />
        </FormGroup>
      </form>
    )
  }
}

SigninForm.propTypes = {
  align: PropTypes.string,
  auth_getToken: PropTypes.func.isRequired,
  from: PropTypes.string,
  intl: PropTypes.object,
  hideTitle: PropTypes.bool,
  reversed: PropTypes.bool,
  setTokenAndUser: PropTypes.func.isRequired,
}

export default compose(
  graphql(auth_getToken, {
    name: 'auth_getToken',
  }),
  injectIntl,
)(SigninForm)
