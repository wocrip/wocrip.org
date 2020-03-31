import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { colors } from 'theme'


const SVG = styled.svg`
  ${({ margin }) => margin && css`
    margin: ${margin};
  `}
`
const IconFacebook = ({
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
    <path d="M22.7,12c0-5.9-4.8-10.7-10.7-10.7S1.3,6.1,1.3,12S6.1,22.7,12,22.7c0.1,0,0.1,0,0.2,0v-8.3H9.9v-2.7h2.3V9.7 c0-2.3,1.4-3.6,3.5-3.6c1,0,1.8,0.1,2.1,0.1v2.4h-1.4c-1.1,0-1.3,0.5-1.3,1.3v1.7h2.7l-0.4,2.7H15v8C19.4,21,22.7,16.9,22.7,12z" />
  </SVG>
)


IconFacebook.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  title: PropTypes.string,
}

IconFacebook.defaultProps = {
  color: colors.black,
  size: 24,
}

export default IconFacebook
