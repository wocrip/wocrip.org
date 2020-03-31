import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { colors } from 'theme'


const SVG = styled.svg`
  ${({ margin }) => margin && css`
    margin: ${margin};
  `}
`
const LogoVisa = ({ size, color, margin }) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    width={size}
    color={color}
    margin={margin}
    viewBox="0 0 42 23"
  >
    <title>Visa</title>
    <path d="M20.8 5L18 18h-3.4l2.8-13zm14.1 8.4l1.8-4.9 1 4.9zm3.8 4.6h3.1L39.1 5h-2.9a1.5 1.5 0 0 0-1.4 1l-5 12h3.5l.7-1.9h4.3zm-8.8-4.3c0-3.4-4.7-3.6-4.7-5.1a1.32 1.32 0 0 1 1.4-1.1 6.28 6.28 0 0 1 3.3.6l.6-2.8a8.53 8.53 0 0 0-3.1-.6c-3.3 0-5.7 1.8-5.7 4.3 0 1.9 1.7 2.9 2.9 3.5s1.8 1 1.7 1.6c0 .9-1 1.3-2 1.3a8.53 8.53 0 0 1-3.5-.8l-.6 2.8a9.71 9.71 0 0 0 3.7.7c3.7.1 6-1.7 6-4.4M16 5l-5.4 13H7L4.3 7.6a1.33 1.33 0 0 0-.8-1.1A11.66 11.66 0 0 0 .2 5.4L.3 5H6a1.51 1.51 0 0 1 1.5 1.3l1.4 7.5L12.5 5z" fill="#6b7c93" />
  </SVG>
)

LogoVisa.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
}

LogoVisa.defaultProps = {
  color: colors.black,
  size: 23,
}

export default LogoVisa
