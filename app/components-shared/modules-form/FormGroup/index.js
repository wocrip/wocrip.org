import styled, { css } from 'styled-components'


const FormGroup = styled.div`
  ${({ height }) => height && css`
    height: ${height};
  `}

  ${({ width }) => width && css`
    width: ${width};
  `}

  ${({ flex }) => flex && css`
    display: flex;
    justify-content: space-between;
  `}

  ${({ justifyContent }) => justifyContent && css`
    justify-content: ${justifyContent};
  `}

  ${({ flexDirection }) => flexDirection && css`
    flex-direction: ${flexDirection};
  `}

  ${({ margin }) => margin && css`
    margin: ${margin};
  `}

  ${({ position }) => position && css`
    position: ${position};
  `}
`

export default FormGroup
