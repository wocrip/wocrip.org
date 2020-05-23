import React, { useState } from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { useMutation } from '@apollo/react-hooks'

import { colors } from 'theme'
import { HELP_OFFER } from 'services/help/mutations'
import { lang } from 'services/intl/getLocale'

import Title from 'components-shared/basics/Title'
import TextFieldGroup from 'components-shared/modules-form/TextFieldGroup'
import Button from 'components-shared/basics/Button'
import Input from 'components-shared/basics/Input'
import Block from 'components-shared/basics/Block'
import Container from 'components-shared/basics/Container'
import ButtonRadio from 'components-shared/modules-form/ButtonRadio'

import messages from './messages'
import validateInput from './validateInput'


const Group = styled.div`
  display: grid;
  grid-gap: 4px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 600px){
    grid-template-columns: 1fr;
  }
`
const ChilAgeBlock = styled.div`
  margin-left: 27px;
`
const wrapperstyle = css`
  min-height: 30px;
  margin: 0;
`
const GuestForm = ({
  intl: { formatMessage, locale },
  reversed,
}) => {
  const [errors, setErrors] = useState(null)
  // const [helpKind, setHelpKind] = useState('')
  const [isCreateAccount, setIsCreateAccount] = useState(false)
  const [isValidating, setIsValidating] = useState({})
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChange = () => {}
  const onInput = () => {}
  const onCompleted = () => {}
  const checkUserExists = () => {}
  // const onFocus = () => {}

  const [sendHelpOffer, {
  }] = useMutation(HELP_OFFER, { onCompleted })

  return (
    <div>
      <Title
        size="h4"
      >
        About you
      </Title>

      { errors && errors.name &&
        <ErrorContainer>
          <ErrorBlock>
            {errors.name}
          </ErrorBlock>
        </ErrorContainer>
      }

      <Group>
        <TextFieldGroup
          error={errors && errors.username}
          isValidating={isValidating && isValidating.username}
          placeholder={formatMessage(messages.firstName)}
          onChange={onChange}
          onBlur={checkUserExists}
          value={username}
          field="First name"
          reversed={reversed}
        />

        <TextFieldGroup
          error={errors && errors.username}
          isValidating={isValidating && isValidating.username}
          placeholder={formatMessage(messages.lastName)}
          onChange={onChange}
          onBlur={checkUserExists}
          value={username}
          field="Last name"
          reversed={reversed}
        />
      </Group>

      <TextFieldGroup
        error={errors && errors.email}
        isValidating={isValidating && isValidating.email}
        placeholder={formatMessage(messages.email)}
        onChange={onChange}
        onBlur={checkUserExists}
        value={email}
        field="email"
        inputType="email"
        reversed={reversed}
      />

      {/* <KindsOfHelp> */}
        <ButtonRadio
          allowUnselect
          getButtonRadioValue={(value) => setIsCreateAccount(value === 0)}
          // wrapperstyle={wrapperstyle}
          initActiveIndex={isCreateAccount ? 0 : -1}
          options={[
            <div>
              Create account?
            </div>,
          ]}
        />
      {/* </KindsOfHelp> */}

      {isCreateAccount &&
        <div>
          <TextFieldGroup
            error={errors && errors.password}
            placeholder={formatMessage(messages.password)}
            onChange={onChange}
            value={password}
            field="password"
            inputType="password"
            reversed={reversed}
            visibilityButton
          />
        </div>
      }

    </div>
  )
}

GuestForm.propTypes = {
  intl: PropTypes.object,
  reversed: PropTypes.bool,
}

export default injectIntl(GuestForm)
