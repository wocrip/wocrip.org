import styled, { css } from 'styled-components'

import { settings, getColor } from 'theme'


const { text } = getColor

const Label = styled.label`
  color: ${(props) => text(props)};
  display: inline-block;
  margin-bottom: 5px;
  margin-right: 15px;
  font-size: ${({ size }) => size ?
    `${size * 1}em` :
    `${settings.text.size * 1}em`};

  ${({ labelWeight }) => labelWeight && css`
    font-weight: labelWeight;
  `}
`

export default Label
