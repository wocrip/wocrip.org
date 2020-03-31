import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { compose } from 'redux'

import isEmpty from 'lodash/isEmpty'
import { injectIntl, FormattedMessage } from 'react-intl'
import { Box } from '@rebass/grid'

import { auth_availability, auth_createUser } from 'services/user/mutations'
import { GetGPUName } from 'services/user/utils/deviceInfo'
import getLocale, { lang } from 'services/intl/getLocale'
import { app } from 'theme'

import A from 'components-shared/basics/A'
import ButtonLoader from 'components-shared/modules-form/ButtonLoader'
import Title from 'components-shared/basics/Title'
import Text from 'components-shared/basics/Text'
import TextFieldGroup from 'components-shared/modules-form/TextFieldGroup'
import FormGroup from 'components-shared/modules-form/FormGroup'
import ProviderLogin from 'components-shared/modules-form/ProviderLogin'
import ButtonRadio from 'components-shared/modules-form/ButtonRadio'

import validateInput from './validateInput'
import messages from './messages'


class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      consentToNewsletter: false,
      consentToTerms: false,
      email: '',
      errors: {},
      locale: getLocale(),
      invalid: false,
      isLoading: false,
      isValidating: {},
      password: '',
      // Previous values are checked to not send uneccessary server calls
      // For checkUserExists()
      previousValues: {},
      username: '',
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.getButtonRadioValue = this.getButtonRadioValue.bind(this)
    this.checkUserExists = this.checkUserExists.bind(this)
    this.updateErrors = this.updateErrors.bind(this)
  }

  onChange(event) {
    let { value } = event.target
    const inputs = [
      'username',
      'email',
    ]
    if (inputs.includes(event.target.name)) {
      value = value.trim()
      value = value.replace(/\s\s+/g, ' ')
    }
    this.setState({ [event.target.name]: value })
  }

  onSubmit(event) {
    event.preventDefault()
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true })
      const {
        username,
        email,
        password,
        locale,
        consentToNewsletter,
      } = this.state
      const gpu = GetGPUName()
      const {
        auth_createUser: auth_createUserProps,
      } = this.props

      auth_createUserProps({
        variables: {
          username,
          email,
          password,
          locale,
          consentToNewsletter,
          gpu,
        },
      }).then(({ data }) => {
        const { token, errors, user } = data.auth_createUser
        this.setState({ isLoading: false })

        if (!isEmpty(errors)) {
          this.setState({ errors })
        } else if (token) {
          const { setTokenAndUser } = this.props
          setTokenAndUser(token, user)
        }
      }).catch((error) => {
        this.setState({ errors: error, isLoading: false })
      })
    }
  }

  getButtonRadioValue(targeName) {
    this.setState({ [targeName]: !this.state[targeName] })
  }

  checkUserExists(event) {
    const {
      intl: { formatMessage },
    } = this.props
    const field = event.target.name
    const val = event.target.value
    const previousVal = this.state.previousValues[field]

    if (val !== '' && val.length > 3 && val !== previousVal && this.isValid(field)) {
      this.setState({ isValidating: { [field]: true } })
      const {
        auth_availability: auth_availabilityProps,
      } = this.props

      auth_availabilityProps({
        variables: { identifier: val },
      }).then(({ data }) => {
        const { errors, previousValues } = this.state
        const { isAvailable } = data.auth_availability
        let invalid = false
        errors[field] = ''

        if (!isAvailable) {
          errors[field] = `${formatMessage(messages[field])} ${formatMessage(messages.isUnavailable)}`
          invalid = true
        }

        previousValues[field] = val
        this.setState({
          errors,
          previousValues,
          invalid,
          isValidating: {
            [field]: false,
          },
        })
      })
    }
  }

  updateErrors(field, text) {
    if (field && text) {
      const { errors } = this.state
      errors[field] = text
      this.setState({ errors })
    }
  }

  isValid(field) {
    const { intl } = this.props
    const { errors, isValid } = validateInput(this.state, intl)
    const { errors: stateErrors } = this.state
    const allErrors = {
      ...stateErrors,
    }

    if (field && isEmpty(errors[field])) {
      delete allErrors[field]
      this.setState({ errors: allErrors })
      return true
    }
    if (field && !isEmpty(errors[field])) {
      allErrors[field] = errors[field]
      this.setState({ errors: allErrors })
      return isValid
    }

    if (!isValid) {
      this.setState({ errors })
    }

    return isValid
  }

  render() {
    const {
      consentToNewsletter,
      consentToTerms,
      errors,
      isValidating,
      username,
      email,
      password,
      isLoading,
      invalid,
    } = this.state
    const {
      align,
      hideTitle,
      reversed,
      setTokenAndUser,
      from,
      intl: { formatMessage, locale },
    } = this.props
    const signinUrl = from
      ? `${lang(locale)}/signin?from=${from}`
      : `${lang(locale)}/signin`

    return (
      <form onSubmit={this.onSubmit}>
        {!hideTitle &&
          <Title
            align={align}
            size="h5"
            reversed={reversed}
            margin="0 0 -10px"
          >
            {formatMessage(messages.signUp)}
          </Title>
        }

        <FormGroup
          margin="30px 0 0"
        >
          {errors && errors.consentToTerms &&
            <Text
              fontSize="0.85em"
              color="red"
              margin="0 0 -10px"
            >
              {errors.consentToTerms}
            </Text>
          }

          <ButtonRadio
            allowUnselect
            labelWhiteSpace="normal"
            initActiveIndex={consentToTerms ? 0 : -1}
            getButtonRadioValue={
              () => this.getButtonRadioValue('consentToTerms')
            }
            options={[
              <Box mr={0} width={['100%', '100%', 'auto', 'auto']} mt="5px">
                <Text
                  size={0.9}
                  margin="-7px 0 10px"
                >
                  <FormattedMessage
                    id="components-shared.SignupForm.bySignUp"
                    textComponent={Text}
                    values={{
                      terms: (
                        <A href={`https://ceacle.com${lang(locale)}/legal/terms-of-services`}>
                          {formatMessage(messages.terms)}
                        </A>
                      ),
                      privacy: (
                        <A href={`https://ceacle.com${lang(locale)}/legal/privacy-policy"`}>
                          {formatMessage(messages.privacy)}
                        </A>
                      ),
                    }}
                  />
                  {app &&
                    app.signin &&
                    app.signin.agreeNotifiaction &&
                    <FormattedMessage
                      id="components-shared.SignupForm.notification"
                      values={{
                        appName: app.mainAppName,
                      }}
                    />
                  }
                </Text>
              </Box>,
            ]}
          />

          <Box mt="-20px">
            <ButtonRadio
              allowUnselect
              labelWhiteSpace="normal"
              initActiveIndex={consentToNewsletter ? 0 : -1}
              getButtonRadioValue={
                () => this.getButtonRadioValue('consentToNewsletter')
              }
              options={[
                <Box mr={0} width={['100%', '100%', 'auto', 'auto']} mt="5px">
                  <Text
                    size={0.9}
                    margin="-7px 0 10px"
                  >
                    {formatMessage(messages.consentToNews)}
                  </Text>
                </Box>,
              ]}
            />
          </Box>
        </FormGroup>

        <Text
          reversed={reversed}
          align={align}
          margin="0px 0 -25px"
          fontWeight="600"
        >
          {formatMessage(messages.with)}
        </Text>

        <ProviderLogin
          setTokenAndUser={setTokenAndUser}
          consentToTerms={consentToTerms}
          consentToNewsletter={consentToNewsletter}
          mustConsent
          mode="signup"
          updateErrors={() => this.updateErrors(
            'consentToTerms',
            formatMessage(messages.validRequiredConsent)
          )}
          reversed={reversed}
          margin="30px 0 0"
        />

        <Text
          margin="30px 0 10px"
          align={align}
          reversed={reversed}
          fontWeight="600"
        >
          {formatMessage(messages.orWithEmail)}
        </Text>

        <TextFieldGroup
          error={errors && errors.username}
          isValidating={isValidating && isValidating.username}
          placeholder={formatMessage(messages.username)}
          onChange={this.onChange}
          onBlur={this.checkUserExists}
          value={username}
          field="username"
          reversed={reversed}
        />

        <TextFieldGroup
          error={errors && errors.email}
          isValidating={isValidating && isValidating.email}
          placeholder={formatMessage(messages.email)}
          onChange={this.onChange}
          onBlur={this.checkUserExists}
          value={email}
          field="email"
          inputType="email"
          reversed={reversed}
        />

        <TextFieldGroup
          error={errors && errors.password}
          placeholder={formatMessage(messages.password)}
          onChange={this.onChange}
          value={password}
          field="password"
          inputType="password"
          reversed={reversed}
          visibilityButton
        />

        <FormGroup
          margin="10px 0 0"
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
            {formatMessage(messages.signUp)}
          </ButtonLoader>
        </FormGroup>

        <FormGroup
          margin="30px 0 0"
          flex
          justifyContent="start"
        >
          <FormattedMessage
            id="components-shared.SignupForm.hasAccount"
            textComponent={Text}
            values={{
              signin: (
                <A margin="0 0 0 5px" noVisited to={signinUrl}>
                  {formatMessage(messages.signIn)}
                </A>
              ),
            }}
          />
        </FormGroup>
      </form>
    )
  }
}

SignupForm.propTypes = {
  align: PropTypes.string,
  auth_availability: PropTypes.func.isRequired,
  auth_createUser: PropTypes.func.isRequired,
  from: PropTypes.string,
  intl: PropTypes.object,
  hideTitle: PropTypes.bool,
  reversed: PropTypes.bool,
  setTokenAndUser: PropTypes.func.isRequired,
}

export default compose(
  graphql(auth_availability, {
    name: 'auth_availability',
  }),
  graphql(auth_createUser, {
    name: 'auth_createUser',
  }),
  injectIntl,
)(SignupForm)
