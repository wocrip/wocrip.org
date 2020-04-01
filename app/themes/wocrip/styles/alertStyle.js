import { css } from 'styled-components'

import getColor from '../utils/getColor'


const {
  alertBackground,
  alertText,
  alertBorder,
} = getColor

const alertStyle = ({ settings }) => css`
  border-radius: ${settings.radius}px;
  background-color: ${(props) => alertBackground(props)};
  color: ${(props) => alertText(props)};
  padding: 20px 30px;
  border: 1px solid ${(props) => alertBorder(props)};

  ${({ maxWidth }) => maxWidth && css`
      max-width: ${maxWidth};
  `}

  ${({ padding }) => padding && css`
      padding: ${padding};
  `}

  ${({ margin }) => margin && css`
      margin: ${margin};
  `}

  ${({ customStyle }) => customStyle && css`${customStyle}`}
`

export default alertStyle
