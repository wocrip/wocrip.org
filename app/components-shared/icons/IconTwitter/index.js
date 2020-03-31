import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { colors } from 'theme'


const SVG = styled.svg`
  ${({ margin }) => margin && css`
    margin: ${margin};
  `}
`
const IconTwitter = ({
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
    <path d="M22.3,5.6c-0.8,0.3-1.6,0.6-2.4,0.7C20.7,5.8,21.4,5,21.7,4C20.9,4.5,20,4.8,19,5c-0.8-0.8-1.9-1.3-3.1-1.3 c-2.3,0-4.2,1.9-4.2,4.2c0,0.3,0,0.7,0.1,1C8.3,8.7,5.2,7,3.2,4.4C2.8,5.1,2.6,5.8,2.6,6.6c0,1.5,0.8,2.8,1.9,3.5 c-0.7,0-1.3-0.2-1.9-0.5c0,0,0,0,0,0c0,2,1.5,3.7,3.4,4.1c-0.3,0.1-0.7,0.1-1.1,0.1c-0.3,0-0.5,0-0.8-0.1c0.5,1.7,2.1,2.9,3.9,2.9 c-1.4,1.1-3.3,1.8-5.2,1.8c-0.3,0-0.7,0-1-0.1c1.9,1.2,4.1,1.9,6.5,1.9c7.7,0,12-6.4,12-12c0-0.2,0-0.4,0-0.5 C21,7.2,21.7,6.5,22.3,5.6z" />
  </SVG>
)


IconTwitter.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  title: PropTypes.string,
}

IconTwitter.defaultProps = {
  color: colors.black,
  size: 24,
}

export default IconTwitter
