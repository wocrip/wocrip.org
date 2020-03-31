import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { colors } from 'theme'


const SVG = styled.svg`
  ${({ margin }) => margin && css`
    margin: ${margin};
  `}
`
const IconYoutube = ({
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
    <path d="M22.9,6.5c-0.3-1-1-1.7-2-2C19.1,4.1,12,4.1,12,4.1s-7.1,0-8.9,0.5c-1,0.3-1.7,1-2,2C0.7,8.3,0.7,12,0.7,12s0,3.7,0.5,5.5 c0.3,1,1,1.7,2,2c1.8,0.5,8.9,0.5,8.9,0.5s7.1,0,8.9-0.5c1-0.3,1.7-1,2-2c0.5-1.8,0.5-5.5,0.5-5.5S23.4,8.3,22.9,6.5z M9.7,15.4V8.6 l5.9,3.4L9.7,15.4z" />
  </SVG>
)


IconYoutube.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  title: PropTypes.string,
}

IconYoutube.defaultProps = {
  color: colors.black,
  size: 24,
}

export default IconYoutube
