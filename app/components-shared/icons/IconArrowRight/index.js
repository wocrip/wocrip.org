import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { colors } from 'theme'


const SVG = styled.svg`
  ${({ margin }) => margin && css`
    margin: ${margin};
  `}
`
const IconArrowRight = ({
  size,
  color,
  margin,
  title,
}) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    width={size}
    color={color}
    margin={margin}
    viewBox="0 0 24 24"
  >
    {title && (
      <title>
        {title}
      </title>
    )}
    <path d="M21.7,8.3L21.7,8.3L21.7,8.3L21.7,8.3l-0.1-0.1c0,0,0,0,0,0l-8.1-7.9c-0.4-0.4-1.1-0.4-1.5,0l-0.1,0.1 c0,0,0,0,0,0c-0.4,0.4-0.4,1.1,0,1.4l6.1,6H1.2C0.5,7.9,0,8.4,0,9l0,0c0,0.6,0.5,1.1,1.2,1.1H18l-6.1,6c0,0,0,0,0,0 c-0.4,0.4-0.4,1.1,0,1.4l0.1,0.1l0,0c0.4,0.4,1.1,0.4,1.5,0l8.2-8c0,0,0,0,0,0C22.1,9.3,22.1,8.7,21.7,8.3z" />
  </SVG>
)

IconArrowRight.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  title: PropTypes.string,
}

IconArrowRight.defaultProps = {
  color: colors.black,
  size: 24,
}

export default IconArrowRight
