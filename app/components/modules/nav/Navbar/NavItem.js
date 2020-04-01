import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

import { colors, nav } from 'theme'

import A from 'components-shared/basics/A'


const styles = css`
  font-weight: 500;
  font-size: ${({ size }) => size * 1.1}em;
  padding: 0.5em 1em;
  color: ${({ reversed }) => reversed ? colors.white : colors.black};
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`
const NavItem = styled(({
  size,
  reversed,
  isExternalLink,
  to,
  ...props
}) => {
  if (isExternalLink) {
    return <A href={to} {...props} noVisited />
  }
  return <NavLink to={to} {...props} />
}).attrs(({ to }) => ({
  to: to || '/',
}))`${styles}`

NavItem.propTypes = {
  isExternalLink: PropTypes.bool,
}

NavItem.defaultProps = {
  isExternalLink: false,
  reversed: nav.reversed,
  size: nav.size,
}

export default NavItem
