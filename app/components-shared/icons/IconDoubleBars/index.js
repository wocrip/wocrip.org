import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { colors } from 'theme'


const SVG = styled.svg`
  overflow: visible !important;

  ${({ margin }) => margin && css`
    margin: ${margin};
  `}

  rect {
    transition: all 0.15s ease-out;
  }

  &.open.animate rect:nth-child(2) {
    transform: rotate(-45deg) translate(19px, 5px);
    transform-origin: right bottom;
  }

  &.open.animate rect:nth-child(3) {
    transform: rotate(45deg) translate(-1px, 0px);
    transform-origin: right bottom;
  }
`

const IconDoubleBars = ({
  color,
  open,
  size,
  margin,
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
    <rect y="4" width="24" height="4" rx="2" ry="2" />
    <rect y="15" width="24" height="4" rx="2" ry="2" />
    <path d="M0 0h24v24H0z" fill="none" />
  </SVG>
)


IconDoubleBars.propTypes = {
  color: PropTypes.string,
  open: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  title: PropTypes.string,
}

IconDoubleBars.defaultProps = {
  color: colors.black,
  open: '',
  size: 24,
}

export default IconDoubleBars
