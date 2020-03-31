import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { colors } from 'theme'


const SVG = styled.svg`
  ${({ margin }) => margin && css`
    margin: ${margin};
  `}
`
const LogoDiners = ({ size, color, margin }) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    width={size}
    color={color}
    margin={margin}
    viewBox="0 0 27 23"
  >
    <title>Diners</title>
    <path d="M15.31 0h-4.6A11.17 11.17 0 0 0 0 11.6 11.42 11.42 0 0 0 11.21 23h4.1A11.72 11.72 0 0 0 27 11.6v-.1A11.61 11.61 0 0 0 15.31 0zm-3.8 21A9.56 9.56 0 0 1 2 11.5 9.56 9.56 0 0 1 11.51 2 9.56 9.56 0 0 1 21 11.5a9.56 9.56 0 0 1-9.49 9.5z" fill="#6b7c93" />
    <path d="M13 5.2v12.7a6.54 6.54 0 0 0 0-12.7zM5.31 9.9a6.57 6.57 0 0 0 4.7 8V5.2a6.58 6.58 0 0 0-4.7 4.7z" fill="#6b7c93" />
  </SVG>
)

LogoDiners.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
}

LogoDiners.defaultProps = {
  color: colors.black,
  size: 23,
}

export default LogoDiners
