import React from 'react'
import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { rgba } from 'polished'

import { colors } from 'theme'


const styles = css`
  width: 100%;
  font-weight: 400;
  padding: 0.3em 0.8em;
  color: ${(props) => rgba(props.colors.black, 0.8)};
  display: block;
  text-decoration: none;

  &:hover {
    opacity: 1;
    color: ${(props) => props.colors.black};
  }

  &.active {
    color: ${(props) => props.colors.black};
    background: ${(props) => rgba(props.colors.black, 0.05)};
  }
`

const NavItem = styled(({ colors, ...props }) => // eslint-disable-line no-shadow
  <NavLink {...props} />
)`${styles}`

NavItem.defaultProps = {
  colors,
}

export default NavItem
