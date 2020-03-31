import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { styles } from 'theme'

import InputFile from './InputFile'


const StyledTextarea = styled.textarea.attrs(({ inputType }) => ({
  type: inputType,
}))`
  ${({ invisibleInput }) => invisibleInput
    ? styles.input.invisible
    : styles.input.common}
`
const StyledSelect = styled.select.attrs(({ inputType }) => ({
  type: inputType,
}))`
  ${({ invisibleInput }) => invisibleInput
    ? styles.input.invisible
    : styles.input.common}
`
const StyledInput = styled.input.attrs(({ inputType }) => ({
  type: inputType,
}))`
  ${({ invisibleInput }) => invisibleInput
    ? styles.input.invisible
    : styles.input.common}
`

const TextareaWrapper = (props) => {
  const { autoHeight } = props

  const ref = React.useCallback((node) => {
    if (node !== null && autoHeight) {
      node.style.height = '' // eslint-disable-line no-param-reassign
      node.style.height = `${node.scrollHeight}px` // eslint-disable-line no-param-reassign
    }
  }, [])

  return <StyledTextarea ref={ref} {...props} />
}

TextareaWrapper.propTypes = {
  autoHeight: PropTypes.bool,
}

const Input = (props) => {
  const { inputType } = props

  if (inputType === 'textarea') return <TextareaWrapper {...props} />
  if (inputType === 'select') return <StyledSelect {...props} />
  if (inputType === 'file') return <InputFile {...props} />
  return <StyledInput {...props} />
}

Input.propTypes = {
  autoHeight: PropTypes.bool,
  checked: PropTypes.bool,
  error: PropTypes.bool,
  flat: PropTypes.string,
  input: PropTypes.object,
  inputType: PropTypes.string,
  invalid: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  reversed: PropTypes.bool,
  status: PropTypes.string,
  value: PropTypes.string,
}

Input.defaultProps = {
  inputType: 'text',
}

export default Input
