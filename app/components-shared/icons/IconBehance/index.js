import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { colors } from 'theme'


const SVG = styled.svg`
  ${({ margin }) => margin && css`
    margin: ${margin};
  `}
`
const IconBehance = ({
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
    <path d="m12.363 14.947c0-1.848-.879-3.214-2.695-3.726 1.325-.631 2.016-1.587 2.016-3.074 0-2.932-2.192-3.647-4.721-3.647h-6.963v14.721h7.158c2.684 0 5.205-1.283 5.205-4.274zm-9.117-7.934h3.046c1.171 0 2.225.328 2.225 1.682 0 1.25-.82 1.753-1.98 1.753h-3.291zm-.001 9.708v-4.054h3.538c1.429 0 2.333.594 2.333 2.102 0 1.487-1.079 1.952-2.4 1.952z" />
    <path d="m18.796 19.5c2.554 0 4.208-1.147 5.004-3.585h-2.592c-.279.91-1.429 1.391-2.321 1.391-1.721 0-2.625-1.005-2.625-2.713h7.713c.244-3.418-1.66-6.331-5.18-6.331-3.259 0-5.471 2.442-5.471 5.641 0 3.32 2.096 5.597 5.472 5.597zm-.092-9.026c1.475 0 2.217.864 2.341 2.277h-4.779c.097-1.401 1.03-2.277 2.438-2.277z" />
    <path d="m15.667 5.273h5.988v1.45h-5.988z" />
  </SVG>
)


IconBehance.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  title: PropTypes.string,
}

IconBehance.defaultProps = {
  color: colors.black,
  size: 24,
}

export default IconBehance
