import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Block from 'components-shared/basics/Block'
import Visibility from 'components-shared/icons/IconVisibility'
import VisibilityOff from 'components-shared/icons/IconVisibilityOff'


const StyledBlock = styled(Block)`
  position: absolute;
  top: 5px;
  right: 0px;
  width: 44px;
  height: 34px;
  padding: 5px 10px;
  cursor: pointer;
  user-select: none;

  &:hover {
    opacity: 0.85;
  }
`

const IconBlock = ({ reversed, visibility, onClick }) => (
  <StyledBlock onClick={onClick}>
    { visibility ?
      <Visibility fill={reversed ? 'white' : 'black'} />
      :
      <VisibilityOff fill={reversed ? 'white' : 'black'} />
    }
  </StyledBlock>
)

IconBlock.propTypes = {
  reversed: PropTypes.bool,
  visibility: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default IconBlock
