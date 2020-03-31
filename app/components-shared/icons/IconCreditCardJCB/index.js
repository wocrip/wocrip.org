import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { colors } from 'theme'


const SVG = styled.svg`
  ${({ margin }) => margin && css`
    margin: ${margin};
  `}
`
const IconCreditCardJCB = ({
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
    <path d="M21.3 19.3H2.7c-1 0-1.9-.8-1.9-1.8v-11c0-1 .8-1.8 1.9-1.8h18.6c1 0 1.9.8 1.9 1.8v11c-.1 1-.9 1.8-1.9 1.8z" fill="#ebf1f8" />
    <path d="M4.7 17.8h3.1c.7 0 1.5-.9 1.5-1.5v-10H6.2c-.7 0-1.5.9-1.5 2.3v9.2z" fill="#047ab1" />
    <path d="M6.4 14c-.6 0-1.2-.1-1.7-.2V13c.4.3.9.4 1.5.4s.9-.4.9-1v-2.3h1.5v2.3c-.1.9-.5 1.6-2.2 1.6z" fill="#fff" />
    <path d="M10.1 17.8h3.1c.7 0 1.5-.9 1.5-1.5v-10h-3.1c-.7 0-1.5.9-1.5 2.3v9.2z" fill="#d42d06" />
    <path d="M10.1 10.6c.4-.4 1.2-.7 2.5-.6.7 0 1.4.2 1.4.2v.9c-.4-.2-.9-.4-1.3-.4-.9-.1-1.5.4-1.5 1.4 0 .9.6 1.5 1.5 1.4.5 0 .9-.2 1.3-.4v.8s-.7.2-1.4.2c-1.2.1-2-.2-2.5-.6v-2.9z" fill="#fff" />
    <path d="M15.5 17.8h3.1c.7 0 1.5-.9 1.5-1.5v-10H17c-.7 0-1.5.9-1.5 2.3v9.2z" fill="#67b637" />
    <path d="M19.3 12.9c0 .6-.5 1-1.1 1h-2.7v-3.8h2.7c.6 0 1 .4 1 .9 0 .4-.3.8-.8.9.5.1.9.5.9 1zm-2-2.2h-1v1h1c.2 0 .4-.2.4-.5s-.2-.5-.4-.5zm.2 1.6h-1.1v1.1h1.1c.2 0 .4-.2.4-.5-.1-.4-.2-.6-.4-.6z" fill="#fff" />
  </SVG>
)

IconCreditCardJCB.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  title: PropTypes.string,
}

IconCreditCardJCB.defaultProps = {
  color: colors.black,
  size: 24,
}

export default IconCreditCardJCB
