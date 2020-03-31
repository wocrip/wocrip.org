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
const Help = (props) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 49 25"
    {...props}
  >
    <title>
      Help
    </title>
    <path d="M8.1 14.7c0 2.4-.6 4.3-3.6 4.3S1 17.1 1 14.5v-4.4c0-2.1.7-4.2 3.6-4.2s3.5 2.3 3.5 3.9v.5H5.6v-.6c0-1-.2-1.7-1-1.7s-1 .6-1 1.7v5.6c0 .9.1 1.7 1 1.7s1-.7 1-1.7v-.6zM9.5 18.9v-3.6H12v3.6zM17.3 1.6h2.5v5.5a2.5 2.5 0 012.4-1.2c2 0 2.6 1.5 2.6 3.3v9.7h-2.6v-9c0-1-.2-1.7-1.1-1.7s-1.3.6-1.3 2.1v8.6h-2.5zM29 13.2v1.9c0 1 .3 1.9 1.3 1.9s1.1-.9 1.1-1.9h2.5c0 1.4-.3 4-3.6 4s-3.7-2-3.7-4.6v-4.2c0-1.8.5-4.4 3.7-4.4s3.6 1.8 3.6 4.4v2.9zm2.5-2V9.9c0-1.2-.3-1.9-1.2-1.9s-1.2.6-1.2 1.9v1.3zM35.6 18.9V1.6h2.6v17.3zM40.3 9.8V6.1h2.4a4.1 4.1 0 01.1 1.2 2.4 2.4 0 012.4-1.4c1.8 0 2.7 1.2 2.7 3.8v5.2c0 3-1 4.2-3 4.2a2 2 0 01-2-1.1v5.3h-2.6zm2.6 4.8c0 1.3.2 2.3 1.2 2.3s1.2-.8 1.2-2v-5c0-1.2-.4-1.7-1.1-1.7s-1.3.5-1.3 2z" />
  </StyledSvg>
)

Help.propTypes = {
  color: PropTypes.string,
}

export default Help
