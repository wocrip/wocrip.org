import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { colors } from 'theme'


const SVG = styled.svg`
  ${({ margin }) => margin && css`
    margin: ${margin};
  `}
`
const IconCreditCardMasterCard = ({
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
    <path d="M21.1 19.2H2.9c-1 0-1.8-.8-1.8-1.8V6.6c0-1 .8-1.8 1.8-1.8h18.3c1 0 1.8.8 1.8 1.8v10.8c0 1-.9 1.8-1.9 1.8z" fill="#003663" />
    <circle cx="9" cy="12" r="4.9" fill="#eb1c26" />
    <circle cx="15" cy="12" r="4.9" fill="#f99f1b" />
    <path d="M12 8.1c-2.1 1.7-2.5 4.8-.9 6.9.2.3.5.6.9.9 2.1-1.7 2.5-4.8.9-6.9l-.9-.9z" fill="#ef5d20" />
  </SVG>
)

IconCreditCardMasterCard.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  title: PropTypes.string,
}

IconCreditCardMasterCard.defaultProps = {
  color: colors.black,
  size: 24,
}

export default IconCreditCardMasterCard
