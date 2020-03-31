import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { settings, getColor } from 'theme'


const { text } = getColor

const List = styled.ul`
  margin: 5px 0;

  ${({ color }) => color && css`
    color: ${text({ color })};
  `}

  ${({ lineHeight }) => lineHeight && css`
    line-height: ${lineHeight}em;
  `}

  ${({ align }) => align && css`
    text-align: ${align};
  `}

  ${({ margin }) => margin && css`
    margin: ${margin};
  `}

  font-size: ${({ size }) => size ?
    `${size * 1}em` :
    `${settings.text.size * 1}em`};
`

List.propTypes = {
  lineHeight: PropTypes.number,
  color: PropTypes.string,
  margin: PropTypes.string,
  align: PropTypes.string,
  size: PropTypes.number,
}

List.defaultProps = {
  lineHeight: settings.text.lineHeight,
}

export default List
