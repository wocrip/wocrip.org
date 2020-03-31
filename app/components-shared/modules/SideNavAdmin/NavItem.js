import React from 'react'
import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { rgba } from 'polished'

import { colors, settings } from 'theme'


const styles = css`
  width: 100%;
  font-weight: 400;
  padding: 0.2em 0.8em;
  display: block;
  text-decoration: none;
  color: ${({ reversed }) => reversed ? rgba(colors.white, 0.6) : rgba(colors.black, 0.6)};

  &:hover {
    opacity: 1;
    color: ${({ reversed }) => reversed ? rgba(colors.white, 0.9) : rgba(colors.black, 0.9)};
  }

  &.active {
    color: ${({ reversed }) => reversed ? colors.white : colors.black};
    background: ${({ reversed }) => reversed ? rgba(colors.white, 0.05) : rgba(colors.black, 0.05)};
    border-radius: ${settings.radius}px;
  }
`

const NavItem = styled(({ colors, ...props }) => // eslint-disable-line no-shadow
  <NavLink {...props} />
)`${styles}`

NavItem.defaultProps = {
  colors,
}

export default NavItem
