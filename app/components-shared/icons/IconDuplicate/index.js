import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { colors } from 'theme'


const SVG = styled.svg`
  ${({ margin }) => margin && css`
    margin: ${margin};
  `}
`
const IconDuplicate = ({
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
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16,1H4C2.9,1,2,1.9,2,3v14h2V3h12V1z" />
    <path d="M21,7c0-1.1-0.9-2-2-2H8C6.9,5,6,5.9,6,7v5.7h0L6,21c0,1.1,0.9,2,2,2h11c1.1,0,2-0.9,2-2v-8.3h0L21,7z M19,21H8v-8.3V7h11 v5.7V21z" />
  </SVG>
)

IconDuplicate.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  title: PropTypes.string,
}

IconDuplicate.defaultProps = {
  color: colors.black,
  size: 24,
}

export default IconDuplicate
