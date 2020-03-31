import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'

import { styles } from 'theme'
import ToggleOption from 'components-shared/modules/ToggleOption'
import IconKeyArrowDown from 'components-shared/icons/IconKeyArrowDown'

import Select from './Select'


const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${styles.select.wrapper}
`
const Toggle = ({
  value,
  values,
  messages,
  onToggle,
}) => {
  let content = (<option>--</option>)

  if (values) {
    content = values.map((val) => (
      <ToggleOption key={val} value={val} message={messages[val]} />
    ))
  }

  return (
    <Wrapper
      justifyContent="space-between"
    >
      <Select value={value} onChange={onToggle}>
        {content}
      </Select>

      <IconKeyArrowDown />
    </Wrapper>
  )
}

Toggle.propTypes = {
  onToggle: PropTypes.func,
  values: PropTypes.array,
  value: PropTypes.string,
  messages: PropTypes.object,
}


export default Toggle
