import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'

import { colors, displayHeadings } from 'theme'
import TextSmall from 'components-shared/basics/TextSmall'


const style = css`
  font-size: ${({ size }) => displayHeadings[size]}rem;
  line-height: ${({ lineHeight }) => lineHeight || '1.2em'};

  ${({ zIndex }) => zIndex && css`
    z-index: ${zIndex};
    position: relative;
  `}

  ${({ padding }) => padding && css`
    padding: ${padding};
  `}

  ${({ margin }) => margin && css`
    margin: ${margin};
  `}

  ${({ align }) => align && css`
    text-align: ${align};
  `}

  ${({ color }) => color && colors[color] && css`
    color: ${colors[color]};
  `}

  ${({ whiteSpace }) => whiteSpace && css`
    white-space: ${whiteSpace};
  `}

  span {
    display: block;
    font-size: 0.35em;
    line-height: 1.5em;
    padding-top: 15px;

    ${({ subBold }) => subBold ? css`
      font-weight: 600;
    ` : css`
      font-weight: 400;
    `}

    ${({ subMultiLine }) => subMultiLine && css`
      white-space: pre-line;
    `}

    ${({ subNoColor, color, reversed }) => (!subNoColor && color && colors[color]) ? css`
        color: ${rgba(colors[color], 0.5)};
      ` : css`
        color: ${reversed ? colors.white : colors.black};
      `}
  }

  @media (min-width: 900px) and (max-width: 1200px) {
    font-size: ${({ size }) => displayHeadings[size] * 0.95}rem;

    span {
      font-size: 0.4em;
    }
  }

  @media (min-width: 600px) and (max-width: 899px) {
    font-size: ${({ size }) => displayHeadings[size] * 0.9}rem;

    span {
      font-size: 0.45em;
    }
  }

  @media (max-width: 599px) {
    font-size: ${({ size }) => displayHeadings[size] * 0.85}rem;

    span {
      font-size: 0.5em;
    }
  }

  @media (max-width: 450px) {
    font-size: ${({ size }) => displayHeadings[size] * 0.8}rem;

    span {
      font-size: 0.4em;
    }
  }

  ${({ customStyle }) => customStyle && css`${customStyle}`}
`

const TitleDisplay = (props) => {
  const { size, children, sub } = props
  const StyledTitleDisplay = styled[size]`${style}`

  return (
    <StyledTitleDisplay {...props}>
      {children}

      {sub &&
        <TextSmall>
          {sub}
        </TextSmall>
      }
    </StyledTitleDisplay>
  )
}

TitleDisplay.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string.isRequired,
  sub: PropTypes.string,
}

TitleDisplay.defaultProps = {
  size: 'h1',
}

export default TitleDisplay
