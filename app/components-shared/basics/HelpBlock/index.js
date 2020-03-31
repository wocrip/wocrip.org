import styled, { css } from 'styled-components'

import { colors, settings, getColor } from 'theme'


const { text } = getColor

const HelpBlock = styled.span`
  color: ${(props) => (props.color) ? colors[props.color] : text(props)};
  white-space: pre;
  font-size: ${({ size }) => size ?
    `${size * 0.8}em` : `${settings.text.size * 0.8}em`};

  ${({ label }) => !label && css`
    position: absolute;
    top: -20px;
  `}
`

export default HelpBlock
