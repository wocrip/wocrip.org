import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'

import { Box } from '@rebass/grid'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { injectIntl } from 'react-intl'
import isEmpty from 'lodash/isEmpty'
import styled, { css } from 'styled-components'

import { authenticatedSelector, userIdSelector } from 'services/user/selectors'
import { auth_getUser } from 'services/user/queries'
import { emailList_subscribe } from 'services/email/mutations'
import getLocale from 'services/intl/getLocale'
import { getLocaleSelector } from 'services/intl/LanguageProvider/selectors'

import FormGroup from 'components-shared/modules-form/FormGroup'
import TextFieldGroup from 'components-shared/modules-form/TextFieldGroup'
import ButtonLoader from 'components-shared/modules-form/ButtonLoader'
import Text from 'components-shared/basics/Text'
import ButtonRadio from 'components-shared/modules-form/ButtonRadio'

import messages from './messages'
import validateInput from './validateInput'


const Consent = styled.div`
  height: 0px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.15 linear;

  ${({ visible }) => visible && css`
    height: auto;
    visibility: visible;
    opacity: 1;
  `}
`
class EmailSubscriptionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      consents: [false],
      email: '',
      locale: getLocale(),
      errors: {},
      isLoading: false,
      invalid: false,
    }

    props.consentTexts.forEach((text, index) => {
      this.state.consents[index] = false
    })

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.getButtonRadioValue = this.getButtonRadioValue.bind(this)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { user } = nextProps
    const { email, touched } = this.state
    if (!touched && !isEmpty(user) && !email) {
      this.setState({ email: user.emails[0].address })
    }
  }

  onSubmit(event) {
    event.preventDefault()
    if (this.isValid()) {
      const {
        list,
        application,
        emailList_subscribe: emailListSubscribe,
      } = this.props
      const { email, locale } = this.state
      this.setState({ isLoading: true, errors: {}, success: false })

      emailListSubscribe({
        variables: {
          email,
          locale,
          list,
          application,
        },
      }).then(({ data }) => {
        const { errors } = data.emailList_subscribe

        if (isEmpty(errors)) {
          this.setState({ isLoading: false, success: true, errors: {} })
        } else {
          this.setState({ isLoading: false, errors })
        }
      })
    }
  }

  onChange(event) {
    const { value, name } = event.target
    const { touched } = this.state
    if (!touched) this.setState({ touched: true })
    this.setState({ [name]: value, errors: {} })
  }

  getButtonRadioValue(consentValue, index) {
    const { consents } = this.state
    consents[index] = !consentValue
    this.setState({ consents, errors: {} })
  }

  isValid() {
    const { intl } = this.props
    const { errors, isValid } = validateInput(this.state, intl)
    if (!isValid) this.setState({ errors })
    return isValid
  }

  render() {
    const {
      consentTexts,
      intl: { formatMessage },
      list,
      reversed,
    } = this.props
    const {
      consents,
      email,
      errors,
      invalid,
      isLoading,
      success,
    } = this.state

    return (
      <form onSubmit={this.onSubmit}>
        <Consent visible={email && email.length > 2 ? 'true' : ''}>
          {errors && errors.consents &&
            <Text
              color="red"
              margin="0 0 -15px"
              fontSize="0.8em"
            >
              {errors.consents && errors.consents}
            </Text>
          }

          {consentTexts.map(({ text, key }, index) => (
            <ButtonRadio
              color="deepblue"
              allowUnselect
              labelWhiteSpace="normal"
              initActiveIndex={consents[index] ? 0 : -1}
              key={key}
              getButtonRadioValue={() => {
                this.getButtonRadioValue(consents[index], index)
              }}
              options={[
                <Box mr={0} width={['100%', '100%', 'auto', 'auto']}>
                  {text}
                </Box>,
              ]}
            />
          ))}
        </Consent>

        <FormGroup flex height="45px">
          <TextFieldGroup
            field="email"
            autoComplete="email"
            placeholder={formatMessage(messages.placeholder)}
            inline
            value={email}
            error={errors.email}
            onChange={this.onChange}
            reversed={reversed}
          />

          <Box width={20} height={20}></Box>

          <ButtonLoader
            color="deepblue"
            handleRoute
            isLoading={isLoading}
            disabled={isLoading || invalid}
            loaderSize={18}
            reversed={reversed}
          >
            {formatMessage(messages.subscribe)}
          </ButtonLoader>
        </FormGroup>

        {errors && errors.form &&
          <FormGroup
            margin="10px 0px -20px"
          >
            <Text
              color="red"
            >
              {errors.form}
            </Text>
          </FormGroup>
        }

        {success &&
          <FormGroup
            margin="10px 0px -20px"
          >
            <Text
              color="green"
            >
              {`${formatMessage(messages.successMessage)} ${list}.`}
            </Text>
          </FormGroup>
        }
      </form>
    )
  }
}

EmailSubscriptionForm.propTypes = {
  application: PropTypes.string,
  consentTexts: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    key: PropTypes.string,
  })).isRequired,
  emailList_subscribe: PropTypes.func,
  intl: PropTypes.object,
  list: PropTypes.string,
  reversed: PropTypes.bool,
  user: PropTypes.object,
}

const mapStateToProps = (state) => ({
  ...getLocaleSelector(state),
  userId: userIdSelector(state),
  authenticated: authenticatedSelector(state),
})

export default compose(
  connect(mapStateToProps),
  graphql(auth_getUser, {
    skip: (ownProps) => !ownProps.authenticated,
    options: ({ userId }) => ({
      variables: { _id: userId },
    }),
    props: ({ data }) => ({
      user: data.auth_getUser,
      loading: data.loading,
    }),
  }),
  graphql(emailList_subscribe, {
    name: 'emailList_subscribe',
  }),
  injectIntl,
)(EmailSubscriptionForm)
