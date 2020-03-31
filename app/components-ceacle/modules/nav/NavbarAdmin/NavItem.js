import React from 'react'
import styled, { css } from 'styled-components'

import { colors, getColor, nav } from 'theme'
import A from 'components-shared/basics/A'


const {
  text,
} = getColor

const styles = css`
  font-weight: 500;
  font-size: ${({ size }) => size * 1}em;
  padding: 0.5em 1em;

  color: ${(props) => text(props, colors)};
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`

const NavItem = styled(({ theme, size, reversed, to, href, ...props }) => {
  if (href) return <A noVisited href={href} {...props} />
  return <A noVisited to={to} {...props} />
})`${styles}`

NavItem.defaultProps = {
  reversed: nav.reversed,
  size: 1,
}

export default NavItem
