import React from 'react'
import styled, { css } from 'styled-components'

import { settings, getColor } from 'theme'


const { text, background } = getColor

const Block = styled(({
  color,
  customStyle,
  fontSize,
  roundCorner,
  backgroundColor,
  padding,
  ...rest
}) => <div {...rest} />)`
  ${({ color }) => color && css`
    color: ${text({ color })};
  `}

  ${({ padding }) => padding && css`
    padding: ${padding};
  `}

  ${({ fontSize }) => fontSize && css`
    font-size: ${fontSize};
  `}

  ${({ roundCorner }) => roundCorner && css`
    border-radius: ${settings.radius}px;
  `}

  ${({ backgroundColor }) => backgroundColor && css`
    background-color: ${background({ color: backgroundColor })};
  `}

  ${({ customStyle }) => customStyle && css`${customStyle}`}
`

export default Block
