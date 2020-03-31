import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { settings, getColor } from 'theme'


const { text } = getColor

const ListElement = styled.li`
  font-size: 1em;

  ${({ color }) => color && css`
    color: ${text(props)};
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

  ${({ size }) => size && css`
    font-size: ${size * 0.9}em;
  `}

  font-size: ${({ size }) => size ?
    `${size * 1}em` :
    `${settings.text.size * 1}em`};
`

ListElement.propTypes = {
  lineHeight: PropTypes.number,
  color: PropTypes.string,
  margin: PropTypes.string,
  align: PropTypes.string,
  size: PropTypes.number,
}

ListElement.defaultProps = {
  lineHeight: settings.text.lineHeight,
}

export default ListElement
