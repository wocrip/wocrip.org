import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { colors } from 'theme'


const StyledSvg = styled.svg`
  ${({ align }) => align && css`
    margin: auto;
    display: block;
  `}

  ${({ width }) => width && css`
    width: ${width};
  `}
`

const IconPersonal = ({
  colorBrush,
  colorLine,
  ...props
}) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 140 140"
    {...props}
  >
    <title>Personal</title>
    <path fill="none" d="M0 0h140v140H0z" />
    <g fill={colors[colorBrush] || colors.brown}>
      <path d="M63 35.7a94.8 94.8 0 0 0 20.7-1.2c4.7-.7 10.8-1.4 12.6-6.7C98 23.4 95.5 15 93 11.3a3.6 3.6 0 0 0-6.6 1.8v.2a3 3 0 0 0-.6-.2c-4.6-1.3-10.2 1-15 1.4l-7 .7c-2.5.4-6.4 1.5-8.8.7-1.6-.6-2.5 1.5-1.5 2.6 3 3.4 10.7 2.6 14.8 2.5 5.3 0 13.8.4 18.2-3a3 3 0 0 0 .4-.4l.3 1.8.5 2a3 3 0 0 0-2.3.7c-2.2.3-4.7.2-6.7.4q-3.7.4-7.3 1A119.7 119.7 0 0 0 55.3 27a1.2 1.2 0 0 0-.8 1.5 16.3 16.3 0 0 1-3-.3 1.8 1.8 0 0 0-2 2.6c2.3 4.6 9 4.6 13.4 5zM27.3 64.2a6 6 0 0 0 5.4-1.3 11.8 11.8 0 0 0 1.2-1 4.6 4.6 0 0 0-.8 3.8c.6 1.6 2 2 3.3 2.5 1.6.5 3 .6 3.6 2.4.5 1.2.3 2.3 1 3.5a2.2 2.2 0 0 0 3.4.5c4.3-3.5-.3-10-4.6-11.6a10.4 10.4 0 0 0 1-1 6.8 6.8 0 0 0 1-4c0-3.6-2.4-5.8-5-8a.8.8 0 0 0-.2 0 3.4 3.4 0 0 0-2.7-1.4 3.7 3.7 0 0 0-3.7 3.6 9.5 9.5 0 0 1-1.5 6 3.6 3.6 0 0 1-2 1.6c-.7.2-1.3.3-1.7 1-.4 1.5 1 3 2.3 3.4zm9.7-6.8a5.3 5.3 0 0 1-1 2 12.3 12.3 0 0 0 1.3-3.8 5.3 5.3 0 0 1-.3 1.8zM107.3 61a3.3 3.3 0 0 0-.2 1.6 4 4 0 0 0 2 2.8c1 .4 2 0 2.6.5 2.6 1.4 2.5 3.5 1.6 5.8-1 2.4 2.6 4.4 4.2 2.5 4.7-5.6 1-11.4-4.5-13.3l1-2.5a10.3 10.3 0 0 0 .4-4.6 9 9 0 0 0-4-6.4c-1-.5-1.7.5-1.4 1.3a13.4 13.4 0 0 1 .6 1.5 2.7 2.7 0 0 0-2 0c-2.5.8-2.7 2.8-4.2 4.7a5.3 5.3 0 0 1-3 1.7c-1.7.2-2 2.3-1 3.4 2 2.4 5.5 2.2 8 .6zM66.5 55c2 .6 4 2.2 6 2.8a9 9 0 0 0 2.5.3c1 6.6 2.7 12-3 17-3.4 2.7-4.4 6-3.5 10.4 1 4 2.6 8.2 6.6 9.8 5.5 2.2 13.7-1.3 15.2 6.3a1.3 1.3 0 0 0 2.4.3c2-3 0-6.4-2.7-8.5-2.3-1.7-5.2-2-8-2.3a23.4 23.4 0 0 1 4.8-1c4.2-.3 6.7 2.2 6.7 6.3 0 4 6 5 6.8 1A11.8 11.8 0 0 0 95 84.7a14 14 0 0 0-6.5-2 15.6 15.6 0 0 0-3.8.2c-1 0-3.6 1-3.5.7 0-.7 3.8-3 4.4-3.8a15 15 0 0 0 3-7.4A22.3 22.3 0 0 0 85 57.2a1 1 0 0 0-2 .5c0 6 3 12.6-1.3 17.8-2.2 2.6-5.7 3.7-7.5 6.4a5 5 0 0 1 .6-2c.5-.8 2-1.5 3-2.2a14.5 14.5 0 0 0 3.5-5.3c2-5 1.3-11.2-.3-16.3a26.5 26.5 0 0 0 2.4-2c3.2-2.7-1.5-7.4-4.7-4.6-3.5 3-5.7 1.8-9.6.8a9.2 9.2 0 0 0-5.6 0c-4.2 1.6-6 5.8-7.5 9.7-.4 1 1 1.4 1.3.7 2-3.5 4.4-7 9.2-5.7zM73 127.2c-1.4.7-2 2-3 3.3a3.4 3.4 0 0 1-1.5 1.4c-1.4.2-2-2-3-2.6a2.5 2.5 0 0 0-3.8 1.4c-1.3 4.8 2.3 8.7 7 9 4.7 0 11.2-5.5 9.4-10.5a3.5 3.5 0 0 0-5-2zM54 128.2c-8.2-2-16-8-21.7-14a83.6 83.6 0 0 1-8.3-10c-2.2-3-4-6.5-7-9-.4-.5-1.4-.2-1.3.5 1 8.3 8.6 16.3 14.2 22 6 6 14 14 22.7 15.5 3.3.7 4.8-4.3 1.4-5zM121 93c-3 8.2-6 16.3-12 22.8-5.7 6-14.7 9.4-22 12.7-1.2.5-.4 2.5.8 2 8.8-3.2 18.2-4.8 24.8-12A56 56 0 0 0 125.4 94 2.3 2.3 0 0 0 121 93z " />
    </g>
    <g fill={colors[colorLine] || colors.black}>
      <path d="M48.6 29c7.8-.3 15.6-.3 23-.3H90a1.5 1.5 0 0 0 1.3-1.6v-8c0-5.5 0-11-.6-16.6A1.5 1.5 0 0 0 89.3 1H69.8c-7 0-14-.2-21.2 0a1.5 1.5 0 0 0-1.4 1.3v25a1.5 1.5 0 0 0 1.4 1.6zm23-3.3c-7 0-14.3 0-21.5.2v-9.2c7.2 0 14.4-.3 21.4-.6 5.6-.3 11.3-.5 17-.6v10H71.7zM70 4H88c0 3 .2 5.8.3 8.7-5.7 0-11.4.3-17 .6-7 .3-14.2.6-21.2.6V3.7H70z " />
      <path d="M53.7 10.7h5.8a1.5 1.5 0 1 0 0-3h-5.8a1.5 1.5 0 1 0 0 3zM59 19.5a8.5 8.5 0 0 1-1.7 0h-1a20.2 20.2 0 0 0-2.5 0 1.5 1.5 0 0 0 0 3 1.3 1.3 0 0 0 .3 0 16.5 16.5 0 0 1 2.2 0h1a11.4 11.4 0 0 0 2.4 0 1.5 1.5 0 1 0-.6-3zM82.5 92.3c6.3.3 10.2 1 10.2 7.4v2a1.5 1.5 0 1 0 3 0v-1-1c0-9.7-7.6-10-13-10.3-5.3-.3-7.5-.7-7.5-4 0-2.7 1-3.5 3-4.7 3-1.8 7-4.4 7-15 0-9.6 0-19.6-14.7-19.6-16 0-18.4 8.5-18.6 18.3a1.5 1.5 0 0 0-.2 1.3v1c0 11.6 4.3 14.2 7.4 16 2 1.3 3 2 3 4.5 0 1-3 1-5.4 1.2-6.4.3-17.2.8-17.2 14v2a1.5 1.5 0 0 0 1.6 1.3 1.5 1.5 0 0 0 1.4-1.6V102c0-8.6 5-10.4 11.8-11a17 17 0 0 0 14.4 8c4.4 0 11.2-2.4 13-7h.7zM70.5 49c6.8 0 9.6 2 10.8 6.2a18.7 18.7 0 0 1-6 1 13.5 13.5 0 0 1-9-3 1.5 1.5 0 0 0-2.4.5c-.2 0-2.4 5.2-9 9 .4-8.3 3-13.7 15.5-13.7zm-1.7 47.3a14 14 0 0 1-11-5.2c3.8 0 7.4-.5 7.4-4 0-4-2.4-5.5-4.4-6.8-2.8-1.7-6-3.7-6-13.6V66a25.3 25.3 0 0 0 11-9.5 16.7 16.7 0 0 0 9.5 2.7 21.6 21.6 0 0 0 6.6-1 66.5 66.5 0 0 1 .2 7.6c0 9-2.8 10.7-5.5 12.4-2 1.4-4.4 3-4.4 7.3 0 4.6 3 6 6.3 6.5-1.7 2.6-6.7 4.3-9.8 4.3zM15.2 77.5a1.5 1.5 0 0 0 1.3-2 1.3 1.3 0 0 1-.2-.7c0-3.8 2-4.8 5.5-5.6a8.7 8.7 0 0 0 6.8 3.3 9.5 9.5 0 0 0 6-2.4l1.2.4c2 .4 3.3.6 3.3 3.4V75a1.5 1.5 0 0 0 3 0V74c0-5.2-3.5-6-5.6-6.3-2-.4-2.7-.6-2.7-2.2v-1.9a10 10 0 0 0 1-.6 10.3 10.3 0 0 0 3.4-7.4 11.2 11.2 0 0 0-3.3-8 8.8 8.8 0 0 0-6.7-2.7 5 5 0 0 0-.8 0c-5 1-7.2 6.4-7 11 .3 3.5 2 7 4.8 8.7v.3c0 .6-.5 1-2.7 1.4a1.4 1.4 0 0 0-.3.2h-.2c-3.3.8-8.4 2-8.4 8.6a4.2 4.2 0 0 0 .5 2 1.5 1.5 0 0 0 1.2.7zm16.6-9a6.3 6.3 0 0 1-3.2 1 5.8 5.8 0 0 1-3.5-1.2 4 4 0 0 0 3-3h.3a9 9 0 0 0 2.5-.4v.3a4.8 4.8 0 0 0 1 3.3zm-8.6-12.8c-.2-3.4 1.4-7.4 4.6-8a2.4 2.4 0 0 1 .3 0h.5a6 6 0 0 1 4 1.7 8.3 8.3 0 0 1 2.7 6 7.4 7.4 0 0 1-2.5 5.2 6.5 6.5 0 0 1-5 1.7 3 3 0 0 1-.2 0 1.5 1.5 0 0 0-1-.5c-2-1-3-3.7-3.3-6z " />
      <path d="M99.3 63a1.4 1.4 0 0 0 0 .2 2.3 2.3 0 0 1 0 .6c0 1-.5 1.5-3.3 2-2.7.7-6.8 1.6-6.8 7v2a1.5 1.5 0 1 0 3 0v-1.2-1c0-2.7 1.4-3.2 4.4-3.8a8 8 0 0 0 6.4 2.7 9 9 0 0 0 7-3.2 1.5 1.5 0 0 0 .3-.3c2.4.4 3.7 1 3.7 4v3a1.5 1.5 0 0 0 1.4 1.4 1.5 1.5 0 0 0 1.5-1.6c-.2-.2-.2-.4-.2-.7v-1-1c0-6-4.2-6.6-6.8-7-2.2-.3-2.2-.5-2.2-.8v-.8-1-.6c.3 0 .4-.2.6-.4a11.2 11.2 0 0 0 3-8.3c-.4-4.7-4-8.4-8.5-8.4h-.2a7 7 0 0 0-1.8.3c-3.7 1-6.2 4.3-6.4 8.5a10.8 10.8 0 0 0 2.6 8 8 8 0 0 0 2 1.6zm7.7 4.3a6 6 0 0 1-4 1.3 6 6 0 0 1-3.2-.8 4 4 0 0 0 2.5-3.8h.4a7 7 0 0 0 2.2-.4v.6a3 3 0 0 0 2 3zm-9.5-13.6c0-2.4 1.3-5.2 4.3-6a4.2 4.2 0 0 1 1 0 6 6 0 0 1 5.6 5.6 8.3 8.3 0 0 1-2.2 6 5 5 0 0 1-3.6 1.8 4.6 4.6 0 0 1-3.2-1.5 8 8 0 0 1-2-5.8zM67.4 120.2a5.6 5.6 0 0 0-1 0 7.2 7.2 0 0 0-5 7.4 6.8 6.8 0 0 0 6.5 7c3.4 0 7-2.6 7.2-6.5a7.4 7.4 0 0 0-2.3-5.6 7.3 7.3 0 0 0-5.6-2.2zm.6 11.4a4 4 0 0 1-3.8-4 4.4 4.4 0 0 1 3-4.4 2.7 2.7 0 0 1 .5 0 4.8 4.8 0 0 1 4.6 4.7 4.2 4.2 0 0 1-4.3 3.6zM55.2 125.6c-19.4-3.3-33-14.2-41.6-33.2A21.5 21.5 0 0 0 18 94a1.5 1.5 0 1 0 .6-2.8 28 28 0 0 1-7-3.3l-.5-.3a1.5 1.5 0 0 0-2 1A26 26 0 0 1 7.2 95a1.5 1.5 0 1 0 2.7 1 27.2 27.2 0 0 0 1-2.5c9 20 23.2 31.5 43.7 35a1.5 1.5 0 1 0 .5-3zM127 87a1.5 1.5 0 0 0-2.2-1l-.4.3a28 28 0 0 1-7 3.5 1.5 1.5 0 1 0 .8 2.8 21.5 21.5 0 0 0 4.2-1.8c-8 19.4-21 30.7-40.4 34.6a1.5 1.5 0 0 0 .3 3 1.5 1.5 0 0 0 .3 0C103 124 117 112 125.2 91.7a27 27 0 0 0 1 2.6 1.5 1.5 0 1 0 2.7-1.2 26 26 0 0 1-2-6.2zM31 24a1.5 1.5 0 0 0 1-.3l1.5-1a1.5 1.5 0 1 0-1.5-2.5l-1.7 1A1.5 1.5 0 0 0 31 24zM6.2 58A1.5 1.5 0 0 0 8 57l.5-1.8a1.5 1.5 0 1 0-2.8-1l-.5 2a1.5 1.5 0 0 0 1 1.8zM6.4 67.2v-1.8a1.5 1.5 0 1 0-2.8-.3v2.2a1.5 1.5 0 0 0 2.8 0zM9.7 48a1.5 1.5 0 0 0 2-.8q.3-1 .8-1.7A1.5 1.5 0 0 0 10 44l-1 2a1.5 1.5 0 0 0 .7 2zM40.7 19.4a1.5 1.5 0 0 0 .5 0l1.8-.6a1.5 1.5 0 1 0-.8-3l-2 .7a1.5 1.5 0 0 0 .5 3zM7.5 77.5L7 75.7a1.5 1.5 0 1 0-2.8.5l.5 2a1.5 1.5 0 0 0 1.4 1 1.5 1.5 0 0 0 .4 0 1.5 1.5 0 0 0 1-1.7zM22.7 30.6a1.5 1.5 0 0 0 1-.4L25 29a1.5 1.5 0 0 0-2-2.2L21.8 28a1.5 1.5 0 0 0 1 2.6zM15 38.5a1.5 1.5 0 0 0 2-.3l1-1.6a1.5 1.5 0 0 0-2.3-1.7l-1.2 1.5a1.5 1.5 0 0 0 .4 2zM126 60v2a1.5 1.5 0 1 0 3-.3l-.2-2a1.5 1.5 0 0 0-3 .4zM124 51.8a1.5 1.5 0 0 0 1.4 1 1.5 1.5 0 0 0 .4 0 1.5 1.5 0 0 0 1-1.8l-.6-2a1.5 1.5 0 0 0-2.8 1l.6 1.8zM120.3 42a1.5 1.5 0 0 0 2.6-1.3l-1-1.8a1.5 1.5 0 0 0-2.6 1.3l1 1.7zM97.5 19.7l1.8.5a1.5 1.5 0 0 0 1-2.7l-2-.6a1.5 1.5 0 0 0-.8 2.7zM115 33a1.5 1.5 0 0 0 2.4-1.8l-1.2-1.6a1.5 1.5 0 0 0-2.3 1.8q.4.8 1 1.5zM128 69.2a1.4 1.4 0 0 0-1.7 1.3c0 .7 0 1.3-.2 2a1.5 1.5 0 0 0 1.4 1.5h.2a1.5 1.5 0 0 0 1.4-1.3l.2-2a1.5 1.5 0 0 0-1.3-1.5zM106.6 24l1.4 1.3a1.5 1.5 0 0 0 2-2.2l-1.7-1.2a1.5 1.5 0 0 0-1.7 2.3z " />
    </g>
  </StyledSvg>
)

IconPersonal.propTypes = {
  colorBrush: PropTypes.string,
  colorLine: PropTypes.string,
  width: PropTypes.string,
}

export default IconPersonal
