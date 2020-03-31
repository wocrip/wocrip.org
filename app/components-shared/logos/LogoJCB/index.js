import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { colors } from 'theme'


const SVG = styled.svg`
  ${({ margin }) => margin && css`
    margin: ${margin};
  `}
`
const LogoJCB = ({ size, color, margin }) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    width={size}
    color={color}
    margin={margin}
    viewBox="0 0 26 23"
  >
    <title>JCB</title>
    <path d="M3.16 2A3.14 3.14 0 0 0 0 5.2v8a4.93 4.93 0 0 0 2.67.8 1.72 1.72 0 0 0 1.68-1.6V8H7v4.2c0 1.6-.89 3-3.75 3A17.1 17.1 0 0 1 0 14.8V21h4.84A3.14 3.14 0 0 0 8 17.8V2z" fill="#6b7c93" />
    <path d="M12.3 2A3.24 3.24 0 0 0 9 5.2V9c.8-.8 2.3-1.3 4.6-1.2a18.66 18.66 0 0 1 2.5.4v1.5a6.81 6.81 0 0 0-2.4-.8 2.64 2.64 0 0 0-2.8 2.2 2.64 2.64 0 0 0 2.2 2.8h.5a6.19 6.19 0 0 0 2.4-.8v1.5a10.86 10.86 0 0 1-2.5.4c-2.3.1-3.7-.4-4.5-1.2v7h4.8a3.16 3.16 0 0 0 3.2-3.2V2z" fill="#6b7c93" opacity=".75" style={{ isolation: 'isolate' }} />
    <path d="M21.24 2A3.18 3.18 0 0 0 18 5.2V8h5a1.76 1.76 0 0 1 1.82 1.6v.1a1.65 1.65 0 0 1-1.51 1.7 2 2 0 0 1 1.92 1.8 1.89 1.89 0 0 1-1.96 1.8H18v6h4.76A3.18 3.18 0 0 0 26 17.8V2zM20 13.9h2.32a1.14 1.14 0 0 0 .71-1.3 1.2 1.2 0 0 0-.71-.7H20zm2.83-4a1 1 0 0 0-.71-.9H20v1.8h2.12a1 1 0 0 0 .71-.9z" fill="#6b7c93" opacity=".5" style={{ isolation: 'isolate' }} />
  </SVG>
)

LogoJCB.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
}

LogoJCB.defaultProps = {
  color: colors.black,
  size: 23,
}

export default LogoJCB
