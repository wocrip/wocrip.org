import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { colors } from 'theme'


const SVG = styled.svg`
  ${({ margin }) => margin && css`
    margin: ${margin};
  `}
`
const IconCreditCardVisa = ({
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
    <path d="M21.3 19.3H2.7c-1 0-1.8-.8-1.9-1.8v-11c0-1 .8-1.8 1.9-1.8h18.5c1 0 1.8.8 1.9 1.8v10.9c0 1.1-.8 1.9-1.8 1.9z" fill="#ebf1f8" />
    <path d="M11.5 9.4l-1.1 5.2H9.1l1.1-5.2h1.3zm5.8 3.4l.7-2 .4 2h-1.1zm1.5 1.8H20l-1.1-5.2h-1.2c-.3 0-.5.1-.6.4l-2 4.8h1.4l.3-.8h1.7l.3.8zm-3.6-1.7c0-1.4-1.9-1.4-1.9-2.1 0-.2.2-.4.6-.4.5 0 .9 0 1.3.2l.2-1.1c-.3-.1-.7-.2-1.3-.2-1.3 0-2.3.7-2.3 1.7 0 .7.7 1.2 1.2 1.4.5.3.7.4.7.6 0 .4-.4.5-.8.5-.7 0-1.1-.2-1.4-.3l-.3 1.1c.3.1.9.3 1.5.3 1.6.1 2.5-.6 2.5-1.7zM9.6 9.4l-2.2 5.2H5.9l-1.1-4.1c-.1-.3-.1-.3-.3-.5-.4-.2-.8-.3-1.3-.4v-.2h2.3c.3 0 .6.2.6.5l.6 3 1.4-3.5h1.5z" fill="#162680" />
  </SVG>
)

IconCreditCardVisa.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  title: PropTypes.string,
}

IconCreditCardVisa.defaultProps = {
  color: colors.black,
  size: 24,
}

export default IconCreditCardVisa
