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
const Modo = (props) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 58 25"
    {...props}
  >
    <title>
      Modo
    </title>
    <path d="M8.1 14.7c0 2.4-.6 4.3-3.6 4.3S1 17.1 1 14.5v-4.4c0-2.1.7-4.2 3.6-4.2s3.5 2.3 3.5 3.9v.5H5.6v-.6c0-1-.2-1.7-1-1.7s-1 .6-1 1.7v5.6c0 .9.1 1.7 1 1.7s1-.7 1-1.7v-.6zM9.5 18.9v-3.6H12v3.6zM17.3 9.8a24.8 24.8 0 00-.1-3.7h2.5a4.1 4.1 0 00.1 1.1A2.4 2.4 0 0122 5.9a2 2 0 012.1 1.4 2.6 2.6 0 012.4-1.4c1.4 0 2.6.7 2.6 3.2v9.8h-2.6V9.6c0-.9-.2-1.4-.9-1.4s-1.1.7-1.1 2v8.7h-2.6V9.6c0-1.1-.4-1.4-1-1.4s-1.1.7-1.1 1.9v8.8h-2.5zM38.4 10v5c0 2.7-1.4 4.1-3.8 4.1s-3.7-1.4-3.7-4.1V9.9c0-2.8 1.6-4 3.8-4s3.7 1.4 3.7 4.1zm-5-.1v5.2c0 1 .4 1.8 1.2 1.8s1.2-.7 1.2-1.9V9.9c0-1-.2-1.7-1.2-1.7s-1.2.6-1.2 1.7zM47.5 1.6v17.3H45c0-.3-.1-1-.1-1.2a2.2 2.2 0 01-2.2 1.4c-2.3 0-2.8-1.8-2.8-4.3v-5c0-2.3.9-3.9 3-3.9a2.3 2.3 0 012 .9V1.6zm-5 13.4c0 1.2.3 1.9 1.2 1.9s1.2-1 1.2-2.5v-3.9c0-1.4-.1-2.3-1.2-2.3s-1.2.7-1.2 1.7zM56.8 10v5c0 2.7-1.4 4.1-3.8 4.1s-3.8-1.4-3.8-4.1V9.9c0-2.8 1.6-4 3.9-4s3.7 1.4 3.7 4.1zm-5-.1v5.2c0 1 .3 1.8 1.2 1.8s1.2-.7 1.2-1.9V9.9c0-1-.3-1.7-1.2-1.7s-1.2.6-1.2 1.7z" />
  </StyledSvg>
)

Modo.propTypes = {
  color: PropTypes.string,
}

export default Modo
