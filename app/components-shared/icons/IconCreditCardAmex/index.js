import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { colors } from 'theme'


const SVG = styled.svg`
  ${({ margin }) => margin && css`
    margin: ${margin};
  `}
`
const IconCreditCardAmex = ({
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
    <path d="M21 19.1H2.8c-1 0-1.8-.8-1.8-1.8V6.7c0-1 .8-1.8 1.8-1.8h18.1c1 0 1.8.8 1.8 1.8v10.7c.1.9-.7 1.7-1.7 1.7z" fill="#1d91ce" />
    <path fill="#fff" d="M4.1 13.8l-.4.8H.5L3 9.4h6l.6 1.1.6-1.1H18.3l.7.7.7-.7h3.8L20.8 12l2.5 2.6h-3.6l-.8-.7-.8.7h-13l-.3-.8" />
    <path d="M4.8 13.9h-.7.7zm7.6-3.8h-1.6l-1.2 2.5-1.3-2.5H6.8v3.6l-1.6-3.6H3.7L2 13.9h1l.4-.9h2l.4.9h2v-3.1l1.4 3.1h.9l1.4-3v3h1v-3.8zm6.5 1.2l-1.1-1.2h-4.5v3.8h4.4l1.2-1.2 1.2 1.2h1.2L19.5 12l1.8-1.9h-1.2l-1.2 1.2zm-2.3 1.8h-2.3v-.8h2.3v-.8h-2.3v-.7h2.3v-.6l1.7 1.7-1.7 1.7v-.5zM4.4 10.7l.7 1.5H3.7l.7-1.5z" fill="#1d91ce" />
  </SVG>
)

IconCreditCardAmex.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  title: PropTypes.string,
}

IconCreditCardAmex.defaultProps = {
  color: colors.black,
  size: 24,
}

export default IconCreditCardAmex
