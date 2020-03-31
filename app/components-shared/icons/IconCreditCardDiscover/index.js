import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { colors } from 'theme'


const SVG = styled.svg`
  ${({ margin }) => margin && css`
    margin: ${margin};
  `}
`
const IconCreditCardDiscover = ({
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
    <path d="M21.2 19.2H2.8c-1 0-1.8-.8-1.8-1.8V6.6c0-1 .8-1.8 1.8-1.8h18.4c1 0 1.8.8 1.8 1.8v10.9c0 .9-.8 1.8-1.8 1.7z" fill="#ebf1f8" />
    <path d="M12.6 19.2h8.7c1 0 1.8-.8 1.8-1.8v-2.2c-3.3 1.9-6.8 3.3-10.5 4z" fill="#f27712" />
    <path d="M22.3 13.1h-.8l-.9-1.2h-.1v1.2h-.6v-2.9h.9c.7 0 1.2.3 1.2.9 0 .5-.3.7-.7.8l1 1.2zm-.9-2.1c0-.3-.2-.4-.6-.4h-.2v.9h.2c.3 0 .6-.2.6-.5zm-3.7-.8h1.8v.5h-1.2v.6h1.1v.5h-1.1v.8h1.2v.5h-1.8v-2.9zm-2.1 2.9l-1.4-3h.7l.9 2 .9-2h.7l-1.4 3h-.4zm-5.8 0c-1 0-1.7-.7-1.7-1.5s.8-1.5 1.8-1.5c.3 0 .5.1.8.2v.7c-.2-.2-.5-.3-.8-.3-.6 0-1.1.4-1.1 1s.5 1 1.1 1c.3 0 .5-.1.8-.3v.6c-.4.1-.6.1-.9.1zm-1.9-.9c0 .6-.5 1-1.1 1-.5 0-.8-.2-1.1-.5l.3-.5c.1.3.4.4.7.4.3 0 .5-.2.5-.4 0-.1-.1-.2-.2-.3-.1-.1-.3-.1-.4-.2-.6-.2-.8-.4-.8-.8 0-.5.4-.8 1-.8.4 0 .7.1 1 .3l-.3.4c-.1-.1-.3-.2-.5-.2-.3 0-.5.1-.5.3 0 .2.1.2.5.4.6.2.9.4.9.9zm-3.2-2h.6v2.9h-.6v-2.9zm-2.1 2.9h-.9v-2.9h.9c1 0 1.8.6 1.8 1.4 0 .4-.2.8-.6 1.1-.3.3-.7.4-1.2.4zm.8-2.2c-.2-.2-.5-.2-.9-.2h-.2v1.9h.2c.4 0 .7-.1.9-.2.2-.2.4-.5.4-.7s-.2-.6-.4-.8z" />
    <path d="M12.4 10.1c-.8 0-1.5.7-1.5 1.5 0 .9.7 1.5 1.5 1.5.9 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z" fill="#f27712" />
  </SVG>
)

IconCreditCardDiscover.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  title: PropTypes.string,
}

IconCreditCardDiscover.defaultProps = {
  color: colors.black,
  size: 24,
}

export default IconCreditCardDiscover
