import styled, { css } from 'styled-components'

import { settings, getColor } from 'theme'


const { text } = getColor

const TextSmall = styled.span`
  color: ${(props) => text(props)};

  ${({ display }) => display && css`
    display: ${display};
  `}

  ${({ align }) => align && css`
    text-align: ${align};
  `}

  ${({ margin }) => margin && css`
    margin: ${margin};
  `}

  ${({ fontWeight }) => fontWeight && css`
    font-weight: ${fontWeight};
  `}

  ${({ lineHeight }) => lineHeight && css`
    line-height: ${lineHeight};
  `}

  ${({ fontStyle }) => fontStyle && css`
    font-style: ${fontStyle};
  `}

  ${({ whiteSpace }) => whiteSpace && css`
    white-space: ${whiteSpace};
  `}

  ${({ textDecoration }) => textDecoration && css`
    text-decoration: ${textDecoration};
  `}

  font-size: ${({ size }) => size ?
    `${size * 1}em` :
    `${settings.text.size * 1}em`};

  ${({ fontSize }) => fontSize && css`
    font-size: ${fontSize};
  `}
`

export default TextSmall
