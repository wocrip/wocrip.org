import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Input from 'components-shared/basics/Input'
import Label from 'components-shared/basics/Label'
import HelpBlock from 'components-shared/basics/HelpBlock'
import Block from 'components-shared/basics/Block'
import LoadingIndicator from 'components-shared/modules/LoadingIndicator'
import Text from 'components-shared/basics/Text'
import TextSmall from 'components-shared/basics/TextSmall'
import { colors } from 'theme'
import IconBlock from './IconBlock'


const StyledField = styled.div`
  display: inline-block;
  width: 100%;

  ${({ inline }) => !inline && css`
    margin: 10px 0;
  `}

  ${({ groupMargin }) => groupMargin && css`
    margin: ${groupMargin};
  `}

  ${({ label }) => !label && css`
    position: relative;
  `}

  &.error {
    color: ${colors.red}
  }
`
const InputLoaderBlock = styled(Block)`
  position: relative;
`
const LoaderBlock = styled(Block)`
  position: absolute;
  top: 11px;
  right: 10px;
`
const TextFieldGroup = ({
  autoComplete,
  className,
  error,
  errorHide,
  field,
  groupMargin,
  icon,
  inline,
  inputType,
  invisibleInput,
  isValidating,
  label,
  labelColor,
  labelWeight,
  onBlur,
  onChange,
  placeholder,
  reversed,
  textSmall,
  textSmallColor,
  value,
  visibilityButton,
  ...props
}) => {
  const [inputType_2, setType] = useState(inputType)
  const onClick = () => {
    setType(
      inputType === 'password' && inputType_2 === inputType
        ? 'text'
        : 'password'
    )
  }

  return (
    <StyledField
      className={`${className} ${error && 'error'}`}
      inline={inline}
      groupMargin={groupMargin}
    >
      { label &&
        <Label
          htmlFor={field}
          color={labelColor}
          labelWeight={labelWeight}
        >
          {label}
        </Label>
      }

      { error && !errorHide &&
        <HelpBlock
          color="red"
          reversed={reversed}
          label={label}
        >
          {error}
        </HelpBlock>
      }

      { textSmall &&
        <Text margin="-5px 0 5px">
          <TextSmall
            color={textSmallColor || 'gray'}
            size={0.8}
          >
            {textSmall}
          </TextSmall>
        </Text>
      }

      <InputLoaderBlock>
        { isValidating &&
          <LoaderBlock>
            <LoadingIndicator
              color={reversed ? 'white' : 'black'}
              size={20}
              noWrapper
              strokeWidth={5}
            />
          </LoaderBlock>
        }

        { visibilityButton && value &&
          <IconBlock
            onClick={() => onClick()}
            reversed={reversed}
            visibility={inputType_2 === 'password'}
          />
        }

        {icon && icon}

        <Input
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          inputType={inputType_2 !== inputType ? 'text' : inputType}
          name={field}
          label={label}
          status={error && 'error'}
          reversed={reversed}
          invisibleInput={invisibleInput}
          placeholder={placeholder}
          autoComplete={autoComplete || 'off'}
          {...props}
        />
      </InputLoaderBlock>
    </StyledField>
  )
}

TextFieldGroup.propTypes = {
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.string,
  errorHide: PropTypes.bool,
  field: PropTypes.string.isRequired,
  groupMargin: PropTypes.string,
  icon: PropTypes.any,
  inline: PropTypes.bool,
  inputType: PropTypes.string,
  invisibleInput: PropTypes.bool,
  isValidating: PropTypes.bool,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  labelWeight: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  reversed: PropTypes.bool,
  textSmall: PropTypes.string,
  textSmallColor: PropTypes.string,
  value: PropTypes.string,
  visibilityButton: PropTypes.bool,
}

export default TextFieldGroup
