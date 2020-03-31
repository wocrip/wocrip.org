import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { settings, getColor } from 'theme'


const { text } = getColor

const Text = styled.p`
  margin: 5px 0;

  ${({ reversed, status, color }) => color && css`
    color: ${text({ reversed, status, color })};
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

  ${({ marginTop }) => marginTop && css`
    margin-top: ${marginTop};
  `}

  ${({ marginBottom }) => marginBottom && css`
    margin-bottom: ${marginBottom};
  `}

  ${({ marginLeft }) => marginLeft && css`
    margin-left: ${marginLeft};
  `}

  ${({ marginRight }) => marginRight && css`
    margin-right: ${marginRight};
  `}

  ${({ fontStyle }) => fontStyle && css`
    font-style: ${fontStyle};
  `}

  ${({ fontWeight }) => fontWeight && css`
    font-weight: ${fontWeight};
  `}

  ${({ whiteSpace }) => whiteSpace && css`
    white-space: ${whiteSpace};
  `}

  font-size: ${({ size }) => size ?
    `${size * 1}em` :
    `${settings.text.size * 1}em`};

  ${({ fontSize }) => fontSize && css`
    font-size: ${fontSize};
  `}

  ${({ customStyle }) => customStyle && css`${customStyle}`}
`

Text.propTypes = {
  align: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  fontStyle: PropTypes.string,
  whiteSpace: PropTypes.string,
}

Text.defaultProps = {
  lineHeight: settings.text.lineHeight,
}

export default Text
