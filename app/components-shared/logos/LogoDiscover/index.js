import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { colors } from 'theme'


const SVG = styled.svg`
  ${({ margin }) => margin && css`
    margin: ${margin};
  `}
`
const LogoDiscover = ({ size, color, margin }) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    width={size}
    color={color}
    margin={margin}
    viewBox="0 0 55 23"
  >
    <title>Discover</title>
    <path d="M3.2 7.05H.7V16h2.5a4.45 4.45 0 0 0 3.1-1 4.58 4.58 0 0 0 1.6-3.4 4.35 4.35 0 0 0-4.2-4.5zm2 6.7a3.17 3.17 0 0 1-2.3.7h-.5v-5.9h.5a3.17 3.17 0 0 1 2.3.7 3.1 3.1 0 0 1 .9 2.2 3.17 3.17 0 0 1-.9 2.3zM8.6 16h1.7V7.05H8.6zm5.8-5.5c-1-.4-1.3-.6-1.3-1.1a1.11 1.11 0 0 1 1.2-1 2.1 2.1 0 0 1 1.4.7l.9-1.2a4 4 0 0 0-2.5-1 2.56 2.56 0 0 0-2.7 2.4v.1c0 1.2.5 1.9 2.1 2.4a6.12 6.12 0 0 1 1.2.5 1.05 1.05 0 0 1 .5.9 1.31 1.31 0 0 1-1.2 1.3h-.1a2 2 0 0 1-1.8-1.2L11 14.35a3.4 3.4 0 0 0 3 1.7 2.82 2.82 0 0 0 3-2.7v-.3c-.1-1.2-.6-1.8-2.6-2.6zm3.1 1.1a4.57 4.57 0 0 0 4.5 4.6 5.45 5.45 0 0 0 2.2-.5v-2a2.61 2.61 0 0 1-2 1 2.82 2.82 0 0 1-2.9-2.8v-.2a3 3 0 0 1 2.8-3.1 2.81 2.81 0 0 1 2.1 1v-2a3.84 3.84 0 0 0-2.1-.5 4.33 4.33 0 0 0-4.6 4.45zm20.3 1.5l-2.3-6h-1.8l3.7 9.1h.9L42 7.05h-1.8l-2.4 6zm5 2.9h4.8v-1.5h-3.1v-2.4h3v-1.5h-3v-2h3.1V7.05h-4.8zm11.5-6.3c0-1.7-1.1-2.6-3.1-2.6h-2.5V16h1.7v-3.6h.2l2.3 3.6H55l-2.7-3.7a2.43 2.43 0 0 0 2-2.6zm-3.4 1.5h-.5V8.45h.5c1.1 0 1.6.5 1.6 1.3s-.5 1.4-1.6 1.4z" fill="#6b7c93" />
    <path d="M29.4 7a4.59 4.59 0 0 0-4.6 4.6 4.74 4.74 0 0 0 4.6 4.7 4.61 4.61 0 0 0 4.7-4.6A4.76 4.76 0 0 0 29.4 7z" fill="#6b7c93" opacity=".5" style={{ isolation: 'isolate' }} />
  </SVG>
)

LogoDiscover.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
}

LogoDiscover.defaultProps = {
  color: colors.black,
  size: 23,
}

export default LogoDiscover
