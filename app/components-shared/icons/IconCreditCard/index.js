import React from 'react'
import PropTypes from 'prop-types'
import { mix } from 'polished'
import styled, { css } from 'styled-components'

import { colors } from 'theme'


const SVG = styled.svg`
  ${({ margin }) => margin && css`
    margin: ${margin};
  `}

  *:nth-child(2) {
    ${({ color, color_1 }) => color_1 ? css`
      fill: ${color_1};
    `
    : css`
      fill: ${mix(0.8, colors.white, color)};
    `}
  }

  *:nth-child(3) {
    ${({ color, color_2 }) => color_2 ? css`
      fill: ${color_2};
    `
    : css`
      fill: ${mix(0.2, colors.white, color)};
    `}
  }

  *:nth-child(4) {
    ${({ color, color_3 }) => color_3 ? css`
      fill: ${color_3};
    `
    : css`
      fill: ${mix(0.3, colors.white, color)};
    `}
  }

  *:nth-child(5) {
    ${({ color_4 }) => color_4 ? css`
      fill: ${color_4};
    `
    : css`
      fill: ${colors.white};
    `}
  }
`
const IconCreditCard = ({
  size,
  color,
  color_1,
  color_2,
  color_3,
  color_4,
  margin,
  title,
}) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    width={size}
    color={color}
    color_1={color_1}
    color_2={color_2}
    color_3={color_3}
    color_4={color_4}
    margin={margin}
    viewBox="0 0 24 24"
  >
    {title && (
      <title>
        {title}
      </title>
    )}
    <path d="M21.2 19.2H2.8c-1 0-1.8-.8-1.8-1.8V6.6c0-1 .8-1.8 1.8-1.8h18.4c1 0 1.8.8 1.8 1.8v10.9c0 .9-.8 1.8-1.8 1.7zM8.6 9.2c0-.4-.3-.6-.6-.6H3.8c-.3 0-.6.3-.6.6v2.5c0 .4.3.6.6.6H8c.3 0 .6-.3.6-.6V9.2z" />
    <path d="M20 16.2h-2.3c-.5 0-.8-.2-.8-.8s.3-.8.8-.8H20c.5 0 .8.2.8.8s-.3.8-.8.8zm-4.6 0h-2.3c-.5 0-.8-.2-.8-.8s.3-.8.8-.8h2.3c.5 0 .8.2.8.8s-.3.8-.8.8zm-4.5 0H8.6c-.5 0-.8-.2-.8-.8s.3-.8.8-.8h2.3c.5 0 .8.2.8.8s-.3.8-.8.8zm-4.6 0H4c-.5 0-.8-.2-.8-.8s.3-.8.8-.8h2.3c.5 0 .8.2.8.8s-.3.8-.8.8z" />
  </SVG>
)

IconCreditCard.propTypes = {
  color: PropTypes.string,
  color_1: PropTypes.string,
  color_2: PropTypes.string,
  color_3: PropTypes.string,
  color_4: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  title: PropTypes.string,
}

IconCreditCard.defaultProps = {
  color: colors.black,
  size: 24,
}

export default IconCreditCard
