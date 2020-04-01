import React from 'react'
import styled, { css } from 'styled-components'

import { colors, nav } from 'theme'
import A from 'components-shared/basics/A'


const styles = css`
  font-weight: 500;
  font-size: ${({ size }) => size * 1}em;
  padding: 0.3em 1em;
  color: ${colors ? colors.black : '#888'};
  text-decoration: none;

  ${({ color }) => color && css`
    color: color;
  `}

  &:hover {
    opacity: 0.8;
  }
`

const NavItem = styled(({
  theme,
  size,
  reversed,
  to,
  href,
  ...props
}) => {
  if (href) return <A noVisited href={href} {...props} />
  return <A noVisited to={to} {...props} />
})`${styles}`

NavItem.defaultProps = {
  reversed: nav ? nav.reversed : false,
  size: 1,
}

export default NavItem
