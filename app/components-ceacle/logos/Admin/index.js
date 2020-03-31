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
const Admin = (props) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 63 25"
    {...props}
  >
    <title>
      Admin
    </title>
    <path d="M8.1 14.7c0 2.4-.6 4.3-3.6 4.3S1 17.1 1 14.5v-4.4c0-2.1.7-4.2 3.6-4.2s3.5 2.3 3.5 3.9v.5H5.6v-.6c0-1-.2-1.7-1-1.7s-1 .6-1 1.7v5.6c0 .9.1 1.7 1 1.7s1-.7 1-1.7v-.6zM9.5 18.9v-3.6H12v3.6zM24 16.3c0 .8.1 2.1.1 2.6h-2.4c0-.2-.1-.7-.1-.9a2.2 2.2 0 01-2.1 1.1c-2 0-2.7-1.8-2.7-3.7v-.2c0-3.2 2.1-4 4.4-4h.3V9.5c0-1-.1-1.5-.9-1.5s-.9.6-.9 1.4v.2h-2.5v-.2c0-1.9.7-3.5 3.5-3.5S24 7.3 24 9.3zm-2.5-3.2h-.4c-1.1 0-1.9.5-1.9 2.1v.2c0 .9.3 1.5 1.1 1.5s1.2-.6 1.2-2.3zM33.4 1.6v17.3H31a5.3 5.3 0 01-.1-1.2 2.4 2.4 0 01-2.3 1.4c-2.3 0-2.8-1.8-2.8-4.3v-5c0-2.3.9-3.9 3-3.9a2.3 2.3 0 012 .9V1.6zm-5 13.4c0 1.2.3 1.9 1.2 1.9s1.2-1 1.2-2.5v-3.9c0-1.4-.1-2.3-1.2-2.3s-1.2.7-1.2 1.7zM35.5 9.8V6.1h2.4a4.1 4.1 0 01.1 1.1 2.4 2.4 0 012.3-1.3 2 2 0 012 1.4 2.8 2.8 0 012.5-1.4c1.4 0 2.5.7 2.5 3.2v9.8h-2.5V9.6c0-.9-.3-1.4-1-1.4s-1.1.7-1.1 2v8.7h-2.6V9.6c0-1.1-.3-1.4-.9-1.4s-1.2.7-1.2 1.9v8.8h-2.5zM49.5 6.1H52v12.8h-2.5zm0-4.5H52v2.8h-2.5zM54.2 10.1v-4h2.4c0 .3.1.8.1 1.1a2.5 2.5 0 012.4-1.3c1.5 0 2.6 1 2.6 3.4v9.6h-2.6V9.8c0-1.2-.4-1.6-1.1-1.6s-1.3.5-1.3 2.2v8.5h-2.5z" />
  </StyledSvg>
)

Admin.propTypes = {
  color: PropTypes.string,
}

export default Admin
