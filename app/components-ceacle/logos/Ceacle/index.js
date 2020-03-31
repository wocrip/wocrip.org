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
const Ceacle = (props) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 25"
    {...props}
  >
    <title>
      Ceacle
    </title>
    <path d="M38.3 5.9v9.8c0 .9.2 1.1.8 1.1h1.6V19l-2.1.2c-2.7 0-2.9-1.9-2.9-3.8V5.9zM8.1 14.7c0 2.4-.6 4.3-3.6 4.3S1 17.1 1 14.5v-4.4c0-2.1.7-4.2 3.6-4.2s3.5 2.3 3.5 3.8v.5H5.6v-.5c0-1-.2-1.7-1-1.7s-1 .6-1 1.7v5.6c0 .9.1 1.7 1 1.7s1-.7 1-1.7v-.6zM11.9 13.2v1.9c0 1 .3 1.9 1.3 1.9s1.1-1 1.1-1.9h2.5c0 1.4-.3 4-3.6 4s-3.7-2-3.7-4.6v-4.2c0-1.8.5-4.4 3.7-4.4s3.6 1.8 3.6 4.4v2.9zm2.5-2V9.9c0-1.2-.3-1.9-1.2-1.9S12 8.6 12 9.9v1.3zM25.3 16.3a20.1 20.1 0 00.1 2.6H23c0-.2-.1-.7-.1-.9a2.3 2.3 0 01-2.2 1.1c-1.9 0-2.7-1.8-2.7-3.7v-.2c0-3.2 2.2-4 4.5-4h.3V9.5c0-1-.1-1.5-.9-1.5s-1 .6-1 1.3v.2h-2.5c0-1.9.8-3.5 3.6-3.5s3.3 1.4 3.3 3.4zm-2.5-3.2h-.4c-1.2 0-1.9.4-1.9 2.1v.2c0 .8.3 1.5 1.1 1.5s1.2-.6 1.2-2.3zM34.2 14.7c0 2.4-.6 4.3-3.6 4.3s-3.5-2-3.5-4.6v-4.3c0-2.1.7-4.2 3.6-4.2s3.5 2.3 3.5 3.8v.5h-2.5v-.5c0-1-.2-1.7-1-1.7s-1 .6-1 1.7v5.6c0 .9.1 1.7 1 1.7s1-.7 1-1.7v-.6zM44.2 13.2v1.9c0 1 .2 1.9 1.2 1.9s1.2-1 1.2-1.9H49c0 1.4-.2 4-3.5 4s-3.8-2-3.8-4.6v-4.2c0-1.8.6-4.4 3.8-4.4s3.6 1.8 3.6 4.4v2.9zm2.4-2V9.9c0-1.2-.2-1.9-1.2-1.9s-1.2.6-1.2 1.9v1.3z" />
  </StyledSvg>
)

Ceacle.propTypes = {
  color: PropTypes.string,
}

export default Ceacle
