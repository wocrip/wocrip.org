import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box } from '@rebass/grid'

import Wrapper from './Wrapper'
import Circle from './Circle'
import Svg from './Svg'


const Loader = styled(({
  additionalStyle,
  ...rest
}) =>
  <Box {...rest} />
)`
  ${({ additionalStyle }) => additionalStyle && additionalStyle}
`
const loader = ({
  customStyle,
  size,
  color,
  strokeWidth,
  additionalStyle,
}) => (
  <Loader
    additionalStyle={additionalStyle}
  >
    <Svg
      customStyle={customStyle}
      size={size}
      viewBox="0 0 50 50"
    >
      <Circle
        color={color}
        strokeWidth={strokeWidth}
        cx="25"
        cy="25"
        r="20"
      />
    </Svg>
  </Loader>
)

const LoadingIndicator = (props) => {
  if (props.noWrapper) {
    return loader(props)
  }

  return (
    <Wrapper {...props}>
      {loader(props)}
    </Wrapper>
  )
}

loader.propTypes = {
  additionalStyle: PropTypes.any,
  color: PropTypes.string,
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  customStyle: PropTypes.object,
}

LoadingIndicator.propTypes = {
  noWrapper: PropTypes.bool,
}

export default LoadingIndicator
