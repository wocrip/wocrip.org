import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

import { colors, link, getColor } from 'theme'


const { text } = getColor

const styles = css`
  color: ${({ color }) => color ? text({ color }) : colors.link};
  text-decoration: ${({ textDecoration }) => textDecoration || link.textDecoration};
  cursor: pointer;

  ${({ align }) => align && css`
    text-align: ${align};
  `}

  ${({ display }) => display && css`
    display: ${display};
  `}

  ${({ padding }) => padding && css`
    padding: ${padding};
  `}

  ${({ margin }) => margin && css`
    margin: ${margin};
  `}

  ${({ size }) => size && css`
    font-size: ${size * 1}em;
  `}

  ${({ fontSize }) => fontSize && css`
    font-size: ${fontSize};
  `}

  ${({ fontWeight }) => fontWeight && css`
    font-weight: ${fontWeight};
  `}

  ${({ noHover }) => !noHover && css`
    &:visited {
      opacity: 0.8;
    }
  `}

  ${({ noVisited }) => !noVisited && css`
    &:visited {
      color: ${colors.visited};
    }
  `}
`

const StyledLink = styled(({
  padding,
  noHover,
  noVisited,
  weight,
  ...rest
}) => <Link {...rest} />)`${styles}`


const Anchor = styled.a`${styles}`

const A = ({ ...props }) => {
  const { to } = props

  if (to) {
    return <StyledLink {...props} />
  }
  return <Anchor {...props} />
}

A.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string,
      state: PropTypes.object,
    }),
  ]),
}

export default A
