import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { colors } from 'theme'


const SVG = styled.svg`
  ${({ margin }) => margin && css`
    margin: ${margin};
  `}
`
const IconDribble = ({
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
    <path d="M15.9,22C15.9,22,16,22,15.9,22c11-4.4,8-20.8-3.9-20.8C6,1.2,1.2,6.1,1.2,12C1.2,19.5,8.8,24.8,15.9,22z M6,19.2 c0.8-1.3,3.2-4.9,7.5-6.2c0.9,2.3,1.5,4.9,1.6,7.9C11.8,22,8.4,21.3,6,19.2L6,19.2z M16.3,20.4c-0.1-2.9-0.7-5.4-1.5-7.6 c1.9-0.3,4-0.1,6.5,0.9C20.8,16.6,18.9,19,16.3,20.4z M21.4,12.3c-2.7-1-5.1-1.1-7.2-0.7c-0.3-0.7-0.7-1.4-1-2 c3.2-1.3,5-2.8,5.9-3.6C20.6,7.6,21.5,9.8,21.4,12.3z M18.2,4.9c-0.8,0.7-2.6,2.2-5.6,3.4c-1.5-2.4-3.1-4.1-4.1-5 C11.7,1.9,15.5,2.5,18.2,4.9z M7.1,3.9c0.8,0.7,2.5,2.3,4.1,4.8C9,9.5,6.2,10,2.8,10.1C3.3,7.5,4.9,5.3,7.1,3.9L7.1,3.9z M2.6,11.4 c3.8-0.1,6.9-0.7,9.4-1.5c0.3,0.6,0.7,1.2,1,1.9C8.7,13.2,6,16.7,5,18.3C3.3,16.5,2.4,14.1,2.6,11.4L2.6,11.4z" />
  </SVG>
)


IconDribble.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  title: PropTypes.string,
}

IconDribble.defaultProps = {
  color: colors.black,
  size: 24,
}

export default IconDribble
