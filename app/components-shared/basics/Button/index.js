import React, { Children } from 'react'
import PropTypes from 'prop-types'

import A from './A'
import StyledLink from './StyledLink'
import StyledButton from './StyledButton'


const Button = (props) => {
  const {
    href,
    to,
    children,
    onClick,
    handleRoute,
  } = props

  let button = (
    <A href={href} onClick={onClick} {...props}>
      {Children.toArray(children)}
    </A>
  )

  if (to) {
    button = (
      <StyledLink to={to} onClick={onClick} {...props}>
        {Children.toArray(children)}
      </StyledLink>
    )
  }

  if (handleRoute) {
    button = (
      <StyledButton onClick={onClick} {...props}>
        {Children.toArray(children)}
      </StyledButton>
    )
  }

  return button
}

Button.propTypes = {
  handleRoute: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

export default Button
