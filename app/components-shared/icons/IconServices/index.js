import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { colors } from 'theme'


const SVG = styled.svg`
  overflow: visible !important;
  transition: all 0.15s ease-out;

  ${({ margin }) => margin && css`
    margin: ${margin};
  `}

  &.open {
    transform: rotate(45deg);
  }
`
const IconServices = ({
  size,
  color,
  margin,
  open,
  title,
}) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    width={size}
    color={color}
    className={open}
    margin={margin}
    viewBox="0 0 24 24"
  >
    {title && (
      <title>
        {title}
      </title>
    )}
    <circle cx="4" cy="4" r="4" />
    <circle cx="20" cy="4" r="4" />
    <circle cx="4" cy="20" r="4" />
    <circle cx="20" cy="20" r="4" />
  </SVG>
)

IconServices.propTypes = {
  color: PropTypes.string,
  open: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  title: PropTypes.string,
}

IconServices.defaultProps = {
  color: colors.black,
  open: '',
  size: 24,
}

export default IconServices
