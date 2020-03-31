import styled, { css } from 'styled-components'

import { styles } from 'theme'


const Tag = styled.span`
  ${styles.tag.button}

  ${({ padding }) => padding && css`
    padding: ${padding};
  `}

  ${({ margin }) => margin && css`
    margin: ${margin};
  `}

  ${({ display }) => display && css`
    display: ${display};
  `}

  ${({ fontSize }) => fontSize && css`
    font-size: ${fontSize};
  `}

  ${({ lineHeight }) => lineHeight && css`
    line-height: ${lineHeight};
  `}
`

export default Tag
