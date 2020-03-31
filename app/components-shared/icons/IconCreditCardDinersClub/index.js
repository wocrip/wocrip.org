import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { colors } from 'theme'


const SVG = styled.svg`
  ${({ margin }) => margin && css`
    margin: ${margin};
  `}
`
const IconCreditCardDinersClub = ({
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
    <path d="M21.1 19.2H2.9c-1 0-1.8-.8-1.8-1.8V6.6c0-1 .8-1.8 1.8-1.8h18.3c1 0 1.8.8 1.8 1.8v10.8c0 1-.9 1.8-1.9 1.8z" fill="#ebf1f8" />
    <path d="M10.1 6.3h3.8c3.1.2 5.5 2.9 5.2 6.1-.2 2.8-2.4 5-5.2 5.2h-3.8c-3.1-.2-5.5-2.9-5.2-6.1.2-2.7 2.4-5 5.2-5.2z" fill="#0165ac" />
    <path d="M11.6 15.2c1.8-.6 2.7-2.6 2.1-4.4-.3-1-1.1-1.7-2.1-2.1v6.5zM9.4 8.8c-1.8.6-2.7 2.6-2.1 4.4.3 1 1.1 1.7 2.1 2.1V8.8zm1.1 8.1c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9-2.2 4.9-4.9 4.9z" fill="#fff" />
  </SVG>
)

IconCreditCardDinersClub.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  title: PropTypes.string,
}

IconCreditCardDinersClub.defaultProps = {
  color: colors.black,
  size: 24,
}

export default IconCreditCardDinersClub
