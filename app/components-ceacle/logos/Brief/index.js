import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'


const StyledSvg = styled.svg`
  height: 27px;
  margin-top: -1px;

  ${({ color }) => color && css`
    * {
      fill: ${color};
    }
  `}

  ${({ customStyle }) => customStyle && css`
    ${customStyle}
  `}
`
const Brief = (props) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 52 25"
    {...props}
  >
    <title>
      Brief
    </title>
    <path d="M8.1 14.7c0 2.4-.6 4.3-3.6 4.3S1 17.1 1 14.5v-4.4c0-2.1.7-4.2 3.6-4.2s3.5 2.3 3.5 3.9v.5H5.6v-.6c0-1-.2-1.7-1-1.7s-1 .6-1 1.7v5.6c0 .9.1 1.7 1 1.7s1-.7 1-1.7v-.6zM9.5 18.9v-3.6H12v3.6zM17.3 1.6h2.5v5.6a2.4 2.4 0 012.3-1.3c1.9 0 2.7 1.5 2.7 3.9v4.4c0 2.9-.5 4.9-3 4.9a2 2 0 01-2.1-1.3 4.9 4.9 0 00-.1 1.1h-2.4a31.2 31.2 0 00.1-3.3zm4.9 8.6c0-1.2-.2-2-1.1-2s-1.3.8-1.3 2.3v4.2c0 1.5.4 2.1 1.2 2.1s1.2-.6 1.2-2.1zM31.9 9.1c-1.5 0-2.8.3-2.8 3v6.8h-2.5v-8.5c0-2.1 0-3-.1-4.3H29v2.1a2.8 2.8 0 012.9-2.3zM33.1 6.1h2.5v12.8h-2.5zm0-4.5h2.5v2.8h-2.5zM39.9 13.2v1.9c0 1 .3 1.9 1.2 1.9s1.2-.9 1.2-1.9h2.4c0 1.4-.2 4-3.5 4s-3.8-2-3.8-4.6v-4.2c0-1.8.6-4.4 3.8-4.4s3.6 1.8 3.6 4.4v2.9zm2.4-2V9.9c0-1.2-.2-1.9-1.1-1.9s-1.3.6-1.3 1.9v1.3zM47 18.9V8.3h-1.3V6.1H47V4.8c0-1.7.7-3.3 3-3.3h1v2.4h-.5c-.8 0-1 .5-1 1.3v1h1.6v2.1h-1.6v10.6z" />
  </StyledSvg>
)

Brief.propTypes = {
  color: PropTypes.string,
}

export default Brief
