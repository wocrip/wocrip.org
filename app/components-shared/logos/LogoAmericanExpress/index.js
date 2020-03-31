import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { colors } from 'theme'


const SVG = styled.svg`
  ${({ margin }) => margin && css`
    margin: ${margin};
  `}
`
const LogoAmericanExpress = ({ size, color, margin }) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    width={size}
    color={color}
    margin={margin}
    viewBox="0 0 59 23"
  >
    <title>American Express</title>
    <path fill="#6b7c93" d="M56 7.27L53.13 3h-2.35v7h1.87V5.54L55.57 10h2.26V3H56v4.27zM45.12 7l1-2.35L47 7zm-.19-4l-3.07 7h2.06l.58-1.44h3.26l.62 1.44h2.11l-3.17-7zm-6.14 3.55V6.4a1.61 1.61 0 0 1 1.77-1.77h2.11V3h-2.25a3.22 3.22 0 0 0-3.5 3.4v.15a3.14 3.14 0 0 0 3.4 3.4H41l.76-1.58h-1.1a1.62 1.62 0 0 1-1.82-1.82M34.09 3v7h1.87V3h-1.87zm-3.74 3h-2V4.58h2c.58 0 .86.34.86.72s-.28.67-.86.67m2.73-.72A2.23 2.23 0 0 0 30.59 3h-4v7h1.87V7.56h.67L31.21 10h2.35l-2.3-2.54a2.17 2.17 0 0 0 1.82-2.21M19.42 10h5.9V8.42h-4.03V7.27h3.93V5.68h-3.93v-1.1h4.03V3h-5.9v7zm-5.95-2.59L11.89 3H8.97v7h1.82V4.97L12.61 10h1.68l1.87-5.03V10h1.82V3h-2.92l-1.59 4.41zM3.31 7l1-2.35L5.23 7zm-.24-4L0 10h2.06l.58-1.44H5.9L6.52 10h2.11L5.51 3zm53.68 12.64H55a.56.56 0 1 1 0-1.11h3.12l.74-1.53H55a2.23 2.23 0 0 0-2.49 2.21 2 2 0 0 0 2.25 2.11h1.73a.58.58 0 1 1 0 1.15h-3.72V20h3.74A2.21 2.21 0 0 0 59 17.75a2 2 0 0 0-2.25-2.11m-6.86 0h-1.72a.56.56 0 1 1 0-1.11h3.11L52 13h-3.83a2.23 2.23 0 0 0-2.5 2.21 2 2 0 0 0 2.26 2.11h1.72a.58.58 0 1 1 0 1.15h-3.74V20h3.74a2.21 2.21 0 0 0 2.5-2.25 2 2 0 0 0-2.26-2.11m-10.93 4.31h5.9v-1.58h-4.03v-1.15h3.93v-1.58h-3.93v-1.11h4.03v-1.58h-5.9v7zm-3.69-4.03h-2v-1.39h2c.57 0 .86.34.86.72a.77.77 0 0 1-.86.67m2.73-.71A2.24 2.24 0 0 0 35.51 13h-4v7h1.87v-2.49H34L36.13 20h2.3l-2.3-2.54A2.21 2.21 0 0 0 38 15.21m-10.07.86h-2v-1.54h2a.77.77 0 0 1 .87.77.82.82 0 0 1-.87.77m.19-3.07h-4.07v7h1.87v-2.3h2.16a2.32 2.32 0 0 0 2.54-2.35 2.28 2.28 0 0 0-2.5-2.35m-4.41-.05h-2.39l-1.83 2.11-1.82-2.11h-2.44l3.07 3.45-3.12 3.55h2.4l1.87-2.2 1.91 2.2h2.45l-3.17-3.59 3.07-3.41zm-14.72 7h5.9v-1.58h-4.03v-1.15h3.93v-1.58h-3.93v-1.11h4.03v-1.58h-5.9v7z" />
  </SVG>
)

LogoAmericanExpress.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
}

LogoAmericanExpress.defaultProps = {
  color: colors.black,
  size: 23,
}

export default LogoAmericanExpress
