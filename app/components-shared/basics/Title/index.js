import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { colors, headings } from 'theme'
import TextSmall from 'components-shared/basics/TextSmall'


const style = css`
  font-size: ${({ size }) => headings[size]}rem;
  margin: 0 0 0.4em 0;
  line-height: ${({ lineHeight }) => lineHeight || '1.2em'};

  ${({ weight }) => weight && css`
    font-weight: ${weight};
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

  ${({ whiteSpace }) => whiteSpace && css`
    white-space: ${whiteSpace};
  `}

  span {
    display: block;
    line-height: 1.5em;

    ${({ subSize }) => subSize ? css`
      font-size: ${subSize};
    ` : css`
      font-size: 0.35em;
    `}

    ${({ subPadding }) => subPadding ? css`
      padding: ${subPadding};
    ` : css`
      padding-top: 15px;
    `}

    ${({ subBold }) => subBold ? css`
      font-weight: 500;
    ` : css`
      font-weight: 400;
    `}

    ${({ subMultiLine }) => subMultiLine && css`
      white-space: pre-line;
    `}

    ${({ subColor, reversed }) => (subColor && colors[subColor]) ? css`
        color: ${colors[subColor]};
      ` : css`
        color: ${reversed ? colors.white : colors.black};
      `}
  }

  @media (min-width: 900px) and (max-width: 1200px) {
    ${({ size }) => size && css`
      font-size: ${headings[size] * 0.95}rem;
    `}

    span {
      font-size: 0.4em;
    }
  }

  @media (min-width: 600px) and (max-width: 899px) {
    ${({ size }) => size && css`
      font-size: ${headings[size] * 0.9}rem;
    `}

    span {
      font-size: 0.5em;
    }
  }

  @media (max-width: 599px) {
    ${({ size }) => size && css`
      font-size: ${headings[size] * 0.85}rem;
    `}

    span {
      font-size: 0.5em;
    }
  }
  @media (max-width: 450px) {
    ${({ size }) => size && css`
      font-size: ${headings[size] * 0.75}rem;
    `}

    span {
      font-size: 0.4em;
    }
  }

  ${({ customStyle }) => customStyle && css`${customStyle}`}
`

const Title = (props) => {
  const { size, children, sub } = props
  const StyledTitle = styled[size]`${style}`

  return (
    <StyledTitle {...props}>
      {children}

      {sub &&
        <TextSmall>
          { sub }
        </TextSmall>
      }
    </StyledTitle>
  )
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  customStyle: PropTypes.array,
  sub: PropTypes.string,
  size: PropTypes.string,
  align: PropTypes.string,
  color: PropTypes.string,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  weight: PropTypes.string,
  subColor: PropTypes.string,
  reversed: PropTypes.bool,
}

Title.defaultProps = {
  size: 'h1',
}

export default Title
