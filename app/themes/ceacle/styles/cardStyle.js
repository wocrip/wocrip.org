import { css } from 'styled-components'

import getColor from '../utils/getColor'


const {
  cardBackground,
  cardShadow,
  cardText,
  cardBorder,
} = getColor

const cardStyle = ({ settings }) => css`
  box-sizing: border-box;
  box-shadow: ${(props) => `2px 2px 0 ${cardShadow(props)}`};
  border: ${(props) => `2px solid ${cardBorder(props)}`};
  border-radius: ${settings.radius}px;
  background-color: ${(props) => cardBackground(props)};
  color: ${(props) => cardText(props)};
  position: relative;
  font-size: 0.9em;

  ${({ shrink }) => shrink && css`
    flex-basis: 18%;
    flex-shrink: 2;
    min-width: 160px;
  `}

  ${({ noShadow }) => noShadow && css`
    box-shadow: none !important;
  `}

  ${({ margin }) => margin && css`
    margin: ${margin};
  `}

  ${({ align }) => align && css`
    text-align: ${align};
  `}

  ${({ width }) => width && css`
    width: ${width};
  `}

  ${({ height }) => height && css`
    height: ${height};
  `}

  ${({ secondStyle }) => secondStyle && css`
    border: none;
    box-shadow: ${`4px 4px 0 ${cardShadow({ cardShadowColor: 'deepblack' })}`};
  `}

  ${({ button }) => button && css`
    cursor: pointer;
    transition: all 0.15s ease-in;

    &:hover{
      border: ${`2px solid ${cardBorder({ cardBorderColor: 'black' })}`};
      box-shadow: ${`1px 1px 0 ${cardShadow({ cardShadowColor: 'black' })}`};
    }
  `}

  ${({ image }) => image && css`
    img {
      max-width: 80px;
      max-height: 80px;
      margin-top: 20px;
    }
  `}

`

export default cardStyle
