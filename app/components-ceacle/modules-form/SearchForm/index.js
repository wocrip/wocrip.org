import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { injectIntl } from 'react-intl'
import styled from 'styled-components'


import { colors } from 'theme'

import TextFieldGroup from 'components-shared/modules-form/TextFieldGroup'
import IconSearch from 'components-shared/icons/IconSearch'

import messages from './messages'


const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 500px) {
    display: none;
    visibility: hidden;
  }
`
const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  cursor: pointer;
  margin-top: -5px;

  svg {
    fill: ${colors.gray} !important;
    transition: all 0.1s ease-in;
  }

  svg:hover {
    fill: ${colors.deepblue} !important;
  }
`
class SearchForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: '',
    }
  }

  render() {
    const {
      intl: { formatMessage },
      handleKeyPress,
      handleOnChange,
      handleOnClick,
      reversed,
      value,
      searchProps,
    } = this.props
    const { errors } = this.state

    return (
      <Wrapper>
        <TextFieldGroup
          field="search"
          autoComplete="search"
          placeholder={formatMessage(messages.search)}
          value={value}
          error={errors}
          onChange={handleOnChange}
          onKeyPress={handleKeyPress}
          reversed={reversed}
          errorHide
          search
          icon={(
            <IconWrapper onClick={handleOnClick}>
              <IconSearch size={26} />
            </IconWrapper>
          )}
          {...searchProps}
        />
      </Wrapper>
    )
  }
}

SearchForm.propTypes = {
  intl: PropTypes.object.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  reversed: PropTypes.bool,
  value: PropTypes.string,
  searchProps: PropTypes.object,
}

export default compose(
  injectIntl,
)(SearchForm)
