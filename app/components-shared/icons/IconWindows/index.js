import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { colors } from 'theme'


const SVG = styled.svg`
  ${({ margin }) => margin && css`
    margin: ${margin};
  `}
`
const IconWindows = ({
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
    viewBox="0 0 500 500"
  >
    {title && (
      <title>
        {title}
      </title>
    )}
    <path d="M229.1 37.6v201.5h268.5V0zM2.4 239.1h204.4V40.7L2.4 69.2zM229.1 460.8L497.6 500V261.4H229.1zM2.4 427.7l204.4 29.8V261.4H2.4z" />
  </SVG>
)

IconWindows.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  title: PropTypes.string,
}

IconWindows.defaultProps = {
  color: colors.black,
  size: 24,
}

export default IconWindows
